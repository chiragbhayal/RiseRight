// client/src/pages/Dashboard.jsx

import React from "react";
import MainLayout from "../layout/MainLayout";
import AnalysisReport from "../components/AnalysisReport";
import Suggestions from "../components/Suggestions";
import JobBoard from "../components/JobBoard";
import Notification from "../components/Notification";

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Welcome Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Welcome to RiseRight Dashboard</h1>
            <p className="text-gray-500 mt-1">Track, analyze, and elevate your business.</p>
          </div>
        </div>

        {/* Key Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="col-span-1 xl:col-span-2">
            <AnalysisReport />
          </div>
          <div className="col-span-1">
            <Suggestions />
          </div>
        </div>

        {/* Job Board & Notifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <JobBoard />
          <Notification />
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
