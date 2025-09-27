# Customer Support Zone - React Concepts

## What is JSX, and why is it used?

JSX mane holo JavaScript XML. Basically, JSX diye amra HTML er moto code likhte pari JavaScript er vitore. React e eta use kori karon eta code ke onek readable aar maintainable kore.

```jsx
// JSX example
const Welcome = () => {
  return (
    <div>
      <h1>Assalamu Alaikum!</h1>
      <p>Welcome to our support zone</p>
    </div>
  );
};
```

JSX use korar main benefit holo - amra HTML structure easily imagine korte pari aar JavaScript er power o use korte pari.

## What is the difference between State and Props?

**State** holo component er nijossho data jeta change hote pare. **Props** holo parent component theke child component e pathano data.

```jsx
// Props example - parent theke child e data pathano
function Parent() {
  return <Child name="Omar" age={25} />;
}

function Child({ name, age }) {
  return <p>My name is {name}, age {age}</p>;
}

// State example - component er nijossho changeable data
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}
```

Mone rakhben - Props read-only (change kora jay na), kintu State change kora jay.

## What is the useState hook, and how does it work?

useState hook diye amra functional component e state manage kori. Eta duita jinish return kore - current state value aar setter function.

```jsx
import { useState } from 'react';

function TicketForm() {
  const [ticketTitle, setTicketTitle] = useState(''); // initial value empty string
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = () => {
    if (ticketTitle.trim()) {
      setIsSubmitted(true);
      console.log('Ticket submitted:', ticketTitle);
    }
  };
  
  return (
    <div>
      <input 
        value={ticketTitle}
        onChange={(e) => setTicketTitle(e.target.value)}
        placeholder="Ticket title likhen"
      />
      <button onClick={handleSubmit}>Submit</button>
      {isSubmitted && <p>Ticket successfully submitted!</p>}
    </div>
  );
}
```

## How can you share state between components in React?

State share korar koyekta way ache:

**1. Lifting State Up (Parent component e state rakhba):**

```jsx
// Parent component e shared state
function TicketApp() {
  const [tickets, setTickets] = useState([]);
  
  return (
    <div>
      <TicketForm setTickets={setTickets} />
      <TicketList tickets={tickets} />
    </div>
  );
}

// Child components
function TicketForm({ setTickets }) {
  const addTicket = (newTicket) => {
    setTickets(prev => [...prev, newTicket]);
  };
  // ... rest of form logic
}

function TicketList({ tickets }) {
  return (
    <ul>
      {tickets.map(ticket => <li key={ticket.id}>{ticket.title}</li>)}
    </ul>
  );
}
```

**2. Context API use kore:**

```jsx
// Context create kora
const TicketContext = createContext();

function App() {
  const [tickets, setTickets] = useState([]);
  
  return (
    <TicketContext.Provider value={{ tickets, setTickets }}>
      <Dashboard />
    </TicketContext.Provider>
  );
}

// Jei component e dorkar context use kora
function Dashboard() {
  const { tickets } = useContext(TicketContext);
  return <div>Total tickets: {tickets.length}</div>;
}
```

## How is event handling done in React?

React e event handling khubi simple. Event handler function pass kori JSX attribute hisebe.

```jsx
function SupportTicket() {
  const [status, setStatus] = useState('open');
  
  // Event handler functions
  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    console.log(`Ticket status changed to: ${newStatus}`);
  };
  
  const handleTicketClick = (event) => {
    event.preventDefault(); // Default behavior stop kora
    alert('Ticket details loading...');
  };
  
  const handleInputChange = (event) => {
    console.log('User typed:', event.target.value);
  };
  
  return (
    <div>
      <input 
        onChange={handleInputChange}
        placeholder="Search tickets..."
      />
      
      <button onClick={() => handleStatusChange('resolved')}>
        Mark as Resolved
      </button>
      
      <a href="#" onClick={handleTicketClick}>
        View Ticket Details
      </a>
      
      <p>Current Status: {status}</p>
    </div>
  );
}
```

**Mone rakhben:**
- Event handler function pass koren, call koren na `onClick={handleClick}` ✅ not `onClick={handleClick()}` ❌
- Arrow function use korle parameter pass korte paren: `onClick={() => handleClick(id)}`
- Event object automatically pass hoy first parameter hisebe

---

*Customer Support Zone project e ei concepts gula implement kora ache. Code explore kore dekhte paren!*