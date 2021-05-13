import React from 'react';
import { Link } from 'react-router-dom';
import SlideMenu from './SlideMenu';
import './styles/NavBar.css';

export default class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  handleClick() {
    const status = this.state.menuOpen;
    const menuButton = document.querySelector('.menu-btn');
    const slideMenu = document.getElementById('slideMenuWrapper');
    if (!status) {
      menuButton.classList.add('open');
      slideMenu.className = 'slideIn';
      this.setState({ menuOpen: true });
    } else {
      menuButton.classList.remove('open');
      slideMenu.className = 'slideOut';
      this.setState({ menuOpen: false });
    }
  }
  closeMenu() {
    const menuButton = document.querySelector('.menu-btn');
    const slideMenu = document.getElementById('slideMenuWrapper');
    menuButton.classList.remove('open');
    slideMenu.className = 'slideOut';
    this.setState({ menuOpen: false });
  }
  render() {
    window.onresize = () => {
      const slideMenu = document.getElementById('slideMenuWrapper');
      if (window.innerWidth > 600) {
        slideMenu.className = 'menuHidden';
      } else if (window.innerWidth <= 600 && this.state.menuOpen) {
        slideMenu.className = 'slideIn';
      }
    };
    return (
      <>
        <SlideMenu closeMenu={this.closeMenu} />
        <div id="navBarWrap" className="navBarMain">
          <div id="navBar">
            <div className="menu-btn" onClick={this.handleClick}>
              <div id="burger" className="menu-btn__burger"></div>
            </div>
            <Link className="logoLink" to="/work" onClick={this.closeMenu}>
              <div id="name">Derek Louis</div>
            </Link>
            <Link className="navItem" to="/work">
              <p>Work</p>
            </Link>
            <Link className="navItem" to="/about">
              <p>About</p>
            </Link>
            <Link className="navItem" to="/contact">
              <p>Contact</p>
            </Link>
          </div>
        </div>
      </>
    );
  }
}
