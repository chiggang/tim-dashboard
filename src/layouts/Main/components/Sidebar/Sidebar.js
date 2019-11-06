import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Divider, Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ImageIcon from '@material-ui/icons/Image';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import LockOpenIcon from '@material-ui/icons/LockOpen';

import { Profile, SidebarNav } from './components';

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
  const { open, variant, onClose, className, ...rest } = props;
  const classes = useStyles();

  const pages = [
    {
      seq: 'A',
      title: 'Dashboard',
      href: '/dashboard',
      icon: <DashboardIcon />,
      child: [
        {
          seq: 'AA',
          title: 'SubDash #1',
          href: '/dashboard',
          icon: <DashboardIcon />
        },
        {
          seq: 'AB',
          title: 'SubDash #2',
          href: '/dashboard',
          icon: <DashboardIcon />
        }
      ]
    },
    {
      seq: 'B',
      title: 'Users',
      href: '/users',
      icon: <PeopleIcon />
    },
    {
      seq: 'C',
      title: 'Products',
      href: '/products',
      icon: <ShoppingBasketIcon />
    },
    {
      seq: 'D',
      title: 'Authentication',
      href: '/sign-in',
      icon: <LockOpenIcon />,
      child: [
        {
          seq: 'DA',
          title: 'SubAuth #1',
          href: '/sign-in',
          icon: <LockOpenIcon />,
          child: [
            {
              seq: 'DAA',
              title: 'SubAuth #1-1',
              href: '/sign-in',
              icon: <LockOpenIcon />
            },
            {
              seq: 'DAB',
              title: 'SubAuth #1-2',
              href: '/sign-in',
              icon: <LockOpenIcon />
            }
          ]
        },
        {
          seq: 'DB',
          title: 'SubAuth #2',
          href: '/sign-in',
          icon: <LockOpenIcon />
        },
        {
          seq: 'DC',
          title: 'SubAuth #3',
          href: '/sign-in',
          icon: <LockOpenIcon />
        }
      ]
    },
    {
      seq: 'E',
      title: 'Typography',
      href: '/typography',
      icon: <TextFieldsIcon />
    },
    {
      seq: 'F',
      title: 'Icons',
      href: '/icons',
      icon: <ImageIcon />
    },
    {
      seq: 'G',
      title: 'Account',
      href: '/account',
      icon: <AccountBoxIcon />
    },
    {
      seq: 'H',
      title: 'Settings',
      href: '/settings',
      icon: <SettingsIcon />
    }
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
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
          pages={pages}
        />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
