import React from 'react';
import Card from '../components/Card';
import { FaBriefcase, FaLaptopCode, FaHeartbeat, FaLeaf, FaShoppingCart } from 'react-icons/fa';

const businessSectors = [
  {
    title: 'Technology',
    description: 'Startups focused on AI, SaaS, and app development.',
    icon: <FaLaptopCode />,
  },
  {
    title: 'Healthcare',
    description: 'Businesses in biotech, telemedicine, or wellness.',
    icon: <FaHeartbeat />,
  },
  {
    title: 'E-commerce',
    description: 'Online marketplaces, retail platforms, and logistics.',
    icon: <FaShoppingCart />,
  },
  {
    title: 'Sustainability',
    description: 'Eco-friendly products, renewable energy, waste management.',
    icon: <FaLeaf />,
  },
  {
    title: 'Business Services',
    description: 'Consulting, HR, marketing, and enterprise support tools.',
    icon: <FaBriefcase />,
  },
];

const BusinessDomain = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Business Domains</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {businessSectors.map((sector, index) => (
          <Card
            key={index}
            title={sector.title}
            description={sector.description}
            icon={sector.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default BusinessDomain;
