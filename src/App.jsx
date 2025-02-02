import React from 'react';
import Hero from './sections/Hero.jsx';
import Projects from './sections/Projects.jsx';
import Skill from './sections/Skill.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';
import BotpressChat from './sections/BotpressChat.jsx';
import Achievements from './sections/Achievements.jsx'; // Import Achievements component

const App = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Achievements /> {/* Add Achievements section */}
      <Skill />
      <Contact />
      <BotpressChat />
      <Footer />
    </div>
  );
};

export default App;