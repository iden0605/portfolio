import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = {
    "PebbleTask": ["/src/assets/PebbleTask-image.png", "Brief description of Project 1."],
    "Project 2": ["path/to/project2-image.png", "Brief description of Project 2."],
    "Project 3": ["path/to/project3-image.png", "Brief description of Project 3."],
    "Project 4": ["path/to/project4-image.png", "Brief description of Project 4."],
  };

  return (
    <section className="section" data-aos="fade-up">
      <h2>Projects</h2>
      <div className="projects-grid">
        {Object.entries(projects).map(([projectName, [image, description]]) => (
          <Link to={`/projects/${projectName}`} key={projectName}>
            <div className="content-card">
              <h3>{projectName}</h3>
              <img src={image} alt={`${projectName} image`} />
              <p>{description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;
