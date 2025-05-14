import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './WorkBackButton.css'; // Assuming we'll create a CSS file for styling

function WorkBackButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolledFromTop = window.scrollY;
      const scrollPercentage = (scrolledFromTop / scrollableHeight) * 100;

      // Show button when scrolled past 30% of the page height
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

  return (
    <Link to="/work-experience" className={`back-link ${isVisible ? '' : 'hidden'}`}>
      &larr; Experiences
    </Link>
  );
}

export default WorkBackButton;
