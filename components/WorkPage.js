import React from 'react';
import Footer from './Footer';
import WorkPageProject from './WorkPageProject';
import projects from './data/projects';
import Credit from './Credit';
import './styles/WorkPage.css';

export default class WorkPage extends React.Component {
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
          <div id="workPageProjectsContainer">
            {projects.map((project) => {
              return <WorkPageProject title={project.title} />;
            })}
          </div>
        </div>
        <Footer />
        <Credit />
      </>
    );
  }
}
