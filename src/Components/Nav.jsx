import React, { useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Logo</div>
      <button className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="navbar-toggle-icon"></span>
      </button>
      <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <Link className='ulli' to="/">
        <li className="navbar-menu-item">
          Home
        </li>
        </Link>
        <Link className='ulli' to="/About">
        <li className="navbar-menu-item">
          About
        </li>
        </Link>
        <Link className='ulli' to="/Profile">
        <li className="navbar-menu-item">
          Profile
        </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;