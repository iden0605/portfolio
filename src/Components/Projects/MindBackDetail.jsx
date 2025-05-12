import projectData from '../../Data/projectData';
import ProjectHeader from './ProjectHeader';
import ProjectBackButton from '../Utilities/ProjectBackButton';
import './ProjectDetails.css';

function MindBackDetail() {
  const project = projectData.MindBack;

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="project-detail-container">
      <ProjectHeader projectName="MindBack" />
      {/* Add additional MindBack specific content below the header if needed */}
      <ProjectBackButton />
    </div>
  );
}

export default MindBackDetail;
