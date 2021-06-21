import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/react';
import Context from '../../store/context';
import { useTheme } from '@emotion/react';
import NavMenu from './NavMenu';
import Footer from './footer/index';
import './layout.scss';
const Layout = ({ children }) => {
  const { state } = useContext(Context);
  const theme = useTheme();

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          body {
            background-color: ${state.isDark
              ? theme.dark.background
              : theme.light.background};

            color: ${state.isDark ? theme.dark.font : theme.light.font};
          }

          .menu-icon {
            background: ${state.isDark ? theme.dark.div : theme.light.div};
          }

          .menu-list {
            background: ${state.isDark
              ? theme.dark.menuListBg
              : theme.light.menuListBg};
            height: 100%;
            a {
              color: ${state.isDark ? theme.dark.font : theme.light.font};
            }
          }
        `}
      />
      <div className="stick-foot">
        <NavMenu />
        <div className="content">
          {children}
        </div>
          <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
