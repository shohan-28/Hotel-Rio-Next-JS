"use client";

import AuthForm from "../Components/AuthForm";
import { login } from "../../firebase/authService";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async (email, password) => {
    try {
      // 🔐 Firebase login
      const user = await login(email, password);

      // ✅ Success feedback
      toast.success(`Welcome back, ${user.email}!`);

      // 🔁 Redirect to homepage or dashboard
      router.push("/");
    } catch (error) {
      // ❌ Error feedback
      toast.error(error.message || "Login failed. Please try again.");
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login to Your Account
        </h1>

        {/* Reusable AuthForm component */}
        <AuthForm type="login" onSubmit={handleLogin} />

        {/* Optional: Link to Register */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <a href="/Register" className="text-green-500 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </main>
  );
}