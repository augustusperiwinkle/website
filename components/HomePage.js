const React = require('react');
const pizza = 6;

export class HomePage extends React.Component {
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
      <div>
        <h1>Welcome to the Derek Louis portfolio site!!!</h1>
        <button onClick={this.handleClick}>Like this page!</button>
        <h3>Likes: {this.state.counter}</h3>
      </div>
    );
  }
}
