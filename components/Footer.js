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
        <i className="fab fa-spotify footerIcon" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCiXfmCm_xsZEUpieadVBhQA"
        target="_blank"
        className="iconAnchor"
      >
        <i className="fab fa-youtube footerIcon" />
      </a>
      <a
        href="https://www.instagram.com/augustusperiwinkle/"
        target="_blank"
        className="iconAnchor"
      >
        <i class="fab fa-instagram footerIcon" />
      </a>
      <a
        href="mailto:periwinkleaugustus@gmail.com"
        target="_blank"
        className="iconAnchor"
      >
        <i class="far fa-envelope footerIcon" />
      </a>
    </div>
  );
}

export default Footer;
