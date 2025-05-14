import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import './WorkExperience.css';
import jobExperienceData from '../../Data/jobExperienceData';
import peopleIcon from '/assets/icon/people-icon.png';

function WorkExperience() {
    // scroll to top on component mount
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  // render the work experience section
  return (
    <section className="section" data-aos="fade-up">
      <h2>Work Experience</h2>
      <div className="work-experience-container">
        {Object.entries(jobExperienceData).map(([companyName, job]) => (
          <Link
            to={`/work-experience/${companyName.replace(/ /g, '-')}`}
            key={companyName}
          >
          <div className={`job-card ${companyName.length > 13 ? 'two-line-company-name' : ''}`} key={job.id}>
            <div className="company-name">{companyName}</div>
            <div className="job-title">{job.jobTitle}</div>
            <img src={job.image} alt={`${companyName} image`} className="job-image" />
            <div className="team-size-container">
              <img src={peopleIcon} alt="People icon" className="people-icon" />
              <div className="team-size">{job.teamSize}</div>
            </div>
            <div className="bottom-right-content">
              <div className="job-description">{job.description}</div>
            </div>
            <div className="job-date">{job.date}</div>
          </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
