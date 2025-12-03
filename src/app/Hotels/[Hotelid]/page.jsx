"use client";

import { useContext } from "react";
import { HotelContext } from "@/app/HotelContext";

export default function HotelDetailPage({ params }) {
  // folder name must match exactly
  const { Hotelid } = params;  

  const { hotelData, loading } = useContext(HotelContext);

  if (loading) return <p>Loading hotel...</p>;

  // convert both to string for safe comparison
  const hotel = hotelData.find(
    (h) => String(h.id) === String(Hotelid) || String(h.Hotelid) === String(Hotelid)
  );

  if (!hotel) {
    console.log("params:", params);
    console.log("hotelData:", hotelData);
    return <p>Hotel not found</p>;
  }

  return (
    <div className="p-6">
      <img
        src={hotel.img}
        alt={hotel.location}
        className="w-full h-64 object-cover rounded"
      />
      <h1 className="text-2xl font-bold mt-4">{hotel.location}</h1>
      <p className="mt-2">Status: {hotel.available}</p>
      <p className="mt-2">{hotel.description}</p>
    </div>
  );
}
