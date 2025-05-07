import React from 'react'
import { FaHouse,FaUser,FaCode,FaLaptopCode,FaEnvelope,FaCertificate } from "react-icons/fa6";
import './nav.css'
import Home  from './Home';
import Navbar from './Navabar';

function App() {
  return (
        <Router>
            <Routes>
                <Route path="/" element={<><NavBar/></>}></Route>
                <Route path="/contacts" element={<Contact/>}/>
                <Route path="/Home" element={<Messages/>} />
                <Route path="/About" element={<Login />} />
                <Route path="/skills" element={<Contact/>}/>
                <Route path="/projects" element={<Messages/>} />
                <Route path="/testimonal" element={<Login />} />
            </Routes>
        </Router>
  )
}

export default App