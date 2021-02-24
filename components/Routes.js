import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const { HomePage } = require('./HomePage');
const { Contact } = require('./Contact');
const { Projects } = require('./Projects');
const { About } = require('./About');
const { ErrorPage } = require('./ErrorPage');

export class Routes extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={HomePage} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={ErrorPage} />
        </Switch>
      </>
    );
  }
}
