import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LuBriefcase, LuUsers } from 'react-icons/lu';
import './WorkExperience.css';
import jobExperienceData from '../../Data/jobExperienceData';
import { calculateMonthsInRole } from '../Utilities/DateCalculator';
import { useReveal } from '../../hooks/useReveal';

function WorkExperience() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ref: terminalRef, className: terminalClassName } = useReveal();
  const { ref: tableRef, revealed: tableRevealed } = useReveal();
  const { ref: clubsRef, revealed: clubsRevealed } = useReveal();

  const entries = Object.entries(jobExperienceData);
  const professional = entries.filter(([, job]) => job.category !== 'club');
  const clubs = entries.filter(([, job]) => job.category === 'club');

  return (
    <main className="main-content">
      <div ref={terminalRef} className={`work-terminal ${terminalClassName}`}>

        {/* Title bar */}
        <div className="work-titlebar">
          <span className="work-title-text">~/work $ ls -la</span>
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

            {/* Professional experience */}
            <div className="work-section-label">
              <LuBriefcase size={14} />
              <span># professional experience</span>
            </div>

            <div className="work-table" ref={tableRef}>
              {professional.map(([companyName, job], index) => {
                const { months, isOngoing } = calculateMonthsInRole(job.date);
                const dirName = companyName.toLowerCase().replace(/\s+/g, '-') + '/';

                return (
                  <Link
                    to={`/work-experience/${job.tokenizedName}`}
                    key={companyName}
                    className={`work-row reveal reveal-row${tableRevealed ? ' reveal-in' : ''}`}
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

            {/* Involvement & societies */}
            {clubs.length > 0 && (
              <>
                <div className="work-section-label work-section-label--clubs">
                  <LuUsers size={14} />
                  <span># involvement &amp; societies</span>
                </div>

                <div className="work-club-list" ref={clubsRef}>
                  {clubs.map(([companyName, job]) => (
                    <Link
                      to={`/work-experience/${job.tokenizedName}`}
                      key={companyName}
                      className={`work-club-row reveal reveal-row${clubsRevealed ? ' reveal-in' : ''}`}
                    >
                      <img
                        src={job.cardImage}
                        alt={companyName}
                        className="work-club-logo"
                      />
                      <div className="work-club-text">
                        <span className="work-club-role">{job.jobTitle}</span>
                        <span className="work-club-sep">—</span>
                        <span className="work-club-company">{companyName.toLowerCase().replace(/\s+/g, '-')}</span>
                      </div>
                      <span className="work-club-date">{job.date}</span>
                    </Link>
                  ))}
                </div>
              </>
            )}

          </div>
        </div>
      </div>
    </main>
  );
}

export default WorkExperience;
