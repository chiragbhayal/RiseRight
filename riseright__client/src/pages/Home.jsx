// 📁 client/src/pages/Home.jsx

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
        Welcome to RiseRight
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl mb-6">
        RiseRight is your AI-powered platform for startup success — analyzing past growth, predicting future trends, locating business opportunities, and identifying the best resources and students to scale your vision.
      </p>
      <div className="space-x-4">
        <Link to="/login">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            Login
          </button>
        </Link>
        <Link to="/dashboard">
          <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition">
            Explore Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
