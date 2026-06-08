"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebase";
import {
  getPageContent,
  PAGE_DEFAULTS,
  savePageContent,
  type ContentMap,
  type PageKey,
} from "@/lib/content";
import HomeEditor from "@/components/admin/editors/HomeEditor";
import CoachEditor from "@/components/admin/editors/CoachEditor";
import CoachingEditor from "@/components/admin/editors/CoachingEditor";
import LeCoachingEditor from "@/components/admin/editors/LeCoachingEditor";
import FormationEditor from "@/components/admin/editors/FormationEditor";
import TarifsEditor from "@/components/admin/editors/TarifsEditor";
import TemoignagesEditor from "@/components/admin/editors/TemoignagesEditor";
import ContactEditor from "@/components/admin/editors/ContactEditor";

type SaveState =
  | { kind: "idle" }
  | { kind: "saving" }
  | { kind: "saved" }
  | { kind: "error"; message: string };

const PAGES: { key: PageKey; label: string; publicPath: string }[] = [
  { key: "home", label: "Accueil", publicPath: "/" },
  { key: "coach", label: "Votre coach", publicPath: "/coach" },
  { key: "leCoaching", label: "Le coaching ?", publicPath: "/le-coaching" },
  { key: "coaching", label: "Coaching perso et équipe", publicPath: "/coaching" },
  { key: "formation", label: "Formation", publicPath: "/formation" },
  { key: "temoignages", label: "Témoignages", publicPath: "/temoignages" },
  { key: "tarifs", label: "Tarifs", publicPath: "/tarifs" },
  { key: "contact", label: "Contact", publicPath: "/contact" },
];

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [activeKey, setActiveKey] = useState<PageKey>("home");
  const [contents, setContents] = useState<Partial<ContentMap>>({});
  const [loadingKeys, setLoadingKeys] = useState<Set<PageKey>>(new Set());
  const [save, setSave] = useState<SaveState>({ kind: "idle" });

  useEffect(() => {
    const unsub = onAuthStateChanged(getFirebaseAuth(), (u) => {
      setUser(u);
      setAuthChecked(true);
      if (!u) router.replace("/admin/login");
    });
    return unsub;
  }, [router]);

  useEffect(() => {
    if (!user) return;
    if (contents[activeKey]) return;
    let cancelled = false;
    setLoadingKeys((s) => new Set(s).add(activeKey));
    (async () => {
      const data = await getPageContent(activeKey);
      if (cancelled) return;
      setContents((c) => ({ ...c, [activeKey]: data }));
      setLoadingKeys((s) => {
        const next = new Set(s);
        next.delete(activeKey);
        return next;
      });
    })();
    return () => {
      cancelled = true;
    };
  }, [user, activeKey, contents]);

  function updateActive<K extends PageKey>(value: ContentMap[K]) {
    setContents((c) => ({ ...c, [activeKey]: value }));
    setSave({ kind: "idle" });
  }

  async function handleSave() {
    const current = contents[activeKey];
    if (!current) return;
    setSave({ kind: "saving" });
    try {
      await savePageContent(activeKey, current as ContentMap[typeof activeKey]);
      const publicPath = PAGES.find((p) => p.key === activeKey)?.publicPath ?? "/";
      await fetch(
        `/api/revalidate?path=${encodeURIComponent(publicPath)}`,
        { method: "POST" },
      );
      setSave({ kind: "saved" });
      setTimeout(
        () => setSave((s) => (s.kind === "saved" ? { kind: "idle" } : s)),
        3000,
      );
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Erreur lors de la sauvegarde.";
      setSave({ kind: "error", message });
    }
  }

  function handleResetDefaults() {
    if (
      !confirm(
        "Remplacer tout le contenu de cette page par les valeurs par défaut ?",
      )
    )
      return;
    setContents((c) => ({ ...c, [activeKey]: PAGE_DEFAULTS[activeKey] }));
    setSave({ kind: "idle" });
  }

  if (!authChecked) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-500">
        Chargement…
      </div>
    );
  }
  if (!user) return null;

  const activePage = PAGES.find((p) => p.key === activeKey)!;
  const loading = loadingKeys.has(activeKey);
  const current = contents[activeKey];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <h1 className="text-lg font-semibold text-slate-900">
              Panneau d&apos;administration
            </h1>
            <p className="text-xs text-slate-500 truncate">
              Connecté en tant que {user.email}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href={activePage.publicPath}
              target="_blank"
              rel="noopener"
              className="text-sm text-slate-600 hover:text-slate-900 underline underline-offset-2 hidden sm:inline"
            >
              Voir la page ↗
            </Link>
            <button
              onClick={() => signOut(getFirebaseAuth())}
              className="text-sm rounded-lg border border-slate-300 px-3 py-1.5 hover:bg-slate-100"
            >
              Déconnexion
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-[220px_1fr] gap-8">
        {/* Sidebar nav */}
        <aside className="lg:sticky lg:top-24 self-start">
          <nav className="bg-white rounded-2xl border border-slate-200 p-3 shadow-sm">
            <p className="text-xs uppercase tracking-wider text-slate-500 px-3 pt-2 pb-3">
              Pages
            </p>
            <ul className="space-y-1">
              {PAGES.map((p) => {
                const isActive = p.key === activeKey;
                return (
                  <li key={p.key}>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveKey(p.key);
                        setSave({ kind: "idle" });
                      }}
                      className={`w-full text-left rounded-lg px-3 py-2 text-sm transition-colors ${
                        isActive
                          ? "bg-slate-900 text-white font-medium"
                          : "text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {p.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        {/* Editor */}
        <main className="min-w-0">
          <div className="mb-6 flex items-end justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                {activePage.label}
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Page publique :{" "}
                <Link
                  href={activePage.publicPath}
                  target="_blank"
                  rel="noopener"
                  className="underline underline-offset-2 hover:text-slate-900"
                >
                  {activePage.publicPath}
                </Link>
              </p>
            </div>
            <button
              type="button"
              onClick={handleResetDefaults}
              className="text-xs text-slate-500 hover:text-slate-900 underline underline-offset-2"
            >
              Restaurer les valeurs par défaut
            </button>
          </div>

          {loading || !current ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500">
              Chargement du contenu…
            </div>
          ) : (
            <div className="pb-32">
              {activeKey === "home" && (
                <HomeEditor
                  value={current as ContentMap["home"]}
                  onChange={updateActive}
                />
              )}
              {activeKey === "coach" && (
                <CoachEditor
                  value={current as ContentMap["coach"]}
                  onChange={updateActive}
                />
              )}
              {activeKey === "coaching" && (
                <CoachingEditor
                  value={current as ContentMap["coaching"]}
                  onChange={updateActive}
                />
              )}
              {activeKey === "leCoaching" && (
                <LeCoachingEditor
                  value={current as ContentMap["leCoaching"]}
                  onChange={updateActive}
                />
              )}
              {activeKey === "formation" && (
                <FormationEditor
                  value={current as ContentMap["formation"]}
                  onChange={updateActive}
                />
              )}
              {activeKey === "tarifs" && (
                <TarifsEditor
                  value={current as ContentMap["tarifs"]}
                  onChange={updateActive}
                />
              )}
              {activeKey === "temoignages" && (
                <TemoignagesEditor
                  value={current as ContentMap["temoignages"]}
                  onChange={updateActive}
                />
              )}
              {activeKey === "contact" && (
                <ContactEditor
                  value={current as ContentMap["contact"]}
                  onChange={updateActive}
                />
              )}
            </div>
          )}
        </main>
      </div>

      {/* Sticky save bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-lg z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="text-sm text-slate-600">
            {save.kind === "idle" && (
              <>
                Édition de{" "}
                <span className="font-medium text-slate-900">
                  {activePage.label}
                </span>
              </>
            )}
            {save.kind === "saving" && "Enregistrement…"}
            {save.kind === "saved" && (
              <span className="text-green-700">
                ✓ Enregistré et publié sur le site.
              </span>
            )}
            {save.kind === "error" && (
              <span className="text-red-700">Erreur : {save.message}</span>
            )}
          </div>
          <button
            type="button"
            disabled={loading || !current || save.kind === "saving"}
            onClick={handleSave}
            className="rounded-lg bg-slate-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-slate-800 disabled:bg-slate-400 disabled:cursor-not-allowed"
          >
            {save.kind === "saving" ? "Enregistrement…" : "Enregistrer"}
          </button>
        </div>
      </div>
    </div>
  );
}
