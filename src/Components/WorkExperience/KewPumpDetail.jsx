import '../../App.css';
import '../WorkExperience/WorkExperienceDetail.css';
import ScrollToTop from '../Utilities/ScrollToTop';
import WorkExperienceHeader from './WorkExperienceHeader';
import jobExperienceData from '../../Data/jobExperienceData';

function KewPumpDetail() {
  // get job experience data for KewPump
  const job = jobExperienceData["Kewpump"];

  // handle case where job data is not found
  if (!job) {
    return <div>Job experience not found.</div>;
  }

  // render the job experience detail page
  return (
    <main className="main-content">
      <ScrollToTop />
      <WorkExperienceHeader companyName="Kewpump" />
      <section className="section" data-aos="fade-up">

        <div className="image-description-section">
          <div className="image-description-block">
            <div style={{ textAlign: 'left', alignSelf: 'flex-start', marginTop: '-20px' }}>
              <h3><span className="subtitle">Junior Software Developer</span></h3>
              <p className="date-text"><i>Jan 2026 - Present</i></p>
            </div>
            <div className="description" style={{ textAlign: 'left' }}>
              <p style={{ textAlign: 'left' }}>
                Promoted to participate in software development following successful delivery of CI/CD pipelines and automated testing.
              </p>
              <p style={{ textAlign: 'left' }}>
                Designed and implemented secure authentication and role-based access control for a manufacturing monitoring platform.
              </p>
              <p style={{ textAlign: 'left' }}>
                Improved database querying and data-fetching performance to support real-time factory equipment monitoring. and Enhanced frontend UI/UX to improve usability and clarity for factory users.
              </p>
            </div>
          </div>
        </div>


        <div className="section-divider-subtle" style={{marginTop: '30px', marginBottom: "40px"}}></div>
        <div className="image-description-section">
          <div className="image-description-block">
            <div style={{ textAlign: 'left', alignSelf: 'flex-start', marginTop: '-20px' }}>
              <h3><span className="subtitle">{job.jobTitle}</span></h3>
              <p className="date-text"><i>{job.date}</i></p>
            </div>
            <div className="description" style={{ textAlign: 'left' }}>
              <p style={{ textAlign: 'left' }}>
                Responsible for designing and implementing the full development and deployment architecture for a manufacturing monitoring web application used in a production factory environment. Focused on building a reliable, automated, cloud-native deployment pipeline that supported both staged and production releases on Google Cloud.
              </p>
              <p style={{ textAlign: 'left' }}>
                Containerised the application stack and created branch-oriented CI/CD workflows using GitHub Actions, where development changes triggered staged deployments and testing, while main branch updates deployed directly to production. Additionally, implemented automated testing to validate frontend availability, backend API endpoints, and database operations after each deployment.
              </p>
              <p style={{ textAlign: 'left' }}>
                Configured secure cloud infrastructure such as private VPC networking, Cloud SQL (PostgreSQL), and service-to-service connectivity, while ensuring production reliability through environment-based configuration and automatic service restarts. To support team scalability, I documented the deployment process and created reusable workflow guides to standardise deployments across the organisation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default KewPumpDetail;
