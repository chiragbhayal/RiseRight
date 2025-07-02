import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import GrowthAnalysis from '../pages/GrowthAnalysis';
import PredictFuture from '../pages/PredictFuture';
import BusinessDomain from '../pages/BusinessDomain';
import LearningResources from '../pages/LearningResources';
import FutureTrends from '../pages/FutureTrends';
import StartupSlip from '../pages/StartupSlip';
import Funding from '../pages/Funding';
import StartupLocation from '../pages/StartupLocation';
import FutureDemand from '../pages/FutureDemand';
import Hire from '../pages/Hire';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const AppRouter = () => {
  const isAuthenticated = !!localStorage.getItem('token'); // Basic auth check

  return (
    <Router>
      {isAuthenticated && <Navbar />}
      <div className="flex">
        {isAuthenticated && <Sidebar />}
        <div className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            {isAuthenticated ? (
              <>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/growth" element={<GrowthAnalysis />} />
                <Route path="/predict" element={<PredictFuture />} />
                <Route path="/domain" element={<BusinessDomain />} />
                <Route path="/resources" element={<LearningResources />} />
                <Route path="/trends" element={<FutureTrends />} />
                <Route path="/startup-slip" element={<StartupSlip />} />
                <Route path="/funding" element={<Funding />} />
                <Route path="/location" element={<StartupLocation />} />
                <Route path="/demand" element={<FutureDemand />} />
                <Route path="/hire" element={<Hire />} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/login" replace />} />
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;
