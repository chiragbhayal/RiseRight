import React from 'react';

const Card = ({ title, description, icon, children }) => {
  return (
    <div className="bg-white shadow-md hover:shadow-lg rounded-2xl p-6 transition duration-300 ease-in-out">
      <div className="flex items-center mb-4">
        {icon && <div className="text-3xl text-blue-600 mr-3">{icon}</div>}
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      {children}
    </div>
  );
};

export default Card;
