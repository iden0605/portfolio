import projectData from '../../Data/projectData';
import ProjectHeader from './ProjectHeader';
import ProjectDetailTabSection from './ProjectDetailTabSection';
import './ProjectDetails.css';

function PebbleTaskDetail() {
  const project = projectData["PebbleTask"];
  if (!project) return <div>Project not found.</div>;

  return (
    <main className="main-content">
      <div className="project-detail-container">
        <ProjectHeader projectName="PebbleTask" />
        <ProjectDetailTabSection details={project.details} projectName="PebbleTask" />
      </div>
    </main>
  );
}

export default PebbleTaskDetail;
