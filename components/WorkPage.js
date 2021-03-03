const React = require('react');
const { Footer } = require('./Footer');
const { WorkPageProject } = require('./WorkPageProject');
const { projects } = require('./data/projects');

export class WorkPage extends React.Component {
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
      </>
    );
  }
}
