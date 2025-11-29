import { Borel } from 'next/font/google';
import React from 'react';
import bkash from "../../../public/icons/bkash-logo.png";
import nagad from "../../../public/icons/nagad-logo.png";
import rocket from "../../../public/icons/rocket logo.png";
import mastercard from "../../../public/icons/mastercard.png";
import visa from "../../../public/icons/visa-card.jpg";

const borel = Borel({
  subsets: ["latin"],
  weight: "400",
});

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-gray-300 py-10">
                <div className="container mx-auto flex justify-between items-center px-4">

                    {/* Left side - Hotel Info */}
                    <div>
                        <h2 className={`text-3xl font-bold text-white mb-2  ${borel.className}`}>Hotel Rio</h2>
                        <p className="text-sm">© 2025 Hotel Rio. All rights reserved.</p>
                        <p className="text-sm">Dhaka, Bangladesh</p>
                    </div>

                    {/* Right side - Payment Options */}
                    <div className="flex items-center space-x-4">
                        <span className="text-sm text-white mr-2">Payment Options:</span>

                        {/* Payment Icons */}
                        <img src="/icons/bkash-logo.png" alt="Bkash" className="h-8 w-8" />
                        <img src="/icons/nagad-logo.png" alt="Nagad" className="h-8 w-8" />
                        <img src="/icons/rocket logo.png" alt="Rocket" className="h-8 w-8" />
                        <img src="/icons/mastercard.png" alt="MasterCard" className="h-8 w-8" />
                        <img src="/icons/visa-card.jpg" alt="Visa" className="h-8 w-8" />
                        <img src="" alt="" />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;