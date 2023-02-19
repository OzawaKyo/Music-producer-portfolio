import React, { useState } from 'react';
import './Navbar.css';
import './button.css';

export default function Navbar() {


  return (
        <nav>
            <h1 className='nav-item'>OZAWAKYO ©</h1>
            <div className='nav-right'>
                <h1 className='nav-item nav-right-item'><a href="#Home">Home</a></h1>
                <h1 className='nav-item nav-right-item'><a href="#Projects">Projects</a></h1>
                <h1 className='nav-item nav-right-item'><a href="#Music">Music</a></h1>
                <button className='nav-item nav-right-item button-86'><a href="#Contact">Contact</a></button>
            </div>
        </nav>
  );
}
