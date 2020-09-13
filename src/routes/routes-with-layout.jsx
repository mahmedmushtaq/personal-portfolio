import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const RoutesWithLayout = (props) => {
  const { component } = props;
  return (
    <Route {...props} render={(matchProps) => <component {...matchProps} />} />
  );
};

RoutesWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  path: PropTypes.string.isRequired,
};

export default RoutesWithLayout;
