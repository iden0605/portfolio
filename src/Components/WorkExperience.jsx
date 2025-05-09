import React from 'react';
import '../App.css';

function WorkExperience() {
  const workExperiences = {
    "Job Title 1": ["path/to/image1.jpg", "Brief description of responsibilities and achievements for Job 1."],
    "Job Title 2": ["path/to/image2.png", "Brief description of responsibilities and achievements for Job 2."],
    // Add more work experience entries as needed
  };

  return (
    <section className="section" data-aos="fade-up">
      <h2>Work Experience</h2>
      {Object.entries(workExperiences).map(([jobName, [image, description]]) => (
        <div className="content-card" key={jobName}>
          <h3>{jobName}</h3>
          <img src={image} alt={`${jobName} image`} />
          <p>{description}</p>
        </div>
      ))}
    </section>
  );
}

export default WorkExperience;
