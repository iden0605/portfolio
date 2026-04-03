import { useState, useRef, useCallback, useLayoutEffect } from 'react';
import '../../App.css';
import './ProjectDetails.css';
import projectData from '../../Data/projectData';

function ProjectHeader({ projectName }) {
  const project = projectData[projectName];

  if (!project) return null;

  const tabs = [
    'overview.md',
    ...(project.keyResponsibilities?.length > 0 ? ['responsibilities.txt'] : []),
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [isGlitching, setIsGlitching] = useState(false);
  const glitchTimers = useRef([]);
  const screenRef = useRef(null);
  const innerRef = useRef(null);

  const syncHeight = useCallback(() => {
    if (screenRef.current && innerRef.current) {
      screenRef.current.style.height = `${innerRef.current.offsetHeight}px`;
    }
  }, []);

  useLayoutEffect(() => { syncHeight(); }, [activeTab, syncHeight]);
  useLayoutEffect(() => {
    if (!innerRef.current) return;
    const ro = new ResizeObserver(syncHeight);
    ro.observe(innerRef.current);
    return () => ro.disconnect();
  }, [syncHeight]);

  const switchTab = (tab) => {
    if (tab === activeTab || isGlitching) return;
    glitchTimers.current.forEach(clearTimeout);
    setIsGlitching(true);
    glitchTimers.current = [
      setTimeout(() => setActiveTab(tab), 150),
      setTimeout(() => setIsGlitching(false), 380),
    ];
  };

  const isYouTube = project.liveLink && (
    project.liveLink.includes('youtube.com') || project.liveLink.includes('youtu.be')
  );
  const ytId = isYouTube
    ? (project.liveLink.includes('youtu.be')
        ? project.liveLink.split('youtu.be/')[1].split('?')[0]
        : project.liveLink.split('v=')[1].split('&')[0])
    : null;

  const slug = projectName.toLowerCase().replace(/\s+/g, '-');

  return (
    <section className="section detail-terminal-section" data-aos="fade-up">

      <div className="detail-titlebar">
        <span className="detail-title-text">~/projects/{slug} $ ls</span>
        <div className="window-dots">
          <span className="window-dot window-dot--red" />
          <span className="window-dot window-dot--yellow" />
          <span className="window-dot window-dot--green" />
        </div>
      </div>

      <div className="detail-tabs">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`detail-tab${activeTab === tab ? ' active' : ''}`}
            onClick={() => switchTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div ref={screenRef} className={`detail-screen${isGlitching ? ' glitch' : ''}`}>
        <div ref={innerRef} className="detail-screen-inner">

          <div className="detail-prompt-line" key={activeTab}>
            <span className="dp-arrow">❯</span>
            <span className="dp-cmd" style={{ '--cmd-len': activeTab.length + 5 }}> cat {activeTab}</span>
          </div>

          {activeTab === 'overview.md' && (
            <div className="detail-cat-content">
              {isYouTube && (
                <div className="video-container project-header-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${ytId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={`YouTube video for ${projectName}`}
                  />
                </div>
              )}
              <h2 className="project-header-title">{projectName}</h2>
              <div className="project-type-box project-header-type-box">{project.type}</div>
              {(project.githubLink || project.itchLink || project.wwwLink) && (
                <div className="project-links-bar">
                  {project.githubLink && project.githubLink !== "" && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                      </svg>
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.itchLink && project.itchLink !== "" && (
                    <a href={project.itchLink} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/>
                        <circle cx="15" cy="12" r="1"/>
                        <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/>
                      </svg>
                      <span>Itch.io</span>
                    </a>
                  )}
                  {project.wwwLink && project.wwwLink !== "" && (
                    <a href={project.wwwLink} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="2" y1="12" x2="22" y2="12"/>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                      </svg>
                      <span>Website</span>
                    </a>
                  )}
                </div>
              )}
              <p className="detail-body-text">{project.description}</p>
              <div className="detail-meta-grid">
                {project.status && (
                  <div className="detail-meta-row">
                    <span className="detail-meta-key">status</span>
                    <span className="detail-meta-val">{project.status}</span>
                  </div>
                )}
                {project.projectTime && (
                  <div className="detail-meta-row">
                    <span className="detail-meta-key">project_time</span>
                    <span className="detail-meta-val">{project.projectTime}</span>
                  </div>
                )}
                {project.technologies?.length > 0 && (
                  <div className="detail-meta-row">
                    <span className="detail-meta-key">technologies</span>
                    <span className="detail-meta-val">{project.technologies.join(', ')}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'responsibilities.txt' && (
            <div className="detail-cat-content">
              <ul className="detail-resp-list">
                {project.keyResponsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

export default ProjectHeader;
