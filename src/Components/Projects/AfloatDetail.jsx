import projectData from '../../Data/projectData';
import ProjectHeader from './ProjectHeader';
import ProjectDetailTabSection from './ProjectDetailTabSection';
import './ProjectDetails.css';

function AfloatDetail() {
  const project = projectData["Afloat"];
  if (!project) return <div>Project not found.</div>;

  return (
    <main className="main-content">
      <div className="project-detail-container">
        <ProjectHeader projectName="Afloat" />
        <ProjectDetailTabSection details={project.details} projectName="Afloat" />
      </div>
    </main>
  );
}

export default AfloatDetail;
