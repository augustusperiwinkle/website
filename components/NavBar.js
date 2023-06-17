import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SlideMenu from './SlideMenu';
import './styles/NavBar.css';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleClick() {
    const menuButton = document.querySelector('.menu-btn');
    const slideMenu = document.getElementById('slideMenuWrapper');
    if (!menuOpen) {
      menuButton.classList.add('open');
      slideMenu.className = 'slideIn';
      setMenuOpen(true);
    } else {
      menuButton.classList.remove('open');
      slideMenu.className = 'slideOut';
      setMenuOpen(false);
    }
  }
  function closeMenu() {
    const menuButton = document.querySelector('.menu-btn');
    const slideMenu = document.getElementById('slideMenuWrapper');
    menuButton.classList.remove('open');
    slideMenu.className = 'slideOut';
    setMenuOpen(false);
  }

  useEffect(() => {
    window.addEventListener('resize', function () {
      handleResize();
    });

    return () => {
      window.removeEventListener('resize', function () {
        handleResize();
      });
    };
  }, []);

  function handleResize() {
    const slideMenu = document.getElementById('slideMenuWrapper');

    if (window.innerWidth > 600) {
      slideMenu.className = 'menuHidden';
    } else if (window.innerWidth <= 600 && menuOpen) {
      slideMenu.className = 'slideIn';
    }
  }

  return (
    <>
      <SlideMenu closeMenu={closeMenu} />
      <div id="navBarWrap" className="navBarMain">
        <div id="navBar">
          <div className="menu-btn" onClick={handleClick}>
            <div id="burger" className="menu-btn__burger"></div>
          </div>
          <Link
            className="logoLink"
            to="/"
            onClick={() => {
              window.location.reload();
            }}
          >
            <div id="name">Augustus Periwinkle</div>
          </Link>
          <Link className="navItem" to="/music">
            <p>Music</p>
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

export default NavBar;
