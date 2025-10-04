// src/components/VideoCard.jsx
import React from "react";

const VideoCard = ({ video }) => {
  return (
    <div className="border rounded p-2 shadow hover:shadow-lg transition">
      <iframe
        src={video.url}
        title={video.title}
        className="w-full h-48 rounded"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h4 className="mt-2 font-semibold">{video.title}</h4>
    </div>
  );
};

export default VideoCard;
