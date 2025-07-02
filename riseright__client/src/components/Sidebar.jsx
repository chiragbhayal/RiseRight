import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Growth", path: "/growth-analysis" },
    { label: "Future", path: "/predict-future" },
    { label: "Funding", path: "/funding" },
    { label: "Location", path: "/startup-location" },
    { label: "Demand", path: "/future-demand" },
    { label: "Hire", path: "/hire" },
    { label: "Trends", path: "/future-trends" },
    { label: "Resources", path: "/learning-resources" },
    { label: "Startup Slip", path: "/startup-slip" },
  ];

  return (
    <div className="w-64 h-screen bg-gray-900 text-white fixed top-0 left-0 shadow-lg">
      <div className="p-5 text-2xl font-bold border-b border-gray-700">
        RiseRight
      </div>
      <ul className="mt-4 space-y-2 px-4">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`block py-2 px-3 rounded-md ${
                location.pathname === item.path
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-700"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;