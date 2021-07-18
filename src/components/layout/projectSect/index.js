import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import '../layout.scss';

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

  const repos = data.allGithubData.edges[0].node.data.user.pinnedItems.nodes;

  console.log('Repos in projectSect' + repos);

  return (
    <section className="section project">
      <Fade>
        <div className="section__title">
          <h3>Projects</h3>
        </div>
        <div className="section__content">
          <ol className="project__list">
            {repos.slice(0, 4).map((repo, i) => {
              return (
                <li className="project__list--item" key={i}>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h5>{repo.name}</h5>
                    <p className="excerp">
                      {repo.description}
                    </p>
                  </a>
                </li>
              );
            })}
          </ol>
        </div>
      </Fade>
    </section>
  );
};

export default Projects;
