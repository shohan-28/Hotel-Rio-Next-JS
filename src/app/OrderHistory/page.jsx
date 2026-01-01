"use client";
import { useContext, useEffect } from "react";
import { HotelContext } from "@/app/HotelContext";

export default function OrderHistory() {
  const { orderHistory } = useContext(HotelContext);

  useEffect(() => {
    console.log("OrderHistory data:", orderHistory);
  }, [orderHistory]);

  if (!orderHistory || orderHistory.length === 0) {
    return <p className="text-center mt-10 text-gray-500">No orders confirmed yet.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl text-black font-bold mb-6">Order History</h1>
      <ul className="space-y-4">
        {orderHistory.map((order) => (
          <li key={order.id} className="border p-4 rounded-lg shadow-sm hover:shadow-md">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-black">{order.hotel}</p>
              <span className="text-sm text-black">{order.date}</span>
            </div>
            <p>Nights: {order.nights}</p>
            <p>Total: <strong className="text-blue-600">{order.totalPrice}৳</strong></p>
          </li>
        ))}
      </ul>
    </div>
  );
}
