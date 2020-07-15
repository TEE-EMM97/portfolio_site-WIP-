import React from 'react'
import JobData from "../../content/jobs.json"
import Fade from "react-reveal/Fade"
import styles from "./layout.module.css" 

const Experience = () => {
  return (
    <div className="d-flex flex-row">
      <Fade>
        <div className={styles.title}>Experience</div>
        <div className="flex-column">
            {JobData.jobs.map((data, index) => {
              return (
                <div key={`${index}`}>
                  <a href={data.url}>{data.company}</a>
                  <p>{data.position}</p>
                  <p>{data.time}</p>
                </div>
              )
            })}
        </div>
        {/* <a href="{{site.resume}}" target="_blank" className="arrow-link">
          View My Resume
        </a> */}
      </Fade>
    </div>
  )
}

export default Experience
