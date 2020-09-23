import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { GridItem } from '../index';
import { useSelector } from 'react-redux';

export default (props) => {
  const { worksData } = useSelector((state) => state.works);
  return (
    <Grid id="works" container alignItems="center" direction="column">
      <Grid item>
        <Typography variant="h1">Works</Typography>
      </Grid>
      <Grid item container justify="space-around" style={{ width: '90vw' }}>
        {worksData.map((work) => (
          <Grid item key={work.id}>
            <GridItem
              title={work.title}
              text={work.text}
              mainImage={work.mainImage}
              url={work.url}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
