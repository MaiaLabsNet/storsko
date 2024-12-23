import React from 'react';

const IconTextRow = ({ icon, text }) => {
  return (
    <div className="flex items-center w-full p-4 border-b border-gray-300 dark-background">
      {/* Icon Section */}
      <div className="flex-shrink-0">
        <img src={icon} alt="icon" className="w-8 h-8" /> {/* Adjust size as needed */}
      </div>

      {/* Text Section */}
      <div className="ml-4 flex-grow">
        <p className="text-lg text-gray-800">{text}</p>
      </div>
    </div>
  );
};

export default IconTextRow;
