import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import projectData from '../projectData'; // Import projectData

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="section" data-aos="fade-up">
      <h2>Projects</h2>
      <div className="projects-grid">
        {Object.entries(projectData).map(([projectName, project]) => ( // Use imported projectData
          <Link
            to={`/projects/${projectName}`}
            key={projectName}
            onMouseEnter={() => setHoveredProject(projectName)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="content-card">
              <h3>{projectName}</h3>
              <img
                src={hoveredProject === projectName && project.gif ? project.gif : project.thumbnail}
                alt={`${projectName} image`}
              />
              <div className="project-type-box">{project.type}</div> {/* Project type */}
              <div className="project-role">{project.role}</div> {/* Project role */}
              <div>{project.date}</div>
              <div className="project-footer">
                <span className="team-size"><img src="/src/assets/people-icon.png" alt="team size icon" className="team-icon"/> {project.teamSize}</span> {/* Person icon and team size */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;
