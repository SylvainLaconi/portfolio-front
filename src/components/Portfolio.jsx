import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import Skills from './Skills';
import Works from './Works';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';

const Portfolio = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <AboutMe />
      <Works />
      <Skills />
      <ContactMe />
    </div>
  );
};

export default Portfolio;
