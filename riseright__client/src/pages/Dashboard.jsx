import React from 'react';
import Card from '../components/Card';
import Chart from '../components/Chart';
import Map from '../components/Map';
import { FaChartLine, FaMapMarkerAlt, FaBolt } from 'react-icons/fa';

const Dashboard = () => {
  const growthData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 600 },
    { name: 'Mar', value: 800 },
    { name: 'Apr', value: 650 },
    { name: 'May', value: 900 },
  ];

  const mapMarkers = [
    {
      position: [28.6139, 77.2090],
      label: 'New Delhi',
      description: 'High growth startup hub',
    },
    {
      position: [12.9716, 77.5946],
      label: 'Bangalore',
      description: 'Tech capital of India',
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card title="Past Growth" description="Yearly trend" icon={<FaChartLine />} />
        <Card title="Current Demand" description="Live analytics" icon={<FaBolt />} />
        <Card title="Startup Regions" description="Key zones" icon={<FaMapMarkerAlt />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart data={growthData} title="Growth Over Time" />
        <Map center={[22.9734, 78.6569]} zoom={5} markers={mapMarkers} />
      </div>
    </div>
  );
};

export default Dashboard;
