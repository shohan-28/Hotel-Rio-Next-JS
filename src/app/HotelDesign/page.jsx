"use client";
import Link from "next/link";
import React from "react";
import { IoLocationSharp } from "react-icons/io5";

const HotelDesign = ({ hotel }) => {
  const { img, location, available, id } = hotel;

  return (
    <div className="border rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition">
      <div className="relative">
        <Link href={`/Hotels/${hotel.id}`}>
          <img src={img} alt={location} className="w-full h-48 object-cover" />
        </Link>

        <span
          className={`absolute top-2 right-2 px-3 py-1 text-sm font-semibold rounded ${
            available === "Available"
              ? "bg-green-600/50 text-white"
              : "bg-red-600 text-white"
          }`}
        >
          {available}
        </span>
      </div>

      <div className="p-4 justify-between flex">
        <h2 className="text-lg font-semibold flex items-center space-x-2">
          <IoLocationSharp /> {location}
        </h2>
        <button className="text-white text-base bg-black px-6 py-1 rounded-md cursor-pointer">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default HotelDesign;
