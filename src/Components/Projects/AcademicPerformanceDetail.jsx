import projectData from '../../Data/projectData';
import ProjectHeader from './ProjectHeader';
import ProjectDetailTabSection from './ProjectDetailTabSection';
import './ProjectDetails.css';

function AcademicPerformanceDetail() {
  const project = projectData["Academic Predictive Models"];
  if (!project) return <div>Project not found.</div>;

  return (
    <main className="main-content">
      <div className="project-detail-container">
        <ProjectHeader projectName="Academic Predictive Models" />
        <ProjectDetailTabSection details={project.details} projectName="Academic Predictive Models" />
      </div>
    </main>
  );
}

export default AcademicPerformanceDetail;
