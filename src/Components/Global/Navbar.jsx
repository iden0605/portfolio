import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar({ onContactClick }) {
  // get current location for active link styling
  const location = useLocation();
  // state for navbar visibility on scroll
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  // state for mobile menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // close mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // effect to handle navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50;

      if (window.scrollY > lastScrollY && window.scrollY > scrollThreshold) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // render the navbar
  return (
    <nav className={`navbar ${isVisible ? '' : 'navbar-hidden'}`}>
      <ul>
        <li><Link to="/home" className={location.pathname === '/home' ? 'active' : ''} onClick={closeMenu}>Home</Link></li>
        <li><Link to="/work-experience" className={location.pathname === '/work-experience' ? 'active' : ''} onClick={closeMenu}>Work Experience</Link></li>
        <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''} onClick={closeMenu}>Projects</Link></li>
      </ul>
      <div className="navbar-top-row">
        <div className="hamburger-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <button className="contact-button" onClick={onContactClick}>Contact Me</button>
      </div>
    </nav>
  );
}

export default Navbar;
