import React from 'react';
import { Link } from 'react-router-dom';
import projectData from '../projectData';
import ProjectHeader from './ProjectHeader';

function OverGrownDetail() {
  const project = projectData.OverGrown;

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="project-detail-container">
      <ProjectHeader projectName="OverGrown" />
      {/* Add additional OverGrown specific content below the header if needed */}
      <Link to="/projects" className="back-link">
        &larr; Back to Projects
      </Link>
    </div>
  );
}

export default OverGrownDetail;
