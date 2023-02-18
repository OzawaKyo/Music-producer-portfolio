import React, { useState } from 'react';
import './Navbar.css';
import './button.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <h1 className="nav-item">OZAWAKYO ©</h1>
      <div className={`nav-right ${isOpen ? 'show' : ''}`}>
        <h1 className="nav-item nav-right-item">Home</h1>
        <h1 className="nav-item nav-right-item">Projects</h1>
        <h1 className="nav-item nav-right-item">Music</h1>
        <button className="nav-item nav-right-item button-86">Contact</button>
      </div>
      <div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </nav>
  );
}
