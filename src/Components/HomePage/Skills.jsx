import { useState, useRef } from 'react';
import { skills } from '../../Data/skillsData';
import './Skills.css';

const categories = Object.entries(skills);

function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const timers = useRef([]);

  const triggerGlitch = (newIndex) => {
    if (isGlitching) return;
    timers.current.forEach(clearTimeout);
    timers.current = [];

    setIsGlitching(true);

    // Change content at peak distortion
    timers.current.push(setTimeout(() => {
      setCurrentIndex(newIndex);
    }, 150));

    // End glitch
    timers.current.push(setTimeout(() => {
      setIsGlitching(false);
    }, 380));
  };

  const goNext = () => triggerGlitch((currentIndex + 1) % categories.length);
  const goPrev = () => triggerGlitch((currentIndex - 1 + categories.length) % categories.length);

  const [category, items] = categories[currentIndex];
  const mid = Math.ceil(items.length / 2);
  const col1 = items.slice(0, mid);
  const col2 = items.slice(mid);

  return (
    <section className="section skills-section" data-aos="fade-up">
      <div className="monitor-wrapper">
        <div className="monitor-body">
          <div className="monitor-label">SKILLS</div>

          <div className={`monitor-screen${isGlitching ? ' glitch' : ''}`}>
            <div className="scanlines" />
            <div className="screen-content">
              <div className="prompt-line">
                <span className="prompt-user">iden</span>
                <span className="prompt-at">@</span>
                <span className="prompt-host">portfolio</span>
                <span className="prompt-path">:~$</span>
                <span className="prompt-cmd"> {category}</span>
                <span className="prompt-cursor">▌</span>
              </div>
              <div className="skills-columns">
                <div className="skills-col">
                  {col1.map((skill, i) => (
                    <div key={i} className="skill-row">- {skill}</div>
                  ))}
                </div>
                <div className="skills-col">
                  {col2.map((skill, i) => (
                    <div key={i} className="skill-row">- {skill}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="monitor-nav">
            <button className="nav-btn" onClick={goPrev} aria-label="Previous category">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <polygon points="7,0 1,4 7,8" />
              </svg>
            </button>
            <div className="nav-dots">
              {categories.map((_, i) => (
                <span
                  key={i}
                  className={`nav-dot${i === currentIndex ? ' active' : ''}`}
                  onClick={() => i !== currentIndex && triggerGlitch(i)}
                  aria-label={`Go to ${categories[i][0]}`}
                />
              ))}
            </div>
            <button className="nav-btn" onClick={goNext} aria-label="Next category">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <polygon points="1,0 7,4 1,8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
