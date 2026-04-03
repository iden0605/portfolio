import projectData from '../../Data/projectData';
import ProjectHeader from './ProjectHeader';
import ProjectDetailTabSection from './ProjectDetailTabSection';
import './ProjectDetails.css';

function EchoAIDetail() {
  const project = projectData["EchoAI"];
  if (!project) return <div>Project not found.</div>;

  return (
    <main className="main-content">
      <div className="project-detail-container">
        <ProjectHeader projectName="EchoAI" />
        <ProjectDetailTabSection details={project.details} projectName="EchoAI" />
      </div>
    </main>
  );
}

export default EchoAIDetail;
