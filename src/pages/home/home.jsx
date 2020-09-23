import React, { useEffect } from 'react';
import { Grid, makeStyles, useMediaQuery } from '@material-ui/core';
import {
  HomeComponent,
  ShortIntro,
  SkillsIntro,
  Works,
  ContactMe,
  Footer,
} from '../../components';
import { useTheme } from '@material-ui/styles';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  gridItem: {
    marginTop: 50,
    marginBottom: 50,
  },
}));

export default (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useDispatch();

  return (
    <Grid container direction="column">
      <Grid item>
        <HomeComponent />
      </Grid>
      <Grid item>
        <ShortIntro />
      </Grid>

      <Grid item>
        <SkillsIntro />
      </Grid>

      <Grid item className={classes.gridItem}>
        <Works />
      </Grid>

      <Grid item className={classes.gridItem}>
        <ContactMe />
      </Grid>

      <Grid item style={{ marginTop: 40 }}>
        <Footer />
      </Grid>
    </Grid>
  );
};
