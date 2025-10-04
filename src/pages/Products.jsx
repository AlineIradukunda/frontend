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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchRef = useRef(null);

  // Fetch products from backend + Unsplash
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const backendRes = await api.get("products/");
        const backendProducts = backendRes.data;

        // Fetch Unsplash images
        const unsplashResults = await Promise.all(
          categories.map((c) => fetchCrochetImages(c.toLowerCase(), 10))
        );

        const unsplashImages = unsplashResults
          .flat()
          .filter(
            (item, index, self) => index === self.findIndex((t) => t.id === item.id)
          );

        // Merge Unsplash + backend
        const allProducts = [...unsplashImages, ...backendProducts];
        setProducts(allProducts);
        setFilteredProducts(allProducts);
      } catch (err) {
        console.error("Error fetching products:", err.message);
        setError("Failed to fetch products. Some images may not load.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products
  useEffect(() => {
    if (!search) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        (product.name || product.title)?.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [search, products]);

  // Handle category click
  const handleSuggestionClick = (category) => {
    setSearch(category);
    setShowSuggestions(false);
  };

  // Close suggestions if click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (loading) return <p className="mt-8 ml-10 text-left">Loading products...</p>;
  if (error) return <p className="mt-8 ml-10 text-left text-red-500">{error}</p>;

  return (
    <div className="w-full ml-10 mr-[15px]">
      <div className="max-w-full p-4 md:p-8">
        {/* Search Bar */}
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

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id || product.link || index} // use link for Unsplash images
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
