import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar({ onContactClick }) {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Effect to handle navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar at the very top
      if (currentScrollY === 0) {
        setIsVisible(true);
      }
      // Hide navbar when scrolling down past threshold
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      }
      // Show navbar when scrolling up (with some threshold to prevent jitter)
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll);

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [lastScrollY]);

  // Get navbar classes
  const navbarClasses = `navbar ${isVisible ? '' : 'navbar-hidden'}`;

  // render the navbar
  return (
    <nav className={navbarClasses}>
      <ul className={isMenuOpen ? 'open' : ''}>
        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>Home</Link></li>
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
