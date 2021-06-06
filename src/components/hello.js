import React from "react"
import PropTypes from "prop-types"
import {motion} from "framer-motion"
import Fade from "react-reveal/Fade"
import "./layout.scss" 
// import { Link } from "gatsby"

const Hello = ({ siteDescription}) => {
  const variants = {
    rotate: [0, -25, 0, -25, 0]
  }

  return (
    <div className="intro">
      <Fade>
      <div className="intro__hello">
        <div style={{ fontSize: "2.5rem" }}>Hello!</div>
        <motion.div
          whileHover={variants}
          animate={variants}
          transition={{ type: "tween", stiffness: 100 }}
          style={{ fontSize: "2.5rem", paddingLeft: 10 }}
        >
          <span role="img" aria-labelledby="waving">
            👋
          </span>
        </motion.div>
      </div>
      <h2 style={{fontSize: "2.5rem" }}>
        {siteDescription}
      </h2>
      <div
        className="intro__touch"
        style={{
          fontSize: "1.25rem",
        }}
      >
        <div><p>Get in touch!</p></div>
        <motion.span
          whileHover={variants}
          animate={variants}
          transition={{ type: "tween", stiffness: 100 }}
          style={{ paddingLeft: 12, paddingRight: 12 }}
        >
          <span role="img" aria-labelledby="pointer">
            👉
          </span>
        </motion.span>
        <span className="emailStyle">
          <a href="mailto:tevmcc@gmail.com" target="_blank" rel="noreferrer">
            tevmcc@gmail.com
          </a>
        </span>
      </div>
      </Fade>
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
