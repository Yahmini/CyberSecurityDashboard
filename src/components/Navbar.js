import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/map">Cyber Crime Map</Link></li>
        <li><Link to="/chatbot">Security Chatbot</Link></li>
        <li><Link to="/quiz">Quiz</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;