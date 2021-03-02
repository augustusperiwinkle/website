const React = require('react');

export class Contact extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="fullPageContainer">
        <h1 id="contactTitle">Let's get in touch!</h1>
        <a
          href="https://github.com/dereklouis"
          className="gitHubIcon contactLink"
        >
          <i className="fab fa-github" style={{ 'font-size': '32px' }}></i>
          <p style={{ 'margin-left': '15px' }}>Check out my GitHub</p>
        </a>
        <a
          href="https://www.linkedin.com/in/derek-louis/"
          className="linkedInIcon contactLink"
        >
          <i className="fab fa-linkedin" style={{ 'font-size': '32px' }}></i>
          <p style={{ 'margin-left': '15px' }}>Connect on LinkedIn</p>
        </a>
        <a
          href="mailto:thedereklouis@gmail.com"
          className="emailIcon contactLink"
        >
          <i class="far fa-envelope" style={{ 'font-size': '32px' }}></i>
          <p style={{ 'margin-left': '15px' }}>Send me an email</p>
        </a>
      </div>
    );
  }
}
