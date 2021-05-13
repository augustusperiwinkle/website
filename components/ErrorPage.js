import React from 'react';

export default class ErrorPage extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="fullPageContainer">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '75vh',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1>404</h1>
          <h1>Page Not Found</h1>
        </div>
      </div>
    );
  }
}
