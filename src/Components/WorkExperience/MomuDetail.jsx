import '../../App.css';
import '../WorkExperience/WorkExperienceDetail.css';
import ScrollToTop from '../Utilities/ScrollToTop';
import WorkExperienceHeader from './WorkExperienceHeader';
import jobExperienceData from '../../Data/jobExperienceData';

function MomuDetail() {
  // get job experience data for MoMU
  const job = jobExperienceData["Unimelb MoMU Club"];

  // handle case where job data is not found
  if (!job) {
    return <div>Job experience not found.</div>;
  }

  // render the job experience detail page
  return (
    <>
      <ScrollToTop />
      <WorkExperienceHeader companyName="Unimelb MoMU Club" />
      <section className="section" data-aos="fade-up">
        <div className="image-description-section">
          <div className="image-description-block">
            <div style={{ textAlign: 'left', alignSelf: 'flex-start', marginTop: '-20px' }}>
              <h3><span className="subtitle">{job.jobTitle}</span></h3>
              <p className="date-text"><i>{job.date}</i></p>
            </div>
            <div className="description" style={{ textAlign: 'left' }}>
              <p style={{ textAlign: 'left' }}>
                Responsibilities include maintaining and updating the <a href="https://www.momumomu.org/" target="_blank" rel="noopener noreferrer" className="about-me-link">MoMU website</a>, implementing UI/UX improvements, and reporting social media analytics to the club's publicity team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MomuDetail;
