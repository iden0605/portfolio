import { Link } from 'react-router-dom';
import '../../App.css';

function AboutMe() {
  // define the section title
  const title = "About Me";

  // render the about me section
  return (
    <section className="section" data-aos="fade-up">
      <div className="aboutme-container">
        <h2>{title}</h2>

        <p className="about-me-text">
          Hi! I'm <strong>Iden</strong>, a Computer Science student at the University of Melbourne
          focused on <strong>full-stack development</strong> and <strong>DevOps engineering</strong>. I enjoy building scalable,
          user-focused applications and automating build, test, and deployment workflows using
          CI/CD and cloud technologies.
        </p>

        <p className="about-me-text">
          I work across the full stack using a range of modern frameworks and technologies,
          with experience building frontend applications, backend services, and data-driven systems.
          I adapt quickly to new tools and choose technologies based on the problem being solved.
        </p>

        <p className="about-me-text">
          I’ve worked as a DevOps Engineering Intern at <strong>Kewpump</strong>, where I contributed to cloud-based CI/CD integration for a production
          application, implemented authentication workflows, built GitHub Actions pipelines,
          and application testing. I also have experience in tutoring
          and freelance web development, including co-founding <strong>BookingsMadeEasy</strong>.
        </p>

        <p className="about-me-text">
          Check out my <Link to="/projects" className="about-me-link">projects</Link> and <Link to="/work-experience" className="about-me-link">work experiences</Link>!
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
