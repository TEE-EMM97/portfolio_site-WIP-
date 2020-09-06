import React from "react"
import socialData from "../../content/socials.json"

const Footer = () => {
  return (
    <div>
      <footer className="w-100 d-flex pb-3">
        <div className="footer__copyright">
          <div className="top">
            <span>Developed by</span>
          </div>
          <div className="bottom">
            <span>Tevon McCrea</span>
            <span>{new Date().getFullYear()}</span>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-end align-items-end ml-auto">
          {socialData.socialMedia.map((data, index) => {
            return (
              <li key={`${index}`} className="pl-3">
                <a href={data.url} target="_blank" rel="noreferrer">
                  {data.name}
                </a>
              </li>
            )
          })}
        </div>
      </footer>
    </div>
  )
}

export default Footer
