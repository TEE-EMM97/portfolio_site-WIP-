import React from "react"
import JobData from "../../content/jobs.json"
import Fade from "react-reveal/Fade"
import  "./layout/layout.scss"

const Experience = () => {
  return (
    <section className="section xp">
      <Fade>
        <div className="section__title">
          <h3>Experience</h3>
        </div>
        <section className="section__content">
        {JobData.jobs.map((data, index) => {
          return (
              <div className="jobs">
                <div className="job">
                  <div className="place-time">
                    <div><p>
                      <a href={data.url} target="_blank" rel="noreferrer">
                        {data.company}
                      </a>
                    </p></div>
                    
                  <div className="position">
                    {data.position}
                  </div>
                  </div>
                    <p>{data.time}</p>
                </div>
              </div>
          )
        })}
        </section>
        {/* <a href="{{site.resume}}" target="_blank" className="arrow-link">
          View My Resume
        </a> */}
      </Fade>
    </section>
  )
}

export default Experience
