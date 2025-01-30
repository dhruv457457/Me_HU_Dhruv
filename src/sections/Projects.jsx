import React from 'react'
import styles from './Projects.module.css'
import Ayurherb from '../assets/viberr.png';
import ProjectsCard from '../common/ProjectCard.jsx';
import CrowdFundDapp from '../assets/fresh-burger.png';
function Projects() {
  return (
    <section id='projects' className={styles.container} > 
    <h1 className="sectionTitle" >Projects</h1>
    <div className={styles.ProjectsContainer} >
       <ProjectsCard src={Ayurherb} link={'https://github.com/dhruv457457/Virtualherbal-Garden'} h3={"Ayurherb"} p={"The Virtual Herbal Garden"} />
       <ProjectsCard src={CrowdFundDapp} link={'https://github.com/dhruv457457/Virtualherbal-Garden'} h3={"Ayurherb"} p={"The Virtual Herbal Garden"} />
       <ProjectsCard src={Ayurherb} link={'https://github.com/dhruv457457/Virtualherbal-Garden'} h3={"Ayurherb"} p={"The Virtual Herbal Garden"} />
    </div>
    </section>

)
}

export default Projects