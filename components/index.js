const React = require('react');
const ReactDOM = require('react-dom');

const { HomePage } = require('./HomePage');
(() => {
  console.log('webpack worked 8888');
})();
ReactDOM.render(<HomePage />, document.getElementById('app'));
