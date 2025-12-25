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
            <div className="company-name">{companyName}</div>
            <div className="job-title">{job.jobTitle}</div>
            <img
              src={job.image}
              alt={`${companyName} image`}
              className="job-image"
              style={{
                width: job.cardImageSize || '100%',
                height: job.cardImageSize === '100%' ? '230px' : 'auto',
                maxWidth: '100%'
              }}
            />
            <div className="team-size-container">
              <img src={peopleIcon} alt="People icon" className="people-icon" />
              <div className="team-size">{job.teamSize}</div>
            </div>
            <div className="bottom-right-content">
              <div className="job-description">{job.description}</div>
            </div>
            <div className="job-date">
              <div>{job.date}</div>
              <div>
                {calculateMonthsInRole(job.date).months} Months
                {calculateMonthsInRole(job.date).isOngoing && " (Ongoing)"}
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
