import React from 'react';
import Footer from './Footer';
import techObj from './data/techObj';
import Credit from './Credit';
import './styles/About.css';

export default class About extends React.Component {
  constructor() {
    super();
    this.state = {
      technology: 'My Technologies',
    };
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  mouseOver(e) {
    if (e.target.className === 'techIconAbout') {
      this.setState({
        technology: e.target.id,
      });
    }
  }
  mouseLeave() {
    this.setState({
      technology: 'My Technologies',
    });
  }
  render() {
    return (
      <>
        <div className="fullPageContainer">
          <div id="aboutContainer">
            <div id="textAndImage">
              <img src="./photos/codePicSmall.jpg" id="myPhoto" />
              <div className="aboutPageText">
                Derek Louis is a passionate software engineer with a certificate
                in full stack software engineering from Fullstack Academy. After
                traveling the world for 10 years as a tour manager and
                professional musician, Derek brings a high level of leadership,
                adaptability and creativity to any dev team.
                <br />
                <br />
                When Derek isn't coding, he's most likely learning about or
                enjoying astronomy, bonsai, books, cycling, dark chocolate,
                hockey, music, nature, podcasts, science, telescopes, traveling,
                video games and watches.
              </div>
            </div>
            <h1
              style={techObj[this.state.technology].style}
              id="aboutTechTitle"
            >
              {techObj[this.state.technology].name}
            </h1>
            <div
              id="techContainer"
              onMouseOver={this.mouseOver}
              onMouseLeave={this.mouseLeave}
            >
              <img
                src="../icons/javascript.png"
                className="techIconAbout"
                id="javascript"
              />
              <img
                src="../icons/html5.png"
                className="techIconAbout"
                id="html5"
              />
              <img
                src="../icons/css3.png"
                className="techIconAbout"
                id="css3"
              />
              <img src="../icons/git.png" className="techIconAbout" id="git" />
              <img
                src="../icons/github.png"
                className="techIconAbout"
                id="github"
              />
              <img
                src="../icons/node.png"
                className="techIconAbout"
                id="node"
              />
              <img src="../icons/npm.png" className="techIconAbout" id="npm" />
              <img
                src="../icons/express.png"
                className="techIconAbout"
                id="express"
              />
              <img
                src="../icons/passport.png"
                className="techIconAbout"
                id="passport"
              />
              <img
                src="../icons/postgresql.png"
                className="techIconAbout"
                id="postgresql"
              />
              <img
                src="../icons/sequelize.png"
                className="techIconAbout"
                id="sequelize"
              />
              <img
                src="../icons/react.png"
                className="techIconAbout"
                id="react"
              />
              <img
                src="../icons/reactrouter.png"
                className="techIconAbout"
                id="reactrouter"
              />
              <img
                src="../icons/redux.png"
                className="techIconAbout"
                id="redux"
              />
              <img
                src="../icons/webpack.png"
                className="techIconAbout"
                id="webpack"
              />
              <img
                src="../icons/babel.png"
                className="techIconAbout"
                id="babel"
              />
              <img src="../icons/d3.png" className="techIconAbout" id="d3" />
              <img src="../icons/mui.png" className="techIconAbout" id="mui" />
              <img
                src="../icons/firebase.png"
                className="techIconAbout"
                id="firebase"
              />
              <img
                src="../icons/heroku.png"
                className="techIconAbout"
                id="heroku"
              />
            </div>
            <a href="./Derek_Louis_Resume.pdf" target="_blank" id="resume">
              <i className="fas fa-file-pdf" id="pdfLogo"></i>View Resume
            </a>
          </div>
        </div>
        <Footer />
        <Credit />
      </>
    );
  }
}
