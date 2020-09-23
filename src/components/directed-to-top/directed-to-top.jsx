import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ScrollIntoView from 'react-scroll-into-view';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'fixed',
    bottom: 20,
    right: 20,

    textAlign: 'end',
  },

  iconContainer: {
    width: 100,
    height: 100,
    background: 'black',
    borderRadius: 10,
    textAlign: 'center',
    marginLeft: 'auto',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      width: 80,
      height: 80,
    },
  },
  icon: {
    fontSize: 70,
    color: theme.palette.common.lightRed,
    [theme.breakpoints.down('sm')]: {
      fontSize: 50,
    },
  },
}));

export default (props) => {
  const classes = useStyles();
  return (
    <ScrollIntoView selector="#header">
      <Grid container display="flex-end" className={classes.container}>
        <Grid
          item
          container
          alignItems="center"
          justify="center"
          className={classes.iconContainer}
        >
          <ArrowUpwardIcon className={classes.icon} />
        </Grid>
      </Grid>
    </ScrollIntoView>
  );
};
