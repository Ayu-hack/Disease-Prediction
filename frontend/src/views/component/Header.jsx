import React, { useState } from 'react';
import './Header.css';
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
      <header className="navbar">
        <div className="navbar-logo">
          <a href="/">DISEPREDI</a>
        </div>
        <button className="navbar-toggle" onClick={toggleNav}>
          ☰
        </button>
        <nav className={`navbar-links ${isOpen ? 'show' : ''}`}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
  );
};