import React from 'react';
import styles from './Achievements.module.css';
import achievementImage1 from '../assets/achievement1.png';
import achievementImage2 from '../assets/achievement2.png';
import achievementImage3 from '../assets/achievement3.png';

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

const Achievements = () => {
  return (
    <section id='achievements' className={styles.container}>
      <h1 className="sectionTitle">Achievements</h1>
      <div className={styles.achievementsContainer}>
        <AchievementCard
          title="Achievement 1"
          description="Successfully completed XYZ Hackathon."
          date="March 2024"
          image={achievementImage1}
        />
        <AchievementCard
          title="Achievement 2"
          description="Developed an AI-based web application."
          date="April 2024"
          image={achievementImage2}
        />
        <AchievementCard
          title="Achievement 3"
          description="Won 2nd Prize in a national competition."
          date="May 2024"
          image={achievementImage3}
        />
      </div>
    </section>
  );
};

export default Achievements;
