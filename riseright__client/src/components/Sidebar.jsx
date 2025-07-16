// client/src/components/Sidebar.jsx

import { NavLink } from 'react-router-dom';
import {
  Home,
  Briefcase,
  BarChart2,
  FileText,
  User,
  LogOut,
} from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="h-screen w-64 bg-white border-r shadow-sm fixed top-0 left-0 z-40 hidden md:flex flex-col justify-between transition-all duration-300">
      {/* Logo */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-600 tracking-wide">RiseRight</h1>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 px-4 space-y-3">
        <NavItem to="/dashboard" icon={<Home />} label="Dashboard" />
        <NavItem to="/add-business" icon={<Briefcase />} label="Add Business" />
        <NavItem to="/analysis" icon={<BarChart2 />} label="Analysis" />
        <NavItem to="/resources" icon={<FileText />} label="Resources" />
        <NavItem to="/profile" icon={<User />} label="Profile" />
      </nav>

      {/* Footer */}
      <div className="px-4 py-4 border-t text-gray-500">
        <button className="flex items-center gap-2 hover:text-red-500 transition-colors duration-200">
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  );
};

const NavItem = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
        isActive
          ? 'bg-blue-100 text-blue-600 font-semibold'
          : 'text-gray-700 hover:bg-gray-100'
      }`
    }
  >
    {icon}
    <span>{label}</span>
  </NavLink>
);

export default Sidebar;
