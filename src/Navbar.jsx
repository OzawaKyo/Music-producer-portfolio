import React, { useState } from 'react';
import './Navbar.css';
import './button.css';

export default function Navbar() {


  return (
        <nav>
            <h1 className='nav-item'>OZAWAKYO ©</h1>
            <div className='nav-right'>
                <h1 className='nav-item nav-right-item'>Home</h1>
                <h1 className='nav-item nav-right-item'>Projects</h1>
                <h1 className='nav-item nav-right-item'>Music</h1>
                <button className='nav-item nav-right-item button-86'>Contact</button>
            </div>
        </nav>
  );
}
