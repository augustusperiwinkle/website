const React = require('react');

export class ErrorPage extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="fullPageContainer">
        <h1>404 Page Not Found!!!</h1>
      </div>
    );
  }
}
