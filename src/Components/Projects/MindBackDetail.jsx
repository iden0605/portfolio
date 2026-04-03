import projectData from '../../Data/projectData';
import ProjectHeader from './ProjectHeader';
import ProjectDetailTabSection from './ProjectDetailTabSection';
import './ProjectDetails.css';

function MindBackDetail() {
  const project = projectData.MindBack;
  if (!project) return <div>Project not found.</div>;

  return (
    <main className="main-content">
      <div className="project-detail-container">
        <ProjectHeader projectName="MindBack" />
        <ProjectDetailTabSection details={project.details} projectName="MindBack" />
      </div>
    </main>
  );
}

export default MindBackDetail;
