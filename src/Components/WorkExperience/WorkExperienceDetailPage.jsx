import { useParams } from 'react-router-dom';
import jobExperienceData from '../../Data/jobExperienceData';
import WorkExperienceHeader from './WorkExperienceHeader';
import NotFound from '../Global/NotFound';
import '../../App.css';
import './WorkExperienceDetail.css';
import '../Projects/ProjectDetails.css';

function WorkExperienceDetailPage() {
  const { slug } = useParams();
  const entry = Object.entries(jobExperienceData).find(([, v]) => v.tokenizedName === slug);

  if (!entry) return <NotFound />;

  const [companyName, job] = entry;

  return (
    <main className="main-content">
      <WorkExperienceHeader companyName={companyName} />

      {job.positions?.length > 0 && (
        <section className="section detail-terminal-section" data-aos="fade-up">
          <div className="detail-titlebar">
            <span className="detail-title-text">~/work/{slug}</span>
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

              {job.positions.map((pos, i) => (
                <div key={i}>
                  {i > 0 && <div className="section-divider-subtle" style={{ marginTop: '30px', marginBottom: '40px' }} />}
                  <div className="image-description-section">
                    <div className="image-description-block">
                      <div style={{ textAlign: 'left', alignSelf: 'flex-start' }}>
                        <h3><span className="subtitle">{pos.title}</span></h3>
                        <p className="date-text"><i>{pos.date}</i></p>
                      </div>
                      {pos.paragraphs.map((p, j) => (
                        <div
                          key={j}
                          className="description"
                          style={{ textAlign: 'left' }}
                          dangerouslySetInnerHTML={{ __html: `<p style="text-align:left">${p}</p>` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default WorkExperienceDetailPage;
