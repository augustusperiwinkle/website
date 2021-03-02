const React = require('react');
const { Footer } = require('./Footer');
const { techObj } = require('./data/techObj');

export class Viditia extends React.Component {
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
          <a href="https://viditia-cf976.web.app/vidits" id="projectAnchor">
            <h1 id="projectTitle">Viditia</h1>
          </a>
          <p id="projectSubtitle">
            Viditia is a web application where users can participate, visualize
            and interact with data from polls in a fun and clever way.
          </p>
          <div id="videoMaster">
            <div class="videoWrapper">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/zXWWoYZqnwo"
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
              <img src="../icons/react.png" className="techIcon" id="react" />
              <img src="../icons/redux.png" className="techIcon" id="redux" />
              <img src="../icons/d3.png" className="techIcon" id="d3" />
              <img src="../icons/mui.png" className="techIcon" id="mui" />
              <img
                src="../icons/firebase.png"
                className="techIcon"
                id="firebase"
              />
              <img src="../icons/node.png" className="techIcon" id="node" />
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
          <p id="projectDescription">
            Viditia was built off of industry standard technologies: D3.js,
            Firebase, React, Redux, Material UI, Node, Express, HTML5 & CSS.
            Firebase allowed for reliable implementation of OAuth and back-end
            services. Our Firebase data base schema design was the backbone of
            Viditia, and crucial to get right. Our team went through several
            iterations of the design before we landed on the final production
            version. Once our schema was finalized, we were able to implement
            realtime voting/ updates to all of our D3 visualizations. D3 also
            allowed us to create highly customizable graphs in a wide range of
            styles.
          </p>
        </div>
        <Footer />
      </>
    );
  }
}
