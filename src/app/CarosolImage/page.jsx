"use client";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import data from "../../../src/app/Data/Data.json"; // 👈 JSON import

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === data.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? data.length - 1 : current - 1);
  };

  // Slice 3 items starting from current index
  const visibleItems = [
    data[current],
    data[(current + 1) % data.length],
    data[(current + 2) % data.length],
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto py-5">
      {/* Carousel Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleItems.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-xl shadow-lg bg-white"
          >
            <img
              src={item.img}
              alt={item.location}
              className="w-full h-64 object-cover"
            />
            <div className="bg-gray-900 text-white p-4">
              <h2 className="text-lg font-bold">{item.location}</h2>
              <p className="text-sm mt-1">Support: {item.support}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black transition"
      >
        <FaArrowLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black transition"
      >
        <FaArrowRight />
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-yellow-400" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}