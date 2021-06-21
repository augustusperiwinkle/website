import React from 'react';
import './styles/Contact.css';
import './styles/stars.css';

const starArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

export default class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      currentHover: 'star',
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="contactContainer">
        <div id="contactSpacer" />
        <div
          id="contactTitleContainer"
          onMouseOver={() => {
            if (this.state.currentHover !== 'star') {
              this.setState({
                currentHover: 'star',
              });
            }
          }}
        >
          <h1 id="contactTitle" style={{ margin: '0px' }}>
            Let's get in touch!
          </h1>
        </div>
        <a
          href="https://github.com/dereklouis"
          className="gitHubIcon contactLink"
          onMouseOver={() => {
            if (this.state.currentHover !== 'githubStar') {
              this.setState({
                currentHover: 'githubStar',
              });
            }
          }}
        >
          <i className="fab fa-github contactIcon"></i>
          <p style={{ 'margin-left': '15px' }}>Check out my GitHub</p>
        </a>
        <a
          href="https://www.linkedin.com/in/derek-louis/"
          className="linkedInIcon contactLink"
          onMouseOver={() => {
            if (this.state.currentHover !== 'linkedinStar') {
              this.setState({
                currentHover: 'linkedinStar',
              });
            }
          }}
        >
          <i className="fab fa-linkedin contactIcon"></i>
          <p style={{ 'margin-left': '15px' }}>Connect on LinkedIn</p>
        </a>
        <a
          href="mailto:thedereklouis@gmail.com"
          className="emailIcon contactLink"
          onMouseOver={() => {
            if (this.state.currentHover !== 'emailStar') {
              this.setState({
                currentHover: 'emailStar',
              });
            }
          }}
        >
          <i class="far fa-envelope contactIcon"></i>
          <p style={{ 'margin-left': '15px' }}>Send me an email</p>
        </a>
        <p id="email">thedereklouis@gmail.com</p>
        <div id="contactCreditContainer">
          <p id="contactCredit">Website coded by Derek Louis, 2021</p>
        </div>
        <div id="starContainer">
          {starArr.map((star) => {
            return (
              <img
                alt=""
                src="photos/star.png"
                className={`star ${this.state.currentHover + star}`}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
