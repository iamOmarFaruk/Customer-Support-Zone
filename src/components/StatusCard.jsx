import React from 'react';

const StatusCard = ({ title, count, bgImage }) => {
  return (
    <div className={`relative ${bgImage} text-white p-8 rounded-xl shadow-lg overflow-hidden md:min-h-[250px] flex items-center justify-center`}>
      <div className="relative z-10 flex flex-col items-center">
        <span className="text-lg md:text-xl">{title}</span>
        <span className="text-5xl font-bold mt-2">{count}</span>
      </div>
    </div>
  );
};

export default StatusCard;