const React = require('react');
const { Footer } = require('./Footer');
const { Link } = require('react-router-dom');

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
            <div className="homePageProject">
              <Link className="homePageProjectLink" to="/viditia">
                <p className="homePageProjectTitle">Viditia</p>
              </Link>
              <Link className="homePageProjectLink" to="/viditia">
                <div className="homePagePhotoWrapper">
                  <img
                    src="./photos/viditia.jpg"
                    className="homePageProjectPhoto"
                  />
                  <div className="homePagePhotoMask">
                    <p className="homePageProjectDescription">
                      A web application where users can participate, visualize
                      and interact with data from polls in a fun and clever way.
                    </p>
                    <div className="homePageIconRow">
                      <img src="../icons/react.png" className="techIconHP" />
                      <img src="../icons/redux.png" className="techIconHP" />
                      <img src="../icons/d3.png" className="techIconHP" />
                      <img src="../icons/mui.png" className="techIconHP" />
                      <img src="../icons/firebase.png" className="techIconHP" />
                      <img src="../icons/node.png" className="techIconHP" />
                      <img src="../icons/webpack.png" className="techIconHP" />
                      <img src="../icons/babel.png" className="techIconHP" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="homePageProject">
              <Link className="homePageProjectLink" to="/gracechopper">
                <p className="homePageProjectTitle">Grace Chopper</p>
              </Link>
              <Link className="homePageProjectLink" to="/gracechopper">
                <div className="homePagePhotoWrapper">
                  <img
                    src="./photos/gracechopper.jpg"
                    className="homePageProjectPhoto"
                  />
                  <div className="homePagePhotoMask">
                    <p className="homePageProjectDescription">
                      An eCommerce store featuring guest & user accounts, OAuth,
                      admin privileges, product filters and more.
                    </p>
                    <div className="homePageIconRow">
                      <img src="../icons/react.png" className="techIconHP" />
                      <img src="../icons/redux.png" className="techIconHP" />
                      <img
                        src="../icons/reactrouter.png"
                        className="techIconHP"
                      />
                      <img src="../icons/node.png" className="techIconHP" />
                      <img
                        src="../icons/postgresql.png"
                        className="techIconHP"
                      />
                      <img
                        src="../icons/sequelize.png"
                        className="techIconHP"
                      />
                      <img src="../icons/webpack.png" className="techIconHP" />
                      <img src="../icons/babel.png" className="techIconHP" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="homePageProject">
              <Link className="homePageProjectLink" to="/window">
                <p className="homePageProjectTitle">Window</p>
              </Link>
              <Link className="homePageProjectLink" to="/window">
                <div className="homePagePhotoWrapper">
                  <img
                    src="./photos/window.jpg"
                    className="homePageProjectPhoto"
                  />
                  <div className="homePagePhotoMask">
                    <p className="homePageProjectDescription">
                      A chrome extension that visually renders the current
                      weather conditions in your city.
                    </p>
                    <div className="homePageIconRow">
                      <img
                        src="../icons/chrome-extension.png"
                        className="techIconHP"
                      />
                      <img src="../icons/axios.png" className="techIconHP" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="homePageProject">
              <a href="https://thedereklouis.medium.com/add-an-interactive-chart-to-your-react-app-using-d3-v6-6c79f14a05f5">
                <p className="homePageProjectTitle">D3.js Tutorial</p>
              </a>
              <a href="https://thedereklouis.medium.com/add-an-interactive-chart-to-your-react-app-using-d3-v6-6c79f14a05f5">
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
                      <img src="../icons/react.png" className="techIconHP" />
                      <img src="../icons/d3.png" className="techIconHP" />
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
