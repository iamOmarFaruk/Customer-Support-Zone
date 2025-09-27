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

  // Function to get status style
  const getStatusStyle = (status) => {
    switch (status.toLowerCase()) {
      case 'open':
        return { bg: 'bg-green-500', text: 'text-white' };
      case 'in-progress':
        return { bg: 'bg-yellow-500', text: 'text-white' };
      default:
        return { bg: 'bg-gray-500', text: 'text-white' };
    }
  };

  const priorityStyle = getPriorityStyle(priority);
  const statusStyle = getStatusStyle(status);

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyle.bg} ${statusStyle.text}`}>
          {status}
        </span>
      </div>
      
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">#{id}</span>
          <span className={`px-2 py-1 rounded text-xs font-medium ${priorityStyle.bg} ${priorityStyle.text}`}>
            {priorityStyle.label}
          </span>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium text-gray-900">{customer}</div>
          <div className="text-xs text-gray-500">{createdAt}</div>
        </div>
      </div>
    </div>
  );
};

export default DashCard;