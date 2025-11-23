import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Dashboard } from './pages/Dashboard';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Leads } from './pages/Leads';
import { Navbar } from './components/Navbar/Navbar';
import { Invoices } from './pages/Invoices';

function App() {
  
  return (
    <>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-2 p-0'>
          <Sidebar />
        </div>
        <div className='col-md-10 p-0'>
              <Navbar />
              
              <Routes >
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/leads" element={<Leads />} />
                  <Route path="/invoices" element={<Invoices />} />
              </Routes>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
