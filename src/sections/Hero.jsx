import { useTheme } from '../common/ThemeContext.jsx';
import styles from './Hero.module.css';
import heroimage from '../assets/hero-img.png';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';
import tl from '../assets/twitter-light.svg';
import td from '../assets/twitter-dark.svg';
import Ll from '../assets/linkedin-light.svg';
import Ld from '../assets/linkedin-dark.svg';
import gl from '../assets/github-light.svg';
import gd from '../assets/github-dark.svg';
import CV from '../assets/cv.pdf';
import Particles from '../common/Particles';  // Import the Particles component


function Hero() {
    const { theme, toggleTheme } = useTheme();
    const github = theme === 'light' ? gl : gd;
    const themeIcon = theme === 'light' ? sun : moon;
    const twit = theme === 'light' ? tl : td;
    const linkdin = theme === 'light' ? Ll : Ld;

    return (
        <section id="hero" className={styles.container}>
        {/* Particle effect background */}
        <div className={styles.particlesContainer}>
            <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
            />
        </div>
    
        {/* Theme toggle and hero image */}
        <div className={styles.colorMode}>
            <img className={styles.hero} src={heroimage} alt="profile pic" />
            <img className={styles.colorimg} src={themeIcon} alt="color mode icon" onClick={toggleTheme} />
        </div>
    
        {/* Hero Info */}
        <div className={styles.info}>
            <h1>Dhruv <br /> Pancholi</h1>
            <h2>Frontend Developer</h2>
            <span>
                <a href="https://x.com/DHRUVPANCH3701" target="_blank">
                    <img src={twit} alt="X icon" />
                </a>
                <a href="https://www.linkedin.com/in/dhruv-pancholi-222704250/" target="_blank">
                    <img src={linkdin} alt="LinkedIn icon" />
                </a>
                <a href="https://github.com/dhruv457457" target="_blank">
                    <img src={github} alt="GitHub icon" />
                </a>
            </span>
    
            <p className={styles.desc}>
                Building modern React apps | Web3 enthusiast | Seeking web dev internship
            </p>
    
            <a href={CV} download>
                <button className="hover">Resume</button>
            </a>
        </div>
    </section>
    
    );
}

export default Hero;
