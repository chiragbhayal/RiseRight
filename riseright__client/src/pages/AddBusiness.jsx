// client/src/pages/AddBusiness.jsx

import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { createBusiness } from "../services/businessService";

const AddBusiness = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    location: "",
    funding: "",
    description: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await AddBusiness(formData);
      toast.success("Business added successfully!");
      setFormData({
        name: "",
        category: "",
        location: "",
        funding: "",
        description: ""
      });
    } catch (error) {
      toast.error("Error adding business.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="max-w-3xl mx-auto p-6 sm:p-10 bg-white shadow-lg rounded-xl mt-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-indigo-600 mb-6">Add New Business</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Business Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            required
            value={formData.category}
            onChange={handleChange}
            placeholder="e.g., E-commerce, EdTech"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            required
            value={formData.location}
            onChange={handleChange}
            placeholder="City or Region"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Funding Amount (INR)</label>
          <input
            type="number"
            name="funding"
            required
            value={formData.funding}
            onChange={handleChange}
            placeholder="e.g., 100000"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Brief Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            placeholder="Tell us about your idea"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          disabled={loading}
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-200"
        >
          {loading ? "Submitting..." : "Add Business"}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default AddBusiness;
