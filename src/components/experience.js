import React from 'react'
import JobData from "../../content/jobs.json"

const Experience = () => {
  return (
    <div>
      <section class="section experience">
        <div class="section__title">Experience</div>
        <div class="section__content">
          <div class="jobs">
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

          <a href="{{site.resume}}" target="_blank" class="arrow-link">
            View My Resume
          </a>
        </div>
      </section>
    </div>
  )
}

export default Experience
