import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className='icon'>
        Travel.Io</div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="right">
      <h1><img src="assets/earth.svg" alt="img"/> | INR</h1> 
      <h1 className="signin">Sign in</h1>
      </div>
    </nav>
  );
}

export default Navbar;
