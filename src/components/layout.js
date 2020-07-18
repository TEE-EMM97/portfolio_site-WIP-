/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/core"
import Context from "../store/context"
import { useTheme } from "emotion-theming"
import Hello from "./hello"
import Toggle from "./toggle"
import Container from "./container"
import Background from './background'
import Experience from './experience'
import Skills from './skills'
import Footer from './footer'
import "./layout.module.css"

const Layout = () => {
  const { state } = useContext(Context)

  const theme = useTheme()

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  return (
    <div>
      <Toggle siteTitle={data.site.siteMetadata.title} />
      <Global
        styles={css`
          * {
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
        `}
      />
      <Container>
        <Hello siteDescription={data.site.siteMetadata.description} />
        <Background />
        <Experience />
        <Skills />
        <Footer />
      </Container>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
