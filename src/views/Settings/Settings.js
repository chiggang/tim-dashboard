import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { Notifications, Password } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Settings = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          md={7}
          xs={12}
        >
          <Notifications />
        </Grid>
        <Grid
          item
          md={5}
          xs={12}
        >
          <Password />
        </Grid>
      </Grid>
    </div>
  );
};

export default Settings;
