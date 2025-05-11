import React from 'react';
import { Link } from 'react-router-dom';
import projectData from '../projectData';
import ProjectHeader from './ProjectHeader';

function LunarlyDetail() {
  const project = projectData.Lunarly;

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="project-detail-container">
      <ProjectHeader projectName="Lunarly" />
      {/* Add additional Lunarly specific content below the header if needed */}
      <Link to="/projects" className="back-link">
        &larr; Back to Projects
      </Link>
    </div>
  );
}

export default LunarlyDetail;
