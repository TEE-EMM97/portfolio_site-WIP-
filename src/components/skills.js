import React from 'react'
import SkillData from "../../content/skills.json"
import Fade from "react-reveal/Fade"
import styles from "./layout.module.css" 

const Skills = () => {
  return (
    <div className="d-flex flex-row">
      <Fade>
      <div className={styles.title}>Skills</div>
      <div className="flex-column">
        <p className={styles.title}>Languages</p>
        {SkillData.languages.map((data, index) => {
          return <li key={`${index}`}>{data.item}</li>
        })}
      </div>
      <div className="flex-column">
        <p className={styles.title}>Frameworks</p>
        {SkillData.frameworks.map((data, index) => {
          return <li key={`${index}`}>{data.item}</li>
        })}
      </div>
      <div className="flex-column">
        <p className={styles.title}>Tools</p>
        {SkillData.tools.map((data, index) => {
          return <li key={`${index}`}>{data.item}</li>
        })}
      </div>
      <div className="flex-column">
        <p className={styles.title}>Design</p>
        {SkillData.tools.map((data, index) => {
          return <li key={`${index}`}>{data.item}</li>
        })}
      </div>
      </Fade>
    </div>
  )
}

export default Skills
