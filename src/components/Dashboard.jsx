import DashCard from './DashCard';

const Dashboard = ({ tickets, loading, taskStatusTickets, resolvedTickets, onSelectTicket, onCompleteTicket }) => {
  // Show loading message while data is being fetched
  if (loading) {
    return (
      <section className="container mx-auto px-4 py-8">
        <p className="text-center text-gray-600">Loading tickets...</p>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Customer Tickets - 70% width */}
        <div className="lg:w-[70%]">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Customer Tickets</h2>
          {tickets.length > 0 ? (
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
                  onClick={() => onSelectTicket(ticket)}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 text-center">
              <div className="mb-4">
                <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No tickets available</h3>
              <p className="text-gray-500">All customer tickets have been processed. Great job!</p>
            </div>
          )}
        </div>

        {/* Task Status - 30% width */}
        <div className="lg:w-[30%]">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Task Status</h2>
          
          {/* Current Tasks */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            {taskStatusTickets.length > 0 ? (
              <div className="space-y-4">
                {taskStatusTickets.map(ticket => (
                  <div key={ticket.id} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{ticket.title}</h3>
                    <button 
                      onClick={() => onCompleteTicket(ticket.id)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg text-sm"
                    >
                      Complete
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">Select a ticket to add to Task Status</p>
            )}
          </div>

          {/* Resolved Tasks */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Resolved Tasks</h3>
            {resolvedTickets.length > 0 ? (
              <div className="space-y-2">
                {resolvedTickets.map(ticket => (
                  <div key={ticket.id} className="bg-blue-100 rounded-lg p-4">
                    <p className="text-gray-800 font-medium">{ticket.title}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="text-gray-600">No resolved tasks yet</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;