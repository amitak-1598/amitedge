import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import '../Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">AmitEdge</Link>

        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/courses" className="nav-link">Courses</Link></li>
          <li><Link to="/results" className="nav-link">Results</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
          <li><Link to="/join" className="nav-cta">Join Now</Link></li>
        </ul>

        <div className="navbar-contact">
          <span id='icon-1'><FaPhoneAlt className="icon" /> +91 98765 43210</span>
          <span><FaEnvelope className="icon" /> support@amitedge.com</span>
        </div>

        <button className="menu-btn" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
