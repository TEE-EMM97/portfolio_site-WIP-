import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby';
import Fade from 'react-reveal/Fade'
import '../layout.scss';
import Particles from '../particles'

const Blog = () => {

  const data = useStaticQuery(graphql`
  query {
    allContentfulFakeBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          id
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          coverImages{
            id
            fluid(quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
          blogBody {
              childMarkdownRemark {
                excerpt(pruneLength: 150)
          }
          }
      }
    }
  }
  }
  `);
  
  console.log('Blogs:', data)
  return (
    <section className="section blogs">
      <Fade>
        <div className="section__title">
          <h3>Blogs</h3>
        </div>
        <div className="section__content">
        <ol className="blogs__posts">
        {data.allContentfulFakeBlogPost.edges.map((edge, i) => {
          return (
            <li className="blogs__post" key={i}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p className="excerp">{edge.node.blogBody.childMarkdownRemark.excerpt}</p>
                <p>{edge.node.publishDate}</p>
              </Link>
            </li>
          );
        })}
      </ol>
        </div>
      </Fade>
    </section>
  )
}

export default Blog
