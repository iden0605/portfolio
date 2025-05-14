import React from 'react';
import WorkBackButton from '../Utilities/WorkBackButton';
import '../../App.css';
import '../WorkExperience/WorkExperienceDetail.css';
import ScrollToTop from '../Utilities/ScrollToTop';
import WorkExperienceHeader from './WorkExperienceHeader';
import jobExperienceData from '../../Data/jobExperienceData'; // Import jobExperienceData

function TutoringDetail() {
  const job = jobExperienceData["Iden McElhone (Freelance)"];

  if (!job) {
    return <div>Job experience not found.</div>;
  }

  return (
    <>
      <WorkBackButton />
      <ScrollToTop />
      <WorkExperienceHeader companyName="Iden McElhone (Freelance)" />
      {/* Section for Tutoring Details */}
      <section className="section" data-aos="fade-up" style={{ width: '62%', margin: '40px auto 40px auto' }}> {/* Increased top margin */}
        <div className="work-experience-detail-content"> {/* Using work-experience-detail-content class */}
          <div className="image-description-section"> {/* Reusing image-description-section class */}
            <div className="image-description-block"> {/* Reusing image-description-block class */}
              <div style={{ textAlign: 'left', alignSelf: 'flex-start', marginTop: '-20px' }}>
                <h3><span className="subtitle">Tutor</span></h3> {/* Subtitle */}
                <p className="date-text"><i>{job.date}</i></p> {/* Date in italics, moved up, with class */}
              </div>
              <div className="description" style={{ textAlign: 'left' }}>
                <p>Provided one-on-one tutoring in Mathematics and Programming (Python and C) to five students from Trinity College Foundation Studies. Sessions focused on content revision, conceptual reinforcement, and exam preparation using practice questions and past papers. All five students achieved exceptional results, scoring over 80/100 in Mathematics, and have since progressed to become University of Melbourne alumni.</p> {/* Provided description */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TutoringDetail;
