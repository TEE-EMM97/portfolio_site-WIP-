import React from 'react';
import socialData from '../../../config';

const Footer = () => {
  let tempUrlForName = socialData.socialMedia[2].url;
  return (
    <div>
      <footer className="w-100 d-flex pb-3">
        <div className="footer__copyright">
          <div className="top">
            <span>Developed By</span>
          </div>
          <div className="bottom">
            <a href={tempUrlForName}>Tevon </a>
            {new Date().getFullYear()}
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
    </div>
  );
};

export default Footer;
