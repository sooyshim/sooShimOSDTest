import React, { useCallback, useRef } from 'react';
import zoomIn from './images/zoomin_rest.png';
import zoomInHover from './images/zoomin_hover.png';
import zoomOut from './images/zoomout_rest.png';
import zoomOutHover from './images/zoomout_hover.png';
import reset from './images/home_rest.png';
import resetHover from './images/home_hover.png';
import fullPage from './images/fullpage_rest.png';
import fullPageHover from './images/fullpage_hover.png';

// Notes: The component is named controller rather than a navigator.
// In OSD, the navigator is a mini-map that shows the current location within an image.
// Images are imported rather than placed in the public folder.
// not used a tag

const Controller = () => {
  const zoomInRef = useRef();
  const zoomOutRef = useRef();
  const resetRef = useRef();
  const fullPageRef = useRef();

  const handleMouseOverFocus = useCallback((e) => {
    switch (e.target.id) {
      case 'zoom-in':
        zoomInRef.current.src = zoomInHover;
        break;
      case 'zoom-out':
        zoomOutRef.current.src = zoomOutHover;
        break;
      case 'reset':
        resetRef.current.src = resetHover;
        break;
      case 'full-page':
        fullPageRef.current.src = fullPageHover;
        break;
      default:
        return null;
    }
  }, []);

  const handleMouseOutBlur = useCallback((e) => {
    switch (e.target.id) {
      case 'zoom-in':
        zoomInRef.current.src = zoomIn;
        break;
      case 'zoom-out':
        zoomOutRef.current.src = zoomOut;
        break;
      case 'reset':
        resetRef.current.src = reset;
        break;
      case 'full-page':
        fullPageRef.current.src = fullPage;
        break;
      default:
        return null;
    }
  }, []);

  return (
    <nav>
      <ul className="control-buttons">
        <li>
          <img
            id="zoom-in"
            src={zoomIn}
            onMouseOver={handleMouseOverFocus}
            onFocus={handleMouseOverFocus}
            onMouseOut={handleMouseOutBlur}
            onBlur={handleMouseOutBlur}
            ref={zoomInRef}
            alt="zoom in"
          />
        </li>
        <li>
          <img
            id="zoom-out"
            src={zoomOut}
            onMouseOver={handleMouseOverFocus}
            onFocus={handleMouseOverFocus}
            onMouseOut={handleMouseOutBlur}
            onBlur={handleMouseOutBlur}
            ref={zoomOutRef}
            alt="zoom out"
          />
        </li>
        <li>
          <img
            id="reset"
            src={reset}
            onMouseOver={handleMouseOverFocus}
            onFocus={handleMouseOverFocus}
            onMouseOut={handleMouseOutBlur}
            onBlur={handleMouseOutBlur}
            ref={resetRef}
            alt="reset"
          />
        </li>
        <li>
          <img
            id="full-page"
            src={fullPage}
            onMouseOver={handleMouseOverFocus}
            onFocus={handleMouseOverFocus}
            onMouseOut={handleMouseOutBlur}
            onBlur={handleMouseOutBlur}
            ref={fullPageRef}
            alt="full page"
          />
        </li>
      </ul>
    </nav>

  );
};

export default Controller;
