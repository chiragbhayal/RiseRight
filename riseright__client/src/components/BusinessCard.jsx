// client/src/components/BusinessCard.jsx

import { Briefcase, MapPin, IndianRupee } from 'lucide-react';

const BusinessCard = ({ business }) => {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow hover:shadow-lg transition-all duration-300 p-6 max-w-md mx-auto">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {business.businessName}
      </h3>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
        <Briefcase className="inline-block w-4 h-4 mr-1" />
        {business.category}
      </p>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
        <MapPin className="inline-block w-4 h-4 mr-1" />
        {business.location}
      </p>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
        <IndianRupee className="inline-block w-4 h-4 mr-1" />
        {Number(business.funding).toLocaleString()} INR
      </p>

      <p className="text-gray-700 dark:text-gray-300 text-sm">
        {business.description?.length > 120
          ? business.description.substring(0, 120) + '...'
          : business.description}
      </p>

      <div className="mt-4">
        <button className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
          View Details →
        </button>
      </div>
    </div>
  );
};

export default BusinessCard;
