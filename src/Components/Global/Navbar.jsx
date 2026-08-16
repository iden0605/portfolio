import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({});

  const navLinksRef = useRef(null);
  const homeLinkRef = useRef(null);
  const workLinkRef = useRef(null);
  const projectsLinkRef = useRef(null);
  const contactLinkRef = useRef(null);

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

  // Effect to handle closing the sidebar on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isSidebarOpen) {
        closeSidebar();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
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

  // Effect for the sliding underline
  useEffect(() => {
    const calculateUnderline = () => {
      let activeRef;
      if (location.pathname === '/') {
        activeRef = homeLinkRef;
      } else if (location.pathname.startsWith('/work-experience')) {
        activeRef = workLinkRef;
      } else if (location.pathname.startsWith('/projects')) {
        activeRef = projectsLinkRef;
      } else if (location.pathname === '/contact') {
        activeRef = contactLinkRef;
      }

      if (activeRef && activeRef.current) {
        setUnderlineStyle({
          left: activeRef.current.offsetLeft,
          width: activeRef.current.offsetWidth,
        });
      }
    };

    // Calculate on initial render and location change
    calculateUnderline();

    // Recalculate on window resize
    window.addEventListener('resize', calculateUnderline);

    // Cleanup
    return () => {
      window.removeEventListener('resize', calculateUnderline);
    };
  }, [location]);

  // Get navbar classes
  const navbarClasses = `navbar ${isVisible ? '' : 'navbar-hidden'}`;

  // render the navbar
  return (
    <>
      <nav className={navbarClasses}>
        <div className="navbar-content">
          <Link to="/" className="profile-link" onClick={closeSidebar}>
            <span className="profile-name">Iden</span>
          </Link>

          <ul ref={navLinksRef} className={`nav-links ${isSidebarOpen ? 'open' : ''}`}>
            <li ref={homeLinkRef}><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeSidebar}>Home</Link></li>
            <li ref={workLinkRef}><Link to="/work-experience" className={location.pathname.startsWith('/work-experience') ? 'active' : ''} onClick={closeSidebar}>Experience</Link></li>
            <li ref={projectsLinkRef}><Link to="/projects" className={location.pathname.startsWith('/projects') ? 'active' : ''} onClick={closeSidebar}>Projects</Link></li>
            <li ref={contactLinkRef}><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={closeSidebar}>Contact</Link></li>
            <div className="nav-underline" style={underlineStyle}></div>
          </ul>

          <div className="navbar-right">
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="navbar-resume-link">Resume</a>
            <span className="navbar-separator">|</span>
            <div className="navbar-socials">
              <a href="https://github.com/iden0605" target="_blank" rel="noopener noreferrer" className="navbar-social-icon" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/iden-mcelhone-8a6983354/" target="_blank" rel="noopener noreferrer" className="navbar-social-icon" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="mailto:iden0605@gmail.com" target="_blank" rel="noopener noreferrer" className="navbar-social-icon" aria-label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
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
            <li><Link to="/work-experience" className={location.pathname.startsWith('/work-experience') ? 'active' : ''} onClick={closeSidebar}>Experience</Link></li>
            <li><Link to="/projects" className={location.pathname.startsWith('/projects') ? 'active' : ''} onClick={closeSidebar}>Projects</Link></li>
            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={closeSidebar}>Contact</Link></li>
          </ul>
          <div className="sidebar-socials">
            <a href="https://github.com/iden0605" target="_blank" rel="noopener noreferrer" className="navbar-social-icon" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/iden-mcelhone-8a6983354/" target="_blank" rel="noopener noreferrer" className="navbar-social-icon" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="mailto:iden0605@gmail.com" target="_blank" rel="noopener noreferrer" className="navbar-social-icon" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

export default Navbar;
