import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Header } from '../components';
import { useSelector } from 'react-redux';
import './routes.css';
import { Fade, Paper, Slide } from '@material-ui/core';

const RoutesWithLayout = (props) => {
  const { component, path, hideHeader, showLoading: isShowLoading } = props;
  const [isLoading, setLoading] = useState(!!isShowLoading);

  useEffect(() => {
    if (isShowLoading) {
      // only show loading when it is enabled
      const timeout = () => {
        setLoading(false);
      };
      setLoading(true);
      setTimeout(timeout, 500);
    }
  }, [path]);

  return (
    <div>
      {!isLoading && (
        <>
          {/* hide header if you want in some pages */}
          {!hideHeader && <Header />}
          <Route
            {...props}
            render={(matchProps) => <component {...matchProps} />}
          />
        </>
      )}
      {/* shortcut class name transitioncontainer-bottomToTop  === tcontainer-bt */}
      {isLoading && <div className="tcontainer-bt">loading ...</div>}
    </div>
  );
};

RoutesWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  path: PropTypes.string.isRequired,
};

export default RoutesWithLayout;
