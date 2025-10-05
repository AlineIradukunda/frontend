import React, { useEffect, useState, useRef } from "react";
import ProductCard from "../components/ProductCard";
import api, { fetchCrochetImages } from "../api/api";
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

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [unsplashPage, setUnsplashPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const searchRef = useRef(null);

  // ------------------------------
  // Fetch backend + Unsplash images
  // ------------------------------
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoading(true);

        // 1️⃣ Fetch backend products
        const backendRes = await api.get("products/");
        const backendProducts = backendRes.data.map((p) => ({
          id: p.id,
          title: p.name,
          image: p.image,
          source: "backend",
        }));

        // 2️⃣ Fetch Unsplash images (first batch)
        const unsplashResults = await Promise.all(
          categories.map((cat) => fetchCrochetImages(cat.toLowerCase(), 10))
        );

        const unsplashImages = unsplashResults
          .flat()
          .map((img) => ({
            id: img.id,
            title: img.title,
            image: img.link,
            source: "unsplash",
          }));

        const allProducts = [...unsplashImages,...backendProducts];
        setProducts(allProducts);
        setFilteredProducts(allProducts);
      } catch (err) {
        console.error("Error fetching products:", err.message);
        setError("Failed to fetch products. Some images may not load.");
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  // ------------------------------
  // Load more Unsplash images
  // ------------------------------
  const handleLoadMore = async () => {
    try {
      setLoadingMore(true);
      const nextPage = unsplashPage + 1;

      // Pick a random category each time for variety
      const randomCategory =
        categories[Math.floor(Math.random() * categories.length)];

      const newImages = await fetchCrochetImages(randomCategory, 20);

      const formatted = newImages.map((img) => ({
        id: `${img.id}-${nextPage}`,
        title: img.title,
        image: img.link,
        source: "unsplash",
      }));

      const updatedProducts = [...products, ...formatted];
      setProducts(updatedProducts);
      setFilteredProducts(updatedProducts);
      setUnsplashPage(nextPage);
    } catch (err) {
      console.error("Error loading more images:", err.message);
    } finally {
      setLoadingMore(false);
    }
  };

  // ------------------------------
  // Search Filter
  // ------------------------------
  useEffect(() => {
    if (!search) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.title?.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [search, products]);

  // ------------------------------
  // Category Suggestion Logic
  // ------------------------------
  const handleSuggestionClick = (category) => {
    setSearch(category);
    setShowSuggestions(false);
  };

  // ------------------------------
  // Close suggestions when clicking outside
  // ------------------------------
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ------------------------------
  // UI States
  // ------------------------------
  if (loading)
    return <p className="mt-8 ml-10 text-left">Loading products...</p>;
  if (error)
    return <p className="mt-8 ml-10 text-left text-red-500">{error}</p>;

  // ------------------------------
  // Main UI
  // ------------------------------
  return (
    <div className="w-full ml-20 mr-[15px]">
      <div className="max-w-full p-4 md:p-8">
        {/* 🔍 Search Bar */}
        <div className="relative mb-6" ref={searchRef}>
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search products or categories..."
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

        {/* 🧶 Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={`${product.source}-${product.id || index}`}
              product={product}
            />
          ))}
        </div>

        {/* 🔁 Load More Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            disabled={loadingMore}
            className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 disabled:opacity-50 transition"
          >
            {loadingMore ? "Loading..." : "Load More Images"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
