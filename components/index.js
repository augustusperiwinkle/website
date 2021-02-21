const React = require('react');
const ReactDOM = require('react-dom');
const { HashRouter } = require('react-router-dom');

const { Routes } = require('./Routes');
const { NavBar } = require('./NavBar');

ReactDOM.render(
  <HashRouter>
    <NavBar />
    <Routes />
  </HashRouter>,
  document.getElementById('app')
);
