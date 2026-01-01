"use client";
import Link from "next/link";
import React from "react";
import { IoLocationSharp } from "react-icons/io5";

const HotelDesign = ({ hotel }) => {
  if (!hotel) return null;

  const { img, location, available, id, price, oldprice } = hotel;

  return (
    <div className="border rounded-xl shadow-md overflow-hidden bg-white hover:shadow-xl transition-transform hover:scale-[1.02]">
      {/* Image Section */}
      <div className="relative">
        <Link href={`/Hotels/${id}`} passHref>
          <img
            src={img}
            alt={location || "Hotel image"}
            className="w-full h-52 object-cover"
          />
        </Link>

        {/* Availability Badge */}
        <span
          className={`absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-lg shadow-md ${
            available === "Available"
              ? "bg-green-600/80 text-white"
              : "bg-red-600 text-white"
          }`}
        >
          {available}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col space-y-3">
        {/* Location */}
        <h2 className="text-lg font-semibold flex items-center gap-2 text-black">
          <IoLocationSharp className="text-red-500" /> {location}
        </h2>

        {/* Price Section */}
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-red-500">
            ৳{price?.toLocaleString()}
          </span>
          {oldprice && (
            <span className="text-sm text-gray-500 line-through">
              ৳{oldprice?.toLocaleString()}
            </span>
          )}
        </div>

        {/* Button */}
        <Link href={`/Hotels/${id}`} passHref>
          <button
            type="button"
            className="w-full text-white text-base bg-gradient-to-r from-black to-gray-800 px-6 py-2 rounded-md cursor-pointer hover:opacity-90 transition"
          >
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HotelDesign;