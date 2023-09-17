// Navbar.js
import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/experience">Experience</a></li>
        <li><a href="/photography">Photography</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
