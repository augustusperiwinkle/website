const React = require('react');
const { Link } = require('react-router-dom');
const { SlideMenu } = require('./SlideMenu');

let userScrolled = false;

export class NavBar extends React.Component {
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
    window.onscroll = () => {
      const navBarWrap = document.getElementById('navBarWrap');
      const name = document.getElementById('name');
      const burger = document.getElementById('burger');
      const navItemHome = document.getElementById('navItemHome');
      const navItemAbout = document.getElementById('navItemAbout');
      const navItemContact = document.getElementById('navItemContact');
      if (window.scrollY <= 15 && userScrolled) {
        navBarWrap.className = 'navBarMain';
        name.style.color = 'black';
        burger.className = 'menu-btn__burger_Black';
        navItemHome.className = 'navItemMain';
        navItemAbout.className = 'navItemMain';
        navItemContact.className = 'navItemMain';
      } else if (window.scrollY > 15) {
        navBarWrap.className = 'navBarAlt';
        userScrolled = true;
        name.style.color = 'white';
        burger.className = 'menu-btn__burger_White';
        navItemHome.className = 'navItemAlt';
        navItemAbout.className = 'navItemAlt';
        navItemContact.className = 'navItemAlt';
      }
    };
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
        <div id="navBarWrap">
          <div id="navBar">
            <div className="menu-btn" onClick={this.handleClick}>
              <div id="burger" className="menu-btn__burger_Black"></div>
            </div>
            <Link className="logoLink" to="/home" onClick={this.closeMenu}>
              <div id="name">Derek Louis</div>
            </Link>
            <Link className="navItemMain" id="navItemHome" to="/home">
              <p>Home</p>
            </Link>
            <Link className="navItemMain" id="navItemAbout" to="/about">
              <p>About</p>
            </Link>
            <Link className="navItemMain" id="navItemContact" to="/contact">
              <p>Contact</p>
            </Link>
          </div>
        </div>
      </>
    );
  }
}
