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
    <>
      <ScrollToTop />
      <WorkExperienceHeader companyName="Kewpump" />
      <section className="section" data-aos="fade-up">
        <div className="image-description-section">
          <div className="image-description-block">
            <div style={{ textAlign: 'left', alignSelf: 'flex-start', marginTop: '-20px' }}>
              <h3><span className="subtitle">{job.jobTitle}</span></h3>
              <p className="date-text"><i>{job.date}</i></p>
            </div>
            <div className="description" style={{ textAlign: 'left' }}>
              <p style={{ textAlign: 'left' }}>
                I was responsible for designing and implementing the full development and deployment architecture for a manufacturing monitoring web application used in a production factory environment. My role focused on building a reliable, automated, cloud-native deployment pipeline that supported both staged and production releases on Google Cloud.
              </p>
              <p style={{ textAlign: 'left' }}>
                This included containerising the application stack and creating branch-oriented CI/CD workflows using GitHub Actions, where development changes triggered staged deployments and testing, while main branch updates deployed directly to production. I also implemented automated testing to validate frontend availability, backend API endpoints, and database operations after each deployment.
              </p>
              <p style={{ textAlign: 'left' }}>
                In addition, I configured secure cloud infrastructure such as private VPC networking, Cloud SQL (PostgreSQL), and service-to-service connectivity, while ensuring production reliability through environment-based configuration and automatic service restarts. To support team scalability, I documented the deployment process and created reusable workflow guides to standardise deployments across the organisation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default KewPumpDetail;
