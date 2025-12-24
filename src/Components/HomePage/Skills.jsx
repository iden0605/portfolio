import { useState, useEffect, useCallback } from 'react';
import { skills } from '../../Data/skillsData';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import './Skills.css';

function Skills() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 962);
  const [openCategories, setOpenCategories] = useState({});

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 962);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  const toggleCategory = (category) => {
    if (isMobile) {
      setOpenCategories((prevState) => ({
        ...prevState,
        [category]: !prevState[category],
      }));
    }
  };

  return (
    <section className="section skills-section" data-aos="fade-up">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items], index) => {
          const isOpen = !isMobile || !!openCategories[category];
          return (
            <div className={`skill-category ${isOpen ? 'open' : ''}`} key={index}>
              <h3 onClick={() => toggleCategory(category)}>
                <span className="category-title">{category}</span>
                {isMobile && (
                  <span className="arrow">
                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                )}
              </h3>
              <div className="skills-wrapper">
                <ul className="skills-list">
                  {items.map((skill, i) => (
                    <li
                      key={i}
                      style={isMobile ? { animationDelay: `${i * 0.05}s` } : {}}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;