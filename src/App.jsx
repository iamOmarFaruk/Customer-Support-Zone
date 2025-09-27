
import Navbar from './components/Navbar';
import './App.css';
import './index.css';
import Status from './components/Status';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main className='pt-20 p-10 flex flex-col gap-8'>
        <Status />
        <Dashboard />
      </main>
      <Footer />
    </>
  );
}

export default App;
