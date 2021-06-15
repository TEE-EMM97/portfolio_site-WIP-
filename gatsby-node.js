/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */


const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve('src/templates/blog-posts/post.js');
  const res = await graphql(
    `
      query {
        allContentfulFakeBlogPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  );
  const posts = res.data.allContentfulFakeBlogPost.edges
  posts.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: blogPostTemplate,
      context: {
        slug: node.slug,
      },
    });
  });
};