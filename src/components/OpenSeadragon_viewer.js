import React, { useEffect, useState } from 'react';
import OpenSeadragon from 'openseadragon';
import '../styles/App.css';

// Assumption:
// The url in options for OSD is prone to change while other values will not change.
// e.g. fetching the url from exterior sources or user selects inputs
// (Here setUrl is omitted because the url is not dynamically updated).
// ---OR---
// If no values will change, then options can be saved in a separate js file and imported.
// In this case, the second argument of the useEffect will be an empty array ([]).
// useEffect (() => {
//   OpenSeadragon(options)
// }, [])

// Notice: the file path of "Url" in Image is pointing to the public folder.
// In order for images to load properly, they need not to be processed by webpack.
// This gives OSD direct access to images.

// ---options to pass to OSD viewer---
// id : the id of the element to which OSD will be rendered.
// tileSources: information on image files
// zoomInButton...fullPageButton: customizing navigation buttons.
// For buttons, each value of the keys should match the id of the corresponding DOM elements
// (e.g. <a id="zoomin"></a> for the value "zoomin")

const OpenSeadragonViewer = () => {
  // Set url as a state
  const [url] = useState(`${process.env.PUBLIC_URL}/dzi_files/`);

  // OSD options
  const options = {
    id: 'container',
    getImageURL: `${process.env.PUBLIC_URL}/dzi_files/`,
    tileSources: {
      Image: {
        xmlns: 'http://schemas.microsoft.com/deepzoom/2009',
        Url: url,
        Format: 'jpg',
        ServerFormat: 'Default',
        Overlap: '1',
        TileSize: '256',
        Size: {
          Height: '3136',
          Width: '4704',
        },
      },
    },
    zoomInButton: 'zoomin',
    zoomOutButton: 'zoomout',
    homeButton: 'reset',
    fullPageButton: 'fullpage',
  };

  // useEffect: OSD runs after the div mounts to the DOM
  // OSD re-runs when the options or url change
  useEffect(() => {
    OpenSeadragon(options);
  }, [options, url]);

  return (
    // OSD is rendered inside this div
    // The div must have explicit height and width for it to render properly in mobile devices
    <div id="container" className="container" />
  );
};

export default OpenSeadragonViewer;
