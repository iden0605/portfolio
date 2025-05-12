import projectData from '../../Data/projectData';
import ProjectHeader from './ProjectHeader';
import ProjectBackButton from '../Utilities/ProjectBackButton';
import './ProjectDetails.css';

function LunarlyDetail() {
  const project = projectData.Lunarly;

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="project-detail-container">
      <ProjectHeader projectName="Lunarly" />
      {/* Add additional Lunarly specific content below the header if needed */}
      <ProjectBackButton />
    </div>
  );
}

export default LunarlyDetail;
