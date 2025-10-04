import React, { useState, useEffect } from "react";

const Banner = () => {
  const images = [
    "/images/image1.jpeg",
    "/images/image2.jpeg",
    "/images/image3.jpeg",
    "/images/image4.jpeg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-yellow-100 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-8 md:py-16">
        {/* Left side */}
        <div className="md:w-1/2 mb-8 md:mb-0 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Discover Handmade Crochet Products
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-700">
            Browse our collection or request your custom design. Half payment upfront, remaining on delivery. Free delivery for all orders!
          </p>
        </div>

        {/* Right side: Slideshow */}
        <div className="md:w-1/2 relative w-full h-64 md:h-72 flex justify-center items-center overflow-hidden rounded-lg shadow-lg">
          <img
            src={images[currentImageIndex]}
            alt="Slide"
            className="w-full h-full object-cover transition-opacity duration-1000"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
