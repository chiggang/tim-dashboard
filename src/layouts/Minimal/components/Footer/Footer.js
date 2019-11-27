import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

const Footer = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className, 'flex flex-col')}
    >
      <Typography variant="body1">
        <span className="font-sans tracking-normal text-xs font-normal">
          Copyright
          {' '}
        </span>
        <Link
          component="a"
          href="http://timmanage.com"
          target="_blank"
        >
          <span className="font-sans tracking-normal text-xs font-semibold">
            &copy;{' '}
            T.I.M Solution.
          </span>
        </Link>
        <span className="font-sans tracking-normal text-xs font-normal">
          {' '}
          All Rights Reserved.
        </span>
      </Typography>
      <Typography variant="body1">
        <span className="font-sans tracking-normal text-xs font-normal">
          Powered by
          {' '}
        </span>
        <span className="font-sans tracking-normal text-xs font-semibold">
          T.I.M Dashboard dev team.
        </span>
      </Typography>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
