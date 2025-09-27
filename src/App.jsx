
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import './index.css';
import Status from './components/Status';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  // State to store all tickets data
  const [tickets, setTickets] = useState([]);
  // State to show loading message while fetching data
  const [loading, setLoading] = useState(true);
  // State to track list of selected tickets for task status
  const [taskStatusTickets, setTaskStatusTickets] = useState([]);
  // State to store resolved tickets
  const [resolvedTickets, setResolvedTickets] = useState([]);

  // Function to fetch tickets from JSON file
  const fetchTickets = async () => {
    try {
      // Fetch data from public folder
      const response = await fetch('/tickets.json');
      const ticketsData = await response.json();
      setTickets(ticketsData);
      setLoading(false);
    } catch (error) {
      console.log('Error fetching tickets:', error);
      setLoading(false);
    }
  };

  // Function to select a ticket for task status
  const selectTicket = (ticket) => {
    // Check if ticket is already in task status
    const isAlreadyInTaskStatus = taskStatusTickets.some(t => t.id === ticket.id);
    
    if (isAlreadyInTaskStatus) {
      alert('This ticket is already added to Task Status!');
      return;
    }
    
    // Add to task status list
    setTaskStatusTickets([...taskStatusTickets, ticket]);
  };

  // Function to mark a ticket as completed
  const completeTicket = (ticketId) => {
    // Find the ticket to complete
    const ticketToComplete = taskStatusTickets.find(ticket => ticket.id === ticketId);
    
    if (ticketToComplete) {
      // Add to resolved tickets
      setResolvedTickets([...resolvedTickets, ticketToComplete]);
      // Remove from task status list
      setTaskStatusTickets(taskStatusTickets.filter(ticket => ticket.id !== ticketId));
      // Remove from main tickets list
      setTickets(tickets.filter(ticket => ticket.id !== ticketId));
    }
  };

  // Fetch tickets when app first loads
  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <>
      <Navbar />
      <main className='pt-[100px] md:pt-40 p-5 md:p-10 flex flex-col gap-8'>
        <Status 
          taskStatusTickets={taskStatusTickets}
          resolvedTickets={resolvedTickets}
        />
        <Dashboard 
          tickets={tickets} 
          loading={loading}
          taskStatusTickets={taskStatusTickets}
          resolvedTickets={resolvedTickets}
          onSelectTicket={selectTicket}
          onCompleteTicket={completeTicket}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
