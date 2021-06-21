import React from 'react';
import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby';

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allGithubData {
        edges {
          node {
            data {
              user {
                pinnedItems {
                  nodes {
                    description
                    homepageUrl
                    name
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const repos = data.allGithubData.edges[0].node.data.user.pinnedItems.nodes

  console.log(repos);

  return (
    <Layout>

    <div>
      <h1>Projects</h1>
      <h2>Github Repos</h2>
      <div></div>
      {repos.map((repo, i) => (
        <div className="" key={i}>
          <a
            className=""
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub URL
          </a>
          <h2>{repo.name}</h2>
          <p>{repo.description}</p>
          <p>{repo.homepageUrl}</p>
        </div>
      ))}
    </div>
    </Layout>
  );
};

export default Projects;

// https://dev.to/zakirsajib/display-your-repository-from-github-using-graphql-api-2927
