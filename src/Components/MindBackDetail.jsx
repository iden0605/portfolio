import React from 'react';
import { Link } from 'react-router-dom';
import projectData from '../projectData';
import ProjectHeader from './ProjectHeader';

function MindBackDetail() {
  const project = projectData.MindBack;

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="project-detail-container">
      <ProjectHeader projectName="MindBack" />
      {/* Add additional MindBack specific content below the header if needed */}
      <Link to="/projects" className="back-link">
        &larr; Back to Projects
      </Link>
    </div>
  );
}

export default MindBackDetail;
