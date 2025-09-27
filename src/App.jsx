
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
  // State to track currently selected ticket for task status
  const [selectedTicket, setSelectedTicket] = useState(null);
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
    setSelectedTicket(ticket);
  };

  // Function to mark selected ticket as completed
  const completeSelectedTicket = () => {
    if (selectedTicket) {
      // Add to resolved tickets
      setResolvedTickets([...resolvedTickets, selectedTicket]);
      // Remove from tickets list
      setTickets(tickets.filter(ticket => ticket.id !== selectedTicket.id));
      // Clear selected ticket
      setSelectedTicket(null);
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
          selectedTicket={selectedTicket}
          resolvedTickets={resolvedTickets}
        />
        <Dashboard 
          tickets={tickets} 
          loading={loading}
          selectedTicket={selectedTicket}
          resolvedTickets={resolvedTickets}
          onSelectTicket={selectTicket}
          onCompleteTicket={completeSelectedTicket}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
