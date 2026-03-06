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
    <main className="main-content">
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
              <p style={{ textAlign: 'left' }}>
                For the <a href="https://www.gamemakersclub.org/" target="_blank" rel="noopener noreferrer">club website</a>, committee data from the Notion backend was parsed and integrated to dynamically render committee information. The committee webpage was implemented based on the provided designs, along with several UX improvements to improve navigation and usability.
              </p>
            </div>

            <div className="description" style={{ textAlign: 'left' }}>
              <p style={{ textAlign: 'left' }}>
                On the <a href="https://stegostudios.gamemakersclub.org/" target="_blank" rel="noopener noreferrer">Product Division website</a>, the team and team member data structure was designed and implemented to support structured profile data. The team member pages were developed to showcase member profiles and experience, alongside UX enhancements such as a dynamic header for improved visual presentation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default UMGMCDetail;
