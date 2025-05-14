import projectData from '../../Data/projectData';
import ProjectHeader from './ProjectHeader';
import ProjectBackButton from '../Utilities/ProjectBackButton';
import './ProjectDetails.css';

function MindBackDetail() {
  // get project data for MindBack
  const project = projectData.MindBack;

  // handle case where project data is not found
  if (!project) {
    return <div>Project not found.</div>;
  }

  // render the project detail page
  return (
    <div className="project-detail-container">
      <ProjectHeader projectName="MindBack" />
      <ProjectBackButton />
    </div>
  );
}

export default MindBackDetail;
