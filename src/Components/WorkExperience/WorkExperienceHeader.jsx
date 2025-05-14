import '../../App.css';
import './WorkExperienceDetail.css'; // Keep the existing CSS import
import jobExperienceData from '../../Data/jobExperienceData'; // Import jobExperienceData

function WorkExperienceHeader({ companyName }) {
  const job = jobExperienceData[companyName];

  if (!job) {
    return null; // Or a loading/error state
  }

  return (
    <section className="section" data-aos="fade-up" style={{ width: '62%', margin: '20px auto 0 auto' }}>
      <div className="work-experience-header-content">
        {/* 1. Company Name (centered) */}
        <h2 style={{ textAlign: 'center', marginBottom: '8px' }}>{companyName}</h2>

        {/* 2. Job Title (centered) */}
        <div style={{ textAlign: 'center', margin: '0 0', fontStyle: 'italic', fontSize: '1.15em' }}>
          {job.jobTitle}
        </div>

        {/* 3. Job Image (centered) */}
         <div style={{ textAlign: 'center', margin: '20px 0' }}>
           {job.image && (
             <img src={job.image} alt={`${companyName} image`} className="work-experience-image" />
           )}
         </div>


        {/* 4. Overview (left-aligned) */}
        <div style={{ textAlign: 'left' }}>
          <h3><span className="subtitle">Overview</span></h3>
          {job.description && (
            <p style={{ marginBottom: '20px' }}>{job.description}</p>
          )}
        </div>

        {/* 5. Details (left-aligned) */}
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
                  <li key={index} style={{ color: '#444', marginBottom: '5px' }}>{responsibility}</li>
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
