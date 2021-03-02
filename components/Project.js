const React = require('react');
const { Footer } = require('./Footer');
const { projects } = require('./data/projects');
const { techObj } = require('./data/techObj');

export class Project extends React.Component {
  constructor() {
    super();
    this.state = {
      technology: 'Technologies',
    };
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  mouseOver(e) {
    if (e.target.className === 'techIcon') {
      this.setState({
        technology: e.target.id,
      });
    } else {
      this.setState({
        technology: 'Technologies',
      });
    }
  }
  mouseLeave() {
    this.setState({
      technology: 'Technologies',
    });
  }
  render() {
    const projectSlug = this.props.match.params.project;
    const myProject = projects.filter(
      (project) => project.slug === projectSlug
    )[0];
    return myProject === undefined ? (
      <>{this.props.history.push('/404error')}</>
    ) : (
      <>
        <div className="fullPageContainer">
          <a href={myProject.projectLink} id="projectAnchor">
            <h1 id="projectTitle">{myProject.title}</h1>
          </a>
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
            <h1
              style={techObj[this.state.technology].style}
              id="projectTechTitle"
            >
              {techObj[this.state.technology].name}
            </h1>
          </div>
          <p id="projectDescription">{myProject.description}</p>
          {myProject.description2 && (
            <p id="projectDescription">{myProject.description2}</p>
          )}
        </div>
        <Footer />
      </>
    );
  }
}
