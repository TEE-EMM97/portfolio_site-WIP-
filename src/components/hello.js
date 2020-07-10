import React from "react"
import PropTypes from "prop-types"
import {motion} from "framer-motion"
import styles from "./layout.module.css" 
// import { Link } from "gatsby"

const Hello = ({ siteDescription }) => {
  const variants = {
    rotate: [0, -25, 0, -25, 0]
  }
  return (
    <div className={styles.intro}>
      <div className="d-flex flex-row">
        <div style={{ fontSize: "2.5rem" }}>Hello!</div>
        <motion.div
          whileHover={variants}
          animate={variants}
          transition={{ type: "tween", stiffness: 100 }}
          className=""
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
      <h3 style={{ marginTop: "11.3125rem", fontSize:'1.25rem' }}>
        <span>Get in touch </span>
        <span style={{paddingRight:10}}className="emoji-point" aria-label="hand-point" role="img">
          👉
        </span>
        <span>
          <a
            href="mailto:tevmcc@gmail.com"
            target="_blank"
            className="highlight-link"
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
