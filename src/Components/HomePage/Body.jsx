import '../../App.css';
import Profile from './Profile';
import AboutMe from './AboutMe';
import Skills from './Skills';
import EducationAndSkills from './EducationAndSkills';

function Body() {
  // render the main content sections
  return (
    <main className="main-content">
      <Profile />

      <div data-aos="fade-up">
        <hr className="section-divider"  />
      </div>

      <AboutMe />

      <div data-aos="fade-up">
        <hr className="section-divider" />
      </div>

      <Skills />

      <div data-aos="fade-up">
        <hr className="section-divider" />
      </div>

      <EducationAndSkills />
    </main>
  );
}

export default Body;
