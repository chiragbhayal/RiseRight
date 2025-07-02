import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from '../components/Chart';
import Card from '../components/Card';
import { FaSearchDollar, FaChartLine, FaRobot } from 'react-icons/fa';

const FutureDemand = () => {
  const [demandData, setDemandData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDemandPrediction = async () => {
    try {
      const res = await axios.get('/api/ml/demand'); // your backend ML endpoint
      setDemandData(res.data); // Example: [{ name: "EdTech", value: 92 }, { name: "Health AI", value: 84 }]
    } catch (err) {
      console.error("Error fetching demand data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDemandPrediction();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Future Demand Forecast</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card
          title="ML Predictions"
          description="Forecasted market sectors based on trends and historical patterns."
          icon={<FaRobot />}
        />
        <Card
          title="Business Opportunities"
          description="Identify high-growth segments before they peak."
          icon={<FaChartLine />}
        />
        <Card
          title="Smart Investment"
          description="Get data-driven insight to guide product and funding focus."
          icon={<FaSearchDollar />}
        />
      </div>

      {!loading && demandData.length > 0 ? (
        <Chart data={demandData} title="Sector-wise Future Demand (Forecasted)" />
      ) : (
        <p className="text-gray-500">Loading demand forecasts...</p>
      )}
    </div>
  );
};

export default FutureDemand;
