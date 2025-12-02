import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../app/Components/Navbar";
import Footer from "../app/Components/Footer";
import { AuthProvider } from "../authContext";
import { Toaster } from "react-hot-toast";


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
          <Navbar />
          {children}
          <Toaster position="top-right" />

          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}