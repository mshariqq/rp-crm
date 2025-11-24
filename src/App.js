import './App.css';
import { Routes, Route } from "react-router-dom";
import { Dashboard } from './pages/Dashboard';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Leads } from './pages/Leads';
import { Navbar } from './components/Navbar/Navbar';
import { Invoices } from './pages/Invoices';
import Protected from './components/Protected';
import { useContext } from 'react';
import { AppContext } from './AppProvider';
import { Login } from './pages/Login';
import { Settings } from './pages/Settings';

function App() {
  const {user, theme} = useContext(AppContext);
  return (
    <>
    <div className='container-fluid'>
      <div className={`row ${!user ? 'justify-content-center' : ''} `}>

        { !user ? null : (
          <div className={`col-md-2 p-0` }>
            <Sidebar />
          </div>
          )
        }

        <div className={` ${!user ? 'col-md-3' : 'col-md-10'} p-0`}>
              {!user ? null : (<Navbar />)}
              
              <Routes >
                  <Route element={<Protected/>}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/leads" element={<Leads />} />
                    <Route path="/invoices" element={<Invoices />} />
                    <Route path="/settings" element={<Settings />} />
                  </Route>
                  <Route path='/*' element={<Login />} />
              </Routes>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
