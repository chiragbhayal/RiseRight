import React from 'react';
import Card from '../components/Card';
import { FaExclamationTriangle, FaUserAltSlash, FaBalanceScale, FaMoneyBillWave } from 'react-icons/fa';

const failureReasons = [
  {
    title: 'No Market Need',
    description: 'Many startups fail because they build products that nobody wants.',
    icon: <FaExclamationTriangle />,
  },
  {
    title: 'Team Issues',
    description: 'Lack of team cohesion, skills, or poor hiring decisions can cause early failure.',
    icon: <FaUserAltSlash />,
  },
  {
    title: 'Poor Business Model',
    description: 'A weak or unsustainable revenue model leads to long-term failure.',
    icon: <FaBalanceScale />,
  },
  {
    title: 'Funding Problems',
    description: 'Running out of capital due to poor budgeting or investor misalignment.',
    icon: <FaMoneyBillWave />,
  },
];

const StartupSlip = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Startup Slip — Learn from Mistakes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {failureReasons.map((item, index) => (
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

export default StartupSlip;
