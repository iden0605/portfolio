import './Profile.css';

function Profile() {
  // define name and tagline
  const name = "Iden McElhone";
  const tagline = "Full-Stack Developer | Building innovative web solutions";

  // render the profile section
  return (
    <section className="section profile-section" data-aos="fade-up">
      <img src="/portfolio/iden_image.jpg" alt="Iden McElhone's profile picture" className="profile-picture"/>
      <h1>{name}</h1>
      <p>{tagline}</p>
      <a href="/portfolio/Resume.pdf" target="_blank" rel="noopener noreferrer">
        <button className="cta-button">View Resume</button>
      </a>
    </section>
  );
}

export default Profile;
