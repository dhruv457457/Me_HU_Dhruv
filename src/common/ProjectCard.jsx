import React, { useState } from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ staticSrc, gifSrc, link }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className={styles.projectCard}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img 
        src={hovered ? gifSrc : staticSrc} 
        alt="Project Preview" 
        className={styles.projectImage} 
      />
    </a>
  );
};

export default ProjectCard;
