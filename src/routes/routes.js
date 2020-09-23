import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import { Theme } from '../themes';
import RoutesWithLayout from './routes-with-layout';
import { Home, About, Skills } from '../pages';

function Routes() {
  return (
    <div>
      <MuiThemeProvider theme={Theme}>
        <BrowserRouter>
          <Switch>
            <RoutesWithLayout exact path="/about" component={About} />
            <RoutesWithLayout
              exact
              path="/skills"
              hideHeader={true}
              component={Skills}
            />
            <RoutesWithLayout path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </div>
  );
}

export default Routes;
