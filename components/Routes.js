import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const { WorkPage } = require('./WorkPage');
const { Contact } = require('./Contact');
const { About } = require('./About');
const { Project } = require('./Project');
const { ErrorPage } = require('./ErrorPage');

export class Routes extends React.Component {
  render() {
    return (
      <>
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
