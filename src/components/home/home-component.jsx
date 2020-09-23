import React from 'react';
import {
  Grid,
  Typography,
  useMediaQuery,
  makeStyles,
  Button,
} from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import AboutMePic from '../../assets/images/aboutme.png';
import ShuttlePic from '../../assets/images/shuttle.png';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
  },
  meeth1: {
    fontSize: 27,
    marginTop: '39px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 19,
      textAlign: 'center',
    },
  },
  introh1: {
    fontSize: 23,
    fontFamily: 'Gilroy',
    color: theme.palette.common.lightRed,
    [theme.breakpoints.down('sm')]: {
      fontSize: 17,
    },
  },

  hrLine: {
    width: 140,
    marginLeft: 20,
    height: 3,
    backgroundColor: 'red',
  },

  introp: {
    width: '53vw',
    margin: '0 auto',
    fontFamily: 'Gilroy',
    margin: '30px 0',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      width: '90vw',
    },

    [theme.breakpoints.down('md')]: {
      width: '80vw',
    },

    [theme.breakpoints.down('xs')]: {
      with: '90vw',
    },
  },
}));

export default (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.down('md'));

  // home component actually is about

  return (
    <Grid id="about" contaianer>
      <Grid
        item
        container
        direction={md ? 'column' : 'row'}
        className={classes.container}
        justify="center"
        alignItems={md ? 'center' : undefined}
      >
        <Grid item style={{ paddingTop: 40 }}>
          <Grid container direction="column" alignItems="center">
            {/* intro side  */}

            <Grid item className={classes.meeth1}>
              <Typography variant="h1">Let's meet&nbsp;M Ahmed</Typography>
            </Grid>

            <Grid
              item
              container
              justify="center"
              direction={sm ? 'column' : 'row'}
              alignItems="center"
              style={{ marginTop: sm ? 10 : 0, marginBottom: sm ? 30 : 0 }}
            >
              <Grid item>
                <Typography className={classes.introh1}>
                  Sr. MERN AND MEVN Developer{' '}
                  <span className={classes.shuttleIcon}>
                    <img src={ShuttlePic} width={26} />
                  </span>
                </Typography>
              </Grid>
              <Grid item></Grid>
              <Grid item>
                <div className={classes.hrLine}></div>
              </Grid>
            </Grid>

            <Grid item className={classes.introp}>
              <Typography>
                I am a full stack developer with more than 3 years of experience
                in building the full-stack web application and apps. During my
                career I have built many different type of full stack web
                application and apps such as ecommerce, B2B, social media,
                canvas and elearning in MERN and MEVN stack.
                <br /> <br />
                So you want to implement your idea or online your business.{' '}
                <b>Sounds Good!</b>. Let's get started
              </Typography>
            </Grid>

            <Grid item style={{}}>
              <Button
                variant="contained"
                color="primary"
                style={{ margin: '20px 0' }}
              >
                <Typography variant="h5" style={{ fontSize: 18 }}>
                  Contact Me
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <img src={AboutMePic} alt="" style={{ width: '100%' }} />
        </Grid>
      </Grid>
    </Grid>
  );
};
