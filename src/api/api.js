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

// -------------------
// Fetch people-related images
// -------------------
export const fetchUniquePeopleImages = async (total = 30) => {
  if (!UNSPLASH_ACCESS_KEY) {
    console.warn("Unsplash Access Key is missing! Please add it to your .env file.");
    return [];
  }

  const categories = ["people", "portrait", "fashion", "friends", "lifestyle", "smile", "group", "outdoor"];
  const images = new Map();

  try {
    const fetchPromises = categories.map((cat) =>
      unsplashApi.get("/search/photos", {
        params: { query: cat, per_page: 10, orientation: "portrait" },
        headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` },
      })
    );

    const responses = await Promise.all(fetchPromises);

    responses.forEach((res) => {
      res.data.results.forEach((item) => {
        if (!images.has(item.id)) {
          images.set(item.id, {
            id: item.id,
            link: item.urls.small,
            title: item.alt_description || "People Image",
          });
        }
      });
    });

    return Array.from(images.values()).slice(0, total);
  } catch (error) {
    console.error("Unsplash API Error:", error.response?.data?.errors || error.message);
    return [];
  }
};

// -------------------
// Fetch crochet-related images
// -------------------
export const fetchCrochetImages = async (category = "crochet", total = 30) => {
  if (!UNSPLASH_ACCESS_KEY) {
    console.warn("Unsplash Access Key is missing! Please add it to your .env file.");
    return [];
  }

  try {
    const res = await unsplashApi.get("/search/photos", {
      params: {
        query: category,
        per_page: total,
        orientation: "portrait",
      },
      headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` },
    });

    return res.data.results.map((item) => ({
      id: item.id,
      link: item.urls.small,
      title: item.alt_description || category,
    }));
  } catch (error) {
    console.error("Unsplash API Error:", error.response?.data?.errors || error.message);
    return [];
  }
};
