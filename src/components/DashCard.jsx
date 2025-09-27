import React from 'react';

const DashCard = ({ id, title, description, customer, priority, status, createdAt }) => {
  // Function to get priority color and text
  const getPriorityStyle = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return { bg: 'bg-red-100', text: 'text-red-600', label: 'HIGH PRIORITY' };
      case 'medium':
        return { bg: 'bg-yellow-100', text: 'text-yellow-600', label: 'MEDIUM PRIORITY' };
      case 'low':
        return { bg: 'bg-green-100', text: 'text-green-600', label: 'LOW PRIORITY' };
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-600', label: priority };
    }
  };

  // Function to get status style with dot
  const getStatusStyle = (status) => {
    switch (status.toLowerCase()) {
      case 'open':
        return { bg: 'bg-green-100', text: 'text-green-700', dotColor: 'bg-green-500' };
      case 'in-progress':
        return { bg: 'bg-yellow-100', text: 'text-yellow-700', dotColor: 'bg-yellow-500' };
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-700', dotColor: 'bg-gray-500' };
    }
  };

  const priorityStyle = getPriorityStyle(priority);
  const statusStyle = getStatusStyle(status);

  return (
    <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex justify-between items-start mb-3 md:mb-4">
        <h3 className="text-base md:text-lg font-semibold text-gray-900 leading-tight flex-1 pr-3">{title}</h3>
        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs md:text-sm font-medium ${statusStyle.bg} ${statusStyle.text} whitespace-nowrap`}>
          <div className={`w-2 h-2 rounded-full ${statusStyle.dotColor}`}></div>
          {status}
        </span>
      </div>
      
      <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">{description}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <span className="text-xs md:text-sm text-gray-500">#{id}</span>
          <span className={`px-2 py-1 rounded text-xs font-medium ${priorityStyle.bg} ${priorityStyle.text}`}>
            {priorityStyle.label}
          </span>
        </div>
        <div className="text-right">
          <div className="text-xs md:text-sm font-medium text-gray-900">{customer}</div>
          <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {createdAt}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashCard;