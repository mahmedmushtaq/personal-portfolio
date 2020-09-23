import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: 80,
    margin: '30px 20px',
    '&:hover': {},
    [theme.breakpoints.down('sm')]: {
      fontSize: 50,
      margin: '30px 5px',
    },
  },
  a: {
    color: 'white',
    '&:hover': {
      color: theme.palette.common.lightRed,
    },
  },
}));

export default (props) => {
  const classes = useStyles();
  return (
    <Grid container id="contact" direction="column" alignItems="center">
      <Grid item>
        <Typography variant="h1">Contact Me</Typography>
      </Grid>

      <Grid item>
        <br /> <br /> <br />
      </Grid>
      <Grid item>
        <Typography variant="h6">
          Email: <small>mahmedmushtaq296@gmail.com</small>
        </Typography>
      </Grid>

      <Grid item container justify="center">
        <Grid item>
          <a
            href="https://twitter.com/MAhmedMushtaq3"
            target="_blank"
            className={classes.a}
          >
            <TwitterIcon className={classes.icon} />
          </a>
        </Grid>

        <Grid item>
          <a
            href="https://github.com/mahmedmushtaq"
            target="_blank"
            className={classes.a}
          >
            <GitHubIcon className={classes.icon} />
          </a>
        </Grid>

        <Grid item>
          <a
            href="https://www.linkedin.com/in/m-ahmed-mushtaq/"
            target="_blank"
            className={classes.a}
          >
            <LinkedInIcon className={classes.icon} />
          </a>
        </Grid>

        <Grid item>
          <a
            href="https://www.facebook.com/profile.php?id=100009758324624"
            target="_blank"
            className={classes.a}
          >
            <FacebookIcon className={classes.icon} />
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
};
