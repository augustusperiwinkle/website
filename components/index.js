import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

document.cookie = 'cookie1=value1; SameSite=Lax';

import NavBar from './NavBar';
import Routes from './Routes';

ReactDOM.render(
  <HashRouter>
    <NavBar />
    <Routes />
  </HashRouter>,
  document.getElementById('app')
);
