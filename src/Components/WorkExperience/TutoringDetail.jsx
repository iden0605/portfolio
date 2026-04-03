import '../../App.css';
import '../WorkExperience/WorkExperienceDetail.css';
import '../Projects/ProjectDetails.css';
import ScrollToTop from '../Utilities/ScrollToTop';
import WorkExperienceHeader from './WorkExperienceHeader';
import jobExperienceData from '../../Data/jobExperienceData';

function TutoringDetail() {
  // get job experience data for Freelance Tutoring
  const job = jobExperienceData["Iden McElhone (Freelance)"];

  // handle case where job data is not found
  if (!job) {
    return <div>Job experience not found.</div>;
  }

  // render the job experience detail page
  return (
    <main className="main-content">
      <ScrollToTop />
      <WorkExperienceHeader companyName="Iden McElhone (Freelance)" />
      <section className="section detail-terminal-section" data-aos="fade-up">
        <div className="detail-titlebar">
          <span className="detail-title-text">~/work/freelance</span>
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
                  <h3><span className="subtitle">Tutor</span></h3>
                  <p className="date-text"><i>{job.date}</i></p>
                </div>
                <div className="description" style={{ textAlign: 'left' }}>
                  <p style={{ textAlign: 'left' }}>Provided one-on-one tutoring in Mathematics and Programming (Python and C) to five students from Trinity College Foundation Studies. Sessions focused on content revision, conceptual reinforcement, and exam preparation using practice questions and past papers. All five students achieved exceptional results, scoring over 80/100 in Mathematics, and have since progressed to become University of Melbourne alumni.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TutoringDetail;
