import React from 'react';
// import styles from './AchievementCard.module.css';

const AchievementCard = ({ title, description, date, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{date}</span>
    </div>
  );
};

export default AchievementCard;