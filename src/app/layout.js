import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";   // ✅ একই app ফোল্ডারের ভেতরে
import Footer from "./Components/Footer";   // ✅ একই app ফোল্ডারের ভেতরে
import { AuthProvider } from "../authContext";
import { Toaster } from "react-hot-toast";
import UserProvider from "./HotelContext"; // ✅ ঠিক path

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hotel Management",
  description: "Firebase Auth with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <UserProvider>
            <Navbar />
            {children}
            <Toaster position="top-right" />
            <Footer />
          </UserProvider>
        </AuthProvider>
      </body>
    </html>
  );
}