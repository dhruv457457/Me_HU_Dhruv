import React from 'react';
import styles from './ProjectCard.module.css';

function ProjectCard({ src, link, h3, p }) {
  return (
    <a href={link} target='_blank' rel='noopener noreferrer' className={styles.card}>
      <img src={src} alt={`${h3} logo`} className={styles.image} />
      <div className={styles.cardContent}>
        <h3>{h3}</h3>
        <p>{p}</p>
      </div>
    </a>
  );
}

export default ProjectCard;
