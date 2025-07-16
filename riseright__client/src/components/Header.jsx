// client/src/components/Header.jsx

import { Bell, Menu } from 'lucide-react';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Header = ({ toggleSidebar }) => {
  const [notifications] = useState(3); // Example notification count

  return (
    <header className="w-full h-16 bg-white border-b shadow-sm flex items-center justify-between px-6 sticky top-0 z-30">
      {/* Left Side: Sidebar Toggle (for mobile) */}
      <div className="flex items-center gap-3">
        <button onClick={toggleSidebar} className="md:hidden focus:outline-none">
          <Menu className="w-6 h-6 text-gray-600" />
        </button>
        <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
      </div>

      {/* Right Side: Theme Toggle + Notifications */}
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <div className="relative">
          <Bell className="w-6 h-6 text-gray-600" />
          {notifications > 0 && (
            <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
          )}
        </div>
        <img
          src="/assets/avatar.png" // Place your user avatar here
          alt="User Avatar"
          className="w-9 h-9 rounded-full border border-gray-300 object-cover"
        />
      </div>
    </header>
  );
};

export default Header;
