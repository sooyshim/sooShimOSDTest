import React from 'react';


// The component is named controller rather than a navigator.
// In OSD, the navigator is a mini-map that shows the current location within an image.

// The id of button should match the values specified in the options for OSD
// aria-label is added for accessibility

const Controller = () => (
  <nav>
    <ul className="controller">
      <li>
        <button
          id="zoomin"
          className="zoomin_button"
          type="button"
          aria-label="zoom in"
        />
      </li>
      <li>
        <button
          id="zoomout"
          className="zoomout_button"
          type="button"
          aria-label="zoom out"
        />
      </li>
      <li>
        <button
          id="reset"
          className="reset_button"
          type="button"
          aria-label="reset"
        />
      </li>
      <li>
        <button
          id="fullpage"
          className="fullpage_button"
          type="button"
          aria-label="full page"
        />
      </li>
    </ul>
  </nav>
);

export default Controller;
