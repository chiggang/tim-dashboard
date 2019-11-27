import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Divider, Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Profile, SidebarNav } from './components';

import { useDataState } from 'reducers/context';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const {
    currentOpenedSidebarMenu
  } = useDataState();

  // const { open, variant, onClose, className, ...rest } = props;
  const { variant, className, ...rest } = props;
  const classes = useStyles();

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      // onClose={onClose}
      open={currentOpenedSidebarMenu}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
        /*pages={sidebarMenuItem}*/
        />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  // onClose: PropTypes.func,
  // open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
