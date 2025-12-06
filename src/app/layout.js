import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { AuthProvider } from "../authContext";
import { Toaster } from "react-hot-toast";
import UserProvider from "./HotelContext";

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
          <UserProvider>
            <Navbar />
            <main>{children}</main>
            <Toaster position="top-right" />
            <Footer />
          </UserProvider>
        </AuthProvider>
      </body>
    </html>
  );
}