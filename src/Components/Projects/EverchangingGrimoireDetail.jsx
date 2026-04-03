import projectData from '../../Data/projectData';
import ProjectHeader from './ProjectHeader';
import ProjectDetailTabSection from './ProjectDetailTabSection';
import './ProjectDetails.css';

function EverchangingGrimoireDetail() {
  const project = projectData["Everchanging Grimoire"];
  if (!project) return <div>Project not found.</div>;

  return (
    <main className="main-content">
      <div className="project-detail-container">
        <ProjectHeader projectName="Everchanging Grimoire" />
        <ProjectDetailTabSection details={project.details} projectName="Everchanging Grimoire" />
      </div>
    </main>
  );
}

export default EverchangingGrimoireDetail;
