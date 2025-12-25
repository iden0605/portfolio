import '../../App.css';
import '../WorkExperience/WorkExperienceDetail.css';
import ScrollToTop from '../Utilities/ScrollToTop';
import WorkExperienceHeader from './WorkExperienceHeader';
import jobExperienceData from '../../Data/jobExperienceData';

function UMGMCDetail() {
  // get job experience data for Unimelb GameMakers Club
  const job = jobExperienceData["Unimelb GameMakers Club"];

  // handle case where job data is not found
  if (!job) {
    return <div>Job experience not found.</div>;
  }

  // render the job experience detail page
  return (
    <>
      <ScrollToTop />
      <WorkExperienceHeader companyName="Unimelb GameMakers Club" />
      <section className="section" data-aos="fade-up">
        <div className="image-description-section">
          <div className="image-description-block">
            <div style={{ textAlign: 'left', alignSelf: 'flex-start', marginTop: '-20px' }}>
              <h3><span className="subtitle">{job.jobTitle}</span></h3>
              <p className="date-text"><i>{job.date}</i></p>
            </div>
            <div className="description" style={{ textAlign: 'left' }}>
              <p style={{ textAlign: 'left' }}>For the club website, committee data from the Notion backend has been parsed for page rendering. The next steps involve implementing the committee webpage based on the provided designs and making minor UX improvements.</p>
            </div>
            <div className="description" style={{ textAlign: 'left' }}>
              <p style={{ textAlign: 'left' }}>On the Product Division website, the team and team member data structure has been finalized. Currently implementing the team member page to display profiles and experience. Future work includes UX enhancements, such as a dynamic header.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UMGMCDetail;
