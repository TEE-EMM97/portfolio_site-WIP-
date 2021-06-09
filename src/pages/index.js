import React from "react"
import Layout from '../components/layout'
import Hello from "../components/hello"
import Experience from '../components/experience'
import Skills from '../components/skills'
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
// import Image from "../components/image"

const IndexPage = () => {
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
    <Layout>    
      <SEO siteTitle={data.site.siteMetadata.title} title="Home"/>
      <Hello siteDescription={data.site.siteMetadata.description} />
        <Skills />
        <Experience />
    </Layout>
  )
}

export default IndexPage;