export const API_URL = import.meta.env.PROD
  ? "https://www.scalebridgefas.com/api"
  : "http://localhost:5000/api";

export default API_URL;

