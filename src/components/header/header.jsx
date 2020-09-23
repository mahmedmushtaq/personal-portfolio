import React, { useState } from 'react';
import { Grid, Typography, Button, Hidden } from '@material-ui/core';
import { makeStyles, useTheme, useMediaQuery } from '@material-ui/core';
import navBarItems from './navBarItems';
import MobHeader from './mob-header';
import MenuIcon from '@material-ui/icons/Menu';
import './navbar-item.css';
import { Link } from 'react-router-dom';
import ScrollIntoView from 'react-scroll-into-view';

const useStyles = makeStyles((theme) => ({
  logo: {
    backgroundColor: '#e74c3c',
    padding: '10px 15px',
  },
  icon: {
    fontSize: '2.5em',
    backgroundColor: '#e74c3c',
    padding: '2px 5px',
  },
  leftGrid: {
    width: '70vw',

    [theme.breakpoints.down('sm')]: {
      width: '50vw',
      marginLeft: 20,
      marginRight: 0,
    },
  },
  rightGrid: {
    marginRight: 20,
  },
  hireMe: {
    fontSize: '2.4em',
    backgroundColor: theme.palette.common.lightRed,
    padding: '4px 20px',
    boxShadow: '0 0 1px 1px rgba(236, 240, 241,.3)',
  },
}));

export default (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));

  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = () => setDrawer(!drawer);

  return (
    <Grid
      style={{ marginTop: 15 }}
      container
      id="header"
      justify={'space-around'}
      alignItems={'center'}
    >
      <Grid item className={classes.leftGrid}>
        <Grid
          container
          alignItems="center"
          justify={sm ? undefined : 'space-around'}
        >
          <Grid item component={Link} to="/" className="a-white">
            <Typography className={classes.logo} variant={'h1'}>
              M
            </Typography>
          </Grid>

          {/*  ===== center items ======== */}
          {/* ====== hide center items on the small screen ===== */}

          <Hidden smDown>
            <Grid
              item
              style={{
                width: '70%',
                marginRight: 'auto',
                marginLeft: 20,
              }}
            >
              <Grid container justify="space-around">
                {navBarItems.map((item) => (
                  <ScrollIntoView key={item.id} selector={item.to}>
                    <Grid item className={'navbar-item'}>
                      <Typography variant="h5">{item.name}</Typography>
                    </Grid>
                  </ScrollIntoView>
                ))}
              </Grid>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>

      {/* <Grid item>
        <Typography className={['navbar-item']}>SImple item</Typography>
      </Grid> */}

      <Grid item className={classes.rightGrid}>
        <Grid container alignItems="center" justify="center">
          <Grid item>
            <Button variant="contained" color="primary">
              <Typography variant="h1" style={{ fontSize: 19 }}>
                Hire Me
              </Typography>
            </Button>
          </Grid>

          {/* ========== menu icon visible only on medium and small screen ====== */}

          <Grid item>
            <Hidden mdUp>
              <MenuIcon
                onClick={toggleDrawer}
                style={{ color: 'white', marginLeft: 15, cursor: 'pointer' }}
              />
            </Hidden>
          </Grid>
        </Grid>
      </Grid>

      <Hidden mdUp>
        <React.Fragment>
          <MobHeader drawer={drawer} setDrawer={setDrawer} />
        </React.Fragment>
      </Hidden>
    </Grid>
  );
};
