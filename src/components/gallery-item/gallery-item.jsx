import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import {
  CardActions,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth: 300,
    height: 380,

    margin: '20px 0',
    backgroundColor: theme.palette.common.black,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },

  cardTitle: {
    fontFamily: 'Gilroy-bold',
  },
}));

export default function GalleryItem(props) {
  const classes = useStyles();
  const { title, text, mainImage, url } = props;

  //
  return (
    <Card className={classes.root}>
      <CardHeader title={title} style={{ color: 'white' }} />
      <a href={url} target="_blank">
        <CardMedia
          className={classes.media}
          image={mainImage}
          title="Paella dish"
        />
      </a>
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ color: 'white', fontFamily: 'Gilroy' }}
        >
          {text.length > 100 ? text.substr(0, 100) + '...' : text}
        </Typography>
      </CardContent>
      <CardActions>
        <a href={url} target="_blank">
          <OpenInNewIcon style={{ cursor: 'pointer', color: 'white' }} />
        </a>
      </CardActions>
    </Card>
  );
}
