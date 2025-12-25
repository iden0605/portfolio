import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import './WorkExperience.css';
import jobExperienceData from '../../Data/jobExperienceData';
import peopleIcon from '/assets/icon/people-icon.png';
import { calculateMonthsInRole } from '../Utilities/DateCalculator';

function WorkExperience() {
    // scroll to top on component mount
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  // render work experience section
  return (
    <section className="section" data-aos="fade-up">
      <h2>Work Experience</h2>
      <div className="work-experience-container">
        {Object.entries(jobExperienceData).map(([companyName, job]) => (
          <Link
            to={`/work-experience/${job.tokenizedName}`}
            key={companyName}
          >
          <div className={`job-card ${job.tokenizedName} ${companyName.length > 13 ? 'two-line-company-name' : ''}`} key={job.id}>
            {/* Left Column: Logo */}
            <div className="job-left-column">
              <img
                src={job.cardImage}
                alt={`${companyName} image`}
                className="job-image"
              />
            </div>

            {/* Right Column: Text Content */}
            <div className="job-right-column">
              <div className="job-header">
                <div className="company-name">{companyName}</div>
                <div className="job-title">{job.jobTitle}</div>
              </div>
              
              <div className="job-description">{job.description}</div>
              
              <div className="job-metadata">
                <span className="metadata-item">{job.date}</span>
                <span className="metadata-separator">•</span>
                <span className="metadata-item">
                  {calculateMonthsInRole(job.date).months} Months
                  {calculateMonthsInRole(job.date).isOngoing && " (Ongoing)"}
                </span>
              </div>
            </div>

            <div className="team-size-container">
               <img src={peopleIcon} alt="People icon" className="people-icon" />
               <span className="team-size-text">{job.teamSize} Colleagues</span>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
