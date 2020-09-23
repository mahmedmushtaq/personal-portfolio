import React from 'react';
import {
  Grid,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import SkillsAnimationData from '../../assets/animations/skills';
import Lottie from 'react-lottie';
import './skills-intro.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  animationGrid: {
    width: '45vw',
    [theme.breakpoints.down('sm')]: {
      width: '75vw',
    },
  },
  infoP: {
    width: '32vw',
    textAlign: 'center',
    margin: '10px 0',
    [theme.breakpoints.down('sm')]: {
      width: '50vw',
      fontSize: 19,
      fontWeight: 300,
    },
  },
  skillH: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
}));

export default (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down('md'));
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: SkillsAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid
      id="skills"
      container
      direction={md ? 'column' : 'row'}
      alignItems="center"
      justify="space-around"
      style={{ padding: 20, marginTop: 30 }}
    >
      <Grid item style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <Typography variant="h1" className={classes.skillH}>
              Let's Check Out My Skills
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" className={classes.infoP}>
              It will take your few seconds to completely check out my all
              skills
            </Typography>
          </Grid>
          <Grid item component={Link} to={'/skills'}>
            <button className="skills-animated-btn">Skills</button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item className={classes.animationGrid}>
        <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
      </Grid>
    </Grid>
  );
};
