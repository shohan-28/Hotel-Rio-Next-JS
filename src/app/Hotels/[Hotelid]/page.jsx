"use client";
import { useContext, useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { HotelContext } from "@/app/HotelContext";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import RegisterPage from './../../Register/page';

import LoginPage from './../../Login/page';

export default function HotelDetailPage() {
  const { Hotelid } = useParams();
  const { hotelData, loading, setOrderHistory } = useContext(HotelContext);

  const [hotel, setHotel] = useState(null);
  const [nights, setNights] = useState(1);
  const [confirmed, setConfirmed] = useState(false);
  const [confirmedDate, setConfirmedDate] = useState("");
  const [user, setUser] = useState(null);

  const router = useRouter();
  const auth = getAuth();

  // ✅ Track Firebase user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // ✅ Wait for hotelData to load
  useEffect(() => {
    if (!loading && hotelData.length > 0) {
      const found = hotelData.find((h) => String(h.id) === String(Hotelid));
      setHotel(found);
    }
  }, [loading, hotelData, Hotelid]);

  if (loading)
    return <p className="text-center mt-10 text-blue-500">Loading...</p>;
  if (!hotel)
    return <p className="text-center mt-10 text-red-500">Hotel not found</p>;

  const pricePerNight = hotel.price || 2500;
  const totalPrice = nights * pricePerNight;

  const handleBooking = () => {
    if (user) {
      // ✅ যদি লগইন থাকে → order confirm হবে
      const dateString = new Date().toLocaleString();
      setConfirmed(true);
      setConfirmedDate(dateString);

      setOrderHistory((prev) => [
        ...prev,
        {
          id: Date.now(),
          hotel: hotel.location,
          nights,
          totalPrice,
          date: dateString,
        },
      ]);
    } else {
      // ❌ যদি লগইন না থাকে → শুধু message দেখাবে
      setConfirmed(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <img
        src={hotel.img}
        alt={hotel.location}
        className="w-full h-72 object-cover rounded-lg"
      />
      <div className="mt-6">
        <h1 className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold ">{hotel.location}</h1>
        <p className="mt-2 text-green-500">Status: {hotel.available}</p>
      </div>

      <div className="mt-6 border-t pt-4">
        <h2 className="text-xl font-semibold">Booking Details</h2>
        <div className="flex items-center gap-4 mt-3">
          <label>Nights:</label>
          <input
            type="number"
            min="1"
            value={nights}
            onChange={(e) => setNights(Number(e.target.value))}
            className="w-20 px-2 py-1 border rounded"
          />
        </div>

        <p className="mt-3">
          Price per night: <strong>{pricePerNight}৳</strong>
        </p>
        <p>
          Total: <strong className="text-blue-600">{totalPrice}৳</strong>
        </p>
      </div>

      <button
        onClick={handleBooking}
        className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 cursor-pointer"
      >
        Book Now
      </button>

      {/* ✅ যদি লগইন থাকে এবং confirm হয় */}
      {confirmed && user && (
        <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          ✅ Order confirmed for <strong>{nights}</strong> night(s) at{" "}
          <strong>{hotel.location}</strong>. Total:{" "}
          <strong>{totalPrice}৳</strong> <br />
          Confirmed at: <strong>{confirmedDate}</strong>
        </div>
      )}

      {/* ❌ যদি লগইন না থাকে */}
      {!user && !confirmed && (
        <div className="mt-6 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-lg">
          ⚠️ You must login to book this hotel. Go to
          <div className="space-x-2">
            <button
              onClick={() => router.push("/Register")}
              className="mt-3 px-4 py-2 bg-green-600 text-white rounded cursor-pointer"
            >
              REGISTER
            </button>

            <button
              onClick={() => router.push("/Login")}
              className="mt-3 px-4 py-2 bg-green-600 text-white rounded cursor-pointer"
            >
              LOGIN
            </button>
          </div>
        </div>
      )}
    </div>
  );
}