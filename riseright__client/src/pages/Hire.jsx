import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import { FaUniversity, FaBrain, FaUserGraduate, FaClipboardCheck } from 'react-icons/fa';

const Hire = () => {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUniversities = async () => {
    try {
      const res = await axios.get('/api/hire'); // Fetch from backend
      setUniversities(res.data); // Example: [{ name: 'IIT Bombay', focus: 'AI/ML', students: 'Excellent', offers: 'Internship + PPO' }]
    } catch (error) {
      console.error('Error fetching hire data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUniversities();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Hire Talent from Top Universities</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card
          title="Universities"
          description="Preferred institutions with strong tech and business programs."
          icon={<FaUniversity />}
        />
        <Card
          title="Knowledge Focus"
          description="Looking for students with AI/ML, Business Analytics, Marketing, etc."
          icon={<FaBrain />}
        />
        <Card
          title="Student Type"
          description="We seek proactive, innovative, and entrepreneurial students."
          icon={<FaUserGraduate />}
        />
        <Card
          title="Offers Provided"
          description="Internships, full-time roles, mentorship programs, and more."
          icon={<FaClipboardCheck />}
        />
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-4">University Candidates</h2>
        {!loading ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left">University</th>
                  <th className="px-4 py-2 text-left">Focus Area</th>
                  <th className="px-4 py-2 text-left">Student Profile</th>
                  <th className="px-4 py-2 text-left">Offer Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {universities.map((u, i) => (
                  <tr key={i}>
                    <td className="px-4 py-2">{u.name}</td>
                    <td className="px-4 py-2">{u.focus}</td>
                    <td className="px-4 py-2">{u.students}</td>
                    <td className="px-4 py-2">{u.offers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500">Loading university data...</p>
        )}
      </div>
    </div>
  );
};

export default Hire;
