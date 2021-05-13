import React from 'react';
import { Link } from 'react-router-dom';
import './styles/SlideMenu.css';

export default class SlideMenu extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id="slideMenuWrapper" className="menuHidden">
        <div id="SMLinkBox">
          <Link className="SMLink" to="/work" onClick={this.props.closeMenu}>
            <p className="SMItem">Work</p>
          </Link>
          <Link className="SMLink" to="/about" onClick={this.props.closeMenu}>
            <p className="SMItem">About</p>
          </Link>
          <Link className="SMLink" to="/contact" onClick={this.props.closeMenu}>
            <p className="SMItem">Contact</p>
          </Link>
        </div>
      </div>
    );
  }
}
