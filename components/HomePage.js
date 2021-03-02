const React = require('react');
const { Footer } = require('./Footer');
const { HomePageProject } = require('./HomePageProject');
const { projects } = require('./data/projects');

export class HomePage extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className="fullPageContainer">
          <h1>Welcome Friend!</h1>
          <div id="homePageProjectsContainer">
            {projects.map((project) => {
              return <HomePageProject title={project.title} />;
            })}
            <div className="homePageProject">
              <a
                href="https://thedereklouis.medium.com/add-an-interactive-chart-to-your-react-app-using-d3-v6-6c79f14a05f5"
                target="_blank"
              >
                <p className="homePageProjectTitle">D3.js Tutorial</p>
              </a>
              <a
                href="https://thedereklouis.medium.com/add-an-interactive-chart-to-your-react-app-using-d3-v6-6c79f14a05f5"
                target="_blank"
              >
                <div className="homePagePhotoWrapper">
                  <img
                    src="./photos/medium.jpg"
                    className="homePageProjectPhoto"
                  />
                  <div className="homePagePhotoMask">
                    <p className="homePageProjectDescription">
                      A Medium article with an accompanying code demo, written
                      to walk you through your first D3 chart.
                    </p>
                    <div className="homePageIconRow">
                      <div className="toolTip">
                        <span
                          className="toolTipText"
                          style={{ color: '#61DAFB' }}
                        >
                          React
                        </span>
                        <img src="../icons/react.png" className="techIconHP" />
                      </div>
                      <div className="toolTip">
                        <span
                          className="toolTipText"
                          style={{ color: '#F5864A' }}
                        >
                          D3
                        </span>
                        <img src="../icons/d3.png" className="techIconHP" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
