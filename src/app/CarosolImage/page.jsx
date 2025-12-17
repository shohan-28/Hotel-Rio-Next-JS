"use client";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import data from "../../../src/app/Data/Data.json"; // 👈 JSON import
import 'animate.css';

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  // Auto change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 👈 3000ms = 3 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  // Slice 3 items starting from current index
  const visibleItems = [
    data[current],
    data[(current + 1) % data.length],
    data[(current + 2) % data.length],
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto py-5">
      <div className="h-[100px] ">
        <h2 className="text-black flex items-center justify-center lg:text-3xl text-lg">The areas where our services are <span className="text-red-800 pr-2 pl-2 lg:text-3xl text-lg animate__animated animate__shakeY">available</span> are:</h2>
      </div>
      {/* Carousel Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-10">
        {visibleItems.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-xl shadow-lg bg-white"
          >
            <img
              src={item.img}
              alt={item.location}
              className="w-full h-48 sm:h-56 md:h-64 object-cover"
            />
            <div className="bg-gray-900 text-white p-3 sm:p-4">
              <h2 className="text-base sm:text-lg font-bold">{item.location}</h2>
              <p className="text-xs sm:text-sm mt-1">Support: {item.support}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black transition"
      >
        <FaArrowLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black transition"
      >
        <FaArrowRight />
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              current === index ? "bg-yellow-400" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}