import projectData from '../../Data/projectData';
import ProjectHeader from './ProjectHeader';
import './ProjectDetails.css';

function LunarlyDetail() {
  // get project data for Lunarly
  const project = projectData.Lunarly;

  // handle case where project data is not found
  if (!project) {
    return <div>Project not found.</div>;
  }

  // render the project detail page
  return (
    <div className="project-detail-container">
      <ProjectHeader projectName="Lunarly" />
    </div>
  );
}

export default LunarlyDetail;
