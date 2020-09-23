import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import WorkIcon from '@material-ui/icons/Work';
import Skills from '@material-ui/icons/FlightTakeoff';
import Contact from '@material-ui/icons/PermContactCalendar';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import React from 'react';

const navBarItems = [
  // {
  //   id: 1,
  //   name: 'Home',
  //   to: '#home',
  //   icon: <HomeIcon style={{ color: 'white' }} />,
  // },
  {
    id: 1,
    name: 'About',
    to: '#about',
    icon: <InfoIcon style={{ color: 'white' }} />,
  },
  {
    id: 2,
    name: 'Intro',
    to: '#short-intro',
    icon: <EmojiPeopleIcon style={{ color: 'white' }} />,
  },

  {
    id: 3,
    name: 'Skills',
    to: '#skills',
    icon: <Skills style={{ color: 'white' }} />,
  },
  {
    id: 4,
    name: 'Works',
    to: '#works',
    icon: <WorkIcon style={{ color: 'white' }} />,
  },
  {
    id: 5,
    name: 'Contact',
    to: '#contact',
    icon: <Contact style={{ color: 'white' }} />,
  },
];

export default navBarItems;
