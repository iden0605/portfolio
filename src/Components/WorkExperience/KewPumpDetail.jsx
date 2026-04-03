import '../../App.css';
import '../WorkExperience/WorkExperienceDetail.css';
import '../Projects/ProjectDetails.css';
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

      <section className="section detail-terminal-section" data-aos="fade-up">
        <div className="detail-titlebar">
          <span className="detail-title-text">~/work/kewpump</span>
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

            {/* Junior Developer Role */}

            <div className="image-description-section">
              <div className="image-description-block">

                <div style={{ textAlign: "left", alignSelf: "flex-start" }}>
                  <h3><span className="subtitle">{job.jobTitle}</span></h3>
                  <p className="date-text"><i>Jan 2026 - Present</i></p>
                </div>

                <div className="description">

                  <p>
                    Promoted to a development role after successfully delivering CI/CD pipelines and automated testing infrastructure during my DevOps internship.
                  </p>

                  <p>
                    Led the migration of the application infrastructure from local hosting to DigitalOcean, improving scalability and reliability for both staging and production environments.
                  </p>

                  <p>
                    Implemented secure authentication using <strong>Authentik</strong>, along with role-based access control (RBAC) using group-based permissions to manage employee access to the platform.
                  </p>

                  <p>
                    Improved frontend styling and user experience across the platform to make the system clearer and easier for factory employees to use.
                  </p>

                  <p>
                    Continue to support the system part-time by maintaining the infrastructure, CI/CD pipelines, and GitHub workflows while providing internal IT support for deployment and operational issues.
                  </p>

                </div>
              </div>
            </div>


            <div className="section-divider-subtle" style={{ marginTop: "30px", marginBottom: "40px" }}></div>


            {/* DevOps Internship */}

            <div className="image-description-section">
              <div className="image-description-block">

                <div style={{ textAlign: "left", alignSelf: "flex-start" }}>
                  <h3><span className="subtitle">Intern DevOps Engineer</span></h3>
                  <p className="date-text"><i>Nov 2025 - Jan 2026</i></p>
                </div>

                <div className="description">

                  <p>
                    Responsible for designing the development and deployment architecture for a centralized factory and product management web application used internally by employees. The platform manages factory equipment, production information, and operational data across the business.
                  </p>

                  <p>
                    Initially deployed the application on Google Cloud, but after evaluating infrastructure costs, helped migrate development environments to a local company server to reduce expenses while maintaining reliable internal access.
                  </p>

                  <p>
                    Containerized the full application stack using Docker and implemented branch-based CI/CD pipelines using GitHub Actions to automate staged and production deployments.
                  </p>

                  <p>
                    After stabilizing the system locally, planned and executed the migration of the full stack (frontend, backend, and database) to DigitalOcean to support scalable cloud hosting and improved deployment workflows.
                  </p>

                  <p>
                    Documented deployment processes and infrastructure setup to ensure the development team could reliably manage and deploy the system going forward.
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

export default KewPumpDetail;
