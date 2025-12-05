// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// ❗ Analytics import kora hoyeche, but initialization korbo na ekhane
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDcHlRaHJDrLZy73TtJtO47VpbhMdyXSYw",
  authDomain: "hotel-management-auth-809cd.firebaseapp.com",
  projectId: "hotel-management-auth-809cd",
  storageBucket: "hotel-management-auth-809cd.firebasestorage.app",
  messagingSenderId: "871466876924",
  appId: "1:871466876924:web:7610702f6c2bfa5fba7c79",
  measurementId: "G-04QPQZMEKD",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// ❗ Analytics server-side e run korbe NA.
// ❗ This keeps Vercel build SAFE.
export const analytics = typeof window !== "undefined"
  ? await isSupported().then(supported => supported ? getAnalytics(app) : null)
  : null;
