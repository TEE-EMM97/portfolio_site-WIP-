import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Fade from 'react-reveal/Fade';
import Button from '../../common/button';
import React from 'react';
import '../layout.scss'

const Hello = ({ siteDescription }) => {
  const variants = {
    rotate: [0, -25, 0, -25, 0],
  };
  return (
    <section className="intro">
      <Fade>
        <div className="intro__hello">
          <h2>Hello</h2>
          <motion.div
            whileHover={variants}
            animate={variants}
            transition={{ type: 'tween', stiffness: 100 }}
            style={{ paddingLeft: 10, lineHeight: '38px' }}
          >
            <span role="img" aria-labelledby="waving">
              👋
            </span>
          </motion.div>
        </div>
        <p className="intro__para">{siteDescription}</p>
        <div className="intro__touch">
          <Button children={`Get in Touch!`} linkTo={`mailto:tevmcc@gmail.com`} buttonStyle={`btn--checkBlog`} buttonSize={`btn--large`}/>
        </div>
      </Fade>
    </section>
  );
};

Hello.protoTypes = {
  siteDescription: PropTypes.string,
};

Hello.defaultProps = {
  siteDescription: ``,
};

export default Hello;
