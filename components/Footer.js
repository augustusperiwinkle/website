const React = require('react');

export class Footer extends React.Component {
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
          <i className="fab fa-github footerIcon" id="githubIcon"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/derek-louis/"
          className="iconAnchor"
        >
          <i className="fab fa-linkedin footerIcon" id="linkedInIcon"></i>
        </a>
      </div>
    );
  }
}
