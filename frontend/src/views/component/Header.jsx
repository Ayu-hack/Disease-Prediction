import React, { useState } from 'react';
import './Header.css';
import { assets } from '../../assets/assets';
export const Header = () =>{
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
      <header className="navbar">
        <div className="navbar-logo">
          <img src={assets.deps} alt="DEPS" className='logo'/>
        </div>
        <nav className="navbar-head">
        <button className="navbar-toggle" onClick={toggleNav}>
          ☰
        </button>
        
          <ul className={`navbar-links ${isOpen ? 'show' : ''}`}>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
  );
};