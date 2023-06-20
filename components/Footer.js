import React from 'react';
import './styles/footer.css';

export default class Footer extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div id="footerContainer">
        <a href="" target="_blank" className="iconAnchor">
          <i className="fab fa-youtube footerIcon"></i>
        </a>
        <a
          href="https://open.spotify.com/artist/07qpp9gPZKocgiJEuwK299?si=C--es7iDRyuVvhctKGQYeQ"
          target="_blank"
          className="iconAnchor"
        >
          <i className="fab fa-spotify footerIcon"></i>
        </a>
        <a
          href="mailto:periwinkleaugustus@gmail.com"
          target="_blank"
          className="iconAnchor"
        >
          <i class="far fa-envelope footerIcon"></i>
        </a>
      </div>
    );
  }
}
