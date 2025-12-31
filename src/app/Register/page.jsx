"use client";

import AuthForm from "../Components/AuthForm";
import { signUp } from "../../firebase/authService";
import { toast } from "react-hot-toast";

export default function RegisterPage() {
  const handleSignup = async (email, password) => {
    try {
      // 🔐 Firebase signup + verification mail
      const user = await signUp(email, password);

      // ✅ Success feedback
      toast.success("✅ Account created! Please check your email for verification link.");
    } catch (error) {
      // ❌ Error feedback
      toast.error(error.message || "Signup failed. Try again.");
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-black">
        
        </h1>

        {/* Reusable AuthForm component */}
        <AuthForm type="signup" onSubmit={handleSignup} />

        {/* Optional: Link to Login */}
        <p className="text-center text-sm text-black mt-4">
          Already have an account?{" "}
          <a href="/Login" className="text-green-500 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </main>
  );
}