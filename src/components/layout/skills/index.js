import React from "react"
import SkillData from "../../../../content/skills.json"
import Fade from "react-reveal/Fade"
import '../layout.scss'

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
              <h5 className="skills__type--header">Languages</h5>
              <ul>
                {SkillData.languages.map((data, index) => {
                  return <li key={`${index}`}><p>{data.item}</p></li>
                })}
              </ul>
            </div>
            <div className="skills__type">
              <h5 className="skills__type--header">Frameworks</h5>
              <ul>
                {SkillData.frameworks.map((data, index) => {
                  return <li key={`${index}`}><p>{data.item}</p></li>
                })}
              </ul>
            </div>
            <div className="skills_type">
              <h5 className="skills__type--header">Tools</h5>
              <ul>
                {SkillData.tools.map((data, index) => {
                  return <li key={`${index}`}><p>{data.item}</p></li>
                })}
              </ul>
            </div>
            <div className="skills_type">
              <h5 className="skills__type--header">Design</h5>
              <ul>
                {SkillData.design.map((data, index) => {
                  return <li key={`${index}`}><p>{data.item}</p></li>
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
