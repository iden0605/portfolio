import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import projectData from '../../Data/projectData'; // Import projectData
import peopleIcon from '/assets/icon/people-icon.png';


function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <main className="main-content">
      <section className="section" data-aos="fade-up">
        <h2>Projects</h2>
        <div className="projects-grid">
          {Object.entries(projectData).map(([projectName, project]) => (
            <Link
              to={`/projects/${project.tokenizedName}`}
              key={projectName}
              onMouseEnter={() => setHoveredProject(projectName)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="content-card">
              <h3>{projectName}</h3>
              {/* conditional rendering for video or image */}
              {hoveredProject === projectName && project.previewVid ? (
                <video
                  src={project.previewVid}
                  alt={`${projectName} image`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="project-preview-video"
                />
              ) : (
                <img
                  src={project.thumbnail}
                  alt={`${projectName} image`}
                />
              )}
              <div className="project-type-box">{project.type}</div>
                <div className="project-role">{project.role}</div>
                <div>{project.date}</div>
                {project.award && (
                  <div className={`award-badge ${project.award === 'Winner' ? 'award-badge--winner' : ''}`}>
                    {project.award === 'Winner' ? (
                      <svg className="award-icon" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.133-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z"/>
                      </svg>
                    ) : (
                      <svg className="award-icon" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696 2.188-4.428c.197-.4.73-.4.927 0l2.188 4.428 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                    )}
                    {project.award}
                  </div>
                )}

                <div className="team-size-container">
                  <img src={peopleIcon} alt="People icon" className="people-icon" />
                  <span className="team-size-text">{project.teamSize} Contributors</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Projects;
