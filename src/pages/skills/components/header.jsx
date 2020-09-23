import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {},
  icon: {
    fontSize: 100,
  },
}));

export default (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item component={Link} to="/" class="a-white">
        <CloseIcon className={classes.icon} />
      </Grid>
    </Grid>
  );
};
