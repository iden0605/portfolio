import StatsStrip from './StatsStrip';
import { useReveal } from '../../hooks/useReveal';
import './Profile.css';

function Profile() {
  // define name and tagline
  const name = "Iden McElhone";
  const tagline = "Systems & Cloud Architect | DevOps Engineer";
  const { ref, className } = useReveal({ immediate: true });

  // render the profile section
  return (
    <section ref={ref} className={`section profile-section ${className}`} style={{ '--reveal-delay': '0ms' }}>
      <div className="profile-prompt-line">
        <span className="profile-prompt-arrow">❯</span>
        <span className="profile-prompt-cmd" style={{ '--cmd-len': 12 }}> cat bio.md</span>
      </div>
      <div className="profile-picture-wrap">
        <img src="/iden_image.jpg" alt="Iden McElhone's profile picture" className="profile-picture" />
        <span className="profile-status-dot" aria-hidden="true" />
      </div>
      <h1>{name}</h1>
      <p>{tagline}</p>
      <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
        <button className="cta-button">View Resume</button>
      </a>

      <div className="profile-divider" />
      <StatsStrip />
    </section>
  );
}

export default Profile;
