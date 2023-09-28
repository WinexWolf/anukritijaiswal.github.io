// Navbar.js
import React,{ useState, useEffect } from 'react';
import './navbar.css';
import logo from './images/logo.png';
import logosnitch from './images/logosnitch.png';
import mediumicon from './images/medium.png';
import linkedinicon from './images/linkedin.png';
import githubicon from './images/github.png';
import emailicon from './images/email.png';
import HamburgerMenu from './hamburger';

function scrollToContact() {
  // Find the "Project" section by its ID
 
const contactSection = document.getElementById("contact");

if (contactSection) {
  // Scroll to the "Contact" section smoothly
  contactSection.scrollIntoView({ behavior: "smooth" });
}

}

function scrollToAbout() {
  // Find the "About" section by its ID
  const aboutSection = document.getElementById("about");


  
  if (aboutSection) {
    // Scroll to the "Project" section smoothly
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }
  
}

function scrollToExperience() {
  // Find the "Project" section by its ID
  const experienceSection = document.getElementById("timeline");
  
  if (experienceSection) {
    // Scroll to the "Project" section smoothly
    experienceSection.scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToProject() {
  // Find the "Project" section by its ID
  const projectSection = document.getElementById("project");

  if (projectSection) {
    // Scroll to the "Project" section smoothly
    projectSection.scrollIntoView({ behavior: "smooth" });
  }
}

function Navbar() {
   const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
   const hideLogoTimeout = setTimeout(() => {
      setShowLogo(true); 
    }, 500);

  }, []);

  return (
    <nav className="navbar">
      <ul>
        {!showLogo && <img src={logosnitch} height={80} width={80}></img>}
        {showLogo && <img src={logo} height={80} width={80}></img>}
        <li>
          <a onClick={scrollToAbout}>About</a>
        </li>
        <li>
          <a onClick={scrollToProject}>Projects</a>
        </li>
        <li>
          <a onClick={scrollToExperience}>Experience</a>
        </li>
        <li>
          <a href="/photography">Photography</a>
        </li>
        <li>
          <a onClick={scrollToContact}>Contact</a>
        </li>
      </ul>

      <ul className="image">
        <li>
          <a
            href="https://www.linkedin.com/in/anukritijaiswal/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedinicon}
              height="25"
              width="25"
              alt="LinkedIn Icon"
            />
          </a>
        </li>
        <li>
          <a href="mailto:anukritj@andrew.cmu.edu" rel="noreferrer">
            <img src={emailicon} height="25" width="30" alt="Email Icon" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/WinexWolf"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubicon} height="25" width="25" alt="Github Icon" />
          </a>
        </li>

        <li>
          <a
            href="https://medium.com/@anukritj/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mediumicon} height="25" width="25" alt="Email Icon" />
          </a>
        </li>
      </ul>
      <HamburgerMenu></HamburgerMenu>
    </nav>
  );
}

export default Navbar;
