import React from 'react';
import { Link } from 'react-router-dom';
import './styles/slide-menu.css';

function SlideMenu(props) {
  return (
    <div id="slideMenuWrapper" className="menuHidden" ref={props.slideMenuRef}>
      <div id="SMLinkBox">
        <Link className="SMLink" to="/music" onClick={props.closeMenu}>
          <p className="SMItem">Music</p>
        </Link>
        <Link className="SMLink" to="/about" onClick={props.closeMenu}>
          <p className="SMItem">About</p>
        </Link>
        <Link className="SMLink" to="/contact" onClick={props.closeMenu}>
          <p className="SMItem">Contact</p>
        </Link>
      </div>
    </div>
  );
}

export default SlideMenu;
