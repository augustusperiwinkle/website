const React = require('react');

export class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const current = this.state.counter;
    this.setState({
      counter: current + 1,
    });
  }
  render() {
    return (
      <div className="fullPageContainer">
        <h1>This is the contact page!</h1>
      </div>
    );
  }
}
