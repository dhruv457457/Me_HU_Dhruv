import React from 'react';
import './App.css';
import Hero from "./sections/Hero.jsx";
import Projects from './sections/Projects.jsx';
import Skill from './sections/Skill.jsx';
;// import MenuPort from './components/MenuPort';

const App = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Skill />
    </div>
  );
};

export default App;
