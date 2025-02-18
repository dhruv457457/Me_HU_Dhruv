import React, { useState } from 'react';
import styles from './Projects.module.css';
import ProjectsCard from '../common/ProjectCard.jsx';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.ProjectsContainer}>
        <ProjectsCard 
          link={'https://herb-sphere.vercel.app/'}
          h3={'Ayurherb'}
          p={'The Virtual Herbal Garden'}
        />
        <ProjectsCard 
          link={'https://cryptify-defi.vercel.app/'}
          h3={'Cryptify DeFi'}
          p={'A secure SWC & smart payment platform'}
        />
        <ProjectsCard 
          link={'https://fund-raising-on-flow-chain.vercel.app/'}
          h3={'Crowdfunding DApp'}
          p={'A decentralized crowdfunding platform'}
        />
      </div>
    </section>
  );
}

export default Projects;