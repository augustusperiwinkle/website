import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';

import TitleScreen from './TitleScreen';
import NavBar from './NavBar';
import Home from './Home';
import Music from './Music';
import Contact from './Contact';
import About from './About';
import Project from './Project';
import ErrorPage from './ErrorPage';

class Routes extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const path = this.props.location.pathname;
    return (
      <>
        {path !== '/' && <NavBar />}
        <Switch>
          <Route path="/" exact component={TitleScreen} />
          <Route path="/home" component={Home} />
          <Route path="/music" component={Music} />
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

export default withRouter(Routes);
