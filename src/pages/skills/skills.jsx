import React, { useState } from 'react';
import { Grid, Slide, makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { Header, SkillLayout } from './components';
import { useSelector } from 'react-redux';
import FronEndSkillImage from '../../assets/images/front-end-pic.png';
import BackEndSkillImage from '../../assets/images/back-end-pic.jpg';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '90vw',
    margin: '20px auto',
  },
}));

export default (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { skillsPageData } = useSelector((state) => state.skills);
  const [currentData, setCurrentData] = useState(skillsPageData[0]);

  const [showFadeTransition, setShowFadeTransition] = useState(true);

  const nextBtn = (id) => {
    
    const incrementId = id + 1;

    if (incrementId > skillsPageData.length) return;

    findSkillDataById(incrementId);
  };

  const findSkillDataById = (id) => {
    const skillsData = skillsPageData.find((data) => data.id === id);
    
    setCurrentData(skillsData);
  };

  const prevBtn = (id) => {
    const decrementId = id - 1;
    if (decrementId < 1) return;

    findSkillDataById(decrementId);
  };

  return (
    <Slide timeout={1000} direction="up" in={true} mountOnEnter unmountOnExit>
      <Grid container direction={'column'} className={classes.container}>
        <Grid item>
          <Header />
        </Grid>
        <Grid item>
          {/* skill slider layout */}
          <SkillLayout
            currentPageData={currentData}
            skillHeading={currentData.heading}
            skillData={currentData.data}
            skillImage={currentData.imageSrc}
            showFadeTransition={showFadeTransition}
            nextBtn={nextBtn}
            prevBtn={prevBtn}
          />
        </Grid>
      </Grid>
    </Slide>
  );
};
