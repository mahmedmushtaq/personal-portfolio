import React from 'react';
import {
  SwipeableDrawer,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import clsx from 'clsx';
import navBarItems from './navBarItems';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 200,
  },

  listItemText: {
    color: 'white',
  },
  drawerBackgroundGrid: {
    height: '100%',
    backgroundColor: theme.palette.common.black,
  },
}));

export default (props) => {
  const classes = useStyles();
  const { setDrawer, drawer } = props;

  const list = () => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={() => {}}
      onKeyDown={() => {}}
    >
      <List>
        {navBarItems.map((item, index) => (
          <ListItem button key={item.id}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <Typography variant="h5" className={classes.listItemText}>
              {item.name}
            </Typography>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key={'left'}>
        <SwipeableDrawer
          anchor={'left'}
          open={drawer}
          onClose={() => setDrawer(false)}
          onOpen={() => setDrawer(true)}
        >
          <Grid
            container
            direction={'column'}
            className={classes.drawerBackgroundGrid}
          >
            {list()}
          </Grid>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
};
