import React from 'react'
import style from './Skill.module.css'
import checkMarkicon from '../assets/checkmark-dark.svg'
import SkillList from '../common/SkillList'
function Skill() {
  return (
<section id='skiils'className={style.container} >

    <h1>SKILLS</h1>
   <div className={style.skillList} > 
    <SkillList src={checkMarkicon} skill={"HTML"} />
    <SkillList src={checkMarkicon} skill={"CSS"} />
    <SkillList src={checkMarkicon} skill={"JAVASCRIPT"} />
    <SkillList src={checkMarkicon} skill={"SOLIDITY"} />
    <SkillList src={checkMarkicon} skill={"NODE"} />
     </div>
<hr />  
   <div className={style.skillList} > 
   <SkillList src={checkMarkicon} skill={"REACT JS"} />
    <SkillList src={checkMarkicon} skill={"TAILWIND CSS"} />
    <SkillList src={checkMarkicon} skill={"FIREBASE"} />
    <SkillList src={checkMarkicon} skill={"MONGODB"} />
    <SkillList src={checkMarkicon} skill={"EXPRESS"} />
    
     </div>
     <hr />
   <div className={style.skillList} > 

    <SkillList src={checkMarkicon} skill={"Bootstrap"} />
    <SkillList src={checkMarkicon} skill={"Redux"} />
    <SkillList src={checkMarkicon} skill={"GIt"} />
    <SkillList src={checkMarkicon} skill={"REMIX"} />
    
     </div>

</section>
    
  )
}

export default Skill