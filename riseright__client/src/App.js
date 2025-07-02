// 📁 client/src/App.js
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import GrowthAnalysis from "./pages/GrowthAnalysis";
import PredictFuture from "./pages/PredictFuture";
import BusinessDomain from "./pages/BusinessDomain";
import LearningResources from "./pages/LearningResources";
import FutureTrends from "./pages/FutureTrends";
import StartupSlip from "./pages/StartupSlip";
import Funding from "./pages/Funding";
import StartupLocation from "./pages/StartupLocation";
import FutureDemand from "./pages/FutureDemand";
import Hire from "./pages/Hire";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/growth-analysis" element={<GrowthAnalysis />} />
          <Route path="/predict-future" element={<PredictFuture />} />
          <Route path="/business-domain" element={<BusinessDomain />} />
          <Route path="/learning-resources" element={<LearningResources />} />
          <Route path="/future-trends" element={<FutureTrends />} />
          <Route path="/startup-slip" element={<StartupSlip />} />
          <Route path="/funding" element={<Funding />} />
          <Route path="/startup-location" element={<StartupLocation />} />
          <Route path="/future-demand" element={<FutureDemand />} />
          <Route path="/hire" element={<Hire />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
