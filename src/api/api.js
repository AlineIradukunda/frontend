import axios from "axios";

// -------------------
// Backend API instance
// -------------------
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000/api/";

const api = axios.create({
  baseURL: BACKEND_URL,
});

export default api;

// -------------------
// Unsplash API instance
// -------------------
const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const unsplashApi = axios.create({
  baseURL: "https://api.unsplash.com",
});

/**
 * Fetch crochet images from Unsplash
 * @param {string} query - Search term
 * @param {number} perPage - Number of images per request (max 30)
 */
export const fetchCrochetImages = async (query = "crochet", perPage = 10) => {
  if (!UNSPLASH_ACCESS_KEY) {
    console.warn("Unsplash Access Key is missing! Skipping Unsplash images.");
    return [];
  }

  const safePerPage = Math.min(perPage, 30);

  try {
    const response = await unsplashApi.get("/search/photos", {
      params: {
        query,
        per_page: safePerPage,
        orientation: "squarish",
      },
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    });

    return response.data.results.map((item) => ({
      id: item.id,
      link: item.urls.small,
      title: item.alt_description || "Crochet Image",
    }));
  } catch (error) {
    console.error(
      "Unsplash API Error:",
      error.response?.data?.errors || error.message
    );
    return [];
  }
};
