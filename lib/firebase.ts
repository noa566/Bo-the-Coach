import { getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

/**
 * Lazily initializes the Firebase app. Throws a clear error if the API key
 * is missing so the failure mode is obvious instead of a cryptic
 * `auth/invalid-api-key`.
 */
function getApp(): FirebaseApp {
  const existing = getApps()[0];
  if (existing) return existing;
  if (!firebaseConfig.apiKey) {
    throw new Error(
      "Firebase env vars are missing. Set NEXT_PUBLIC_FIREBASE_* in .env.local (locally) and in Vercel project settings (production).",
    );
  }
  return initializeApp(firebaseConfig);
}

export function getFirebaseAuth(): Auth {
  return getAuth(getApp());
}

export function getDb(): Firestore {
  return getFirestore(getApp());
}

/** True when all required Firebase env vars are present. */
export function isFirebaseConfigured(): boolean {
  return Boolean(firebaseConfig.apiKey && firebaseConfig.projectId);
}
