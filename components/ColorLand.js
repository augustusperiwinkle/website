import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { colorsArray } from '../colors.js';
import '../styles/color-land.css';

let lastIndex = null;

function ColorLand(props) {
  const history = useHistory();
  const location = useLocation();

  const [canvas, setCanvas] = useState(null);
  const [ctx, setCtx] = useState(null);

  useEffect(() => {
    const _canvas = document.getElementById('color-land-canvas');
    const _ctx = _canvas.getContext('2d');
    setCanvas(_canvas);
    setCtx(_ctx);

    if (location.pathname !== '/') {
      history.push('/');
    }

    return () => {
      window.removeEventListener('resize', function () {
        resizeCanvas();
      });
    };
  }, []);

  useEffect(() => {
    if (canvas && ctx) {
      bootUpCanvas();
    }
  }, [canvas, ctx]);

  function bootUpCanvas() {
    const _ctx = canvas.getContext('2d');
    setCtx(_ctx);

    window.addEventListener('resize', function () {
      resizeCanvas();
    });

    configureCanvas();

    const intervalId = setInterval(() => {
      circleFilled(ctx);
    }, 500);

    sessionStorage.setItem('intervalId', intervalId);
  }

  function configureCanvas() {
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const scale = window.devicePixelRatio;

    canvas.width = window.innerWidth * scale;
    canvas.height = window.innerHeight * scale;

    ctx.scale(scale, scale);
  }

  async function resizeCanvas() {
    // const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    // configureCanvas();
    // ctx.putImageData(imageData, 0, 0);

    // -------------

    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    // -------------
  }

  function generateRandomArrayIndex() {
    let randomArrayIndex = Math.floor(Math.random() * 19);

    if (randomArrayIndex !== lastIndex) {
      return randomArrayIndex;
    }
    return generateRandomArrayIndex();
  }

  function circleFilled(ctx) {
    ctx.beginPath();
    ctx.arc(
      Math.ceil(Math.random() * window.innerWidth),
      Math.ceil(Math.random() * window.innerHeight),
      Math.ceil(Math.random() * window.innerWidth) / 2,
      0,
      2 * Math.PI
    );

    let randomArrayIndex = generateRandomArrayIndex();
    let randomColor = colorsArray[randomArrayIndex];

    ctx.fillStyle = randomColor;
    ctx.fill();
    lastIndex = randomArrayIndex;
  }

  function circleOutline(ctx) {
    ctx.beginPath();
    ctx.arc(
      Math.ceil(Math.random() * window.innerWidth),
      Math.ceil(Math.random() * window.innerHeight),
      Math.ceil(Math.random() * window.innerWidth) / 2,
      0,
      2 * Math.PI
    );
    ctx.strokeStyle = colorsArray[Math.floor(Math.random() * 20)];
    ctx.lineWidth = Math.ceil(Math.random() * 15);
    ctx.stroke();
  }

  return <canvas id="color-land-canvas" />;
}

export default ColorLand;
