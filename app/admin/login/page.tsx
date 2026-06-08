"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  type AuthError,
} from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebase";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getFirebaseAuth(), (user) => {
      if (user) router.replace("/admin");
    });
    return unsubscribe;
  }, [router]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await signInWithEmailAndPassword(getFirebaseAuth(), email, password);
      router.replace("/admin");
    } catch (err) {
      const code = (err as AuthError).code ?? "auth/unknown";
      setError(translateAuthError(code));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-10"
      >
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold text-slate-900">
            Connexion administrateur
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Accède au panneau d&apos;édition du site.
          </p>
        </div>

        <label className="block mb-5">
          <span className="text-sm font-medium text-slate-700">Email</span>
          <input
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900"
            placeholder="admin@bothecoach.ch"
          />
        </label>

        <label className="block mb-6">
          <span className="text-sm font-medium text-slate-700">
            Mot de passe
          </span>
          <input
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900"
            placeholder="••••••••"
          />
        </label>

        {error && (
          <div className="mb-5 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-slate-900 text-white py-2.5 text-sm font-medium transition-colors hover:bg-slate-800 disabled:bg-slate-400 disabled:cursor-not-allowed"
        >
          {loading ? "Connexion…" : "Se connecter"}
        </button>
      </form>
    </div>
  );
}

function translateAuthError(code: string): string {
  switch (code) {
    case "auth/invalid-email":
      return "Adresse email invalide.";
    case "auth/user-disabled":
      return "Ce compte a été désactivé.";
    case "auth/user-not-found":
    case "auth/wrong-password":
    case "auth/invalid-credential":
      return "Email ou mot de passe incorrect.";
    case "auth/too-many-requests":
      return "Trop de tentatives. Réessaie dans quelques minutes.";
    case "auth/network-request-failed":
      return "Problème de connexion réseau.";
    default:
      return "Connexion impossible. Réessaie.";
  }
}
