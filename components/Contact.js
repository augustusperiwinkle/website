import React from 'react';
import './styles/Contact.css';
import './styles/hobby.css';

const hobbyArr = [
  'astronomy',
  'bicycle',
  'bonsai',
  'book',
  'hockey',
  'music',
  'science',
  'telescope',
  'travel',
  'astronomy',
  'bicycle',
  'bonsai',
  'book',
  'hockey',
  'music',
  'science',
  'telescope',
  'travel',
];

let mobileAgent = false;

if (
  /|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  mobileAgent = true;
}

let isMobile = window.innerWidth <= 450 || window.innerHeight <= 450;

window.addEventListener('resize', function (e) {
  if (
    (window.innerWidth <= 450 || window.innerHeight <= 450) &&
    isMobile === false
  ) {
    isMobile = true;
  } else if (
    (window.innerWidth > 450 || window.innerHeight > 450) &&
    isMobile === true
  ) {
    isMobile = false;
  }
});

export default class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      currentHover: 'hobby',
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div
        id="contactContainer"
        className={`${
          mobileAgent ? 'mobileContactContainer' : 'desktopContactContainer'
        }`}
        onMouseOver={(e) => {
          if (
            e.target.id === 'contactContainer' &&
            this.state.currentHover !== 'hobby'
          ) {
            this.setState({
              currentHover: 'hobby',
            });
          }
        }}
      >
        <div id="contactSpacer" />
        <div
          id="contactTitleContainer"
          onMouseOver={() => {
            if (!isMobile && this.state.currentHover !== 'hobby') {
              this.setState({
                currentHover: 'hobby',
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
            if (!isMobile && this.state.currentHover !== 'githubHobby') {
              this.setState({
                currentHover: 'githubHobby',
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
            if (!isMobile && this.state.currentHover !== 'linkedinHobby') {
              this.setState({
                currentHover: 'linkedinHobby',
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
            if (!isMobile && this.state.currentHover !== 'emailHobby') {
              this.setState({
                currentHover: 'emailHobby',
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
        <div id="hobbyContainer">
          {hobbyArr.map((hobby, idx) => {
            return (
              <img
                alt=""
                src={`photos/hobbyIcons/${hobby}.png`}
                className={`hobby ${this.state.currentHover + (idx + 1)}`}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
