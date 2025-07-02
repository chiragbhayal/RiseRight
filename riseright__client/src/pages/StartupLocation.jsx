import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Map from '../components/Map';
import Card from '../components/Card';
import { FaMapMarkedAlt, FaGlobeAsia, FaChartArea } from 'react-icons/fa';

const StartupLocation = () => {
  const [locationStats, setLocationStats] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLocationData = async () => {
    try {
      const res = await axios.get('/api/location'); // backend endpoint
      setLocationStats(res.data); // expected: [{ region: 'Bangalore', score: 82 }, ...]
    } catch (error) {
      console.error('Failed to fetch location data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLocationData();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Startup Locations</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card
          title="Top Regions"
          description="See where startups are thriving based on performance scores."
          icon={<FaChartArea />}
        />
        <Card
          title="Global View"
          description="Map visualization of innovation hubs and growth potential."
          icon={<FaGlobeAsia />}
        />
        <Card
          title="Interactive Map"
          description="Zoom and click regions to explore specific startup trends."
          icon={<FaMapMarkedAlt />}
        />
      </div>

      {!loading ? (
        <Map data={locationStats} />
      ) : (
        <p className="text-gray-500">Loading map and location data...</p>
      )}
    </div>
  );
};

export default StartupLocation;
