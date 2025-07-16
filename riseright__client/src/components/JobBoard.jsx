// client/src/components/JobBoard.jsx

import { Briefcase, MapPin } from 'lucide-react';

const JobBoard = ({ jobs = [] }) => {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-md rounded-xl p-6 mt-6 border border-gray-200 dark:border-gray-700 transition-all duration-300">
      <div className="flex items-center gap-2 mb-4">
        <Briefcase className="text-indigo-500 w-6 h-6" />
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          Talent Opportunities 🎓
        </h2>
      </div>

      {jobs.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          No relevant job listings found. Try refining your search.
        </p>
      ) : (
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {jobs.map((job, index) => (
            <li key={index} className="py-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md px-3 transition-all duration-200">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="text-md font-medium text-gray-900 dark:text-white">{job.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{job.organization}</p>
                </div>
                <div className="flex items-center gap-1 mt-2 md:mt-0">
                  <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">{job.location}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobBoard;
