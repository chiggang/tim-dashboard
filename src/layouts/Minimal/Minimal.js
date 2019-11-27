import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import { Topbar, Footer } from './components';

// import { useDataState } from 'reducers/context';

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 64,
    height: '100%'
  },
  content: {
    height: 'calc(100% - 80px)'
  },
  footer: {
    height: 80
  }
}));

const Minimal = props => {
  // const {
  //   systemOption
  // } = useDataState();

  const { children } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Topbar />
      <main className={classes.content}>
        {children}
        <Footer className={classes.footer} />
      </main>
    </div>
  );
};

Minimal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Minimal;
