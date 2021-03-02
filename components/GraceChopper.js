const React = require('react');
const { Footer } = require('./Footer');
const { techObj } = require('./data/techObj');

export class GraceChopper extends React.Component {
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
    return (
      <>
        <div className="fullPageContainer">
          <a href="https://gracechopper.herokuapp.com/" id="projectAnchor">
            <h1 id="projectTitle">Grace Chopper</h1>
          </a>
          <p id="projectSubtitle">
            Grace Chopper is An eCommerce store featuring guest & user accounts,
            OAuth, admin privileges, product filters and more.
          </p>
          <div id="videoMaster">
            {/* <div class="videoWrapper">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/V3NOdydimPk"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div> */}
            <div
              className="iconRow"
              id="projectIconRow"
              onMouseOver={this.mouseOver}
              onMouseLeave={this.mouseLeave}
            >
              <img src="../icons/react.png" className="techIcon" id="react" />
              <img src="../icons/redux.png" className="techIcon" id="redux" />
              <img
                src="../icons/reactrouter.png"
                className="techIcon"
                id="reactrouter"
              />
              <img src="../icons/node.png" className="techIcon" id="node" />
              <img
                src="../icons/postgresql.png"
                className="techIcon"
                id="postgresql"
              />
              <img
                src="../icons/sequelize.png"
                className="techIcon"
                id="sequelize"
              />
              <img
                src="../icons/webpack.png"
                className="techIcon"
                id="webpack"
              />
              <img src="../icons/babel.png" className="techIcon" id="babel" />
            </div>
            <h1
              style={techObj[this.state.technology].style}
              id="projectTechTitle"
            >
              {techObj[this.state.technology].name}
            </h1>
          </div>
          <p id="projectDescription">Grace Chopper the eCommerce store.</p>
        </div>
        <Footer />
      </>
    );
  }
}
