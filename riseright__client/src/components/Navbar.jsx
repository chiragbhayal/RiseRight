// client/src/components/Navbar.jsx

import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
            RiseRight
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6">
            <Link
              to="/dashboard"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Dashboard
            </Link>
            <Link
              to="/add-business"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Add Business
            </Link>
            <Link
              to="/jobs"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Jobs
            </Link>
            <Link
              to="/profile"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Profile
            </Link>
          </nav>

          {/* Actions (e.g., Theme Toggle) */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link
              to="/login"
              className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
