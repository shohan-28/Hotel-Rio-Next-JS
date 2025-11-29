import Image from "next/image";

export default function Home() {
  return (
    <div className="py-10 container mx-auto rounded-xl ">
      <div className="flex justify-between pl-30 pr-14 bg-gray-50 py-10">
        <div className="w-full max-w-sm">
          <label for="location" className="block text-sm font-medium text-gray-700 mb-2">
            Choose a Location:
          </label>
          <select
            id="location"
            name="Locations"
            class="w-80 rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm focus:border-indigo-400 focus:ring-2 focus:ring-indigo-300 transition duration-200 ease-in-out"
          >
            <option value="" selected disabled> Select a Location --</option>
            <option value="dhaka">Dhaka</option>
            <option value="sylhet">Sylhet</option>
            <option value="cox-bazar">Cox's Bazar</option>
            <option value="khulna">Khulna</option>
          </select>
        </div>

        <div class="w-full max-w-sm">
          <label for="checkin" class="block text-sm font-medium text-gray-700 mb-2">
            Check In
          </label>
          <input
            type="date"
            id="checkin"
            name="checkin"
            class="w-80 rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
            placeholder="Select date"
          />
        </div>

        <div class="w-full max-w-sm">
          <label for="checkout" class="block text-sm font-medium text-gray-700 mb-2">
            Check Out
          </label>
          <input
            type="date"
            id="checkout"
            name="checkout"
            class="w-80 rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
            placeholder="Select date"
          />
        </div>
      </div>

      <div className="flex justify-center items-center py-5">
        <button className="text-xl bg-amber-300 hover:bg-amber-400 text-black px-8 py-1 rounded-md cursor-pointer">Search Now</button>
      </div>
    </div>
  );
}
