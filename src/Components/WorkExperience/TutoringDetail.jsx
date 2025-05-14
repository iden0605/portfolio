import React from 'react';
import WorkBackButton from '../Utilities/WorkBackButton';
import '../../App.css';
import '../WorkExperience/WorkExperienceDetail.css';
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
    <>
      <WorkBackButton />
      <ScrollToTop />
      <WorkExperienceHeader companyName="Iden McElhone (Freelance)" />
      <section className="section" data-aos="fade-up">
        <div className="image-description-section">
          <div className="image-description-block">
            <div style={{ textAlign: 'left', alignSelf: 'flex-start', marginTop: '-20px' }}>
              <h3><span className="subtitle">Tutor</span></h3>
              <p className="date-text"><i>{job.date}</i></p>
            </div>
            <div className="description" style={{ textAlign: 'left' }}>
              <p style={{ textAlign: 'left' }}>Provided one-on-one tutoring in Mathematics and Programming (Python and C) to five students from Trinity College Foundation Studies. Sessions focused on content revision, conceptual reinforcement, and exam preparation using practice questions and past papers. All five students achieved exceptional results, scoring over 80/100 in Mathematics, and have since progressed to become University of Melbourne alumni.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TutoringDetail;
