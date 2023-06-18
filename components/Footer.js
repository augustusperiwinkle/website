import React from 'react';
import './styles/Footer.css';

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
        <a href="https://github.com/dereklouis" className="iconAnchor">
          <i className="fab fa-github footerIcon gitHubIcon"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/derek-louis/"
          className="iconAnchor"
        >
          <i className="fab fa-linkedin footerIcon linkedInIcon"></i>
        </a>
        <a href="mailto:periwinkleaugustus@gmail.com" className="iconAnchor">
          <i class="far fa-envelope footerIcon emailIcon"></i>
        </a>
      </div>
    );
  }
}
