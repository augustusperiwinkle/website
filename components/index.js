const React = require('react');
const ReactDOM = require('react-dom');
const { HashRouter } = require('react-router-dom');

document.cookie = 'cookie1=value1; SameSite=Lax';

const { NavBar } = require('./NavBar');
const { Routes } = require('./Routes');
const { Footer } = require('./Footer');

ReactDOM.render(
  <HashRouter>
    <NavBar />
    <Routes />
    <Footer />
  </HashRouter>,
  document.getElementById('app')
);
