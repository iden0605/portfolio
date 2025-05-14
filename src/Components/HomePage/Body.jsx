import '../../App.css';
import Profile from './Profile';
import AboutMe from './AboutMe';
import EducationAndSkills from './EducationAndSkills';

function Body() {
  // render the main content sections
  return (
    <main className="main-content">
      <Profile />

      <hr className="section-divider" />

      <AboutMe />

      <hr className="section-divider" />

      <EducationAndSkills />
    </main>
  );
}

export default Body;
