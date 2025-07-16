// client/src/pages/Home.jsx

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "../assets/hero-illustration.svg"; // Make sure this image exists

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6">
          Welcome to <span className="text-indigo-600">RiseRight</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Empowering your startup journey with intelligent business analysis, growth predictions,
          and tailored insights. Make smarter moves with AI on your side.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/register"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Get Started
          </Link>
          <Link
            to="/dashboard"
            className="border border-indigo-600 text-indigo-600 hover:bg-indigo-100 px-6 py-3 rounded-lg font-semibold transition"
          >
            Explore Dashboard
          </Link>
        </div>
      </motion.div>

      <motion.img
        src={heroImg}
        alt="Business Support Illustration"
        className="mt-12 w-full max-w-xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      />
    </div>
  );
};

export default Home;
