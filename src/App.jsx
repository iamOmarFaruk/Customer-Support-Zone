
import Navbar from './components/Navbar';
import './App.css';
import './index.css';
import Status from './components/Status';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
      <Navbar />
      <main className='p-10'>
        <Status />
        <Dashboard />
      </main>
    </>
  );
}

export default App;
