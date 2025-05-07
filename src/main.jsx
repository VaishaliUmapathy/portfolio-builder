import React from 'react';
import ReactDOM from 'react-dom/client';
//import Navbar from './portfolio-ibm/Navabar';
//import { IconName } from "react-icons/fa6";
import { BrowserRouter } from 'react-router-dom';
import App from './pages/App';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <BrowserRouter basename="/portfolio-builder">

      <App />
      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>
);
