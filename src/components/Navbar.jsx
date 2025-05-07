import React from 'react';
import {
  FaHome,FaEdit, FaUser, FaEnvelope, FaBell, FaUsers, FaCog, FaSignInAlt, FaUserPlus, FaSearch } from 'react-icons/fa';
import '../assets/socail.css';
import { useNavigate } from 'react-router-dom';
function Navbar() {
    const navigate = useNavigate();
  return (
    <div className='top-nav-section'>
      <nav className="top-nav">
        <div className="nav-left">
           
          <ul className='nav-menu'>
          <h3>Zocisl Zlink</h3>
            <li onClick={() => navigate('/posts')}><FaHome className="icon" /> </li>
            <li><FaEdit className="icon" /> </li>
            <li><FaUser className="icon" /></li>
            <li onClick={() => navigate('/messages')}><FaEnvelope className="icon" /> </li>
            <li><FaBell className="icon" /> </li>
            <li><FaUsers className="icon" /> </li>
            <li><FaCog className="icon" /></li>
          </ul>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button><FaSearch /></button>
        </div>
        <div className="auth-buttons">
            <button onClick={() => navigate('/login')}>
                <FaSignInAlt className="icon" /> Login
            </button>
            <button onClick={() => navigate('/signup')}>
                <FaUserPlus className="icon" /> Sign Up
            </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
