import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SlideMenu from './SlideMenu';
import '../styles/nav-bar.css';

let menuOpen = false;

function NavBar() {
  const menuBtn = useRef(null);
  const slideMenu = useRef(null);

  function handleClick() {
    if (!menuOpen) {
      menuBtn.current.classList.add('open');
      slideMenu.current.className = 'slideIn';
      menuOpen = true;
    } else {
      menuBtn.current.classList.remove('open');
      slideMenu.current.className = 'slideOut';
      menuOpen = false;
    }
  }

  function closeMenu() {
    menuBtn.current.classList.remove('open');
    slideMenu.current.className = 'slideOut';
    menuOpen = false;
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    if (slideMenu.current) {
      if (window.innerWidth > 750) {
        slideMenu.current.className = 'menuHidden';
      } else if (window.innerWidth <= 750 && menuOpen) {
        slideMenu.current.className = 'slideIn';
      }
    }
  };

  return (
    <>
      <SlideMenu closeMenu={closeMenu} slideMenuRef={slideMenu} />
      <div id="navBarWrap" className="navBarMain">
        <div id="navBar">
          <div className="menu-btn" onClick={handleClick} ref={menuBtn}>
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
          <Link className="nav-item" to="/music">
            <p>Music</p>
          </Link>
          <Link className="nav-item" to="/about">
            <p>About</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
