import React from "react"
import PropTypes from "prop-types"
import {motion} from "framer-motion"
import Fade from "react-reveal/Fade"
import styles from "./layout.module.css" 
// import { Link } from "gatsby"

const Hello = ({ siteDescription }) => {
  const variants = {
    rotate: [0, -25, 0, -25, 0]
  }

  return (
    <div className={styles.intro}>
      <Fade>
      <div className="d-flex flex-row">
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
      <h2 style={{ marginTop: "11.3125rem", fontSize: "2.5rem" }}>
        {siteDescription}
      </h2>
      <div
        className="d-flex flex-row"
        style={{
          marginTop: "11.3125rem",
          fontSize: "1.25rem",
        }}
      >
        <div>Get in touch!</div>
        <motion.span
          whileHover={variants}
          animate={variants}
          transition={{ type: "tween", stiffness: 100 }}
          style={{ paddingLeft: 4 }}
        >
          <span role="img" aria-labelledby="pointer">
            👉
          </span>
        </motion.span>
        <span className={styles.emailStyle}>
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
