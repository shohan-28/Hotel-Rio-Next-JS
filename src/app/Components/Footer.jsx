import { Borel } from "next/font/google";
import React from "react";

const borel = Borel({
  subsets: ["latin"],
  weight: "400",
});

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        
        {/* Left side - Hotel Info */}
        <div className="text-center md:text-left">
          <h2
            className={`text-3xl font-bold text-white mb-2 ${borel.className}`}
          >
            Hotel Rio
          </h2>
          <p className="text-sm">© 2025 Hotel Rio. All rights reserved.</p>
          <p className="text-sm">Dhaka, Bangladesh</p>
        </div>

        {/* Right side - Payment Options */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
          <span className="text-sm text-white">Payment Options:</span>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <img src="/icons/bkash-logo.png" alt="Bkash" className="h-8 w-10" />
            <img src="/icons/nagad-logo.png" alt="Nagad" className="h-8 w-10" />
            <img src="/icons/rocket logo.png" alt="Rocket" className="h-8 w-10" />
            <img src="/icons/mastercard.png" alt="MasterCard" className="h-8 w-10" />
            <img src="/icons/visa-card.jpg" alt="Visa" className="h-8 w-10" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;