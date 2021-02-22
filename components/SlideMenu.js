const React = require('react');
const { Link } = require('react-router-dom');

export class SlideMenu extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id="slideMenuWrapper" className="menuHidden">
        <div id="SMLinkBox">
          <Link className="SMLink" to="/home" onClick={this.props.closeMenu}>
            <p id="navItem">Home</p>
          </Link>
          <Link
            className="SMLink"
            to="/projects"
            onClick={this.props.closeMenu}
          >
            <p id="navItem">Projects</p>
          </Link>
          <Link className="SMLink" to="/about" onClick={this.props.closeMenu}>
            <p id="navItem">About</p>
          </Link>
          <Link className="SMLink" to="/contact" onClick={this.props.closeMenu}>
            <p id="navItem">Contact</p>
          </Link>
        </div>
      </div>
    );
  }
}
