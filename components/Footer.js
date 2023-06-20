import React from 'react';
import '../styles/footer.css';

function Footer() {
  return (
    <div id="footerContainer">
      <a
        href="https://open.spotify.com/artist/07qpp9gPZKocgiJEuwK299?si=C--es7iDRyuVvhctKGQYeQ"
        target="_blank"
        className="iconAnchor"
      >
        <i className="fab fa-spotify footerIcon"></i>
      </a>
      <a
        href="https://www.youtube.com/channel/UCiXfmCm_xsZEUpieadVBhQA"
        target="_blank"
        className="iconAnchor"
      >
        <i className="fab fa-youtube footerIcon"></i>
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

export default Footer;
