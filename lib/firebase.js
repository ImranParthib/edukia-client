import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase config for the client side (edukia-client)
// This connects to the same Firebase project as the admin dashboard
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Validate Firebase configuration
const isConfigValid = Object.values(firebaseConfig).every(
  (value) => value && value !== "undefined" && value !== undefined
);

// Debug: Check if environment variables are loaded
console.log("🔧 Firebase config check:", {
  hasApiKey: !!firebaseConfig.apiKey,
  hasAuthDomain: !!firebaseConfig.authDomain,
  projectId: firebaseConfig.projectId,
  hasStorageBucket: !!firebaseConfig.storageBucket,
  isConfigValid: isConfigValid,
  nodeEnv: process.env.NODE_ENV,
});

if (!isConfigValid) {
  console.error("❌ Firebase configuration incomplete!");
  console.error(
    "Missing or undefined environment variables. Check production deployment settings."
  );
  console.error(
    "Required variables: NEXT_PUBLIC_FIREBASE_API_KEY, NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN, etc."
  );
}

// Initialize Firebase (only once)
let app;
let db = null;

try {
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
  db = getFirestore(app);
  console.log("✅ Firebase client initialized successfully");
  console.log("📦 Project ID:", firebaseConfig.projectId);
} catch (error) {
  console.error("❌ Firebase client initialization failed:", error);
  console.error("Config used:", firebaseConfig);
}

export { db };
