// client/src/pages/NotFound.jsx

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-7xl font-extrabold text-indigo-600">404</h1>
      <p className="text-2xl mt-4 font-semibold text-gray-700">Page Not Found</p>
      <p className="mt-2 text-gray-600 text-center max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <Link to="/" className="mt-6 inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition duration-300">
        Go Back Home
      </Link>
    </motion.div>
  );
};

export default NotFound;
