import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import Chart from '../components/Chart';
import { FaHandHoldingUsd, FaChartPie, FaUsers } from 'react-icons/fa';

const Funding = () => {
  const [fundingData, setFundingData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFunding = async () => {
    try {
      const res = await axios.get('/api/funding'); // replace with your real API route
      setFundingData(res.data); // expected format: [{ name: 'Seed', value: 40 }, { name: 'Series A', value: 30 }, ...]
    } catch (err) {
      console.error('Error fetching funding data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFunding();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Funding & Investment Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card
          title="Investor Insights"
          description="Understand who is backing startups—VCs, angels, or corporations."
          icon={<FaUsers />}
        />
        <Card
          title="Funding Rounds"
          description="Visualize startup stages like Seed, Series A/B/C, and beyond."
          icon={<FaHandHoldingUsd />}
        />
        <Card
          title="Equity & Stock Info"
          description="Track how much ownership is retained and distributed."
          icon={<FaChartPie />}
        />
      </div>

      {!loading && fundingData.length > 0 ? (
        <Chart data={fundingData} title="Funding Distribution" />
      ) : (
        <p className="text-gray-500">Loading funding data...</p>
      )}
    </div>
  );
};

export default Funding;
