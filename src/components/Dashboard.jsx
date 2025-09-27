import DashCard from './DashCard';

const Dashboard = ({ tickets, loading, selectedTicket, resolvedTickets, onSelectTicket, onCompleteTicket }) => {
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
        </div>

        {/* Task Status - 30% width */}
        <div className="lg:w-[30%]">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Task Status</h2>
          
          {/* Current Task */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            {selectedTicket ? (
              <>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{selectedTicket.title}</h3>
                <button 
                  onClick={onCompleteTicket}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg"
                >
                  Complete
                </button>
              </>
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