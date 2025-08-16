// src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,  // comes from your .env file
  withCredentials: true,                  // needed if using cookies/auth
});

export default API;
