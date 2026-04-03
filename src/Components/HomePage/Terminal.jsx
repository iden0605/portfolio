import { useState, useRef, useCallback, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { skills } from '../../Data/skillsData';
import './Terminal.css';

const TABS = ['about.md', 'skills.sh', 'education.md'];
const skillCategories = Object.entries(skills);

function Terminal() {
  const [activeTab, setActiveTab] = useState('about.md');
  const [isTabGlitching, setIsTabGlitching] = useState(false);
  const [skillIndex, setSkillIndex] = useState(0);
  const [isSkillGlitching, setIsSkillGlitching] = useState(false);

  const tabTimers = useRef([]);
  const skillTimers = useRef([]);

  // Height transition: measure inner content, drive outer height via inline style
  const screenRef = useRef(null);
  const innerRef = useRef(null);

  const syncHeight = useCallback(() => {
    if (screenRef.current && innerRef.current) {
      screenRef.current.style.height = `${innerRef.current.offsetHeight}px`;
    }
  }, []);

  // Re-measure whenever the active tab changes
  useLayoutEffect(() => { syncHeight(); }, [activeTab, syncHeight]);

  // Re-measure on any content resize (e.g. window resize causing text reflow)
  useLayoutEffect(() => {
    if (!innerRef.current) return;
    const ro = new ResizeObserver(syncHeight);
    ro.observe(innerRef.current);
    return () => ro.disconnect();
  }, [syncHeight]);

  const switchTab = (tab) => {
    if (tab === activeTab || isTabGlitching) return;
    tabTimers.current.forEach(clearTimeout);
    setIsTabGlitching(true);
    tabTimers.current = [
      setTimeout(() => setActiveTab(tab), 150),
      setTimeout(() => setIsTabGlitching(false), 380),
    ];
  };

  const cycleSkill = (newIndex) => {
    if (isSkillGlitching) return;
    skillTimers.current.forEach(clearTimeout);
    setIsSkillGlitching(true);
    skillTimers.current = [
      setTimeout(() => setSkillIndex(newIndex), 150),
      setTimeout(() => setIsSkillGlitching(false), 380),
    ];
  };

  const skillNext = () => cycleSkill((skillIndex + 1) % skillCategories.length);
  const skillPrev = () => cycleSkill((skillIndex - 1 + skillCategories.length) % skillCategories.length);

  const [category, items] = skillCategories[skillIndex];
  const mid = Math.ceil(items.length / 2);
  const col1 = items.slice(0, mid);
  const col2 = items.slice(mid);

  const promptCmd = {
    'about.md':       'cat about.md',
    'skills.sh':      'bash skills.sh',
    'education.md':  'cat education.txt',
  };

  return (
    <div className="terminal-section" data-aos="fade-up" data-aos-offset="-150">

      {/* Title bar */}
      <div className="terminal-titlebar">
        <span className="terminal-title-text">~/profile $ ls</span>
        <div className="window-dots">
          <span className="window-dot window-dot--red" />
          <span className="window-dot window-dot--yellow" />
          <span className="window-dot window-dot--green" />
        </div>
      </div>

      {/* Tabs */}
      <div className="terminal-tabs">
        {TABS.map(tab => (
          <button
            key={tab}
            className={`terminal-tab${activeTab === tab ? ' active' : ''}`}
            onClick={() => switchTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Screen */}
      <div ref={screenRef} className={`terminal-screen${isTabGlitching ? ' glitch' : ''}`}>
        <div className="scanlines" />
        <div ref={innerRef} className="screen-inner">

        {/* ── about.md ── */}
        {activeTab === 'about.md' && (
          <div className="term-content" key="about">
            <div className="prompt-line">
              <span className="prompt-arrow">❯</span>
              <span className="prompt-cmd" style={{ '--cmd-len': promptCmd['about.md'].length + 1 }}> {promptCmd['about.md']}</span>
            </div>
            <div className="term-output about-output">
              <div className="about-paragraph">
                Hi! I'm <span className="term-bold term-pink">Iden</span>, a Computing &amp; Software Systems student at the University of Melbourne with a focus on <span className="term-bold">system architecture</span> and <span className="term-bold">DevOps engineering</span>. I'm passionate about designing scalable, reliable, and automated systems, leveraging containerization, CI/CD pipelines, and cloud infrastructure.
              </div>
              <div className="about-paragraph">
                My work spans infrastructure design, deployment automation, and maintaining full-stack applications. I thrive on building efficient workflows and making technical decisions that balance performance, security, and maintainability, all while adopting modern tools and technologies.
              </div>
              <div className="about-paragraph">
                Professional experience includes working as a DevOps Engineering Intern and Junior Software Developer at <span className="term-bold term-blue">Kewpump</span>, where I managed containerized applications, implemented GitHub Actions pipelines, and maintained scalable cloud and local deployments. I have also contributed to tutoring and freelance web development, including co-founding <span className="term-bold term-blue">BookingsMadeEasy</span>.
              </div>
              <div className="about-ls">
                <div className="prompt-line about-secondary-prompt">
                  <span className="prompt-arrow">❯</span>
                  <span className="prompt-cmd" style={{ '--cmd-len': 9 }}> ls -d */</span>
                </div>
                <div className="ls-output">
                  <Link to="/projects" className="ls-dir">projects/</Link>
                  <Link to="/work-experience" className="ls-dir">work/</Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── skills.sh ── */}
        {activeTab === 'skills.sh' && (
          <div className="term-content" key="skills">
            <div className="prompt-line">
              <span className="prompt-arrow">❯</span>
              <span className="prompt-cmd" style={{ '--cmd-len': promptCmd['skills.sh'].length + 1 }}> {promptCmd['skills.sh']}</span>
            </div>
            <div className={`skills-output${isSkillGlitching ? ' glitch' : ''}`}>
              <div className="skills-category-label"># {category}</div>
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
              <div className="skills-nav">
                <button className="skill-nav-btn" onClick={skillPrev} aria-label="Previous category">◀</button>
                <div className="skill-nav-dots">
                  {skillCategories.map((_, i) => (
                    <span
                      key={i}
                      className={`skill-nav-dot${i === skillIndex ? ' active' : ''}`}
                      onClick={() => i !== skillIndex && cycleSkill(i)}
                      aria-label={`Go to ${skillCategories[i][0]}`}
                    />
                  ))}
                </div>
                <button className="skill-nav-btn" onClick={skillNext} aria-label="Next category">▶</button>
              </div>
            </div>
          </div>
        )}

        {/* ── education.txt ── */}
        {activeTab === 'education.md' && (
          <div className="term-content" key="education">
            <div className="prompt-line">
              <span className="prompt-arrow">❯</span>
              <span className="prompt-cmd" style={{ '--cmd-len': promptCmd['education.md'].length + 1 }}> {promptCmd['education.md']}</span>
            </div>
            <div className="term-output edu-output">

              <div className="edu-entry">
                <div className="edu-header">
                  <span className="term-green edu-institution">University of Melbourne</span>
                  <span className="edu-grade"> | WAM 85</span>
                  <span className="edu-period">2024–2026</span>
                </div>
                <div className="edu-detail">Bachelor of Science in Computing and Software Systems</div>
                <div className="edu-award">
                  <span className="term-yellow">★</span> Melbourne International Undergraduate Scholarship (Excellence Award)
                </div>
              </div>

              <div className="edu-entry">
                <div className="edu-header">
                  <span className="term-green edu-institution">Xceleration Education</span>
                  <span className="edu-grade"> | A* A* A*</span>
                  <span className="edu-period">2022–2023</span>
                </div>
                <div className="edu-detail">International A-Levels — Mathematics, Further Mathematics, Physics</div>
                <div className="edu-award">
                  <span className="term-yellow">★</span> Pearson Certificate of Excellence
                </div>
              </div>

              <div className="edu-languages">
                <div className="edu-lang-header"># Languages</div>
                <div className="edu-lang-list">
                  <span className="edu-lang-item"><span className="term-blue">English</span>: Native</span>
                  <span className="edu-lang-sep">  |  </span>
                  <span className="edu-lang-item"><span className="term-blue">Cantonese</span>: Proficient</span>
                  <span className="edu-lang-sep">  |  </span>
                  <span className="edu-lang-item"><span className="term-blue">Mandarin</span>: Intermediate</span>
                </div>
              </div>

            </div>
          </div>
        )}
        </div> {/* screen-inner */}
      </div>
    </div>
  );
}

export default Terminal;
