"use client";

import { useContext, useState } from "react";
import { useParams } from "next/navigation";
import { HotelContext } from "@/app/HotelContext";

export default function HotelDetailPage() {
  const { Hotelid } = useParams();
  const { hotelData } = useContext(HotelContext);

  const hotel = hotelData.find(h => String(h.id) === String(Hotelid));

  const [nights, setNights] = useState(1);
  const [confirmed, setConfirmed] = useState(false);

  if (!hotel) return <p className="text-center text-red-500">Hotel not found</p>;

  const pricePerNight = hotel.price || 2500; // fallback price
  const totalPrice = nights * pricePerNight;

  const handleBooking = () => {
    setConfirmed(true);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Hotel Image */}
      <img
        src={hotel.img}
        alt={hotel.location}
        className="w-full h-72 object-cover rounded-lg"
      />

      {/* Hotel Info */}
      <div className="mt-6">
        <h1 className="text-3xl font-bold text-gray-800">{hotel.location}</h1>
        <p className="mt-2 text-gray-600">Status: {hotel.available}</p>
      </div>

      {/* Price Calculation */}
      <div className="mt-6 border-t pt-4">
        <h2 className="text-xl font-semibold text-gray-700">Booking Details</h2>
        <div className="flex items-center gap-4 mt-3">
          <label className="text-gray-600">Nights:</label>
          <input
            type="number"
            min="1"
            value={nights}
            onChange={(e) => setNights(Number(e.target.value))}
            className="w-20 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <p className="mt-3 text-lg text-gray-800">
          Price per night: <span className="font-semibold">{pricePerNight}৳</span>
        </p>
        <p className="mt-1 text-lg text-gray-800">
          Total: <span className="font-bold text-blue-600">{totalPrice}৳</span>
        </p>
      </div>

      {/* Booking Button */}
      <div className="mt-6">
        <button
          onClick={handleBooking}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition"
        >
          Book Now
        </button>
      </div>

      {/* Confirmation Message */}
      {confirmed && (
        <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          ✅ Order confirmed for <strong>{nights}</strong> night(s) at <strong>{hotel.location}</strong>.  
          Total cost: <strong>{totalPrice}৳</strong>
        </div>
      )}
    </div>
  );
}