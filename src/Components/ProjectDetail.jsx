import React from 'react';
import { useParams } from 'react-router-dom';
import projectData from '../projectData';

function ProjectDetail() {
  const { projectName } = useParams();
  const project = projectData[projectName];

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div>
      <h2>{projectName}</h2>
      <p>{project.description}</p>
      <h3>Screenshots</h3>
      {project.screenshots.map((screenshot, index) => (
        <img key={index} src={screenshot} alt={`${projectName} screenshot ${index + 1}`} />
      ))}
      <h3>Technologies</h3>
      <ul>
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      {project.liveLink && <p><a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a></p>}
      {project.githubLink && <p><a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>}
    </div>
  );
}

export default ProjectDetail;
