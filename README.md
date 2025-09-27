# Customer Support Zone - React Concepts

## What is JSX, and why is it used?

JSX stands for JavaScript XML. Basically, JSX allows us to write HTML-like code inside JavaScript. We use it in React because it makes our code much more readable and maintainable.

```jsx
// JSX example
const Welcome = () => {
  return (
    <div>
      <h1>Hello There!</h1>
      <p>Welcome to our support zone</p>
    </div>
  );
};
```

The main benefit of using JSX is that we can easily visualize the HTML structure while also using the power of JavaScript.

## What is the difference between State and Props?

**State** is the component's own data that can change over time. **Props** are data passed from a parent component to a child component.

```jsx
// Props example - data passed from parent to child
function Parent() {
  return <Child name="Omar" age={25} />;
}

function Child({ name, age }) {
  return <p>My name is {name}, age {age}</p>;
}

// State example - component's own changeable data
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

Remember - Props are read-only (cannot be changed), but State can be changed.

## What is the useState hook, and how does it work?

The useState hook helps us manage state in functional components. It returns two things - the current state value and a setter function.

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
        placeholder="Enter ticket title"
      />
      <button onClick={handleSubmit}>Submit</button>
      {isSubmitted && <p>Ticket successfully submitted!</p>}
    </div>
  );
}
```

## How can you share state between components in React?

There are several ways to share state:

**1. Lifting State Up (Keep state in parent component):**

```jsx
// Shared state in parent component
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

**2. Using Context API:**

```jsx
// Create context
const TicketContext = createContext();

function App() {
  const [tickets, setTickets] = useState([]);
  
  return (
    <TicketContext.Provider value={{ tickets, setTickets }}>
      <Dashboard />
    </TicketContext.Provider>
  );
}

// Use context in component that needs it
function Dashboard() {
  const { tickets } = useContext(TicketContext);
  return <div>Total tickets: {tickets.length}</div>;
}
```

## How is event handling done in React?

Event handling in React is very simple. We pass event handler functions as JSX attributes.

```jsx
function SupportTicket() {
  const [status, setStatus] = useState('open');
  
  // Event handler functions
  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    console.log(`Ticket status changed to: ${newStatus}`);
  };
  
  const handleTicketClick = (event) => {
    event.preventDefault(); // Stop default behavior
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

**Remember:**
- Pass the event handler function, don't call it: `onClick={handleClick}` ✅ not `onClick={handleClick()}` ❌
- Use arrow functions to pass parameters: `onClick={() => handleClick(id)}`
- Event object is automatically passed as the first parameter

---

*These concepts are implemented in the Customer Support Zone project. Feel free to explore the code!*