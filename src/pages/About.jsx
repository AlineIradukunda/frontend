import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  const location = useLocation();

  // Page title based on route
  const getTitle = () => {
    if (location.pathname.includes("Our Story")) return "Our Story";
    if (location.pathname.includes("Team")) return "Our Team";
    if (location.pathname.includes("Careers")) return "Careers";
    return "About Crochet Dream";
  };

  return (
    <div className="ml-16 bg-white min-h-screen">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-8 md:p-16">
        {/* Title */}
        <h2
          className="text-4xl font-bold mb-6 text-center text-gray-800"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          {getTitle()}
        </h2>

        {/* Description */}
        <p
          className="text-base md:text-lg text-gray-700 mb-4 text-center max-w-3xl mx-auto"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          <b>Crochet Dream</b> is a creative platform built to bring the art of crochet closer to everyone.
          It allows users to explore, learn, and order beautifully handcrafted crochet items while promoting
          creativity, patience, and craftsmanship. The website not only showcases elegant crochet products
          but also provides helpful tutorials for beginners and professionals alike.
        </p>

        <p
          className="text-base md:text-lg text-gray-700 text-center max-w-3xl mx-auto mb-10"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          Whether you're looking for a cozy blanket, a handmade bag, or a personal crochet design,
          Crochet Dream connects passion with creativity — where every stitch tells a story.
        </p>

        {/* Developer Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12 bg-gray-50 p-8 rounded-2xl shadow-md">
          {/* Developer Image with Animation */}
          <motion.img
            src="/images/aline.jpg" // ← Replace with your actual image path
            alt="Website Developer"
            className="w-48 h-48 object-cover rounded-full shadow-lg border border-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />

          {/* Developer Info */}
          <motion.div
            className="max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h3
              className="text-2xl font-bold mb-3 text-gray-900"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Meet the Developer – Iradukunda Aline
            </h3>
            <p
              className="text-base md:text-lg text-gray-700 mb-3"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Hello! I’m <b>Iradukunda Aline</b>, the developer behind Crochet Dream. As a passionate web developer
              and creative thinker, I wanted to combine technology with artistry — and crochet became my
              inspiration. I was motivated by seeing how crochet, a timeless craft, can bring joy and creativity
              into people’s lives.
            </p>
            <p
              className="text-base md:text-lg text-gray-700"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              My motivation to build this website came from the idea of helping others — especially young
              creators — to share their handmade work with the world in a modern, digital, and civilized way.
              Through <b>Crochet Dream</b>, I aim to blend tradition with innovation, empowering creativity in
              every thread.
            </p>
          </motion.div>
        </div>

        {/* Closing Message */}
        <p
          className="text-center text-gray-800 mt-12 text-lg italic"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          “Crochet Dream — Where technology meets creativity, and every loop connects hearts.”
        </p>
      </div>
    </div>
  );
};

export default About;
