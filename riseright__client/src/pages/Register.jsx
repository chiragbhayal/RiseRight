// client/src/pages/Register.jsx

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { register } from "../services/authService";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await register(form);
      toast.success("Registration successful!");
      localStorage.setItem("token", res.token);
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-pink-100 to-indigo-100 px-4">
      <motion.div
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 hover:underline font-medium">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
