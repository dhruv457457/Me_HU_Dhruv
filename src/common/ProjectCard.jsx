import React, { useState } from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ staticSrc, link, title, description }) => {
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
      <div className={styles.previewContainer}>
        
          <img src={staticSrc} alt={`${title} Preview`} className={styles.projectImage} />

      </div>
      <div className={styles.projectInfo}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
