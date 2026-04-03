import './Profile.css';

function Profile() {
  // define name and tagline
  const name = "Iden McElhone";
  const tagline = "Systems & Cloud Architect | DevOps Engineer";

  // render the profile section
  return (
    <section className="section profile-section" data-aos="fade-up">
      <div className="profile-prompt-line">
        <span className="profile-prompt-arrow">❯</span>
        <span className="profile-prompt-cmd" style={{ '--cmd-len': 12 }}> cat bio.md</span>
      </div>
      <img src="/iden_image.jpg" alt="Iden McElhone's profile picture" className="profile-picture" />
      <h1>{name}</h1>
      <p>{tagline}</p>
      <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
        <button className="cta-button">View Resume</button>
      </a>
    </section>
  );
}

export default Profile;
