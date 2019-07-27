import React from 'react';
import OpenseadragonViewer from './OpenSeadragon-viewer';
import Controller from './Controller';
import './App.css';

const App = () => (
  <div className="App">
    <section>
      <Controller />
      <OpenseadragonViewer />
      <div className="deco-bar" />
    </section>
  </div>
);

export default App;
