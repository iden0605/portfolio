import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './WorkExperience.css';
import jobExperienceData from '../../Data/jobExperienceData';
import { calculateMonthsInRole } from '../Utilities/DateCalculator';

function WorkExperience() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="main-content">
      <div className="work-terminal" data-aos="fade-up">

        {/* Title bar */}
        <div className="work-titlebar">
          <span className="work-title-text">~/work</span>
          <div className="window-dots">
            <span className="window-dot window-dot--red" />
            <span className="window-dot window-dot--yellow" />
            <span className="window-dot window-dot--green" />
          </div>
        </div>

        {/* Screen */}
        <div className="work-screen">
          <div className="work-scanlines" />
          <div className="work-screen-inner">

            {/* Prompt */}
            <div className="work-prompt-line">
              <span className="work-prompt-arrow">❯</span>
              <span className="work-prompt-cmd" style={{ '--cmd-len': 7 }}> ls -la</span>
            </div>

            {/* Table */}
            <div className="work-table">
              {Object.entries(jobExperienceData).map(([companyName, job], index) => {
                const { months, isOngoing } = calculateMonthsInRole(job.date);
                const dirName = companyName.toLowerCase().replace(/\s+/g, '-') + '/';

                return (
                  <Link
                    to={`/work-experience/${job.tokenizedName}`}
                    key={companyName}
                    className="work-row"
                    data-aos="fade-up"
                    data-aos-delay={index * 60}
                  >
                    <img
                      src={job.cardImage}
                      alt={companyName}
                      className="work-logo"
                    />
                    <span className="work-dir-name">{dirName}</span>
                    <span className="work-company-name">{companyName}</span>
                    <span className="work-job-title">{job.jobTitle}</span>
                    <span className="work-date">{job.date}</span>
                    <span className={`work-duration${isOngoing ? ' work-duration--ongoing' : ''}`}>
                      {isOngoing && (
                        <span className="work-ongoing-dot-wrap">
                          <span className="work-ongoing-ring" />
                          <span className="work-ongoing-dot" />
                        </span>
                      )}
                      {isOngoing ? 'Ongoing' : `${months} months`}
                    </span>
                    <span className="work-arrow">→</span>
                  </Link>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}

export default WorkExperience;
