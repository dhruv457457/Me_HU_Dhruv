import styles from './Hero.module.css';
import {useTheme} from '../common/ThemeContext.jsx';
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

function Hero() {
    const {theme , toggleTheme} = useTheme();
    const github = theme === 'light'?gl :gd ;
    const themeIcon = theme === 'light' ? sun : moon;
    const twit = theme === 'light' ? tl :td;
    const linkdin = theme === 'light'? Ll:Ld ;
    return (
    <section id="hero" className={styles.container} >
        <div className={styles.colorMode} ><img className={styles.hero} src={heroimage} alt="profile pic" />
        <img className={styles.colorimg} src={themeIcon} alt="color mode icon "  onClick={toggleTheme}/ >
        
        </div>
        <div className={styles.info} >
    <h1>Dhruv <br /> Pancholi</h1>
            <h2>Fronted Devloper </h2>
<span>
    <a href="">
        <img src={twit} alt="twitwr icon" />
    </a>
    <a href="">
        <img src={linkdin} alt="linkdin icon" />
    </a>
    <a href="">
        <img src={github} alt="github icon" />
    </a>
</span>

    <p className={styles.desc} >
    With a passion for developing modern React web apps for commercial businesses.
    </p>
<a href={CV}  download>
    <button className='hover' >Resume</button>
</a>
        </div>


    </section>
  )
}

export default Hero