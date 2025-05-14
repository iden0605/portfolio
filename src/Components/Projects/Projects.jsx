import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import projectData from '../../Data/projectData'; // Import projectData
import peopleIcon from '/assets/icon/people-icon.png';


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
            {/* Conditional rendering for video or image */}
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
              <div className="project-footer">
                <span className="team-size"><img src={peopleIcon} alt="team size icon" className="team-icon"/> {project.teamSize}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;
