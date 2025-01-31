import React from 'react';
import './App.css';
import Hero from "./sections/Hero.jsx";
import Projects from './sections/Projects.jsx';
import Skill from './sections/Skill.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';
import BotpressChat from './sections/BotpressChat.jsx'; // Import chatbot component

const App = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Skill />
      <Contact />
      <BotpressChat /> {/* Chatbot injected before the footer */}
      <Footer />
    </div>
  );
};

export default App;
