import { Link } from 'react-router-dom';
import '../styles/slide-menu.css';

export default function SlideMenu(props) {
  return (
    <div id="slideMenuWrapper" className="menuHidden" ref={props.slideMenuRef}>
      <div id="SMLinkBox">
        <Link className="SMLink" to="/music" onClick={props.closeMenu}>
          <p className="SMItem">Music</p>
        </Link>
        <Link className="SMLink" to="/collectibles" onClick={props.closeMenu}>
          <p className="SMItem">Collectibles</p>
        </Link>
        <Link className="SMLink" to="/about" onClick={props.closeMenu}>
          <p className="SMItem">About</p>
        </Link>
      </div>
    </div>
  );
}
