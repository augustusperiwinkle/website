const React = require('react');
const { Link } = require('react-router-dom');

export class NavBar extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id="navBar">
        <Link className="link" to="/home">
          <p id="navItem">Home</p>
        </Link>
        <Link className="link" to="/projects">
          <p id="navItem">Projects</p>
        </Link>
        <Link className="link" to="/about">
          <p id="navItem">About</p>
        </Link>
        <Link className="link" to="/contact">
          <p id="navItem">Contact</p>
        </Link>
      </div>
    );
  }
}
