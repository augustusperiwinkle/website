const React = require('react');

export class Projects extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="fullPageContainer">
        <a href="https://viditia-cf976.web.app/vidits" id="projectAnchor">
          <h1 id="projectTitle">Viditia</h1>
        </a>
        <p id="projectSubtitle">
          Viditia is a web application where users can participate, visualize
          and interact with data from polls in a fun and clever way.
        </p>
        <div id="videoMaster">
          <div className="iconRow">
            <img src="../icons/react.png" className="techIcon" />
            <img src="../icons/redux.png" className="techIcon" />
            <img src="../icons/d3.png" className="techIcon" />
            <img src="../icons/mui.png" className="techIcon" />
          </div>
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
          <div className="iconRow">
            <img src="../icons/firebase.png" className="techIcon" />
            <img src="../icons/node.png" className="techIcon" />
            <img src="../icons/webpack.png" className="techIcon" />
            <img src="../icons/babel.png" className="techIcon" />
          </div>
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
    );
  }
}
