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
    const SCROLL_THRESHOLD = 100; // Pixels

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY;

      // Show navbar at the very top
      if (currentScrollY === 0) {
        setIsVisible(true);
      }
      // Hide navbar when scrolling down past threshold
      else if (scrollDifference > SCROLL_THRESHOLD) {
        setIsVisible(false);
        setLastScrollY(currentScrollY);
      }
      // Show navbar when scrolling up past threshold
      else if (scrollDifference < -SCROLL_THRESHOLD) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
      }
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
      <div className="navbar-content">
        <Link to="/" className="profile-link" onClick={closeMenu}>
          <span className="profile-name">I.M.</span>
        </Link>

        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/work-experience" className={location.pathname === '/work-experience' ? 'active' : ''} onClick={closeMenu}>Work Experience</Link></li>
          <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''} onClick={closeMenu}>Projects</Link></li>
          <li className="contact-button-container"><Link to="/contact" onClick={closeMenu}>Contact Me</Link></li>
        </ul>

        <div className="navbar-right">
          <button className="contact-button-desktop" onClick={onContactClick}>Contact Me</button>
          <div className="hamburger-icon" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
