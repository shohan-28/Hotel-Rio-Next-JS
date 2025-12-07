"use client";

import Image from "next/image";
import Carousel from "./CarosolImage/page";
import { useAuth } from "../authContext";
import ServiceCTA from "./serviceCTA/page";
import { HotelContext } from "./HotelContext";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { query, setQuery } = useContext(HotelContext);
  const { user } = useAuth();
  const router = useRouter();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const validateDates = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // ✅ আজকের তারিখকে midnight এ reset করা হলো

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    if (checkInDate < today || checkOutDate < today) {
      return false; // invalid
    }
    return true; // valid
  };

  const handleSearch = () => {
    if (!query.trim()) return;

    if (!validateDates()) {
      router.push(`/search?error=invalid-date`);
      return;
    }

    router.push(
      `/search?q=${encodeURIComponent(query.trim())}&checkin=${checkIn}&checkout=${checkOut}`
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.trim()) {
      if (!validateDates()) {
        router.push(`/search?error=invalid-date`);
        return;
      }

      router.push(
        `/search?q=${encodeURIComponent(query.trim())}&checkin=${checkIn}&checkout=${checkOut}`
      );
    }
  };

  return (
    <div>
      {/* <div className="flex items-center justify-end bg-gray-50">
        {user ? (
          <h1 className="text-2xl font-bold text-green-600">
            Welcome, {user.email}
          </h1>
        ) : (
          
        )}
      </div> */}

      <div className="flex items-center justify-center bg-gray-50">
        <ServiceCTA />
      </div>

      <div className="py-10 container mx-auto rounded-xl">
        <div className="flex justify-between pl-30 pr-14 bg-gray-50 py-10">
          {/* Location */}
          <div className="w-full max-w-sm">
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Choose a Location:
            </label>

            <select
              id="location"
              name="Location"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-80 rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm focus:border-indigo-400 focus:ring-2 focus:ring-indigo-300 transition duration-200 ease-in-out"
              onKeyDown={handleKeyDown}
            >
              <option value="" disabled>
                Select a Location --
              </option>
              <option value="dhaka">Dhaka</option>
              <option value="sylhet">Sylhet</option>
              <option value="Cox's Bazar">Cox's Bazar</option>
              <option value="khulna">Khulna</option>
            </select>
          </div>

          {/* Check In */}
          <div className="w-full max-w-sm">
            <label
              htmlFor="checkin"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Check In
            </label>
            <input
              type="date"
              id="checkin"
              name="checkin"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-80 rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
            />
          </div>

          {/* Check Out */}
          <div className="w-full max-w-sm">
            <label
              htmlFor="checkout"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Check Out
            </label>
            <input
              type="date"
              id="checkout"
              name="checkout"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-80 rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
            />
          </div>
        </div>

        <div className="flex justify-center items-center py-5">
          <button
            onClick={handleSearch}
            className="text-xl bg-amber-300 hover:bg-amber-400 text-black px-8 py-1 rounded-md cursor-pointer"
          >
            Search Now
          </button>
        </div>
      </div>

      <Carousel />
    </div>
  );
}