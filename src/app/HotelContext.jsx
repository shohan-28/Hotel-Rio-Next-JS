"use client";
import { createContext, useEffect, useState } from "react";

export const HotelContext = createContext();

const UserProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const [hotelData, setHotelData] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  
  const [category, setCategory] = useState("");
   const [orderHistory, setOrderHistory] = useState([]);

   //For Search Engine
   const [query, setQuery] = useState('');


  // cart count auto update
  useEffect(() => {
    setCount(cartItem.length);
  }, [cartItem]);

  // fetch hotel data from public folder
  useEffect(() => {
    fetch("/DataTwo/HotelData.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("HotelData:", data);
        setHotelData(data);
        setLoading(false);
        
      })
      .catch((err) => {
        console.error("Failed to load hotel data:", err);
        setLoading(false);
      });
  }, []);

  const value = {
    hotelData,
    setHotelData,
    count,
    cartItem,
    setCartItem,
    loading,
    query,
    setQuery,
    category,
    setCategory,orderHistory, setOrderHistory
  };

  return (
    <HotelContext.Provider value={value}>
      {children}
    </HotelContext.Provider>
  );
};

export default UserProvider;