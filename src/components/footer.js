import React from 'react'
import socialData from "../../content/socials.json"

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="footer__copyright">
          <div class="top">
            <span>Developed by</span>
          </div>
          <div class="bottom">
            <span>Tevon McCrea</span>
            <span>{new Date().getFullYear()}</span>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-end">
          {socialData.socialMedia.map((data, index) => {
            return (
              <li key={`${index}`}>
                <a href={data.url} target="_blank">
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
