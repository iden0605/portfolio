import { Link } from 'react-router-dom';
import '../../App.css';

function AboutMe() {
  // define the section title
  const title = "About Me";

  // render the about me section
  return (
    <section className="section" data-aos="fade-up" data-aos-offset="50">
      <div className="aboutme-container">
        <h2>{title}</h2>

        <div className="about-me-content">
          <p className="about-me-text">
            Hi! I'm <strong>Iden</strong>, a Computing & Software Systems student at the University of Melbourne with a focus on <strong>system architecture</strong> and <strong>DevOps engineering</strong>. I’m passionate about designing scalable, reliable, and automated systems, leveraging containerization, CI/CD pipelines, and cloud infrastructure.
          </p>

          <p className="about-me-text">
            My work spans infrastructure design, deployment automation, and maintaining full-stack applications. I thrive on building efficient workflows and making technical decisions that balance performance, security, and maintainability, all while adopting modern tools and technologies.
          </p>

          <p className="about-me-text">
            Professional experience includes working as a DevOps Engineering Intern and Junior Software Developer at <strong>Kewpump</strong>, where I managed containerized applications, implemented GitHub Actions pipelines, and maintained scalable cloud and local deployments. I have also contributed to tutoring and freelance web development, including co-founding <strong>BookingsMadeEasy</strong>.
          </p>
        </div>
        <p className="about-me-text">
          Check out my <Link to="/projects" className="about-me-link">projects</Link> and <Link to="/work-experience" className="about-me-link">work experiences</Link>!
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
