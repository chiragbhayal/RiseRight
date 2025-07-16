// client/src/pages/BusinessDetail.jsx

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBusinessById } from "../services/businessService";
import { motion } from "framer-motion";
import MapView from "../components/MapView";
import Suggestions from "../components/Suggestions";
import AnalysisReport from "../components/AnalysisReport";
import toast from "react-hot-toast";

const BusinessDetail = () => {
  const { id } = useParams();
  const [business, setBusiness] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBusiness = async () => {
      try {
        const data = await getBusinessById(id);
        setBusiness(data);
      } catch (error) {
        toast.error("Failed to load business details.");
      } finally {
        setLoading(false);
      }
    };
    fetchBusiness();
  }, [id]);

  if (loading) return <div className="text-center mt-10 text-lg font-semibold">Loading business data...</div>;
  if (!business) return <div className="text-center mt-10 text-red-600">Business not found.</div>;

  return (
    <motion.div
      className="max-w-5xl mx-auto p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">{business.name}</h1>
      <p className="text-gray-600 mb-2"><strong>Category:</strong> {business.category}</p>
      <p className="text-gray-600 mb-2"><strong>Location:</strong> {business.location}</p>
      <p className="text-gray-600 mb-2"><strong>Funding:</strong> ₹{business.funding?.toLocaleString()}</p>
      <p className="text-gray-700 mt-4"><strong>Description:</strong> {business.description}</p>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-indigo-600 mb-2">Growth Analysis Report</h2>
        <AnalysisReport businessId={business._id} />
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-indigo-600 mb-2">Suggestions for Growth</h2>
        <Suggestions businessId={business._id} />
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-indigo-600 mb-2">Business Location on Map</h2>
        <MapView location={business.location} />
      </div>
    </motion.div>
  );
};

export default BusinessDetail;
