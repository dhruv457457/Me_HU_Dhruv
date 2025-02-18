import React from 'react';
import Hero from './sections/Hero.jsx';
import Projects from './sections/Projects.jsx';
import Skill from './sections/Skill.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';
import BotpressChat from './sections/BotpressChat.jsx';
import Achievements from './sections/Achievements.jsx'; 
// import DockNav from './common/DockNav.jsx'; // Import DockNav

const App = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Achievements />
      <Skill />
      <Contact />
      <BotpressChat />
      <Footer />
      
      {/* DockNav should be placed at the bottom of the screen */}
      {/* <DockNav /> */}
    </div>
  );
};

export default App;
