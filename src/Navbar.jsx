import React, { useState } from 'react';
import './Navbar.css';
import './button.css';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <h1 className='nav-item'>OZAWAKYO ©</h1>
      <button className="burger-button" onClick={handleMenuClick}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={showMenu ? 'nav-right show' : 'nav-right'}>
        <h1 className='nav-item nav-right-item'>Home</h1>
        <h1 className='nav-item nav-right-item'>Projects</h1>
        <h1 className='nav-item nav-right-item'>Music</h1>
        <button className='nav-item nav-right-item button-86'>Contact</button>
      </div>
    </nav>
  );
}
