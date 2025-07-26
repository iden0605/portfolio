import '../../App.css';
import projectData from '../../Data/projectData';
import wwwIcon from '/assets/icon/WWW-icon.png';

function ProjectHeader({ projectName }) {
  // get project data based on project name
  const project = projectData[projectName];

  // return null if project data is not found
  if (!project) {
    return null;
  }

  // render the project header section
  return (
    <section className="section" data-aos="fade-up">
      <div className="project-header-content">
        <h2 style={{ textAlign: 'center' }}>{projectName}</h2>

        {project.liveLink && project.liveLink.includes('youtube.com') && (
          <div className="video-container" style={{ margin: '20px auto' }}>
            <iframe
              src={`https://www.youtube.com/embed/${project.liveLink.split('v=')[1].split('&')[0]}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={`YouTube video for ${projectName}`}
            ></iframe>
          </div>
        )}

        <div className="project-type-box" style={{ textAlign: 'center', margin: '0 auto 20px auto' }}>{project.type}</div>

        <div style={{ textAlign: 'center', margin: '0 auto 20px auto' }}>
          {project.githubLink && project.githubLink !== "" && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <img src="/assets/logo/Github-black-logo.png" alt="GitHub Link" style={{ width: '45px', height: '45px' }} />
            </a>
          )}
          {project.itchLink && project.itchLink !== "" && (
            <a href={project.itchLink} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '20px' }}>
              <img src="/assets/logo/Itch-logo.png" alt="Itch.io Link" style={{ width: '45px', height: '45px' }} />
            </a>
          )}
          {project.wwwLink && project.wwwLink !== "" && (
            <a href={project.wwwLink} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '20px' }}>
              <img src={wwwIcon} alt="WWW Link" style={{ width: '45px', height: '45px' }} />
            </a>
          )}
        </div>

        <div style={{ textAlign: 'left' }}>
          <h3><span className="subtitle">Overview</span></h3>

          <p style={{ marginBottom: '20px' }}>{project.description}</p>
        </div>

        <div className="project-details project-details-vertical" style={{ textAlign: 'left' }}>
          <p><strong>Status:</strong>&nbsp;&nbsp;{project.status}</p>
          <p><strong>Project Time:</strong>&nbsp;&nbsp;{project.projectTime}</p>
          {project.technologies && project.technologies.length > 0 && (
              <p><strong>Technologies:</strong>&nbsp;&nbsp;{project.technologies.join(', ')}</p>
          )}
        </div>

        {project.keyResponsibilities?.length > 0 && (
          <div className="project-details project-details-vertical" style={{ textAlign: 'left', marginTop: '20px' }}>
            <h3><span className="subtitle">Key Responsibilities</span></h3>
            <div style={{ textAlign: 'left', marginTop: '-10px' }}>
              <ul>
                {project.keyResponsibilities && project.keyResponsibilities.map((responsibility, index) => (
                  <li key={index} style={{ color: '#444', marginBottom: '5px' }}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
          )}
      </div>
    </section>
  );
}

export default ProjectHeader;
