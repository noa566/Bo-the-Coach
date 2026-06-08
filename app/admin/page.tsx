"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  useCallback,
  useEffect,
  useState,
  type ChangeEvent,
  type ReactNode,
} from "react";
import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebase";
import {
  defaultHomeContent,
  getHomeContent,
  saveHomeContent,
  type HomeContent,
} from "@/lib/content";

type SaveState =
  | { kind: "idle" }
  | { kind: "saving" }
  | { kind: "saved" }
  | { kind: "error"; message: string };

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [content, setContent] = useState<HomeContent>(defaultHomeContent);
  const [loadingContent, setLoadingContent] = useState(true);
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
    let cancelled = false;
    (async () => {
      setLoadingContent(true);
      const data = await getHomeContent();
      if (!cancelled) {
        setContent(data);
        setLoadingContent(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [user]);

  const update = useCallback(<K extends keyof HomeContent>(
    section: K,
    value: HomeContent[K],
  ) => {
    setContent((c) => ({ ...c, [section]: value }));
    setSave({ kind: "idle" });
  }, []);

  async function handleSave() {
    setSave({ kind: "saving" });
    try {
      await saveHomeContent(content);
      await fetch("/api/revalidate?path=/", { method: "POST" });
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

  async function handleResetDefaults() {
    if (
      !confirm(
        "Remplacer tout le contenu de la homepage par les valeurs par défaut ?",
      )
    )
      return;
    setContent(defaultHomeContent);
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

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold text-slate-900">
              Panneau d&apos;administration
            </h1>
            <p className="text-xs text-slate-500">
              Connecté en tant que {user.email}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              rel="noopener"
              className="text-sm text-slate-600 hover:text-slate-900 underline underline-offset-2"
            >
              Voir le site ↗
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

      <main className="max-w-5xl mx-auto px-6 py-10">
        <div className="mb-8 flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Édition de la page d&apos;accueil
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Les modifications sont visibles sur le site dès l&apos;enregistrement.
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

        {loadingContent ? (
          <div className="text-slate-500">Chargement du contenu…</div>
        ) : (
          <div className="space-y-8 pb-32">
            <Section title="Section Hero" description="Le haut de la page d'accueil.">
              <Field label="Pré-titre (eyebrow)">
                <Input
                  value={content.hero.eyebrow}
                  onChange={(v) =>
                    update("hero", { ...content.hero, eyebrow: v })
                  }
                />
              </Field>
              <div className="grid md:grid-cols-3 gap-4">
                <Field label="Titre — début">
                  <Input
                    value={content.hero.titleStart}
                    onChange={(v) =>
                      update("hero", { ...content.hero, titleStart: v })
                    }
                  />
                </Field>
                <Field label="Titre — mot accentué">
                  <Input
                    value={content.hero.titleAccent}
                    onChange={(v) =>
                      update("hero", { ...content.hero, titleAccent: v })
                    }
                  />
                </Field>
                <Field label="Titre — fin">
                  <Input
                    value={content.hero.titleEnd}
                    onChange={(v) =>
                      update("hero", { ...content.hero, titleEnd: v })
                    }
                  />
                </Field>
              </div>
              <Field label="Paragraphe d'introduction">
                <Textarea
                  value={content.hero.lead}
                  onChange={(v) => update("hero", { ...content.hero, lead: v })}
                />
              </Field>
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Bouton principal">
                  <Input
                    value={content.hero.ctaPrimary}
                    onChange={(v) =>
                      update("hero", { ...content.hero, ctaPrimary: v })
                    }
                  />
                </Field>
                <Field label="Bouton secondaire">
                  <Input
                    value={content.hero.ctaSecondary}
                    onChange={(v) =>
                      update("hero", { ...content.hero, ctaSecondary: v })
                    }
                  />
                </Field>
              </div>
              <Field label="Statistiques (3 blocs)">
                <div className="grid md:grid-cols-3 gap-3">
                  {content.hero.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border border-slate-200 p-3 space-y-2"
                    >
                      <Input
                        value={stat.value}
                        placeholder="Valeur"
                        onChange={(v) => {
                          const next = [...content.hero.stats];
                          next[idx] = { ...stat, value: v };
                          update("hero", { ...content.hero, stats: next });
                        }}
                      />
                      <Input
                        value={stat.label}
                        placeholder="Libellé"
                        onChange={(v) => {
                          const next = [...content.hero.stats];
                          next[idx] = { ...stat, label: v };
                          update("hero", { ...content.hero, stats: next });
                        }}
                      />
                    </div>
                  ))}
                </div>
              </Field>
            </Section>

            <Section
              title="Section Philosophie"
              description="Citation centrée sous le hero."
            >
              <Field label="Pré-titre">
                <Input
                  value={content.philosophy.eyebrow}
                  onChange={(v) =>
                    update("philosophy", {
                      ...content.philosophy,
                      eyebrow: v,
                    })
                  }
                />
              </Field>
              <Field label="Citation">
                <Textarea
                  value={content.philosophy.quote}
                  onChange={(v) =>
                    update("philosophy", { ...content.philosophy, quote: v })
                  }
                />
              </Field>
              <Field label="Auteur">
                <Input
                  value={content.philosophy.author}
                  onChange={(v) =>
                    update("philosophy", { ...content.philosophy, author: v })
                  }
                />
              </Field>
            </Section>

            <Section
              title="Section Services (3 prestations)"
              description="Les trois cartes principales."
            >
              <Field label="Pré-titre">
                <Input
                  value={content.services.eyebrow}
                  onChange={(v) =>
                    update("services", { ...content.services, eyebrow: v })
                  }
                />
              </Field>
              <Field label="Titre de section">
                <Input
                  value={content.services.title}
                  onChange={(v) =>
                    update("services", { ...content.services, title: v })
                  }
                />
              </Field>
              <Field label="Introduction">
                <Textarea
                  value={content.services.intro}
                  onChange={(v) =>
                    update("services", { ...content.services, intro: v })
                  }
                />
              </Field>
              <div className="space-y-4">
                {content.services.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg border border-slate-200 p-4 space-y-3 bg-slate-50/50"
                  >
                    <p className="text-xs uppercase tracking-wide text-slate-500 font-medium">
                      Carte {idx + 1}
                    </p>
                    <Input
                      value={item.title}
                      placeholder="Titre"
                      onChange={(v) => {
                        const next = [...content.services.items];
                        next[idx] = { ...item, title: v };
                        update("services", {
                          ...content.services,
                          items: next,
                        });
                      }}
                    />
                    <Textarea
                      value={item.description}
                      placeholder="Description"
                      onChange={(v) => {
                        const next = [...content.services.items];
                        next[idx] = { ...item, description: v };
                        update("services", {
                          ...content.services,
                          items: next,
                        });
                      }}
                    />
                    <Input
                      value={item.cta}
                      placeholder="Lien CTA"
                      onChange={(v) => {
                        const next = [...content.services.items];
                        next[idx] = { ...item, cta: v };
                        update("services", {
                          ...content.services,
                          items: next,
                        });
                      }}
                    />
                  </div>
                ))}
              </div>
            </Section>

            <Section
              title="Section Approche"
              description="Bloc deux colonnes avec image et texte."
            >
              <Field label="Pré-titre">
                <Input
                  value={content.approach.eyebrow}
                  onChange={(v) =>
                    update("approach", { ...content.approach, eyebrow: v })
                  }
                />
              </Field>
              <Field label="Titre">
                <Input
                  value={content.approach.title}
                  onChange={(v) =>
                    update("approach", { ...content.approach, title: v })
                  }
                />
              </Field>
              <Field label="Paragraphe 1">
                <Textarea
                  value={content.approach.paragraph1}
                  onChange={(v) =>
                    update("approach", {
                      ...content.approach,
                      paragraph1: v,
                    })
                  }
                />
              </Field>
              <Field label="Paragraphe 2">
                <Textarea
                  value={content.approach.paragraph2}
                  onChange={(v) =>
                    update("approach", {
                      ...content.approach,
                      paragraph2: v,
                    })
                  }
                />
              </Field>
              <Field label="Bouton">
                <Input
                  value={content.approach.cta}
                  onChange={(v) =>
                    update("approach", { ...content.approach, cta: v })
                  }
                />
              </Field>
            </Section>

            <Section
              title="Section Citation"
              description="Bloc citation pleine largeur."
            >
              <Field label="Citation">
                <Textarea
                  value={content.citation.quote}
                  onChange={(v) =>
                    update("citation", { ...content.citation, quote: v })
                  }
                />
              </Field>
              <Field label="Auteur">
                <Input
                  value={content.citation.author}
                  onChange={(v) =>
                    update("citation", { ...content.citation, author: v })
                  }
                />
              </Field>
            </Section>

            <Section
              title="Section CTA finale"
              description="Bloc bleu en bas de page."
            >
              <Field label="Titre">
                <Input
                  value={content.finalCta.title}
                  onChange={(v) =>
                    update("finalCta", { ...content.finalCta, title: v })
                  }
                />
              </Field>
              <Field label="Description">
                <Textarea
                  value={content.finalCta.description}
                  onChange={(v) =>
                    update("finalCta", {
                      ...content.finalCta,
                      description: v,
                    })
                  }
                />
              </Field>
              <Field label="Bouton">
                <Input
                  value={content.finalCta.button}
                  onChange={(v) =>
                    update("finalCta", { ...content.finalCta, button: v })
                  }
                />
              </Field>
            </Section>
          </div>
        )}
      </main>

      {/* Sticky save bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-lg z-30">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="text-sm text-slate-600">
            {save.kind === "idle" && "Prêt à sauvegarder."}
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
            disabled={loadingContent || save.kind === "saving"}
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

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
      <header className="mb-6 pb-5 border-b border-slate-100">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        {description && (
          <p className="mt-1 text-sm text-slate-500">{description}</p>
        )}
      </header>
      <div className="space-y-5">{children}</div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-slate-700 mb-1.5">
        {label}
      </span>
      {children}
    </label>
  );
}

function Input({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900"
    />
  );
}

function Textarea({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <textarea
      value={value}
      placeholder={placeholder}
      onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
        onChange(e.target.value)
      }
      rows={3}
      className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900 resize-y"
    />
  );
}
