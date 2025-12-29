import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar({ onContactClick }) {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add('sidebar-open');
    } else {
      document.body.classList.remove('sidebar-open');
    }
  }, [isSidebarOpen]);

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

    // Conditionally add or remove the scroll listener based on sidebar state
    if (isSidebarOpen) {
      // When sidebar is open, ensure navbar is visible and remove the listener
      setIsVisible(true);
      window.removeEventListener('scroll', throttledHandleScroll);
    } else {
      // When sidebar is closed, add the listener
      window.addEventListener('scroll', throttledHandleScroll);
    }

    // Cleanup function to remove the listener
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [lastScrollY, isSidebarOpen]);

  // Get navbar classes
  const navbarClasses = `navbar ${isVisible ? '' : 'navbar-hidden'}`;

  // render the navbar
  return (
    <>
      <nav className={navbarClasses}>
        <div className="navbar-content">
          <Link to="/" className="profile-link" onClick={closeSidebar}>
            <span className="profile-name">I.M.</span>
          </Link>

          <ul className={`nav-links ${isSidebarOpen ? 'open' : ''}`}>
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeSidebar}>Home</Link></li>
            <li><Link to="/work-experience" className={location.pathname === '/work-experience' ? 'active' : ''} onClick={closeSidebar}>Work Experience</Link></li>
            <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''} onClick={closeSidebar}>Projects</Link></li>
            <li className="contact-button-container"><Link to="/contact" onClick={closeSidebar}>Contact Me</Link></li>
          </ul>

          <div className="navbar-right">
            <button className="contact-button-desktop" onClick={onContactClick}>Contact Me</button>
            <div className={`hamburger-icon ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>
      </nav>
      {createPortal(
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeSidebar}>Home</Link></li>
            <li><Link to="/work-experience" className={location.pathname === '/work-experience' ? 'active' : ''} onClick={closeSidebar}>Work Experience</Link></li>
            <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''} onClick={closeSidebar}>Projects</Link></li>
            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={closeSidebar}>Contact</Link></li>
          </ul>
        </div>,
        document.body
      )}
    </>
  );
}

export default Navbar;
