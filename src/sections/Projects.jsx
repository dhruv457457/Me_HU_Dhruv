import styles from './Projects.module.css';
import Ayurtherb from "../assets/Ayurherb-proj.png";
import CrowdFund from "../assets/crowdfund-static.png";
import Cryptify from "../assets/cryptify-static.jpeg";
import ProjectCard from '../common/ProjectCard.jsx';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.ProjectsContainer}>
        <ProjectCard 
          link={'https://herb-sphere.vercel.app/'}
          title={'Ayurherb'}
          description={'The Virtual Herbal Garden'}
          staticSrc={Ayurtherb}
        />
        <ProjectCard 
          link={'https://cryptify-defi.vercel.app/'}
          title={'Cryptify DeFi'}
          description={'A secure SWC & payment platform'}
          staticSrc={Cryptify}
        />
        <ProjectCard 
          link={'https://fund-raising-on-flow-chain.vercel.app/'}
          title={'Crowdfunding DApp'}
          description={'A crowdfunding Dapp'}
          staticSrc={CrowdFund}
        />
      </div>
    </section>
  );
}

export default Projects;
