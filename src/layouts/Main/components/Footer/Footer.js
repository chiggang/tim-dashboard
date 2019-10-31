import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Footer = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Typography variant="body1">
        &copy;{' '}
        <Link
          component="a"
          href="https://google.com"
          target="_blank"
        >
          Google
        </Link>
        . 2019
      </Typography>
      <Typography variant="caption">
        Sample by chiggang
      </Typography>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
