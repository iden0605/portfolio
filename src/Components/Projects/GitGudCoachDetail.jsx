import projectData from '../../Data/projectData';
import ProjectHeader from './ProjectHeader';
import ProjectDetailTabSection from './ProjectDetailTabSection';
import './ProjectDetails.css';

function GitGudCoachDetail() {
  const project = projectData["Git Gud Coach"];
  if (!project) return <div>Project not found.</div>;

  return (
    <main className="main-content">
      <div className="project-detail-container">
        <ProjectHeader projectName="Git Gud Coach" />
        {project.details && (
          <ProjectDetailTabSection details={project.details} projectName="Git Gud Coach" />
        )}
      </div>
    </main>
  );
}

export default GitGudCoachDetail;
