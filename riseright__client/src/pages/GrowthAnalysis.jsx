import React from 'react';
import Chart from '../components/Chart';
import Card from '../components/Card';
import { FaChartBar } from 'react-icons/fa';

const GrowthAnalysis = () => {
  const historicalGrowthData = [
    { name: '2019', value: 300 },
    { name: '2020', value: 450 },
    { name: '2021', value: 700 },
    { name: '2022', value: 850 },
    { name: '2023', value: 950 },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Growth Analysis</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card
          title="Past Performance"
          description="See how your business performed over recent years based on data analysis."
          icon={<FaChartBar />}
        />
        <Card
          title="Growth Insights"
          description="Compare different time periods to identify key opportunities and risks."
        />
      </div>

      <Chart data={historicalGrowthData} title="Yearly Growth Overview" />
    </div>
  );
};

export default GrowthAnalysis;
