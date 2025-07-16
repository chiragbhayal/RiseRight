// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Change this to your backend URL
  withCredentials: true,               // Send cookies if using authentication
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Interceptors for global error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data?.message || error.message);
    return Promise.reject(error);
  }
);

export default api;
