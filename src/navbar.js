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
        {!showLogo &&
        <img src={logosnitch} height={80}  width={80}></img>
}
      {showLogo &&
        <img src={logo} height={80}  width={80}></img>
}
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/experience">Experience</a></li>
        <li><a href="/photography">Photography</a></li>
        <li><a href="/contact">Contact</a></li>

      </ul>

<ul className='image'>
         <li><a href="https://www.linkedin.com/in/anukritijaiswal/" target="_blank" rel="noreferrer">
  <img src={linkedinicon} height="30" width="30" alt="LinkedIn Icon"/>
</a></li>
    <li><a href="mailto:anukritj@andrew.cmu.edu" rel="noreferrer">
  <img src={emailicon} height="30" width="35" alt="Email Icon"/>
</a></li>
<li><a href="https://github.com/WinexWolf" target="_blank" rel="noreferrer">
  <img src={githubicon} height="30" width="30" alt="Github Icon"/>
</a></li>

<li><a href="https://medium.com/@anukritj/" target="_blank" rel="noreferrer">
  <img src={mediumicon} height="30" width="30" alt="Email Icon"/>
</a></li>



      </ul>
<HamburgerMenu></HamburgerMenu> 
   </nav>
  );
}

export default Navbar;
