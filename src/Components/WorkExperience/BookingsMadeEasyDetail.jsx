import '../../App.css';
import '../WorkExperience/WorkExperienceDetail.css';
import '../Projects/ProjectDetails.css';
import ScrollToTop from '../Utilities/ScrollToTop';
import WorkExperienceHeader from './WorkExperienceHeader';
import jobExperienceData from '../../Data/jobExperienceData'; // Import jobExperienceData

function BookingsMadeEasyDetail() {
  // get job experience data for Bookings Made Easy
  const job = jobExperienceData["Bookings Made Easy"]; // Get Bookings Made Easy data

  // handle case where job data is not found
  if (!job) {
    return <div>Job experience not found.</div>;
  }

  // render the job experience detail page
  return (
    <main className="main-content">
      <ScrollToTop />
      <WorkExperienceHeader companyName="Bookings Made Easy" />
      {/* Section for Bookings Made Easy Details */}
      <section className="section detail-terminal-section" data-aos="fade-up">
        <div className="detail-titlebar">
          <span className="detail-title-text">~/work/bookings-made-easy</span>
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
                  <h3><span className="subtitle">Web Developer</span></h3> {/* Use jobTitle from data */}
                  <p className="date-text"><i>Nov 2024 - Jan 2025</i></p> {/* Date in italics */}
                </div>
                <div className="description" style={{ textAlign: 'left' }}>
                  <p style={{ textAlign: 'left' }}>Websites were built for clients through the MonthlySoft platform, using GoHighLevel, JavaScript, HTML, and CSS. A notable project was the site for <a href='https://DolphinBayIslandResort.com' target='_blank'>DolphinBayIslandResort</a> in Kota Kinabalu. While design direction was a collaborative effort, the focus of this role was on technical implementation.</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BookingsMadeEasyDetail;
