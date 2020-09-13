import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useTheme = makeStyles((theme) => ({
  logo: {
    backgroundColor: 'red',
  },
}));

export default (props) => {
  const classes = useTheme();
  return (
    <Grid container>
      <Grid item>
        <Typography variant={'h1'}>M</Typography>
      </Grid>
    </Grid>
  );
};
