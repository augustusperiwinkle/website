const React = require('react');
const { Footer } = require('./Footer');
const { techObj } = require('./data/techObj');

export class Window extends React.Component {
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
          <a href="https://github.com/dereklouis/window" id="projectAnchor">
            <h1 id="projectTitle">Window</h1>
          </a>
          <p id="projectSubtitle">
            Window is a chrome extension that animates the current weather
            conditions in your city. No words, no numbers, your own virtual
            window to the outside world.
          </p>
          <div id="videoMaster">
            <div class="videoWrapper">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/V3NOdydimPk"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div
              className="iconRow"
              id="projectIconRow"
              onMouseOver={this.mouseOver}
              onMouseLeave={this.mouseLeave}
            >
              <img
                src="../icons/chrome-extension.png"
                className="techIcon"
                id="chrome-extension"
              />
              <img src="../icons/axios.png" className="techIcon" id="axios" />
            </div>
            <h1
              style={techObj[this.state.technology].style}
              id="projectTechTitle"
            >
              {techObj[this.state.technology].name}
            </h1>
          </div>
          <p id="projectDescription">
            Using only one dependency (Axios), Window transforms a GET request
            to OpenWeatherMap API, into a visual rendering. Launch window, and
            pick your city. Boston, Chicago, Los Angeles, or New York City will
            render matching skylines, however, any city can be launched with a
            generic skyline. Once you luanch your city, Window takes the UNIX
            time for sunrise, sunset, and the moment the code executes, to
            position the sun on one of 130 possible locations along a progress
            arc. Once, the sun position has been determined, all other major
            weather conditions such as day/night, clouds, rain and snow are set.
            <br />
            <br />
            City selections on Window will persist between sessions thanks to
            local storage. Want to watch the sunset through your virtual window?
            Just leave Window open, and it will update once every 60 seconds.
          </p>
        </div>
        <Footer />
      </>
    );
  }
}
