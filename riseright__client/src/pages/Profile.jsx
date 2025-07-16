// client/src/pages/Profile.jsx

import { useEffect, useState } from "react";
import { getCurrentUser, updateUser } from "../services/authService";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    role: "",
  });

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userData = await getCurrentUser();
        setProfile(userData);
      } catch (error) {
        toast.error("Failed to fetch profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    setSaving(true);
    try {
      await updateUser({ ...profile, password });
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Update failed.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="text-center mt-10">Loading profile...</div>;

  return (
    <motion.div
      className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md mt-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-indigo-600 mb-6">My Profile</h2>

      <div className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md mt-1 focus:outline-none focus:ring focus:border-indigo-400"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            disabled
            className="w-full px-4 py-2 border rounded-md mt-1 bg-gray-100 cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">Role</label>
          <input
            type="text"
            name="role"
            value={profile.role}
            onChange={handleChange}
            disabled
            className="w-full px-4 py-2 border rounded-md mt-1 bg-gray-100 cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">New Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md mt-1"
          />
        </div>

        <button
          onClick={handleUpdate}
          disabled={saving}
          className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
        >
          {saving ? "Updating..." : "Update Profile"}
        </button>
      </div>
    </motion.div>
  );
};

export default Profile;
