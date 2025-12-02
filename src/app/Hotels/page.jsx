"use client";

import React, { useEffect, useState } from "react";
import HotelDesign from "../HotelDesign/page";
import hotelData from "../../../public/DataTwo/HotelData.json";

const Hotels = () => {
    const [hotels, setHotels] = useState(hotelData);

    // useEffect(() => {
    //     fetch("../../../public/DataTwo/HotelData.json")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data);
    //             setHotels(data);
    //         })
    //         .catch((error) => {
    //             console.error("Error:", error);
    //         });
    // }, []);

    return (
        <div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            {hotels.map((p) => (
                <HotelDesign key={p.id} hotel={p} />
            ))}
        </div>
        </div>

    );
};

export default Hotels;