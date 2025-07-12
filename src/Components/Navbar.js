import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">AmitEdge</a>

      <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
  <li><Link to="/" className="nav-link">Home</Link></li>
  <li><Link to="/courses" className="nav-link">Courses</Link></li>
  <li><Link to="/results" className="nav-link">Results</Link></li>
  <li><Link to="/about" className="nav-link">About</Link></li>
  <li><Link to="/contact" className="nav-link">Contact</Link></li>
  <li><Link to="/join" className="nav-cta">Join Now</Link></li>
</ul>

        <button className="menu-btn" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
