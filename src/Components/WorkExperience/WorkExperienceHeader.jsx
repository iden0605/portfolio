import '../../App.css';
import './WorkExperienceDetail.css';
import jobExperienceData from '../../Data/jobExperienceData';

function WorkExperienceHeader({ companyName }) {
  // get job experience data based on company name
  const job = jobExperienceData[companyName];

  // return null if job data is not found
  if (!job) {
    return null;
  }

  // render the work experience header section
  return (
    <section className="section" data-aos="fade-up">
      <div className="work-experience-header-content">
        <h2 style={{ textAlign: 'center', marginBottom: '8px' }}>{companyName}</h2>

        <div style={{ textAlign: 'center', margin: '0 0', fontStyle: 'italic', fontSize: '1.15em' }}>
          {job.jobTitle}
        </div>

         <div className="work-experience-image-container">
           {job.image && (
             <img
                src={job.image}
                alt={`${companyName} image`}
                className="work-experience-image"
                style={companyName === "Unimelb GameMakers Club" ? { maxWidth: '400px', margin: '0 auto' } : {maxWidth: '700px', margin: '0 auto'}}
              />
           )}
         </div>


        <div className="work-experience-overview">
          <h3><span className="subtitle">Overview</span></h3>
          {job.description && (
            <p style={{ textAlign: 'left' }}>{job.description}</p>
          )}
        </div>

        <div className="work-experience-details work-experience-details-vertical" style={{ textAlign: 'left' }}>
          {job.timeInRole && <p><strong>Time in Role:</strong>&nbsp;&nbsp;{job.timeInRole}</p>}
          {job.technologies && <p><strong>Technologies:</strong>&nbsp;&nbsp;{job.technologies}</p>}
        </div>

        {job.keyResponsibilities?.length > 0 && (
          <div className="work-experience-details work-experience-details-vertical" style={{ textAlign: 'left', marginTop: '20px' }}>
            <h3><span className="subtitle">Key Responsibilities</span></h3>
            <div style={{ textAlign: 'left', marginTop: '-10px' }}>
              <ul>
                {job.keyResponsibilities && job.keyResponsibilities.map((responsibility, index) => (
                  <li key={index} style={{ color: '#444', marginBottom: '5px', textAlign: 'left' }}>{responsibility}</li>
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
