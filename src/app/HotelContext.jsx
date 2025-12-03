"use client";
import { createContext, useEffect, useState } from "react";


export const HotelContext = createContext();
const UserProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState([]);
    let [hotelData, setHotelData] = useState([]);
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true);

    const [query, setQuery] = useState('');
    const [category, setCategory] = useState("");
    

    useEffect(() => {
        setCount(cartItem.length);
    }, [cartItem]);

    useEffect(() => {
        fetch('/DataTwo/HotelData.json')
            .then(res => res.json())
            .then(data => {
                console.log("HotelData:", data);
                setCartItem([]);
                setHotelData(data);
                setLoading(false);
            })
    }, [])

    const value = { hotelData, setHotelData, count, cartItem, loading, setCartItem, setCount, query, setQuery, category, setCategory }

    return (

        <HotelContext.Provider value={value}>
            {children}
        </HotelContext.Provider>
    )
}

export default UserProvider;