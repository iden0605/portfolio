import projectData from '../../Data/projectData';
import ProjectHeader from './ProjectHeader';
import ProjectDetailTabSection from './ProjectDetailTabSection';
import './ProjectDetails.css';

function StellaTacoDetail() {
  const project = projectData["Stella Taco"];
  if (!project) return <div>Project not found.</div>;

  return (
    <main className="main-content">
      <div className="project-detail-container">
        <ProjectHeader projectName="Stella Taco" />
        {project.details && (
          <ProjectDetailTabSection details={project.details} projectName="Stella Taco" />
        )}
      </div>
    </main>
  );
}

export default StellaTacoDetail;
