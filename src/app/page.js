"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Carousel from "./CarosolImage/page";

import ServiceCTA from "./serviceCTA/page";
import AnimationLoader from "./AppWithLoading/page";
import SearchComponent from "./SearchComponent/page";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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
      <div className="App">
        {loading ? (
          <div className="loading-wrapper">
            <AnimationLoader />
          </div>
        ) : (
          <>
            <div className="flex items-center justify-center bg-white">
              <ServiceCTA />
            </div>
            <SearchComponent></SearchComponent>
            <Carousel />
          </>
        )}
      </div>



    </div>
  );
}