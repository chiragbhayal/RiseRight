// client/src/components/AnalysisReport.jsx

import { BarChart2, TrendingUp, AlertTriangle } from 'lucide-react';

const AnalysisReport = ({ report }) => {
  if (!report) {
    return (
      <div className="text-center text-gray-500 dark:text-gray-400">
        No analysis available.
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 max-w-3xl mx-auto border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-3 mb-4">
        <BarChart2 className="text-blue-600 dark:text-blue-400 w-6 h-6" />
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          Business Growth Analysis
        </h2>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          <TrendingUp className="inline w-4 h-4 mr-1 text-green-500" />
          Projected Growth Rate:{' '}
          <span className="font-semibold text-green-600 dark:text-green-400">
            {report.growthRate}%
          </span>
        </p>

        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
          Current Location Viability:{' '}
          <span
            className={`font-semibold ${
              report.viability === 'High'
                ? 'text-green-600'
                : report.viability === 'Medium'
                ? 'text-yellow-500'
                : 'text-red-500'
            }`}
          >
            {report.viability}
          </span>
        </p>

        {report.viability === 'Low' && report.alternativeLocation && (
          <p className="text-sm text-red-500 mt-2">
            <AlertTriangle className="inline w-4 h-4 mr-1" />
            Recommended Location: <strong>{report.alternativeLocation}</strong>
          </p>
        )}
      </div>

      <div className="mt-6">
        <h3 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
          AI Suggestions
        </h3>
        <ul className="list-disc pl-6 text-sm text-gray-700 dark:text-gray-300 space-y-1">
          {report.tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AnalysisReport;
