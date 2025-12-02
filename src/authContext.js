"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./firebase/firebaseConfig";
import { 
  onAuthStateChanged, 
  signOut, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  sendEmailVerification 
} from "firebase/auth";

// context তৈরি করা
const AuthContext = createContext();

// provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Track user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // ✅ Signup function
  const signUp = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const newUser = userCredential.user;
    await sendEmailVerification(newUser, {
      url: "http://localhost:3000/Login" // production এ তোমার domain বসাবে
    });
    return newUser;
  };

  // ✅ Login function (with verification check)
  const login = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const loggedInUser = userCredential.user;
    if (!loggedInUser.emailVerified) {
      throw new Error("Please verify your email before logging in.");
    }
    return loggedInUser;
  };

  // ✅ Logout function
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signUp, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
export const useAuth = () => useContext(AuthContext);