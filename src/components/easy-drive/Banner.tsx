import banner_car from "@/assets/banner_car.png";
import React from "react";

const Banner: React.FC = () => {
  return (
    <div
      className="relative h-[500px] md:h-[600px] lg:h-[700px] bg-cover bg-center"
      style={{ backgroundImage: `url(${banner_car})` }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Find Your Perfect Ride with EasyDrive
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">
          Book now and hit the road with our top-rated cars
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-md bg-white rounded-md shadow-md p-4 flex flex-col md:flex-row items-center mb-4">
          <input
            type="text"
            placeholder="Enter Location"
            className="w-full p-2 border border-gray-300 rounded-md mb-2 md:mb-0 md:mr-2 focus:outline-none focus:ring-2 focus:ring-blue-700"
          />
          <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded-md mb-2 md:mb-0 md:mr-2 focus:outline-none focus:ring-2 focus:ring-blue-700"
          />
          <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded-md mb-2 md:mb-0 md:mr-2 focus:outline-none focus:ring-2 focus:ring-blue-700"
          />
          <button className="w-full md:w-auto bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700">
            Search
          </button>
        </div>

        {/* Book Now Button */}
        <button className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
