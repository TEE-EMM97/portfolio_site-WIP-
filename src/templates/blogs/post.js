import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

const Post = ({ data }) => {

  const post = data.contentfulBlogs;

  return (
    <Layout>
      <SEO title={data.contentfulBlogPost.title} />
      <h1>{data.contentfulBlogPost.title}</h1>
      <p>Published on {data.contentfulBlogPost.publishDate}</p>
      <div dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.markdown}}/>
    </Layout>
  );
};

export default Post;