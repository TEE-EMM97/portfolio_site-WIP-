import React from 'react'
import JobData from "../../content/jobs.json"

const Experience = () => {
  return (
    <div>
      <section className="section experience">
        <div className="section__title">Experience</div>
        <div className="section__content">
          <div className="jobs">
            <div>
              {JobData.jobs.map((data, index) => {
                return <div key={`${index}`}>{data.company}</div>
              })}
            </div>
            <div>
              {JobData.jobs.map((data, index) => {
                return <div key={`${index}`}>{data.url}</div>
              })}
            </div>
            <div>
              {JobData.jobs.map((data, index) => {
                return <div key={`${index}`}>{data.time}</div>
              })}
            </div>
            <div>
              {JobData.jobs.map((data, index) => {
                return <div key={`${index}`}>{data.position}</div>
              })}
            </div>
          </div>

          <a href="{{site.resume}}" target="_blank" className="arrow-link">
            View My Resume
          </a>
        </div>
      </section>
    </div>
  )
}

export default Experience
