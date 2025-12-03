"use client";

import React, { useContext, useEffect, useState } from "react";
import HotelDesign from "../HotelDesign/page";
import { HotelContext } from "../HotelContext";


const Hotels = () => {
    const { hotelData, category, setCategory } = useContext(HotelContext);
    

    return (
        <div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            {hotelData.map((p) => (
                <HotelDesign key={p.id} hotel={p} />
            ))}
        </div>
        </div>

    );
};

export default Hotels;