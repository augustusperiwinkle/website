import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const { HomePage } = require('./HomePage');
const { Contact } = require('./Contact');
const { About } = require('./About');
const { Viditia } = require('./Viditia');
const { GraceChopper } = require('./GraceChopper');
const { Window } = require('./Window');
const { ErrorPage } = require('./ErrorPage');

export class Routes extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/viditia" component={Viditia} />
          <Route path="/gracechopper" component={GraceChopper} />
          <Route path="/window" component={Window} />
          <Route component={ErrorPage} />
        </Switch>
      </>
    );
  }
}
