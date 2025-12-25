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

       <div className="about-me-content">
        <p className="about-me-text">
          Hi! I'm <strong>Iden</strong>, a Computer Science student at the University of Melbourne
          with a focus on <strong>full-stack development</strong> and <strong>DevOps engineering</strong>.
          Building scalable, user-focused applications and automating build, test, and deployment
          workflows using CI/CD and cloud technologies are areas of particular interest.
        </p>

        <p className="about-me-text">
          My work covers frontend applications, backend services, and data-driven systems,
          using a range of modern frameworks and technologies. New tools are picked up
          quickly, with technical decisions guided by the problem being solved.
        </p>

        <p className="about-me-text">
          Professional experience includes working as a DevOps Engineering Intern at
          <strong> Kewpump</strong>, as well as tutoring and freelance web development,
          including the co-founding of <strong>BookingsMadeEasy</strong>.
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
