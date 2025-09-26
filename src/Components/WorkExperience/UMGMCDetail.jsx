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
              <p style={{ textAlign: 'left' }}>On the club website, recently finished parsing committee data from the notion backend for committee page rendering. Further work includes implementing the committee webpage from the designs given and making minor improvements to improve user experience.</p>
            </div>
            <div className="description" style={{ textAlign: 'left' }}>
              <p style={{ textAlign: 'left' }}>On the product division website, recently completed typing on the team and team members of the product division, currently implementing the team member page to display each member's profile and experience. Further work includes improving user experience, such as a dynamic header.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UMGMCDetail;
