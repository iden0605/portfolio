import '../../App.css';
import '../WorkExperience/WorkExperienceDetail.css';
import '../Projects/ProjectDetails.css';
import ScrollToTop from '../Utilities/ScrollToTop';
import WorkExperienceHeader from './WorkExperienceHeader';
import jobExperienceData from '../../Data/jobExperienceData';

function StegoStudiosDetail() {
    // get job experience data for Stego Studios
    const job = jobExperienceData["Stego Studios"];

    // handle case where job data is not found
    if (!job) {
        return <div>Job experience not found.</div>;
    }

    // render the job experience detail page
    return (
        <main className="main-content">
            <ScrollToTop />
            <WorkExperienceHeader companyName="Stego Studios" />
            <section className="section detail-terminal-section" data-aos="fade-up">
                <div className="detail-titlebar">
                    <span className="detail-title-text">~/work/stego-studios</span>
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
                                    <h3><span className="subtitle">{job.jobTitle}</span></h3>
                                    <p className="date-text"><i>{job.date}</i></p>
                                </div>
                                <div className="description" style={{ textAlign: 'left' }}>
                                    <p style={{ textAlign: 'left' }}>
                                        At Stego Studios, I am part of a dedicated 9-person team building <em>Cascade</em>, a game we have been developing over the course of a year. I specialize in programming core gameplay mechanics, bringing the player experience to life by building robust movement and camera systems. Beyond the basics, I also focus on creating advanced, physics-based interactions like complex gravity and fluid mechanics.
                                    </p>
                                </div>
                                <div className="description" style={{ textAlign: 'left' }}>
                                    <p style={{ textAlign: 'left' }}>
                                        My role frequently involves collaborating with artists and composers to integrate character animations, visual assets, and dynamic audio seamlessly into the Unity engine. I've also implemented foundational infrastructure for the game, including local save systems to persist player progress, dynamic environmental effects, and in-game achievement tracking. Recently, I've been preparing <em>Cascade</em> for distribution on Steam by handling build configurations and integrating the Steamworks SDK.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default StegoStudiosDetail;
