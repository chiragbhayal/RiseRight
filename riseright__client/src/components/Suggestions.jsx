// client/src/components/Suggestions.jsx

import { Lightbulb, ChevronRightCircle } from 'lucide-react';

const Suggestions = ({ suggestions = [] }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 max-w-3xl mx-auto mt-6 border border-gray-200 dark:border-gray-700 transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <Lightbulb className="text-yellow-500 dark:text-yellow-400 w-6 h-6 animate-pulse" />
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          Smart Suggestions for Growth 🚀
        </h2>
      </div>

      {suggestions.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          No suggestions available at the moment. Please run a business analysis.
        </p>
      ) : (
        <ul className="space-y-3 mt-3">
          {suggestions.map((tip, index) => (
            <li key={index} className="flex items-start text-sm text-gray-700 dark:text-gray-200">
              <ChevronRightCircle className="w-4 h-4 text-blue-500 mt-1 mr-2" />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Suggestions;
