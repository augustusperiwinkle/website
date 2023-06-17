import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

function TitleScreen(props) {
  const history = useHistory();

  const TL1 = useRef(null);
  const TL2 = useRef(null);
  const TL3 = useRef(null);
  const TL4 = useRef(null);
  const TL5 = useRef(null);
  const TL6 = useRef(null);
  const TL7 = useRef(null);
  const TL8 = useRef(null);
  const TL9 = useRef(null);
  const TL10 = useRef(null);
  const TL11 = useRef(null);
  const TL12 = useRef(null);
  const TL13 = useRef(null);
  const TL14 = useRef(null);
  const TL15 = useRef(null);
  const TL16 = useRef(null);
  const TL17 = useRef(null);
  const TL18 = useRef(null);

  useEffect(() => {
    configureTitle();
  }, []);

  function configureTitle() {
    const titleArray = [
      TL1,
      TL2,
      TL3,
      TL4,
      TL5,
      TL6,
      TL7,
      TL8,
      TL9,
      TL10,
      TL11,
      TL12,
      TL13,
      TL14,
      TL15,
      TL16,
      TL17,
      TL18,
    ];
    for (let letter of titleArray) {
      // letter.current.style.color = colorsArray[Math.floor(Math.random() * 20)];
      letter.current.style.animation = `letterFloat ${Math.ceil(
        Math.random() * 3
      )}s ease-out 0s infinite alternate forwards`;
    }
  }

  function handleClick() {
    const intervalId = sessionStorage.getItem('intervalId');
    clearInterval(intervalId);
    sessionStorage.setItem('intervalId', '');
    history.push('/home');
  }

  return (
    <div id="title-wrapper" onClick={handleClick}>
      <h1>
        <div id="title-sub-wrapper">
          <div id="augustus">
            <span class="t-l" id="T1" ref={TL1}>
              A
            </span>
            <span class="t-l" id="T2" ref={TL2}>
              U
            </span>
            <span class="t-l" id="T3" ref={TL3}>
              G
            </span>
            <span class="t-l" id="T4" ref={TL4}>
              U
            </span>
            <span class="t-l" id="T5" ref={TL5}>
              S
            </span>
            <span class="t-l" id="T6" ref={TL6}>
              T
            </span>
            <span class="t-l" id="T7" ref={TL7}>
              U
            </span>
            <span class="t-l" id="T8" ref={TL8}>
              S
            </span>
          </div>
          <div id="periwinkle">
            <span class="t-l" id="T9" ref={TL9}>
              P
            </span>
            <span class="t-l" id="T10" ref={TL10}>
              E
            </span>
            <span class="t-l" id="T11" ref={TL11}>
              R
            </span>
            <span class="t-l" id="T12" ref={TL12}>
              I
            </span>
            <span class="t-l" id="T13" ref={TL13}>
              W
            </span>
            <span class="t-l" id="T14" ref={TL14}>
              I
            </span>
            <span class="t-l" id="T15" ref={TL15}>
              N
            </span>
            <span class="t-l" id="T16" ref={TL16}>
              K
            </span>
            <span class="t-l" id="T17" ref={TL17}>
              L
            </span>
            <span class="t-l" id="T18" ref={TL18}>
              E
            </span>
          </div>
        </div>
      </h1>
      <h6>Click Anywhere to Enter</h6>
    </div>
  );
}

export default TitleScreen;
