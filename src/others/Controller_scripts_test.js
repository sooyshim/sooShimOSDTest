import React, { useRef } from 'react';
import zoomIn from '../styles/ui_images/zoomin_rest.png';
import zoomInHover from '../styles/ui_images/zoomin_hover.png';
import zoomOut from '../styles/ui_images/zoomout_rest.png';
import zoomOutHover from '../styles/ui_images/zoomout_hover.png';
import reset from '../styles/ui_images/home_rest.png';
import resetHover from '../styles/ui_images/home_hover.png';
import fullPage from '../styles/ui_images/fullpage_rest.png';
import fullPageHover from '../styles/ui_images/fullpage_hover.png';

// The component is named controller rather than a navigator.
// In OSD, the navigator is a mini-map that shows the current location within an image.

const ControllerScriptsTest = () => {
  // Refs to interact with the button icons
  // connected to the image tags of each button
  const zoomInButtonRef = useRef();
  const zoomOutButtonRef = useRef();
  const resetButtonRef = useRef();
  const fullPageButtonRef = useRef();


  // When buttons or images are hovered or focused(tabbed),
  // the image sources change
  const handleHoverFocus = (e) => {
    switch (e.target.className) {
      case 'zoomin_button':
        zoomInButtonRef.current.src = zoomInHover;
        break;
      case 'zoomout_button':
        zoomOutButtonRef.current.src = zoomOutHover;
        break;
      case 'reset_button':
        resetButtonRef.current.src = resetHover;
        break;
      case 'fullpage_button':
        fullPageButtonRef.current.src = fullPageHover;
        break;
      default:
        return null;
    }
  };

  const resetHoverFocus = (e) => {
    switch (e.target.className) {
      case 'zoomin_button':
        zoomInButtonRef.current.src = zoomIn;
        break;
      case 'zoomout_button':
        zoomOutButtonRef.current.src = zoomOut;
        break;
      case 'reset_button':
        resetButtonRef.current.src = reset;
        break;
      case 'fullpage_button':
        fullPageButtonRef.current.src = fullPage;
        break;
      default:
        return null;
    }
  };

  return (
    <nav>
      <ul className="controller">
        <li>
          <button
            id="zoomin"
            className="zoomin_button"
            type="button"
            onMouseOver={handleHoverFocus}
            onFocus={handleHoverFocus}
            onMouseOut={resetHoverFocus}
            onBlur={resetHoverFocus}
          >
            <img className="zoomin_button" src={zoomIn} ref={zoomInButtonRef} alt="zoom in" />
          </button>
        </li>
        <li>
          <button
            id="zoomout"
            className="zoomout_button"
            type="button"
            onMouseOver={handleHoverFocus}
            onFocus={handleHoverFocus}
            onMouseOut={resetHoverFocus}
            onBlur={resetHoverFocus}
          >
            <img className="zoomout_button" src={zoomOut} ref={zoomOutButtonRef} alt="zoom out" />
          </button>
        </li>
        <li>
          <button
            id="reset"
            className="reset_button"
            type="button"
            onMouseOver={handleHoverFocus}
            onFocus={handleHoverFocus}
            onMouseOut={resetHoverFocus}
            onBlur={resetHoverFocus}
          >
            <img className="reset_button" src={reset} ref={resetButtonRef} alt="reset" />
          </button>
        </li>
        <li>
          <button
            id="fullpage"
            className="fullpage_button"
            type="button"
            onMouseOver={handleHoverFocus}
            onFocus={handleHoverFocus}
            onMouseOut={resetHoverFocus}
            onBlur={resetHoverFocus}
          >
            <img className="fullpage_button" src={fullPage} ref={fullPageButtonRef} alt="full page" />
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default ControllerScriptsTest;
