import React, { useState, useEffect } from "react";

const Banner = () => {
  const messages = [
    "Discover Handmade Crochet Products",
    "Custom Designs Made Just for You",
    "High-Quality, Unique Crochet Creations",
    "Free Delivery on All Orders",
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-20 bg-gradient-to-r from-green-500 via-red-600 to-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-16">
        {/* Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0 z-10 text-center md:text-left">
          <h1
            className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-wide transition-all duration-500"
            style={{ fontFamily: "Bookman Old Style" }}
          >
            {messages[currentMessageIndex]}
          </h1>
          <p className="text-lg md:text-xl mb-6 text-white opacity-90 leading-relaxed">
            Browse our collection, request custom designs, and enjoy free delivery. Each piece is crafted with love and attention to detail.
          </p>
          <button className="px-6 py-3 bg-white text-green-700 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300">
            Shop Now
          </button>
        </div>

        {/* Decorative Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="w-64 h-64 md:w-72 md:h-72 bg-white bg-opacity-20 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
