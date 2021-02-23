const React = require('react');

export class Contact extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="fullPageContainer">
        <h1>This is the contact page!</h1>
      </div>
    );
  }
}
