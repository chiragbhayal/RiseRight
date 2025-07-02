import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex items-center justify-between">
      <div className="text-2xl font-bold text-blue-600">
        <Link to="/">RiseRight</Link>
      </div>

      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/growth-analysis">Growth</Link></li>
        <li><Link to="/predict-future">Future</Link></li>
        <li><Link to="/funding">Funding</Link></li>
        <li><Link to="/hire">Hire</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li>
          <button
            onClick={handleLogout}
            className="text-red-500 hover:text-red-700 transition"
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;