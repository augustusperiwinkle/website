import React from 'react';
import './styles/Animation.css';

export default class Animation extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const container = document.getElementById('animationContainer');
    container.addEventListener('animationend', function (e) {
      if (e.target.id === 'animationContainer') {
        container.className = 'animationEnd';
        localStorage.setItem('animationPlayed', 'true');
      }
    });
  }

  render() {
    return (
      <div id="animationContainer" className="animationRun">
        <div id="animationNameContainer">
          <div className="animationSlider" id="as1"></div>
          <div className="animationSlider" id="as2"></div>
          <div className="animationSlider" id="as3"></div>
          <div className="animationSlider" id="as4"></div>
          <div className="animationSlider" id="as5"></div>
          <div className="animationSlider" id="as6"></div>
          <div className="animationSlider" id="as7"></div>
          <div className="animationSlider" id="as8"></div>
          <div className="animationSlider" id="as9"></div>
          <div className="animationSlider" id="as10"></div>
          <p id="animationName">Derek Louis</p>
        </div>
        <div id="sweContainer">
          <div className="animationSlider" id="as11"></div>
          <div className="animationSlider" id="as12"></div>
          <p id="swe">Software Engineer</p>
        </div>
        <div id="cityContainer">
          <div className="animationSlider" id="as13"></div>
          <div className="animationSlider" id="as14"></div>
          <p id="city">New York City</p>
        </div>
      </div>
    );
  }
}
