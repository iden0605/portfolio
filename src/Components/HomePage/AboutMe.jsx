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

        <p>
          Hi! I'm <strong>Iden</strong>, a Computer Science student at the University of Melbourne
          with a strong focus on AI and web development. I'm passionate about building full-stack
          applications that are meaningful and user-focused.
        </p>

        <p>
          I primarily work with <strong>React (JavaScript/Typescript)</strong> for frontend development,
          <strong> Flask (Python)</strong> or <strong>Node (JavaScript)</strong> for backend development,
          and <strong>MongoDB</strong> for data storage.
        </p>

        <p>
          Outside of my personal projects, I have experience in tutoring and freelance web development,
          including co-founding the business <strong>BookingsMadeEasy</strong>. Through this, I've strengthened
          my ability to communicate technical ideas clearly, manage real-world client needs, and collaborate
          effectively in small teams.
        </p>

        <p>
          Check out my <Link to="/projects" className="about-me-link">projects</Link> and <Link to="/work-experience" className="about-me-link">work experiences</Link>!
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
