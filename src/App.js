import React from 'react';
import OpenseadragonViewer from './components/OpenSeadragon_viewer';
import Controller from './components/Controller';
import './styles/App.css';

// Assumption: The viewer is a section in an app.
// <section> is used and other semantic HTML elements are omitted for the purpose of exercise.
// The gray bar at the bottom is interpreted as a decorative element, rather than a footer.

const App = () => (
  <div className="App">
    <section>
      <Controller />
      <OpenseadragonViewer />
      <div className="deco_bar" />
    </section>
  </div>
);

export default App;
