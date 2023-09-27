import React, { useState } from "react";
import "./hamburger.css";


function HamburgerMenu() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`hamburger-menu ${isActive ? "active" : ""}`}
      onClick={toggleMenu}
    >
      <div className="hamburger-bar"></div>
      <div className="hamburger-bar"></div>
      <div className="hamburger-bar"></div>
      {isActive && (
        <div className="hamburger-list">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/experience">Experience</a>
          </li>
          <li>
            <a href="/photography">Photography</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
