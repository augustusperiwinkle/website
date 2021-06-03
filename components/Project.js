import React from 'react';
import Footer from './Footer';
import projects from './data/projects';
import techObj from './data/techObj';
import teamIcons from './data/teamIcons';
import Credit from './Credit';
import './styles/Project.css';

let slideIndex = 1;

export default class Project extends React.Component {
  constructor() {
    super();
    this.state = {
      technology: 'Technologies',
    };
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.newSlide = this.newSlide.bind(this);
    this.handleSlide = this.handleSlide.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.newSlide(slideIndex);
  }
  mouseOver(e) {
    if (e.target.className === 'techIcon') {
      this.setState({
        technology: e.target.id,
      });
    }
  }
  mouseLeave() {
    this.setState({
      technology: 'Technologies',
    });
  }

  newSlide(n) {
    const x = document.getElementsByClassName('descriptionImage');
    if (n > x.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = x.length;
    }
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = 'none';
    }
    x[slideIndex - 1].style.display = 'block';
  }

  handleSlide(n) {
    this.newSlide((slideIndex += n));
  }

  render() {
    const projectLocalSlug = this.props.match.params.project;
    const myProject = projects.filter(
      (project) => project.localSlug === projectLocalSlug
    )[0];
    return myProject === undefined ? (
      <>{this.props.history.push('/404error')}</>
    ) : (
      <>
        <div className="fullPageContainer">
          <a href={myProject.projectLink} id="projectAnchor" target="_blank">
            <h1 id="projectTitle">{myProject.title}</h1>
          </a>
          <div className="teamDiv">
            <div className="teamIcon">{teamIcons[myProject.team[0]]}</div>
            <p className="teamDescription">{myProject.team[1]}</p>
          </div>
          <p id="projectSubtitle">{myProject.subTitle}</p>
          <div id="videoMaster">
            {myProject.videoURL && (
              <div class="videoWrapper">
                <iframe
                  width="560"
                  height="315"
                  src={myProject.videoURL}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            )}
            <div
              className="iconRow"
              id="projectIconRow"
              onMouseOver={this.mouseOver}
              onMouseLeave={this.mouseLeave}
            >
              {myProject.technologies.map((technology) => {
                return (
                  <img
                    src={`../icons/${technology}.png`}
                    className="techIcon"
                    id={technology}
                  />
                );
              })}
            </div>
            <div id="projectTechTitleContainer">
              <h1
                style={techObj[this.state.technology].style}
                id="projectTechTitle"
              >
                {techObj[this.state.technology].name}
              </h1>
            </div>
          </div>
          <p id="projectDescription">{myProject.description}</p>
          {myProject.description2 && (
            <p id="projectDescription">{myProject.description2}</p>
          )}
          <a id="projectLink" href={myProject.projectLink} target="_blank">
            {`Click here to check out ${myProject.title}!`}
          </a>
          <div id="descriptionImageContainer">
            <i
              className="fas fa-chevron-left leftButton"
              onClick={() => this.handleSlide(-1)}
            ></i>
            {myProject.imageURLs.map((url) => {
              return (
                <img
                  src={`./photos/${myProject.localSlug}/${url}`}
                  className="descriptionImage"
                />
              );
            })}
            <i
              className="fas fa-chevron-right rightButton"
              onClick={() => this.handleSlide(1)}
            ></i>
          </div>
        </div>
        <Footer />
        <Credit />
      </>
    );
  }
}
