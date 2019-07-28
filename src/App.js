import React from 'react';
import OpenseadragonViewer from './components/OpenSeadragon_viewer';
import Controller from './components/Controller';
import './styles/App.css';

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
