import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import projectData from '../../Data/projectData';

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeMobileProject, setActiveMobileProject] = useState(null);
  const cardRefs = useRef({});
  const videoRefs = useRef({});
  const ratioMap = useRef({});
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    if (!isMobile) return;

    const pickMostProminent = () => {
      let bestName = null;
      let bestRatio = 0;
      Object.entries(ratioMap.current).forEach(([name, ratio]) => {
        if (ratio > bestRatio) { bestRatio = ratio; bestName = name; }
      });
      setActiveMobileProject(bestRatio > 0.2 ? bestName : null);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratioMap.current[entry.target.dataset.project] = entry.intersectionRatio;
        });
        pickMostProminent();
      },
      { threshold: Array.from({ length: 21 }, (_, i) => i / 20) }
    );

    Object.entries(cardRefs.current).forEach(([, el]) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) return;
    Object.entries(videoRefs.current).forEach(([name, video]) => {
      if (!video) return;
      if (name === activeMobileProject) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeMobileProject, isMobile]);

  return (
    <main className="main-content">
      <div className="proj-terminal" data-aos="fade-up">

        {/* Title bar */}
        <div className="proj-titlebar">
          <span className="proj-title-text">~/projects</span>
          <div className="window-dots">
            <span className="window-dot window-dot--red" />
            <span className="window-dot window-dot--yellow" />
            <span className="window-dot window-dot--green" />
          </div>
        </div>

        {/* Screen */}
        <div className="proj-screen">
          <div className="proj-scanlines" />
          <div className="proj-screen-inner">

            {/* Prompt */}
            <div className="proj-prompt-line">
              <span className="proj-prompt-arrow">❯</span>
              <span className="proj-prompt-cmd" style={{ '--cmd-len': 7 }}> ls -la</span>
            </div>

            {/* Grid */}
            <div className="projects-grid">
              {Object.entries(projectData).map(([projectName, project], index) => {
                const showVideo = isMobile
                  ? activeMobileProject === projectName && project.previewVid
                  : hoveredProject === projectName && project.previewVid;

                return (
                  <Link
                    to={`/projects/${project.tokenizedName}`}
                    key={projectName}
                    data-aos="fade-up"
                    data-aos-delay={index * 80}
                    onMouseEnter={() => { if (!isMobile) setHoveredProject(projectName); }}
                    onMouseLeave={() => { if (!isMobile) setHoveredProject(null); }}
                    className="proj-card-link"
                  >
                    <div
                      className="project-card"
                      ref={el => { cardRefs.current[projectName] = el; }}
                      data-project={projectName}
                    >
                      {project.award && (
                        <div className={`proj-award-badge ${project.award === 'Winner' ? 'proj-award--winner' : 'proj-award--finalist'}`}>
                          {project.award === 'Winner' ? (
                            <svg className="proj-award-icon" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.133-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z"/>
                            </svg>
                          ) : (
                            <svg className="proj-award-icon" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696 2.188-4.428c.197-.4.73-.4.927 0l2.188 4.428 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                          )}
                          {project.award}
                        </div>
                      )}

                      <div className={`card-media-wrapper${showVideo ? ' show-video' : ''}`}>
                        <img src={project.thumbnail} alt={`${projectName} thumbnail`} />
                        {project.previewVid && (
                          <video
                            ref={el => { videoRefs.current[projectName] = el; }}
                            src={project.previewVid}
                            autoPlay={!isMobile}
                            loop
                            muted
                            playsInline
                            className="project-preview-video"
                          />
                        )}
                      </div>

                      <div className="proj-card-meta">
                        <div className="proj-card-name">{projectName}/</div>
                        <div className="proj-card-type">{project.type}</div>
                        <div className="proj-card-role">{project.role}</div>
                        <div className="proj-card-date">{project.date}</div>
                        <div className="proj-card-team">
                          <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" className="proj-team-icon"><path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></svg>
                          {project.teamSize}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}

export default Projects;
