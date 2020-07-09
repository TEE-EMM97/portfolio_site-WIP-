import PropTypes from "prop-types"
import React, { useContext } from "react"
import Context from "../store/context"
import { useTheme } from "emotion-theming"
import "./toggle.css"
// import { Link } from "gatsby"

const Toggle = ({ siteTitle }) => {
    const { state, dispatch } = useContext(Context)
    const theme = useTheme()
  return (
    <header
      className={state.isDark ? theme.dark.font : theme.light.font}
      style={{ paddingTop: "20px", paddingBottom: "20px", paddingRight:20 }}
    >
        <div className="toggle-container">
          <span style={{ color: state.isDark ? "grey" : "yellow" }} role="img">
            ☀︎
          </span>
          <span className="toggle">
            <input
              checked={state.isDark}
              onChange={() => dispatch({ type: "TOGGLE_DARK" })}
              type="checkbox"
              className="checkbox"
              id="checkbox"
              name="checkbox"
            />
            <label htmlFor="checkbox" />
          </span>
          <span
            style={{ color: state.isDark ? "slateblue" : "grey" }}
            role="img"
          >
            ☾
          </span>
        </div>
  
    </header>
  )
}

Toggle.propTypes = {
  siteTitle: PropTypes.string,
}

Toggle.defaultProps = {
  siteTitle: ``,
}

export default Toggle
