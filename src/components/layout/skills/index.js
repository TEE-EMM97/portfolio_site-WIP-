import React from "react"
import SkillData from "../../../../content/skills.json"
import Fade from "react-reveal/Fade"
import '../layout.scss'
import Particles from '../particles'

const Skills = () => {
  return (
    <section className="section skill">
      <Fade>
        <div className="section__title">
          <h3>Skills</h3>
        </div>
        <div className="section__content">
          <div className="skills">
            <div className="skills__type">
              <p className="skills__type--header">Languages</p>
              <ul>
                {SkillData.languages.map((data, index) => {
                  return <li key={`${index}`}>{data.item}</li>
                })}
              </ul>
            </div>
            <div className="skills__type">
              <p className="skills__type--header">Frameworks</p>
              <ul>
                {SkillData.frameworks.map((data, index) => {
                  return <li key={`${index}`}>{data.item}</li>
                })}
              </ul>
            </div>
            <div className="skills_type">
              <p className="skills__type--header">Tools</p>
              <ul>
                {SkillData.tools.map((data, index) => {
                  return <li key={`${index}`}>{data.item}</li>
                })}
              </ul>
            </div>
            <div className="skills_type">
              <p className="skills__type--header">Design</p>
              <ul>
                {SkillData.design.map((data, index) => {
                  return <li key={`${index}`}>{data.item}</li>
                })}
              </ul>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  )
}

export default Skills
