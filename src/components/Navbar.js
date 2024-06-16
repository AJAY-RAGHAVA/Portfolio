import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>DONTHU SAI NAGA VENKATA AJAY RAGHAVA</h1><br />
        <h3>Software Engineer</h3>
      </div>
      <div className="navbar-right">
        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/portfolio">Projects</Link></li>
          <li><Link to="/achievements">Achievements</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
