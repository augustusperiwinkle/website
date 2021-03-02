const React = require('react');
const { Link } = require('react-router-dom');
const { projects } = require('./data/projects');

export const HomePageProject = (props) => {
  const { title } = props;
  const myProject = projects.filter((project) => project.title === title)[0];

  return (
    <div className="homePageProject">
      <Link className="homePageProjectLink" to={`/projects/${myProject.slug}`}>
        <p className="homePageProjectTitle">{myProject.title}</p>
      </Link>
      <Link className="homePageProjectLink" to={`/projects/${myProject.slug}`}>
        <div className="homePagePhotoWrapper">
          <img
            src={`./photos/${myProject.imageURL}`}
            className="homePageProjectPhoto"
          />
          <div className="homePagePhotoMask">
            <p className="homePageProjectDescription">{myProject.teaser}</p>
            <div className="homePageIconRow">
              {myProject.technologies.map((technology) => {
                return (
                  <img
                    src={`../icons/${technology}.png`}
                    className="techIconHP"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
