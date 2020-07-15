import React from 'react'
import SkillData from "../../content/skills.json"

const Skills = () => {
  return (
    <div>
      <h1>Skills</h1>
      {SkillData.languages.map((data, index) => {
        return (
          <div key={`${index}`}>
            <a href={data.url}>{data.company}</a>
            <p>{data.position}</p>
            <p>{data.time}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Skills
