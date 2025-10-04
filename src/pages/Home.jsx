import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import VideoCard from "../components/VideoCard"; // create this component for videos
import api from "../api/api";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const productsRes = await api.get("products/");
      const videosRes = await api.get("videos/");
      setProducts(productsRes.data);
      setVideos(videosRes.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  if (loading) return <p className="ml-64 mt-8 text-center">Loading content...</p>;

  return (
    <div className="ml-16">
      <Banner />

      {/* Intro Section */}
      <section className="text-3xl font-bold mb-8 text-gray-800">
        <h2> Welcome to CrochetDream </h2>
        <p className="text-lg text-gray-700">
          At CrochetDream, we provide high-quality handmade crochet products for all ages. You can browse ready-made designs or request a custom product by sending us your picture. Half payment upfront, remaining on delivery. Explore our tutorials for free to learn crochet at your own pace!
        </p>
      </section>

      {/* Products Section */}
      <section className="mb-16">
        <h3 className="text-2xl font-semibold mb-4">Our Products</h3>
        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* Videos Section */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Tutorials</h3>
        {videos.length === 0 ? (
          <p>No videos available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
