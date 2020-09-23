import React from 'react';
import { Typography, Grid, makeStyles } from '@material-ui/core';
import WinkEmoji from '../../assets/images/wink.png';

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    backgroundColor: 'black',
    height: 200,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  footerH: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 30,
    },
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
        <Typography variant="h1" className={classes.footerH}>
          M Ahmed Mushtaq
        </Typography>
      </Grid>
      <Grid item>
        <img
          src={WinkEmoji}
          style={{ width: 30, marginLeft: 10, marginTop: 2 }}
        />
      </Grid>
    </Grid>
  );
};
