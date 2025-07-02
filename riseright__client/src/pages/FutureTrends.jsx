import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import Chart from '../components/Chart';
import { FaChartLine, FaLightbulb } from 'react-icons/fa';

const FutureTrends = () => {
  const [trendData, setTrendData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTrends = async () => {
    try {
      const res = await axios.get('/api/ml/trends');
      setTrendData(res.data); // expected format: [{ name: 'AI Tools', value: 78 }, ...]
    } catch (error) {
      console.error('Error fetching trends:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrends();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Emerging Business Trends</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card
          title="Trend Analysis"
          description="Insights from machine learning to help identify where the market is heading."
          icon={<FaChartLine />}
        />
        <Card
          title="Opportunities"
          description="Focus on trending sectors to stay ahead in business competition."
          icon={<FaLightbulb />}
        />
      </div>

      {!loading && trendData.length > 0 ? (
        <Chart data={trendData} title="Top Emerging Trends" />
      ) : (
        <p className="text-gray-500">Loading trends...</p>
      )}
    </div>
  );
};

export default FutureTrends;
