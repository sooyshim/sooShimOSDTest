import React, { useState, useRef, useCallback } from 'react';
import zoomIn from './images/zoomin_rest.png';
import zoomInHover from './images/zoomin_hover.png';
import zoomOut from './images/zoomout_rest.png';
import zoomOutHover from './images/zoomout_hover.png';
import reset from './images/home_rest.png';
import resetHover from './images/home_hover.png';
import fullPage from './images/fullpage_rest.png';
import fullPageHover from './images/fullpage_hover.png';

// The component is named controller rather than a navigator.
// In OSD, the navigator is a mini-map that shows the current location within an image.

const Controller = () => {
  // Refs to interact with the button icons
  // connected to the image tags of each button
  const zoomInButtonRef = useRef();
  const zoomOutButtonRef = useRef();
  const resetButtonRef = useRef();
  const fullPageButtonRef = useRef();


  // When buttons or images are hovered or focused(tabbed),
  // the image sources change
  const handleHoverFocus = useCallback((e) => {
    switch (e.target.className) {
      case 'zoomInButton':
        zoomInButtonRef.current.src = zoomInHover;
        break;
      case 'zoomOutButton':
        zoomOutButtonRef.current.src = zoomOutHover;
        break;
      case 'resetButton':
        resetButtonRef.current.src = resetHover;
        break;
      case 'fullPageButton':
        fullPageButtonRef.current.src = fullPageHover;
        break;
      default:
        return null;
    }
  }, []);

  const resetHoverFocus = useCallback((e) => {
    switch (e.target.className) {
      case 'zoomInButton':
        zoomInButtonRef.current.src = zoomIn;
        break;
      case 'zoomOutButton':
        zoomOutButtonRef.current.src = zoomOut;
        break;
      case 'resetButton':
        resetButtonRef.current.src = reset;
        break;
      case 'fullPageButton':
        fullPageButtonRef.current.src = fullPage;
        break;
      default:
        return null;
    }
  });

  return (
    <nav>
      <ul className="controlButtons">
        <button
          id="zoomIn"
          className="zoomInButton"
          type="button"
          onMouseOver={handleHoverFocus}
          onFocus={handleHoverFocus}
          onMouseOut={resetHoverFocus}
          onBlur={resetHoverFocus}
        >
          <img className="zoomInButton" src={zoomIn} ref={zoomInButtonRef} alt="zoom in" />
        </button>
        <button
          id="zoomOut"
          className="zoomOutButton"
          type="button"
          onMouseOver={handleHoverFocus}
          onFocus={handleHoverFocus}
          onMouseOut={resetHoverFocus}
          onBlur={resetHoverFocus}
        >
          <img className="zoomOutButton" src={zoomOut} ref={zoomOutButtonRef} alt="zoom out" />
        </button>
        <button
          id="reset"
          className="resetButton"
          type="button"
          onMouseOver={handleHoverFocus}
          onFocus={handleHoverFocus}
          onMouseOut={resetHoverFocus}
          onBlur={resetHoverFocus}
        >
          <img className="resetButton" src={reset} ref={resetButtonRef} alt="reset" />
        </button>
        <button
          id="fullPage"
          className="fullPageButton"
          type="button"
          onMouseOver={handleHoverFocus}
          onFocus={handleHoverFocus}
          onMouseOut={resetHoverFocus}
          onBlur={resetHoverFocus}
        >
          <img className="fullPageButton" src={fullPage} ref={fullPageButtonRef} alt="full page" />
        </button>
      </ul>
    </nav>
  );
};
export default Controller;
