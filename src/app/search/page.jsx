"use client";
import { useContext } from "react";
import { HotelContext } from "../HotelContext";
import HotelDesign from "../HotelDesign/page";

// Normalize function → case-insensitive + remove apostrophe/dash
const normalize = (str = "") =>
  str.toLowerCase().replace(/['-]/g, "").trim();

const Search = () => {
  const { query = "", hotelData = [] } = useContext(HotelContext);

  // Safe filter with fallback
  const filterBySearch =
    query.trim()
      ? hotelData.filter((item) =>
          normalize(item?.location || "").includes(normalize(query))
        )
      : hotelData;

  return (
    <div>
      {filterBySearch.length === 0 ? (
        <p className="text-black text-center mt-10 text-lg bg-white p-4">
          {query.trim()
            ? `No products found for "${query}"`
            : "Please select a location to search"}
        </p>
      ) : (
        <div className="w-11/12 mx-auto">
          {query.trim() && (
            <h2 className="text-xl font-bold text-center mb-6">
              Showing results for "{query}"
            </h2>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
            {filterBySearch.map((item) => (
              <HotelDesign hotel={item} key={item.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;