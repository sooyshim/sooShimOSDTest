import React from 'react';

// The component is named controller rather than a navigator. In OSD, the navigator is a mini-map.
// The id of the buttons should match the values specified in the options for OSD.
// (see OpenSeadragon_viewer files)
// aria-label is added for accessibility.

const Controller = () => {
  const buttons = ['zoomin', 'zoomout', 'reset', 'fullpage'];

  return (
    <nav>
      <ul className="controller">
        {buttons.map(button => (
          <li>
            <button
              id={button}
              className={`${button}_button`}
              type="button"
              aria-label={button}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Controller;
