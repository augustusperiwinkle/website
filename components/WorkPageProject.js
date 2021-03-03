const React = require('react');
const { Link } = require('react-router-dom');
const { projects } = require('./data/projects');
const { techObj } = require('./data/techObj');

export const WorkPageProject = (props) => {
  const { title } = props;
  const myProject = projects.filter((project) => project.title === title)[0];

  return (
    <div className="workPageProject">
      {myProject.localSlug ? (
        <>
          <Link
            className="workPageProjectLink"
            to={`/projects/${myProject.localSlug}`}
          >
            <p className="workPageProjectTitle">{myProject.title}</p>
          </Link>
          <Link
            className="workPageProjectLink"
            to={`/projects/${myProject.localSlug}`}
          >
            <div className="workPagePhotoWrapper">
              <img
                src={`./photos/${myProject.imageURL}`}
                className="workPageProjectPhoto"
              />
              <div className="workPagePhotoMask">
                <p id="workPageProjectDescription">{myProject.teaser}</p>
                <div className="workPageIconRow">
                  {myProject.technologies.map((technology) => {
                    return (
                      <div className="toolTip">
                        <span
                          className="toolTipText"
                          style={{ color: techObj[technology].style.color }}
                        >
                          {techObj[technology].name}
                        </span>
                        <img
                          src={`../icons/${technology}.png`}
                          className="techIconHP"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Link>
        </>
      ) : (
        <>
          <a
            href={myProject.projectLink}
            target="_blank"
            className="workPageProjectLink"
          >
            <p className="workPageProjectTitle">{myProject.title}</p>
          </a>
          <a
            href={myProject.projectLink}
            target="_blank"
            className="workPageProjectLink"
          >
            <div className="workPagePhotoWrapper">
              <img
                src={`./photos/${myProject.imageURL}`}
                className="workPageProjectPhoto"
              />
              <div className="workPagePhotoMask">
                <p id="workPageProjectDescription">{myProject.teaser}</p>
                <div className="workPageIconRow">
                  {myProject.technologies.map((technology) => {
                    return (
                      <div className="toolTip">
                        <span
                          className="toolTipText"
                          style={{ color: techObj[technology].style.color }}
                        >
                          {techObj[technology].name}
                        </span>
                        <img
                          src={`../icons/${technology}.png`}
                          className="techIconHP"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </a>
        </>
      )}
    </div>
  );
};
