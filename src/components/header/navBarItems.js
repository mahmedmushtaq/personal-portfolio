import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import WorkIcon from '@material-ui/icons/Work';
import Skills from '@material-ui/icons/FlightTakeoff';
import Contact from '@material-ui/icons/PermContactCalendar';
import React from 'react';

const navBarItems = [
  { id: 1, name: 'Home', icon: <HomeIcon style={{ color: 'white' }} /> },
  { id: 2, name: 'About', icon: <InfoIcon style={{ color: 'white' }} /> },
  { id: 3, name: 'Skills', icon: <Skills style={{ color: 'white' }} /> },
  { id: 4, name: 'Works', icon: <WorkIcon style={{ color: 'white' }} /> },
  {
    id: 5,
    name: 'Contact',
    icon: <Contact style={{ color: 'white' }} />,
  },
];

export default navBarItems;
