import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProjectBackButton.css';

function ProjectBackButton() {
  // state to control button visibility
  const [isVisible, setIsVisible] = useState(false);

  // effect to handle scroll and show/hide button
  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolledFromTop = window.scrollY;
      const scrollPercentage = (scrolledFromTop / scrollableHeight) * 100;

      if (scrollPercentage > 30) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // render the back button
  return (
    <Link to="/projects" className={`back-link ${isVisible ? '' : 'hidden'}`}>
      &larr; Projects
    </Link>
  );
}

export default ProjectBackButton;
