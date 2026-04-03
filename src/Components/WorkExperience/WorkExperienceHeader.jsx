import { useState, useRef, useCallback, useLayoutEffect } from 'react';
import '../../App.css';
import './WorkExperienceDetail.css';
import '../Projects/ProjectDetails.css';
import jobExperienceData from '../../Data/jobExperienceData';
import { calculateMonthsInRole } from '../Utilities/DateCalculator';

function WorkExperienceHeader({ companyName }) {
  const job = jobExperienceData[companyName];

  if (!job) return null;

  const { months, isOngoing } = calculateMonthsInRole(job.date);

  const tabs = [
    'overview.md',
    ...(job.keyResponsibilities?.length > 0 ? ['responsibilities.txt'] : []),
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [isGlitching, setIsGlitching] = useState(false);
  const glitchTimers = useRef([]);
  const screenRef = useRef(null);
  const innerRef = useRef(null);

  const syncHeight = useCallback(() => {
    if (screenRef.current && innerRef.current) {
      screenRef.current.style.height = `${innerRef.current.offsetHeight}px`;
    }
  }, []);

  useLayoutEffect(() => { syncHeight(); }, [activeTab, syncHeight]);
  useLayoutEffect(() => {
    if (!innerRef.current) return;
    const ro = new ResizeObserver(syncHeight);
    ro.observe(innerRef.current);
    return () => ro.disconnect();
  }, [syncHeight]);

  const switchTab = (tab) => {
    if (tab === activeTab || isGlitching) return;
    glitchTimers.current.forEach(clearTimeout);
    setIsGlitching(true);
    glitchTimers.current = [
      setTimeout(() => setActiveTab(tab), 150),
      setTimeout(() => setIsGlitching(false), 380),
    ];
  };

  const slug = companyName.toLowerCase().replace(/\s+/g, '-');

  return (
    <section className="section detail-terminal-section" data-aos="fade-up">

      <div className="detail-titlebar">
        <span className="detail-title-text">~/work/{slug} $ ls</span>
        <div className="window-dots">
          <span className="window-dot window-dot--red" />
          <span className="window-dot window-dot--yellow" />
          <span className="window-dot window-dot--green" />
        </div>
      </div>

      <div className="detail-tabs">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`detail-tab${activeTab === tab ? ' active' : ''}`}
            onClick={() => switchTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div ref={screenRef} className={`detail-screen${isGlitching ? ' glitch' : ''}`}>
        <div ref={innerRef} className="detail-screen-inner">

          <div className="detail-prompt-line" key={activeTab}>
            <span className="dp-arrow">❯</span>
            <span className="dp-cmd" style={{ '--cmd-len': activeTab.length + 5 }}> cat {activeTab}</span>
          </div>

          {activeTab === 'overview.md' && (
            <div className="detail-cat-content">
              {job.headerImage && (
                <div className="work-experience-image-container">
                  <img
                    src={job.headerImage}
                    alt={`${companyName} image`}
                    className="work-experience-image"
                  />
                </div>
              )}
              <h2 className="work-experience-company-name">{companyName}</h2>
              <div className="work-experience-job-title">{job.jobTitle}</div>
              {job.description && (
                <p className="detail-body-text">{job.description}</p>
              )}
              <div className="detail-meta-grid">
                <div className="detail-meta-row">
                  <span className="detail-meta-key">time_in_role</span>
                  <span className="detail-meta-val">{months} months{isOngoing ? ' (ongoing)' : ''}</span>
                </div>
                {job.technologies && (
                  <div className="detail-meta-row">
                    <span className="detail-meta-key">technologies</span>
                    <span className="detail-meta-val">{job.technologies}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'responsibilities.txt' && (
            <div className="detail-cat-content">
              <ul className="detail-resp-list">
                {job.keyResponsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

export default WorkExperienceHeader;
