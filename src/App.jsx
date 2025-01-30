import React from 'react';
import './App.css';
import Hero from "./sections/Hero.jsx";
import Projects from './sections/Projects.jsx';
import Skill from './sections/Skill.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';
;// import MenuPort from './components/MenuPort';

const App = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
