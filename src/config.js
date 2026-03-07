// API configuration
export const API_URL = import.meta.env.PROD
  ? "https://your-backend-url.vercel.app/api" // Replace with your actual backend URL
  : "http://localhost:5000/api";

export default API_URL;
