import '../../App.css';
import '../WorkExperience/WorkExperienceDetail.css';
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
    <>
      <ScrollToTop />
      <WorkExperienceHeader companyName="Bookings Made Easy" />
      {/* Section for Bookings Made Easy Details */}
      <section className="section" data-aos="fade-up"> {/* Increased top margin */}
          <div style={{ textAlign: 'left', alignSelf: 'flex-start', marginTop: '-20px' }}>
            <h3><span className="subtitle">Web Developer</span></h3> {/* Use jobTitle from data */}
            <p className="date-text"><i>Nov 2024 - Jan 2025</i></p> {/* Date in italics */}
          </div>
          <div className="description" style={{ textAlign: 'left' }}>
            <p style={{ textAlign: 'left' }}>Websites were built for clients through the MonthlySoft platform, using GoHighLevel, JavaScript, HTML, and CSS. A notable project was the site for <a href='https://DolphinBayIslandResort.com' target='_blank'>DolphinBayIslandResort</a> in Kota Kinabalu. While design direction was a collaborative effort, the focus of this role was on technical implementation.</p>
          </div>
        <div className="section-divider-subtle" style={{marginTop: '30px', marginBottom: "40px"}}></div>
          <div style={{ textAlign: 'left', alignSelf: 'flex-start', marginTop: '-20px' }}>
            <h3><span className="subtitle">Web Developer | Software Developer</span></h3> {/* Use jobTitle from data */}
            <p className="date-text"><i>Feb 2025 - Present</i></p> {/* Date in italics */}
          </div>
          <div className="description" style={{ textAlign: 'left' }}>
            <p style={{ textAlign: 'left' }}>In addition to client websites, a booking management system is under development for the BookingsMadeEasy brand. This tool, designed for Airbnb hosts and hotel owners, simplifies booking management via a custom widget built with React, Node.js, Express.js, and MongoDB.</p>
          </div>
      </section>
    </>
  );
}

export default BookingsMadeEasyDetail;
