import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Animation from './Animation';
import WorkPage from './WorkPage';
import Contact from './Contact';
import About from './About';
import Project from './Project';
import ErrorPage from './ErrorPage';

export default class Routes extends React.Component {
  constructor() {
    super();
  }
  render() {
    const animationStatus = localStorage.getItem('animationPlayed');
    return (
      <>
        {animationStatus !== 'true' && <Animation />}
        <Switch>
          <Redirect exact from="/" to="/work" />
          <Route path="/work" component={WorkPage} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects/:project" component={Project} />
          <Route path="/404error" component={ErrorPage} />
          <Redirect to="/404error" />
        </Switch>
      </>
    );
  }
}
