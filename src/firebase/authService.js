// src/firebase/authService.js
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { app } from "./firebaseConfig";

const auth = getAuth(app);

// ✅ Signup with email + password
export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Send verification email with redirect URL
    await sendEmailVerification(user, {
      url: "http://localhost:3000/Login" // 🔁 Replace with your production domain
    });

    return user;
  } catch (error) {
    console.error("Signup failed:", error);
    throw new Error(error.message || "Signup failed. Please try again.");
  }
};

// ✅ Login with verification check
export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Block unverified users
    if (!user.emailVerified) {
      throw new Error("Please verify your email before logging in.");
    }

    return user;
  } catch (error) {
    console.error("Login failed:", error);
    throw new Error(error.message || "Login failed. Please try again.");
  }
};

// ✅ Logout
export const logout = async () => {
  try {
    await signOut(auth);
    console.log("User logged out successfully");
  } catch (error) {
    console.error("Logout failed:", error);
    throw new Error("Logout failed. Please try again.");
  }
};