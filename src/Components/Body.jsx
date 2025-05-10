import React from 'react';
import '../App.css';
import Profile from './Profile';
import AboutMe from './AboutMe';
import Projects from './Projects';
import EducationAndSkills from './EducationAndSkills';

function Body() {
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
