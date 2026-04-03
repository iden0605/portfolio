import '../../App.css';
import '../WorkExperience/WorkExperienceDetail.css';
import '../Projects/ProjectDetails.css';
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
    <main className="main-content">
      <ScrollToTop />
      <WorkExperienceHeader companyName="Unimelb MoMU Club" />
      <section className="section detail-terminal-section" data-aos="fade-up">
        <div className="detail-titlebar">
          <span className="detail-title-text">~/work/unimelb-momu-club</span>
          <div className="window-dots">
            <span className="window-dot window-dot--red" />
            <span className="window-dot window-dot--yellow" />
            <span className="window-dot window-dot--green" />
          </div>
        </div>
        <div className="detail-screen">
          <div className="detail-screen-inner">
            <div className="detail-prompt-line">
              <span className="dp-arrow">❯</span>
              <span className="dp-cmd" style={{ '--cmd-len': 18 }}> cat positions.md</span>
            </div>
            <div className="image-description-section">
              <div className="image-description-block">
                <div style={{ textAlign: 'left', alignSelf: 'flex-start' }}>
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
          </div>
        </div>
      </section>
    </main>
  );
}

export default MomuDetail;
