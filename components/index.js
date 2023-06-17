import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

document.cookie = 'cookie1=value1; SameSite=Lax';

import Routes from './Routes';
import ColorLand from './ColorLand';

ReactDOM.render(
  <HashRouter>
    <ColorLand />
    <Routes />
  </HashRouter>,
  document.getElementById('app')
);
