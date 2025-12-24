import '../../App.css';
import './WorkExperienceDetail.css';
import jobExperienceData from '../../Data/jobExperienceData';
import { calculateMonthsInRole } from '../Utilities/DateCalculator';

function WorkExperienceHeader({ companyName }) {
  // get job experience data based on company name
  const job = jobExperienceData[companyName];

  // return null if job data is not found
  if (!job) {
    return null;
  }

  const { months, isOngoing } = calculateMonthsInRole(job.date);

  // render the work experience header section
  return (
    <section className="section" data-aos="fade-up">
      <div className="work-experience-header-content">
        <h2 className="work-experience-company-name">{companyName}</h2>

        <div className="work-experience-job-title">
          {job.jobTitle}
        </div>

         <div className="work-experience-image-container">
           {job.image && (
             <img
                src={job.image}
                alt={`${companyName} image`}
                className="work-experience-image"
                style={{
                  maxWidth: '100%',
                  width: job.headerImageSize || '700px',
                  margin: '0 auto'
                }}
              />
           )}
         </div>


        <div className="work-experience-overview">
          <h3><span className="subtitle">Overview</span></h3>
          {job.description && (
            <p className="work-experience-overview-description">{job.description}</p>
          )}
        </div>

        <div className="work-experience-details work-experience-details-vertical">
          <p><strong>Time in Role:</strong>&nbsp;&nbsp;{months} Months {isOngoing && '(Ongoing)'}</p>
          {job.technologies && <p><strong>Technologies:</strong>&nbsp;&nbsp;{job.technologies}</p>}
        </div>

        {job.keyResponsibilities?.length > 0 && (
          <div className="work-experience-details work-experience-details-vertical work-experience-responsibilities">
            <h3><span className="subtitle">Key Responsibilities</span></h3>
            <div className="work-experience-responsibilities-list">
              <ul>
                {job.keyResponsibilities && job.keyResponsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
          )}
      </div>
    </section>
  );
}

export default WorkExperienceHeader;
