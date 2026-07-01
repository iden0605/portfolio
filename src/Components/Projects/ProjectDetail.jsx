import { useParams } from 'react-router-dom';
import projectData from '../../Data/projectData';
import ProjectHeader from './ProjectHeader';
import ProjectDetailTabSection from './ProjectDetailTabSection';
import NotFound from '../Global/NotFound';
import '../../App.css';

function ProjectDetail() {
  const { slug } = useParams();
  const entry = Object.entries(projectData).find(([, v]) => v.tokenizedName === slug);

  if (!entry) return <NotFound />;

  const [projectName] = entry;

  return (
    <main className="main-content">
      <ProjectHeader projectName={projectName} />
      <ProjectDetailTabSection details={projectData[projectName].details} projectName={projectName} />
    </main>
  );
}

export default ProjectDetail;
