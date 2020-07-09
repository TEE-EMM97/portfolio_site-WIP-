import React from "react"
import PropTypes from "prop-types"
import {motion} from "framer-motion"
import './toggle.css'
// import { Link } from "gatsby"

const Hello = ({ siteDescription }) => {
  return (
    <div style={{ maxWidth: "80%" }}>
          <h1>
            Hello!
            <motion.div role="img" aria-label="hand-wave" class="emoji wave-hand animated" initial={{ y:0, x:0 }}
            animate={{rotate: [0, -5, 0, -5, 0]}}
            transition={{type: 'spring', duration: 5}}
            >
              👋
            </motion.div>
          </h1>


      <h2>{siteDescription}</h2>
      <h3 class="intro__contact">
        <span>Get in touch </span>
        <span class="emoji-point" aria-label="hand-point" role="img">
          👉
        </span>
        <span>
          <a
            href="mailto:tevmcc@gmail.com"
            target="_blank"
            class="highlight-link"
            rel="noreferrer"
          >
            tevmcc@gmail.com
          </a>
        </span>
      </h3>
    </div>
  )
}

Hello.protoTypes = {
  siteDescription: PropTypes.string,
}

Hello.defaultProps = {
  siteDescription: ``,
}

export default Hello
