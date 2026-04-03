import projectData from '../../Data/projectData';
import ProjectHeader from './ProjectHeader';
import ProjectDetailTabSection from './ProjectDetailTabSection';
import './ProjectDetails.css';

function OverGrownDetail() {
  const project = projectData["OverGrown"];
  if (!project) return <div>Project not found.</div>;

  return (
    <main className="main-content">
      <div className="project-detail-container">
        <ProjectHeader projectName="OverGrown" />
        <ProjectDetailTabSection details={project.details} projectName="OverGrown" />
      </div>
    </main>
  );
}

export default OverGrownDetail;
