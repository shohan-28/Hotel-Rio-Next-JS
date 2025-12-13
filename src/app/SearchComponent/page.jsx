"use client";

import Image from "next/image";
import React from 'react';
import { useAuth } from "../../authContext";
import { HotelContext } from "../HotelContext";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";

const SearchComponent = () => {

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
            <div className="py-6 md:py-10 container mx-auto px-4">
                <div
                    className="
      bg-gray-50 py-6 md:py-10 rounded-3xl
      flex flex-col
      gap-6
      md:flex-row md:flex-wrap
      md:justify-between
      lg:flex-nowrap
      px-4 md:px-8 lg:px-14
    "
                >
                    {/* Location */}
                    <div className="w-full md:w-[48%] lg:w-auto">
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
                            onKeyDown={handleKeyDown}
                            className="
          w-full lg:w-80
          rounded-md border border-gray-300 bg-white
          px-4 py-2 text-gray-700 shadow-sm
          focus:border-indigo-400 focus:ring-2 focus:ring-indigo-300
          transition duration-200
        "
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
                    <div className="w-full md:w-[48%] lg:w-auto">
                        <label
                            htmlFor="checkin"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Check In
                        </label>
                        <input
                            type="date"
                            id="checkin"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            className="
          w-full lg:w-80
          rounded-md border border-gray-300 bg-white
          px-4 py-2 text-gray-700 shadow-sm
          focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500
          transition duration-200
        "
                        />
                    </div>

                    {/* Check Out */}
                    <div className="w-full md:w-[48%] lg:w-auto">
                        <label
                            htmlFor="checkout"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Check Out
                        </label>
                        <input
                            type="date"
                            id="checkout"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            className="
          w-full lg:w-80
          rounded-md border border-gray-300 bg-white
          px-4 py-2 text-gray-700 shadow-sm
          focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500
          transition duration-200
        "
                        />
                    </div>
                </div>

                {/* Search Button */}
                <div className="flex justify-center items-center py-5">
                    <button
                        onClick={handleSearch}
                        className="
        text-base md:text-lg lg:text-xl
        bg-amber-300 hover:bg-amber-400
        text-black px-6 md:px-8 py-2
        rounded-md cursor-pointer
        transition
      "
                    >
                        Search Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchComponent;