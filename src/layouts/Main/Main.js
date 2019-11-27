import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';

import { Sidebar, Topbar, Footer } from './components';

import { useDataState } from 'reducers/context';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    }
  },
  shiftContent: {
    paddingLeft: 240
  },
  content: {
    height: '100%'
  },
  footer: {
    height: 80
  }
}));

const Main = props => {
  const {
    currentOpenedSidebarMenu
  } = useDataState();

  const { children } = props;

  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  // const [openSidebar, setOpenSidebar] = useState(false);

  // const handleSidebarOpen = () => {
  //   setOpenSidebar(true);
  // };

  // const handleSidebarClose = () => {
  //   setOpenSidebar(false);
  // };

  // const shouldOpenSidebar = isDesktop ? true : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: currentOpenedSidebarMenu
      })}
    >
      {/* <Topbar onSidebarOpen={handleSidebarOpen} /> */}
      <Topbar />
      <Sidebar
        // onClose={handleSidebarClose}
        // open={currentOpenedSidebarMenu}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />
      <main className={classes.content}>
        {children}
        <Footer className={classes.footer} />
      </main>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main;
