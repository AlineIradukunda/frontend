import React, { useState } from "react";
import { FaPlay } from "react-icons/fa"; // Play icon

const VideoCard = ({ video }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Video Card */}
      <div
        className="relative border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer group"
        onClick={() => setIsOpen(true)}
      >
        <video
          src={video.videoFile}
          poster={video.thumbnail}
          muted
          loop
          playsInline
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Play Icon Overlay */}
        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-black bg-opacity-50 p-4 rounded-full">
            <FaPlay className="text-white text-2xl" />
          </div>
        </div>

        {/* Title */}
        <div className="p-4 bg-white">
          <h4 className="font-semibold text-gray-800 truncate">{video.title}</h4>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-lg max-w-4xl w-full relative shadow-xl">
            <button
              className="absolute top-3 right-3 text-black text-2xl font-bold hover:text-gray-600 transition"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
            <video
              src={video.videoFile}
              controls
              autoPlay
              className="w-full h-auto rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{video.title}</h3>
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                Watch on Pexels
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoCard;
