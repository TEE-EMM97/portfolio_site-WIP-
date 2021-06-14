import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/react"
import Context from "../../store/context"
import { useTheme } from '@emotion/react'
import Toggle from "../toggle"
import Footer from "./footer/index"
import "./layout.scss"
const Layout = ({ children }) => {
  const { state } = useContext(Context)
  const theme = useTheme()

  return (
    <div>
      <Toggle />
      <Global styles={css`    * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          body {
            background-color: ${state.isDark
              ? theme.dark.background
              : theme.light.background};

            color: ${state.isDark ? theme.dark.font : theme.light.font};
          }
        `} />
      <div className="content">
        {children}
        <Footer />
      </div>
    </div>
  )
}
      
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
