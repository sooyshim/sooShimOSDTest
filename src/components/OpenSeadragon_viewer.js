import React, { useEffect, useState } from 'react';
import OpenSeadragon from 'openseadragon';
import '../styles/App.css';

const OpenSeadragonViewer = () => {
  // Assumption:
  // The url in options is prone to change while other values will not change.
  // The url is set to be a state, assuming that it may dynamically fetch data
  // or if a users select an option from an input that displays a certain image.
  // (Here setUrl is omitted because there is no action to dynamically update the url).
  // ---OR---
  // If all the values in options are hard-coded,
  // then options can be saved in a separate javascript (e.g. options.js) file to be exported,
  // this js file will be imported to this component (e.g. import options from "./options.js"),
  // and passed to OpenSeadragon (e.g. OpenSeadragon(options))
  // the second argument of the useEffect will be an empty array ([]).
  // import options from "./options.js"
  // useEffect (() => {
  //   OpenSeadragon(options)
  // }, [])

  // Set url as the state
  const [url] = useState(`${process.env.PUBLIC_URL}/dzi_files/`);

  // See below for notes on each values
  const options = {
    id: 'container',
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
  // OSD re-runs when options the url and options change
  useEffect(() => {
    OpenSeadragon(options);
  }, [options, url]);

  return (
  // OSD is rendered inside this div
    <div id="container" className="container" />
  );
};

export default OpenSeadragonViewer;


// ---options to pass to OSD viewer---
// id : the id of the element to which OSD will be rendered.
// tileSources: information on image files
// zoomInButton...fullPageButton: customizing navigation buttons.
// Here, each value of keys should match the id of the element will perform the action
// (e.g. <a id="zoom-in"></a> for the value "zoom-in")

// Notice: the file path of "Url" in Image is pointing to the public folder.
// This prevents image loading error.
// In order for images to load, it is recommended/required to import images to a component.
// The images will be processed by webpack but by putting them in the public folder,
// the webpack will not process the images and assets live outside of the system.
// In order to use OSD, the assets should live in the public folder.
// This will give OSD direct access to the assets.
