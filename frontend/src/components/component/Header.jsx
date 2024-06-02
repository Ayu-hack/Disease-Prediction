import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <style jsx>{`
        /* Basic reset */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: Arial, sans-serif;
        }

        /* Navbar styling */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #008080 ;
          padding: 20px 20px;
          color: white;
        }

        .navbar-logo a {
          color: white;
          text-decoration: none;
          font-size: .7rem;
          font-weight: bold;
        }

        .navbar-links ul {
          list-style: none;
          display: flex;
          gap: 15px;
        }

        .navbar-links a {
          color: white;
          text-decoration: none;
          padding: 5px 10px;
          transition: background-color 0.3s;
        }

        .navbar-links a:hover {
         text-shadow: 2px 1px  10px #66b2b2;
         font-size: 1.009rem;
        }

        

        .navbar-cta .cta-button:hover {
          background-color: #f39c12;
        }

        /* Toggle button for mobile view */
        .navbar-toggle {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 24px;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .navbar-toggle {
            display: block;
          }

          .navbar-links ul {
            flex-direction: column;
            align-items: flex-start;
            display: none;
          }

          .navbar-links ul.show {
            display: flex;
            font-family: Arial, sans-serif;
          }

          .navbar {
            flex-direction: column;
            align-items: flex-start;
          }
          
        }
      `}</style>
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
    </>
  );
};

export {Header};
