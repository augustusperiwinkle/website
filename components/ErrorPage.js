import React from 'react';

export default class ErrorPage extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="page-wrapper">
        <h1>404</h1>
        <h1>Page Not Found</h1>
      </div>
    );
  }
}
