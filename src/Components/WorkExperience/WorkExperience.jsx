import { useEffect } from 'react';
import '../../App.css';
import './WorkExperience.css'; // Import the CSS file
import jobExperienceData from '../../Data/jobExperienceData'; // Import the job experience data
import peopleIcon from '../../assets/icon/people-icon.png'; // Import the people icon

function WorkExperience() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="section" data-aos="fade-up">
      <h2>Work Experience</h2>
      <div className="work-experience-container">
        {jobExperienceData.map((job) => (
          <div className="job-card" key={job.id}>
            <div className="company-name">{job.companyName}</div> {/* Company Name */}
            <div className="job-title">{job.jobTitle}</div> {/* Job Title */}
            <img src={job.image} alt={`${job.companyName} image`} className="job-image" /> {/* Job Image */}
            <div className="team-size-container">
              <img src={peopleIcon} alt="People icon" className="people-icon" /> {/* People Icon */}
              <div className="team-size">{job.teamSize}</div> {/* Team Size */}
            </div>
            <div className="bottom-right-content"> {/* Job Description and other content */}
              <div className="job-description">{job.description}</div> {/* Job description */}
            </div>
            <div className="job-date">{job.date}</div> {/* Job Date */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
