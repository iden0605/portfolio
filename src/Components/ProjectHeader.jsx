import React from 'react';
import '../App.css'; // Assuming styling is in App.css
import projectData from '../projectData'; // Import projectData

function ProjectHeader({ projectName }) {
  const project = projectData[projectName];

  if (!project) {
    return null; // Or a loading/error state
  }

  return (
    <section className="section" data-aos="fade-up">
      <div className="project-header-content">
        {/* 1. Project title (centered) */}
        <h2 style={{ textAlign: 'center' }}>{projectName}</h2>

        {/* 2. YouTube video (centered) */}
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          {project.liveLink && project.liveLink.includes('youtube.com') && (
            <iframe
              width="800"
              height="450"
              src={`https://www.youtube.com/embed/${project.liveLink.split('v=')[1].split('&')[0]}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={`YouTube video for ${projectName}`}
            ></iframe>
          )}
        </div>

        {/* 3. Project type (centered, styled like project content cards) */}
        <div className="project-type-box" style={{ textAlign: 'center', margin: '0 auto 20px auto' }}>{project.type}</div>

        {/* 4. Icon for the GitHub link (centered) - Placeholder */}
        {/* You will need to replace this with an actual icon and link */}
        {project.githubLink && (
          <div style={{ textAlign: 'center', margin: '0 auto 20px auto' }}>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <img src="/src/assets/Github-black-logo.png" alt="GitHub Link" style={{ width: '30px', height: '30px' }} /> {/* Placeholder icon */}
            </a>
          </div>
        )}


        {/* 5. Project description (centered) */}
        <p style={{ textAlign: 'center', marginBottom: '20px' }}>{project.description}</p>

        {/* 6. Status, technologies (left-aligned) */}
        <div style={{ textAlign: 'left' }}>
          <h3>Details</h3>
          <p><strong>Date:</strong> {project.date}</p>
          <p><strong>Role:</strong> {project.role}</p>
          <p><strong>Team Size:</strong> {project.teamSize}</p>
          {project.technologies && project.technologies.length > 0 && (
            <div>
              <h4>Technologies Used:</h4>
              <ul className="skills-list"> {/* Using skills-list for styling */}
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          )}
           {project.liveLink && (
             <p><strong>Live Demo:</strong> <a href={project.liveLink} target="_blank" rel="noopener noreferrer">{project.liveLink}</a></p>
           )}
        </div>
      </div>
    </section>
  );
}

export default ProjectHeader;
