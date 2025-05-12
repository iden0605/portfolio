import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar({ onContactClick }) { // Accept onContactClick prop
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Add a small delay before hiding to avoid flickering
      const scrollThreshold = 50;

      if (window.scrollY > lastScrollY && window.scrollY > scrollThreshold) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up or at the top
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); // Re-run effect if lastScrollY changes

  return (
    <nav className={`navbar ${isVisible ? '' : 'navbar-hidden'}`}>
      <ul>
        <li><Link to="/home" className={location.pathname === '/home' ? 'active' : ''}>Home</Link></li>
        <li><Link to="/work-experience" className={location.pathname === '/work-experience' ? 'active' : ''}>Work Experience</Link></li>
        <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link></li>
      </ul>
      <button className="contact-button" onClick={onContactClick}>Contact Me</button> {/* Add onClick handler */}
    </nav>
  );
}

export default Navbar;
