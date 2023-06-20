import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';

import TitleScreen from './TitleScreen';
import NavBar from './NavBar';
import Music from './Music';
import About from './About';
import ErrorPage from './ErrorPage';

function Routes(props) {
  const path = props.location.pathname;

  return (
    <>
      {path !== '/' && <NavBar />}
      <Switch>
        <Route path="/" exact component={TitleScreen} />
        <Route path="/music" component={Music} />
        <Route path="/about" component={About} />
        <Route path="/404error" component={ErrorPage} />
        <Redirect to="/404error" />
      </Switch>
    </>
  );
}

export default withRouter(Routes);
