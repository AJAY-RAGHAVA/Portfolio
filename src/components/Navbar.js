import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const handleToggle = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>DONTHU SAI NAGA VENKATA AJAY RAGHAVA</h1><br />
        <h3>Software Engineer</h3>
      </div>
      <button id="navbar-toggle" className="navbar-toggle" onClick={handleToggle}>
        ☰
      </button>
      <div className={`navbar-right ${menuActive ? 'active' : ''}`}>
        <ul className="navbar-menu">
          <li><Link to="/" onClick={() => setMenuActive(false)}>Home</Link></li>
          <li><Link to="/skills" onClick={() => setMenuActive(false)}>Skills</Link></li>
          <li><Link to="/resume" onClick={() => setMenuActive(false)}>Resume</Link></li>
          <li><Link to="/portfolio" onClick={() => setMenuActive(false)}>Projects</Link></li>
          <li><Link to="/achievements" onClick={() => setMenuActive(false)}>Achievements</Link></li>
          <li><Link to="/contact" onClick={() => setMenuActive(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
