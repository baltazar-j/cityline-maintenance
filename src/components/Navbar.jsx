// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa'; // Import phone icon
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get the current route

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">  
        <img src="/CLM-Nav2.svg" alt="Logo" />
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={handleMenuToggle}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
            Contact
          </Link>
        </li>
      </ul>

      <div className="phone-icon">
        <a href="tel:+16044997178">
          <FaPhoneAlt size={30} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
