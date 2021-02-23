const React = require('react');

export class About extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="fullPageContainer">
        <h1>About section!!!</h1>
        <div id="filler"></div>
      </div>
    );
  }
}
