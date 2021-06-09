import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

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
  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        const src = node.data.target.fields.file['en-US'].url;
        const alt = node.data.target.fields.title['en-US'];
        return <img src={src} alt={alt} />;
      },
    },
  };

  return (
    <Layout>
      <SEO title={data.contentfulBlogPost.title} />
      <h1>{data.contentfulBlogPost.title}</h1>
      <p>Published on {data.contentfulBlogPost.publishDate}</p>
      {documentToReactComponents(data.contentfulBlogPost.body.html, options)}
    </Layout>
  );
};

export default Post;