import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import { FaSearch, FaTimes } from "react-icons/fa";

const categories = [
  "Crochet Dress",
  "Crochet Bag",
  "Crochet Hat",
  "Crochet Scarf",
  "Crochet Toys",
  "Crochet Blanket",
  "Crochet Home Decor",
  "Crochet People",
  "Crochet Portrait",
  "Crochet Colorful",
  "Crochet Modern",
  "Crochet Vintage",
];

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const searchRef = useRef(null);

  const fetchVideos = async (queryTerm = "crochet", pageNumber = 1) => {
    try {
      if (pageNumber === 1) setLoading(true);

      const response = await axios.get(
        `https://api.pexels.com/videos/search?query=${queryTerm}&per_page=12&page=${pageNumber}`,
        {
          headers: { Authorization: import.meta.env.VITE_PEXELS_API_KEY },
        }
      );

      const videoList = response.data.videos.map((video) => ({
        id: video.id,
        title: video.user?.name || "Crochet Video",
        url: video.url,
        thumbnail: video.image,
        videoFile: video.video_files[0]?.link || "",
      }));

      if (videoList.length < 12) setHasMore(false);

      if (pageNumber === 1) {
        setVideos(videoList);
        setFilteredVideos(videoList);
      } else {
        setVideos((prev) => [...prev, ...videoList]);
        setFilteredVideos((prev) => [...prev, ...videoList]);
      }
    } catch (err) {
      console.error("Error fetching videos:", err.message);
      setError("Failed to fetch videos.");
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos(search || "crochet", 1);
  }, []);

  useEffect(() => {
    if (!search) setFilteredVideos(videos);
    else {
      const filtered = videos.filter((video) =>
        video.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredVideos(filtered);
    }
  }, [search, videos]);

  const handleSuggestionClick = (category) => {
    setSearch(category);
    setShowSuggestions(false);
    setPage(1);
    setHasMore(true);
    fetchVideos(category, 1);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
      !loading &&
      hasMore
    ) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchVideos(search || "crochet", nextPage);
    }
  }, [page, loading, hasMore, search]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const uniqueVideos = Array.from(
    new Map(filteredVideos.map((v) => [`${v.id}-${v.videoFile}`, v])).values()
  );

  if (loading && page === 1)
    return <p className="mt-8 ml-[calc(240px+20px)] text-left">Loading videos...</p>;
  if (error)
    return (
      <p className="mt-8 ml-[calc(240px+20px)] text-left text-red-500">{error}</p>
    );

  // Hover autoplay handlers
  const handleMouseEnter = (e) => {
    e.target.play();
    e.target.muted = true; // Mute for autoplay
  };
  const handleMouseLeave = (e) => {
    e.target.pause();
    e.target.currentTime = 0;
  };

  return (
    <div className="ml-[calc(240px+20px)] mr-[15px] w-[calc(100%-260px)]">
      <div className="max-w-full p-4 md:p-8">
        {/* Modern Search Bar */}
        <div className="relative mb-6" ref={searchRef}>
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search videos or categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
          />
          {search && (
            <FaTimes
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer hover:text-red-500"
              onClick={() => setSearch("")}
            />
          )}
          {showSuggestions && (
            <div className="absolute z-10 w-50 bg-white border border-gray-200 rounded-2xl mt-1 shadow-lg max-h-40 overflow-y-auto text-sm">
              {categories
                .filter((c) =>
                  search ? c.toLowerCase().includes(search.toLowerCase()) : true
                )
                .map((c, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleSuggestionClick(c)}
                    className="px-3 py-1 hover:bg-blue-100 cursor-pointer transition"
                  >
                    {c}
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {uniqueVideos.map((video, index) => (
            <div
              key={`${video.id}-${index}`}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <video
                src={video.videoFile}
                poster={video.thumbnail}
                controls
                preload="metadata"
                className="w-full h-56 object-cover rounded-t-xl"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
              <div className="p-3 bg-white">
                <h3 className="text-sm font-semibold text-gray-800 truncate">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {loading && page > 1 && (
          <p className="text-center mt-4">Loading more videos...</p>
        )}
        {!hasMore && (
          <p className="text-center mt-4 text-gray-500">No more videos to load.</p>
        )}
      </div>
    </div>
  );
};

export default Videos;
