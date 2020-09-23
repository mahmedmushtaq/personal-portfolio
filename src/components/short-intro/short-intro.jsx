import React from 'react';
import {
  Grid,
  Typography,
  makeStyles,
  useMediaQuery,
  Button,
} from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  lastItem: {
    marginLeft: 5,
    marginRight: 5,
  },
  canDoP: {
    width: '30vw',
    fontFamily: 'Gilroy',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      width: '60vw',
    },
    [theme.breakpoints.down('sm')]: {
      width: '80vw',
    },
  },
}));

export default (props) => {
  const classes = useStyles();
  const [playerReady, setReady] = React.useState(false);
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down('xs'));
  const md = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid
      container
      id="short-intro"
      direction={md ? 'column-reverse' : 'row'}
      justify="space-between"
      alignItems="center"
      style={{ padding: 20 }}
    >
      <Grid item>
        <ReactPlayer
          width={md ? '70vw' : '45vw'}
          height={xs ? 200 : 500}
          light="https://images.unsplash.com/photo-1496989981497-27d69cdad83e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=544&q=80"
          onReady={() => setReady(true)}
          url={'https://www.youtube.com/watch?v=1aYQvwODDLo&t=25s'}
          controls={true}
        />
      </Grid>

      <Grid
        item
        style={{
          marginRight: 'auto',
          marginLeft: 'auto',
        }}
      >
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <Typography variant="h1">What Can I Do For You?</Typography>
          </Grid>

          <Grid item className={classes.canDoP}>
            <Typography>
              You have an idea and you want to implement this but you unaware of
              it's building price and time period. <b>DON'T BE PANIC</b>. I am
              here to implement your idea by using the latest MERN stack within
              the couple of weeks and with the affordable price.
            </Typography>
          </Grid>

          <Grid item>
            <a
              href="https://www.linkedin.com/in/m-ahmed-mushtaq"
              target="_blank"
              class="a-white"
            >
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: 20, marginBottom: 20 }}
              >
                <Typography variant="h5" style={{ fontSize: 19 }}>
                  Contact Me
                </Typography>
              </Button>
            </a>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
