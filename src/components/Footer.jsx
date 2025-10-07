import React from "react";
import {
  FaTruck,
  FaGift,
  FaRegEnvelope,
  FaHeadset,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-10 border-t border-gray-300" style={{ fontFamily: "Times New Roman, serif" }}>
      {/* 🧵 Top link sections */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 px-6 pb-10 border-b border-gray-300">
        <div>
          <h3 className="font-semibold mb-3 uppercase tracking-wide">New In</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">Crochet Bags</li>
            <li className="hover:underline cursor-pointer">Crochet Dresses</li>
            <li className="hover:underline cursor-pointer">Crochet Accessories</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 uppercase tracking-wide">Collections</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Summer Crochet</li>
            <li className="hover:underline cursor-pointer">Winter Crochet</li>
            <li className="hover:underline cursor-pointer">Vintage Styles</li>
            <li className="hover:underline cursor-pointer">Modern Crochet</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 uppercase tracking-wide">For Home</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Blankets</li>
            <li className="hover:underline cursor-pointer">Pillows</li>
            <li className="hover:underline cursor-pointer">Decor Items</li>
            <li className="hover:underline cursor-pointer">Wall Art</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 uppercase tracking-wide">For You</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Scarves</li>
            <li className="hover:underline cursor-pointer">Hats</li>
            <li className="hover:underline cursor-pointer">Toys</li>
            <li className="hover:underline cursor-pointer">Custom Orders</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 uppercase tracking-wide">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Contact Us</li>
            <li className="hover:underline cursor-pointer">Delivery Info</li>
            <li className="hover:underline cursor-pointer">Return Policy</li>
            <li className="hover:underline cursor-pointer">FAQ</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 uppercase tracking-wide">About</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Our Story</li>
            <li className="hover:underline cursor-pointer">Craft Ethics</li>
            <li className="hover:underline cursor-pointer">Join Our Team</li>
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
      </div>

      {/* 🚚 Middle Icons Row */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center py-8 border-b border-gray-300 px-6 text-sm">
        <div className="flex flex-col items-center text-black">
          <FaTruck className="text-2xl mb-2" />
          <p>Free Delivery on Orders Over $50</p>
        </div>
        <div className="flex flex-col items-center text-black">
          <FaGift className="text-2xl mb-2" />
          <p>Beautiful Gift Packaging</p>
        </div>
        <div className="flex flex-col items-center text-black">
          <FaRegEnvelope className="text-2xl mb-2" />
          <p>Gift Cards Available</p>
        </div>
        <div className="flex flex-col items-center text-black">
          <FaHeadset className="text-2xl mb-2" />
          <p>Expert Support (Mon–Fri)</p>
        </div>
      </div>

      {/* 💌 Newsletter Section */}
      <div className="bg-gray-100 py-8 px-6 text-center border-b border-gray-300">
        <h3 className="text-lg font-semibold mb-2 text-black">Stay in the Crochet Loop</h3>
        <p className="text-sm text-black mb-4">
          Be the first to know about new crochet ideas, tutorials, and offers.
        </p>
        <form className="max-w-md mx-auto flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-gray-400 rounded-l-full focus:outline-none"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-r-full hover:bg-gray-800 transition"
          >
            Sign Up
          </button>
        </form>
      </div>

      {/* ⚫ Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-6 text-sm text-black">
        <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
          <span>© 2025 Crochet Dream</span>
          <span className="cursor-pointer hover:underline">Terms & Conditions</span>
          <span className="cursor-pointer hover:underline">Privacy Policy</span>
          <span className="cursor-pointer hover:underline">Accessibility</span>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 text-black">
          <FaFacebookF className="cursor-pointer hover:text-gray-600 transition" />
          <FaInstagram className="cursor-pointer hover:text-gray-600 transition" />
          <FaPinterestP className="cursor-pointer hover:text-gray-600 transition" />
          <FaTwitter className="cursor-pointer hover:text-gray-600 transition" />
          <FaYoutube className="cursor-pointer hover:text-gray-600 transition" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
