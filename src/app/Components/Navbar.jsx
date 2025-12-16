"use client";
import { useState } from "react";
import Link from "next/link";
import { Borel } from "next/font/google";
import { useAuth } from "../../authContext";
import { logout } from "../../firebase/authService";

const borel = Borel({
  subsets: ["latin"],
  weight: "400",
});

export default function Navbar() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-blue-50 rounded-b-xl">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-[70px] pt-2 px-4">

          <div className="flex items-center justify-center h-full ">
            <p className={`font-bold lg:text-3xl md:text-2xl text-[13px] flex items-center lg:pr-0 pr-4 text-black text-center h-[18px] ${borel.className}`}>
              Hotel Rio
            </p>
          </div>

          <div className="flex items-center gap-4">

            {/* Desktop menu */}
            <div className="hidden md:flex gap-4">
              <Link href="/" className="text-gray-700 hover:text-green-500">HOME</Link>
              <Link href="/Hotels" className="text-gray-700 hover:text-green-500">HOTELS</Link>
              <Link href="/AboutUs" className="text-gray-700 hover:text-green-500">ABOUT US</Link>
              <Link href="/ContactUs" className="text-gray-700 hover:text-green-500">CONTACT US</Link>
            </div>

            {/* Auth Buttons */}
            <div className="flex lg:gap-4 gap-2">
              {/* Always show OrderHistory */}
              <Link href="/OrderHistory">
                <button className="cursor-pointer text-black bg-amber-400 hover:bg-amber-300 lg:text-base text-[10px] rounded-md px-3 py-2">
                  Order History
                </button>
              </Link>

              {user ? (
                <button
                  onClick={logout}
                  className="text-white bg-red-500 hover:bg-red-600 rounded-md px-3 py-2"
                >
                  LOGOUT
                </button>
              ) : (
                <>
                  <Link href="/Register">
                    <button className="text-white lg:text-base text-[10px] bg-green-400 hover:bg-green-500 rounded-md px-3 py-2">
                      REGISTER
                    </button>
                  </Link>

                  <Link href="/Login">
                    <button className="text-white bg-green-400 hover:bg-green-500 rounded-md px-3 py-2 lg:text-base text-[10px]">
                      LOGIN
                    </button>
                  </Link>
                </>
              )}
            </div>

            <button
              className="md:hidden text-2xl text-gray-700"
              onClick={() => setOpen(!open)}
            >
              ☰
            </button>
          </div>
        </div>

        {open && (
          <div className="flex flex-col gap-2 mt-2 md:hidden px-4">
            <Link href="/" className="text-gray-700 hover:text-green-500">HOME</Link>
            <Link href="/Hotels" className="text-gray-700 hover:text-green-500">HOTELS</Link>
            <Link href="/AboutUs" className="text-gray-700 hover:text-green-500">ABOUT US</Link>
            <Link href="/ContactUs" className="text-gray-700 hover:text-green-500">CONTACT US</Link>
          </div>
        )}
      </div>
    </div>
  );
}
