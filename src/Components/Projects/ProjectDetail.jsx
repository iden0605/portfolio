import { useParams } from 'react-router-dom';
import projectData from '../../Data/projectData';
import ProjectHeader from './ProjectHeader';
import ProjectDetailTabSection from './ProjectDetailTabSection';
import PrevNextNav from '../Global/PrevNextNav';
import NotFound from '../Global/NotFound';
import '../../App.css';

function ProjectDetail() {
  const { slug } = useParams();
  const entries = Object.entries(projectData);
  const currentIndex = entries.findIndex(([, v]) => v.tokenizedName === slug);

  if (currentIndex === -1) return <NotFound />;

  const [projectName] = entries[currentIndex];
  const [prevName, prevProject] = entries[(currentIndex - 1 + entries.length) % entries.length];
  const [nextName, nextProject] = entries[(currentIndex + 1) % entries.length];

  return (
    <main className="main-content">
      <ProjectHeader projectName={projectName} />
      <ProjectDetailTabSection details={projectData[projectName].details} projectName={projectName} />
      <PrevNextNav
        prevHref={`/projects/${prevProject.tokenizedName}`}
        prevLabel={prevName}
        nextHref={`/projects/${nextProject.tokenizedName}`}
        nextLabel={nextName}
      />
    </main>
  );
}

export default ProjectDetail;
