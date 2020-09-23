import React from 'react';
import { Typography, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    backgroundColor: 'black',
    height: 200,
  },
}));

export default (props) => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.footerContainer}
    >
      <Grid item>
        <Typography variant="h1">M Ahmed Mushtaq</Typography>
      </Grid>
    </Grid>
  );
};
