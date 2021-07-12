import React from 'react';
import socialData from '../../../config';
import './footer.scss'

const Footer = () => {
  let tempUrlForName = socialData.socialMedia[2].url;
  return (
    <footer>
      <div className="footer__copyright">
        <div className="top">
          <span>Built with GatsbyJS by</span>
        </div>
        <div className="bottom">
          <a href={tempUrlForName}>myself💘</a>
          <span> {new Date().getFullYear()}</span>
          <span role="img" aria-labelledby="rock-fingers">
            🤘🏾
          </span>
          &copy;
        </div>
      </div>
      <div className="d-flex flex-row justify-content-end align-items-end ml-auto">
        {socialData.socialMedia.map((data, index) => {
          return (
            <li key={`${index}`} className="pl-3">
              <a href={data.url} target="_blank" rel="noreferrer">
                {data.name}
              </a>
            </li>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
