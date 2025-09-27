import React from 'react';
import DashCard from './DashCard';

const Dashboard = () => {
  // Sample ticket data based on your image
  const tickets = [
    {
      id: '1001',
      title: "Login Issues - Can't Access Account",
      description: "Customer is unable to log in to their account. They've tried resetting their password multiple times but still...",
      customer: 'John Smith',
      priority: 'high',
      status: 'Open',
      createdAt: '1/15/2024'
    },
    {
      id: '1002',
      title: 'Payment Failed - Card Declined',
      description: "Customer attempted to pay using Visa ending 1234 but the payment keeps failing despite sufficient balance.",
      customer: 'Sarah Johnson',
      priority: 'high',
      status: 'Open',
      createdAt: '1/16/2024'
    },
    {
      id: '1003',
      title: 'Unable to Download Invoice',
      description: "Customer cannot download their January invoice from the billing section. The download button is...",
      customer: 'Michael Brown',
      priority: 'medium',
      status: 'In-Progress',
      createdAt: '1/17/2024'
    },
    {
      id: '1004',
      title: 'Incorrect Billing Address',
      description: "Customer's billing address shows a different city. They updated it but it still shows the old one.",
      customer: 'Emily Davis',
      priority: 'low',
      status: 'Open',
      createdAt: '1/18/2024'
    },
    {
      id: '1005',
      title: 'App Crash on Launch',
      description: "Customer reports that the mobile app crashes immediately upon opening on Android 13.",
      customer: 'David Wilson',
      priority: 'high',
      status: 'Open',
      createdAt: '1/19/2024'
    },
    {
      id: '1006',
      title: 'Refund Not Processed',
      description: "Customer requested a refund two weeks ago but has not received the amount yet.",
      customer: 'Sophia Taylor',
      priority: 'medium',
      status: 'In-Progress',
      createdAt: '1/20/2024'
    },
    {
      id: '1007',
      title: 'Two-Factor Authentication Issue',
      description: "Customer is not receiving 2FA codes on their registered phone number.",
      customer: 'James Anderson',
      priority: 'high',
      status: 'Open',
      createdAt: '1/21/2024'
    },
    {
      id: '1008',
      title: 'Unable to Update Profile Picture',
      description: "Customer tries to upload a new profile picture but gets 'Upload failed' error.",
      customer: 'Olivia Martinez',
      priority: 'low',
      status: 'Open',
      createdAt: '1/22/2024'
    },
    {
      id: '1009',
      title: 'Subscription Auto-Renewal',
      description: "Customer wants to enable auto-renewal for their subscription but the toggle is disabled.",
      customer: 'Liam Thomas',
      priority: 'medium',
      status: 'In-Progress',
      createdAt: '1/17/2024'
    },
    {
      id: '1010',
      title: 'Missing Order Confirmation Email',
      description: "Customer placed an order but didn't receive a confirmation email even though payment succeeded.",
      customer: 'Isabella Garcia',
      priority: 'medium',
      status: 'Open',
      createdAt: '1/24/2024'
    }
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Customer Tickets - 70% width */}
        <div className="lg:w-[70%]">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Tickets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tickets.map((ticket) => (
              <DashCard
                key={ticket.id}
                id={ticket.id}
                title={ticket.title}
                description={ticket.description}
                customer={ticket.customer}
                priority={ticket.priority}
                status={ticket.status}
                createdAt={ticket.createdAt}
              />
            ))}
          </div>
        </div>

        {/* Task Status - 30% width */}
        <div className="lg:w-[30%]">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Task Status</h2>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold">Payment Failed - Card Declined</span>
              </div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg">
                Complete
              </button>
            </div>
            
            <div className="border-t pt-4">
              <h3 className="text-lg font-semibold mb-3">Resolved Task</h3>
              <div className="text-gray-600">
                Incorrect Billing Address
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;