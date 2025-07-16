// client/src/pages/Login.jsx

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { login } from "../services/authService";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await login(form);
      toast.success("Logged in successfully!");
      localStorage.setItem("token", res.token);
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-100 to-blue-100 px-4">
      <motion.div
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">Login to RiseRight</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-600 hover:underline font-medium">
            Register
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
