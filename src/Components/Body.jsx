import React from 'react';
import '../App.css';
import Profile from './Profile';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';

function Body() {
  return (
    <main className="main-content">
      <Profile />

      <hr className="section-divider" />

      <AboutMe />

      <hr className="section-divider" />

      <Skills />
    </main>
  );
}

export default Body;
