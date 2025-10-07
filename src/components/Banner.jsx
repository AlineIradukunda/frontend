import React, { useState, useEffect } from "react";

const Banner = () => {
  const bannerMessages = [
    "Discover Handmade Crochet Products",
    "Custom Designs Made Just for You",
    "High-Quality, Unique Crochet Creations",
    "Free Delivery on All Orders",
  ];

  const circleWords = ["Crochet", "Beauty", "Passion", "Hard Work"];

  const [messageIndex, setMessageIndex] = useState(0);
  const [circleIndex, setCircleIndex] = useState(0);

  useEffect(() => {
    const msgInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % bannerMessages.length);
    }, 3500);

    const circleInterval = setInterval(() => {
      setCircleIndex((prev) => (prev + 1) % circleWords.length);
    }, 2000);

    return () => {
      clearInterval(msgInterval);
      clearInterval(circleInterval);
    };
  }, []);

  return (
    <section
      className="w-full py-20"
      style={{
        background:
          "linear-gradient(135deg, #f5de50, #d2691e, #1a1a1a, #f8f8f8)", // yellow, chocolate, black, white
        fontFamily: "Times New Roman, serif",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-16">
        {/* Left Side Text */}
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left text-white z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide transition-all duration-700">
            {bannerMessages[messageIndex]}
          </h1>
          <p className="text-lg md:text-xl mb-6 opacity-90 leading-relaxed">
            Browse our collection, request custom designs, and enjoy free
            delivery. Each piece is crafted with love and attention to detail.
          </p>
          <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300">
            Shop Now
          </button>
        </div>

        {/* Right Side Circle */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full flex items-center justify-center bg-gradient-to-br from-yellow-300 via-chocolate-400 to-white shadow-lg border-4 border-gray-500">
            <span className="text-2xl md:text-3xl font-bold text-gray-900 transition-all duration-700">
              {circleWords[circleIndex]}
            </span>
            <div className="absolute inset-0 rounded-full border-4 border-white opacity-30 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
