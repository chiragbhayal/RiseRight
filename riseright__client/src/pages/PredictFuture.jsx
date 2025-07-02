import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from '../components/Chart';
import Card from '../components/Card';
import { FaRobot, FaSpinner } from 'react-icons/fa';

const PredictFuture = () => {
  const [predictionData, setPredictionData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPrediction = async () => {
    try {
      const response = await axios.get('/api/ml/predict'); // make sure your server has this endpoint
      setPredictionData(response.data); // should be an array of { name, value }
    } catch (error) {
      console.error('Error fetching predictions:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrediction();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">AI-Based Future Prediction</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card
          title="Predictive Model"
          description="AI/ML model forecasts future growth using historical trends and market behavior."
          icon={<FaRobot />}
        />
        <Card
          title="Use Case"
          description="Identify upcoming opportunities and make data-driven decisions."
        />
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-64">
          <FaSpinner className="animate-spin text-blue-600 text-4xl" />
        </div>
      ) : (
        <Chart data={predictionData} title="Predicted Growth (Next 12 Months)" />
      )}
    </div>
  );
};

export default PredictFuture;
