import React from "react"
import PropTypes from "prop-types"
import {motion} from "framer-motion"
import Fade from "react-reveal/Fade"
import { Link } from 'gatsby';
import  "./layout/layout.scss"
// import { Link } from "gatsby"

const Hello = ({ siteDescription}) => {
  const variants = {
    rotate: [0, -25, 0, -25, 0]
  }

  return (
    <div className="intro">
      <Fade>
        <div className="intro__hello">
          <h2>Hello!</h2>
          <motion.div
            whileHover={variants}
            animate={variants}
            transition={{ type: "tween", stiffness: 100 }}
            style={{ paddingLeft: 10, lineHeight: '38px'}}
          >
            <span role="img" aria-labelledby="waving">
              👋
            </span>
          </motion.div>
        </div>
        <p className="intro__para">{siteDescription}</p>
        <div className="intro__touch">
            <p>Check my blog</p>
          <motion.span
            whileHover={variants}
            animate={variants}
            transition={{ type: "tween", stiffness: 100 }}
            style={{ paddingLeft: 12, paddingRight: 12, lineHeight: '30px' }}
          >
            <span role="img" aria-labelledby="pointer">
              👉
            </span>
          </motion.span>
          <span className="emailStyle">
            <Link to='/blog/'>
              Blog
            </Link>
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
