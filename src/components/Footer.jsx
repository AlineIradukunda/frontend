import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-yellow-50 w-full">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12 text-black">
        {/* Top section: About + Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-12">
          {/* About */}
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h2 className="text-lg font-bold mb-2">CrochetDream</h2>
            <p className="text-sm">
              Explore unique crochet products and creative handmade designs. Stay connected and discover more inspiration!
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex space-x-6 md:w-1/3 justify-center">
            <a href="#products" className="text-sm hover:text-gray-200 transition">Products</a>
            <a href="#about" className="text-sm hover:text-gray-200 transition">About</a>
            <a href="#contact" className="text-sm hover:text-gray-200 transition">Contact</a>
            <a href="#faq" className="text-sm hover:text-gray-200 transition">FAQ</a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 md:w-1/3 justify-end mt-4 md:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 pt-4 text-center text-sm">
          &copy; {new Date().getFullYear()} CrochetDream. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
