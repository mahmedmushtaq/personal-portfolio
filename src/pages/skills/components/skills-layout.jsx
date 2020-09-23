import React from 'react';
import {
  Grid,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
  Fade,
} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '90vw',
    margin: 'auto',
    height: '100%',
  },
  gridItem: {
    margin: '10px 0',
    [theme.breakpoints.down]: {
      textAlign: 'center',
    },
  },
  prevAndNext: {
    marginTop: 20,
  },
}));

const SkillLayout = (props) => {
  const classes = useStyles();

  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down('md'));
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const {
    skillHeading,
    skillData,
    skillImage,
    nextBtn,
    prevBtn,
    currentPageData,
    showFadeTransition,
  } = props;

  return (
    <Fade in={showFadeTransition} timeout={5000}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.container}
      >
        <Grid
          item
          container
          direction={md ? 'column' : 'row'}
          style={{ marginTop: 40 }}
          alignItems="center"
        >
          <Grid item>
            <img
              src={skillImage}
              style={{
                width: md ? '60vw' : '40vw',
                marginBottom: md ? 30 : undefined,
              }}
            />
          </Grid>
          <Grid
            item
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <Grid item>
              <Typography variant="h1" align={sm ? 'center' : 'start'}>
                {skillHeading}
              </Typography>
            </Grid>

            {skillData.map((skill, index) => (
              <Grid item className={classes.gridItem} key={skill.id}>
                <Typography variant="h6">
                  {index + 1}- &nbsp; {skill.skills}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item container className={classes.prevAndNext} justify="center">
          {/* pre btn item */}

          <Grid
            item
            style={{ cursor: 'pointer' }}
            onClick={() => prevBtn(currentPageData.id)}
          >
            {/* prev container */}
            <Grid container alignItems="center">
              <Grid item style={{ marginRight: 10 }}>
                <ArrowBackIcon />
              </Grid>

              <Grid item>
                <Typography variant="h6">Prev</Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* next btn item */}
          <Grid
            item
            style={{ marginLeft: 50, cursor: 'pointer' }}
            onClick={() => nextBtn(currentPageData.id)}
          >
            {/* next container */}
            <Grid container alignItems="center">
              <Grid item>
                <Typography variant="h6">Next</Typography>
              </Grid>

              <Grid item style={{ marginLeft: 5 }}>
                <ArrowForwardIcon />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fade>
  );
};

SkillLayout.propTypes = {
  skillHeading: PropTypes.string.isRequired,
  skillData: PropTypes.array.isRequired,
  skillImage: PropTypes.string.isRequired,
};

export default SkillLayout;
