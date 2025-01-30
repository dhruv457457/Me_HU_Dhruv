import React from 'react';
import style from './Skill.module.css';
import { useTheme } from '../common/ThemeContext.jsx'; 
import checkMarkLight from '../assets/checkmark-light.svg';
import checkMarkDark from '../assets/checkmark-dark.svg';
import SkillList from '../common/SkillList';

function Skill() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkLight : checkMarkDark;

  return (
    <section id="skills" className={style.container}>
      <h1 className="sectionTitle">SKILLS</h1>
      <div className={style.skillList}>
        <SkillList src={checkMarkIcon} skill={"HTML"} />
        <SkillList src={checkMarkIcon} skill={"CSS"} />
        <SkillList src={checkMarkIcon} skill={"JAVASCRIPT"} />
        <SkillList src={checkMarkIcon} skill={"SOLIDITY"} />
        <SkillList src={checkMarkIcon} skill={"NODE"} />
      </div>
      <hr />
      <div className={style.skillList}>
        <SkillList src={checkMarkIcon} skill={"REACT JS"} />
        <SkillList src={checkMarkIcon} skill={"TAILWIND CSS"} />
        <SkillList src={checkMarkIcon} skill={"FIREBASE"} />
        <SkillList src={checkMarkIcon} skill={"MONGODB"} />
        <SkillList src={checkMarkIcon} skill={"EXPRESS"} />
      </div>
      <hr />
      <div className={style.skillList}>
        <SkillList src={checkMarkIcon} skill={"Bootstrap"} />
        <SkillList src={checkMarkIcon} skill={"Redux"} />
        <SkillList src={checkMarkIcon} skill={"Git"} />
        <SkillList src={checkMarkIcon} skill={"Remix"} />
      </div>
    </section>
  );
}

export default Skill;
