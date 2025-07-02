import React from 'react';
import Card from '../components/Card';
import { FaBook, FaLaptop, FaGlobe, FaTools } from 'react-icons/fa';

const resources = [
  {
    title: 'Books',
    description: 'Top-rated books on business strategy, startup growth, and leadership.',
    icon: <FaBook />,
  },
  {
    title: 'Online Courses',
    description: 'Learn AI, marketing, and business analytics from platforms like Coursera & Udemy.',
    icon: <FaLaptop />,
  },
  {
    title: 'Web Articles',
    description: 'Blogs, case studies, and whitepapers from industry leaders.',
    icon: <FaGlobe />,
  },
  {
    title: 'Tools & Templates',
    description: 'Business model canvas, pitch deck templates, and productivity tools.',
    icon: <FaTools />,
  },
];

const LearningResources = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Learning Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {resources.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default LearningResources;
