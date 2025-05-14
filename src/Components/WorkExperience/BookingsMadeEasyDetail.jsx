import React from 'react';
import WorkBackButton from '../Utilities/WorkBackButton';
import '../../App.css';
import '../WorkExperience/WorkExperienceDetail.css';
import ScrollToTop from '../Utilities/ScrollToTop';
import WorkExperienceHeader from './WorkExperienceHeader';
import jobExperienceData from '../../Data/jobExperienceData'; // Import jobExperienceData

function BookingsMadeEasyDetail() {
  const job = jobExperienceData["BookingsMadeEasy"]; // Get BookingsMadeEasy data

  if (!job) {
    return <div>Job experience not found.</div>;
  }

  return (
    <>
      <WorkBackButton />
      <ScrollToTop />
      <WorkExperienceHeader companyName="BookingsMadeEasy" />
      {/* Section for Bookings Made Easy Details */}
      <section className="section" data-aos="fade-up" style={{ width: '62%', margin: '40px auto 40px auto' }}> {/* Increased top margin */}
        <div className="work-experience-detail-content"> {/* Using work-experience-detail-content class */}
              <div style={{ textAlign: 'left', alignSelf: 'flex-start', marginTop: '-20px' }}>
                <h3><span className="subtitle">Web Developer</span></h3> {/* Use jobTitle from data */}
                <p className="date-text"><i>Nov 2024 - Jan 2025</i></p> {/* Date in italics */}
              </div>
              <div className="description" style={{ textAlign: 'left' }}>
                <p>I build websites for clients through our platform, MonthlySoft, using GoHighLevel, JavaScript, HTML, and CSS. One of our projects was <a href='https://DolphinBayIslandResort.com' target='_blank'>DolphinBayIslandResort</a> in Kota Kinabalu. My partner and I worked together on the layout, media, and overall design direction, while I focused on the technical implementation.</p>
              </div>
            </div>
        <div className="section-divider-subtle"></div>
        <div className="work-experience-detail-content"> {/* Using work-experience-detail-content class */}
              <div style={{ textAlign: 'left', alignSelf: 'flex-start', marginTop: '-20px' }}>
                <h3><span className="subtitle">Web Developer | Software Developer</span></h3> {/* Use jobTitle from data */}
                <p className="date-text"><i>Feb 2025 - Present</i></p> {/* Date in italics */}
              </div>
              <div className="description" style={{ textAlign: 'left' }}>
                <p>Alongside client websites, I’m also developing a booking management system for our company under the brand BookingsMadeEasy. This tool is designed for Airbnb hosts and hotel owners who want a simple way to handle bookings through our custom widget. The widget is built with React (JavaScript) on the frontend, Node.js with Express.js on the backend, and uses MongoDB for the database.</p>
              </div>
            </div>
      </section>
    </>
  );
}

export default BookingsMadeEasyDetail;
