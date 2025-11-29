"use client";
import { useState } from "react";
import Link from "next/link";
import { Borel } from "next/font/google";
import AboutUs from './../AboutUs/page';
import ContactUs from './../ContactUs/page';

const borel = Borel({
  subsets: ["latin"],
  weight: "400",
});



export default function Navbar() {
  
  const [open, setOpen] = useState(false);

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between h-[60px]">
        <p className={`font-bold text-3xl ${borel.className} `}>Hotel Rio</p>

        {/* Right side: Menu + Auth */}
        <div className="flex items-center gap-6">
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            <Link href="/" className="text-gray-700 hover:text-green-500">HOME</Link>
            <Link href="/hotels" className="text-gray-700 hover:text-green-500">HOTELS</Link>
            <Link href="/AboutUs" className="text-gray-700 hover:text-green-500">ABOUT US</Link>
            <Link href="/ContactUs" className="text-gray-700 hover:text-green-500">CONTACT US</Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex gap-4">
            <Link href="/register" className="text-white  bg-green-400 hover:bg-green-500 cursor-pointer rounded-md px-3 py-2">REGISTER</Link>
            <Link href="/login" className="text-white bg-green-400 hover:bg-green-500 cursor-pointer rounded-md px-3 py-2">LOGIN</Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col gap-2 mt-2 md:hidden">
          <Link href="/" className="text-gray-700 hover:text-green-500">HOME</Link>
          <Link href="/hotels" className="text-gray-700 hover:text-green-500">HOTELS</Link>
          <Link href="/AboutUs" className="text-gray-700 hover:text-green-500">ABOUT US</Link>
          <Link href="/ContactUs" className="text-gray-700 hover:text-green-500">CONTACT US</Link>
        </div>
      )}
    </div>
  );
}