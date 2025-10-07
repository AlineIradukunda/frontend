import React, { useState } from "react";
import { FaHeart, FaThumbtack, FaDownload } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [pinOpen, setPinOpen] = useState(false);

  const imageUrl = product.link || product.image || "https://via.placeholder.com/400x300";
  const title = product.title || product.name || product.alt_description || "Crochet Product";
  const downloadUrl = product.link || product.image || "#";

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    } else {
      setLikes(likes - 1);
      setLiked(false);
    }
  };

  const togglePinMenu = () => setPinOpen(!pinOpen);

  return (
    <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 relative group bg-white">
      {/* Image */}
      <div className="w-full aspect-[4/3] overflow-hidden rounded-t-lg">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Overlay Buttons */}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition duration-200 flex space-x-2">
        <a
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
          title="Download"
        >
          <FaDownload className="text-gray-600" />
        </a>
      </div>

      {/* Bottom Toolbar */}
      <div className="p-2 flex justify-between items-center text-sm">
        {/* Like button */}
        <button
          onClick={handleLike}
          className="flex items-center px-3 py-1 rounded transition text-sm hover:bg-gray-100"
        >
          <FaHeart className={`mr-2 transition-colors ${liked ? "text-red-500" : "text-gray-400"}`} />
          {likes}
        </button>

        {/* Pin button */}
        <div className="relative">
          <button
            onClick={togglePinMenu}
            className="flex items-center px-3 py-1 rounded transition text-sm hover:bg-gray-100"
          >
            <FaThumbtack className="mr-1 text-gray-600" />
            Pin
          </button>

          {pinOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20 text-sm">
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                This Pin was inspired by your recent activity
              </p>
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                See more like this
              </p>
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                See less like this
              </p>
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Download image
              </a>
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">
                Report Pin
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Title */}
      <p className="p-2 text-center font-semibold text-gray-700 line-clamp-2 text-sm" style={{ fontFamily: "Times New Roman, serif" }}>
        {title}
      </p>
    </div>
  );
};

export default ProductCard;
