import '../../App.css';
import './ProjectDetails.css';
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
        <h2 className="project-header-title">{projectName}</h2>

        {project.liveLink && (project.liveLink.includes('youtube.com') || project.liveLink.includes('youtu.be')) && (
          <div className="video-container project-header-video">
            <iframe
              src={`https://www.youtube.com/embed/${project.liveLink.includes('youtu.be') ? project.liveLink.split('youtu.be/')[1].split('?')[0] : project.liveLink.split('v=')[1].split('&')[0]}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={`YouTube video for ${projectName}`}
            ></iframe>
          </div>
        )}

        <div className="project-type-box project-header-type-box">{project.type}</div>

        {(project.githubLink || project.itchLink || project.wwwLink) && (
          <div className="project-links-bar">
            {project.githubLink && project.githubLink !== "" && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                <img src="/assets/logo/Github-black-logo.png" alt="GitHub" className="project-link-btn-icon" />
                <span>GitHub</span>
              </a>
            )}
            {project.itchLink && project.itchLink !== "" && (
              <a href={project.itchLink} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                <img src="/assets/logo/Itch-logo.png" alt="Itch.io" className="project-link-btn-icon no-filter" />
                <span>Itch.io</span>
              </a>
            )}
            {project.wwwLink && project.wwwLink !== "" && (
              <a href={project.wwwLink} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                <img src={wwwIcon} alt="Website" className="project-link-btn-icon" />
                <span>Website</span>
              </a>
            )}
          </div>
        )}

        <div className="work-experience-responsibilities move-overview">
          <h3><span className="subtitle">Overview</span></h3>
        </div>

        <div className="work-experience-responsibilities">  
          <p className="project-header-description">{project.description}</p>
          <div className="project-details project-details-vertical">
            <p><strong>Status:</strong>&nbsp;&nbsp;{project.status}</p>
            <p><strong>Project Time:</strong>&nbsp;&nbsp;{project.projectTime}</p>
            {project.technologies && project.technologies.length > 0 && (
                <p><strong>Technologies:</strong>&nbsp;&nbsp;{project.technologies.join(', ')}</p>
            )}
          </div>
        </div>

        {project.keyResponsibilities?.length > 0 && (
          <div className="project-details project-details-vertical project-header-responsibilities">
            <h3><span className="subtitle">Key Responsibilities</span></h3>
            <div className="project-header-responsibilities-list">
              <ul>
                {project.keyResponsibilities && project.keyResponsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
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
