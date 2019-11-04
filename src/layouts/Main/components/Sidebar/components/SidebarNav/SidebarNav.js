/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { forwardRef, useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  Button,
  colors,
  Collapse,
  Divider
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCamera,
  faSpinner,
  faAcorn
} from '@fortawesome/pro-solid-svg-icons';
import { faAmbulance as fadAmbulance } from '@fortawesome/pro-duotone-svg-icons';

const useStyles = makeStyles(theme => ({
  root: {},
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: colors.blueGrey[800],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main
    }
  },
  subButton: {
    paddingLeft: theme.spacing(4)
  }
}));

const CustomRouterLink = forwardRef((props, ref) => (
  <div
    ref={ref}
    style={{ flexGrow: 1 }}
  >
    <RouterLink {...props} />
  </div>
));

const SidebarNav = props => {
  const { pages, className, ...rest } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [joypadStatus, setJoypadStatus] = useState('');

  const handleClick = () => {
    setOpen(!open);
  };




  // JoyPad Controll
  window.joypad.on('connect', e => {
    const { id } = e.gamepad;

    console.log(`${id} connected!`);
  });
  window.joypad.on('button_press', e => {
    console.log(e.detail);
    const { buttonName } = e.detail;
    if (buttonName === 'button_0') {
    }
    setJoypadStatus(buttonName);
  });






  return (
    <List
      {...rest}
      className={clsx(classes.root, className)}
    >
      {pages.map(page => (
        <ListItem
          className={classes.item}
          disableGutters
          key={page.title}
        >
          <Button
            activeClassName={classes.active}
            className={classes.button}
            component={CustomRouterLink}
            to={page.href}
          >
            <div className={classes.icon}>{page.icon}</div>
            {page.title}
          </Button>
        </ListItem>
      ))}

      <ListItem button onClick={handleClick}>
        SubTest
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Divider />
        <List component="div" disablePadding>
          <ListItem button className={classes.subButton}>
            Test #1 [{joypadStatus}]
          </ListItem>
          <ListItem button className={classes.subButton}>
            Test #2
          </ListItem>
          <ListItem button className={classes.subButton}>
            Test #3
            <FontAwesomeIcon icon={fadAmbulance} />
          </ListItem>
        </List>
        <Divider />
      </Collapse>

      <ListItem
        disableGutters
      >
        <Button>
          Menu #1
        </Button>
      </ListItem>

    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.array.isRequired
};

export default SidebarNav;
