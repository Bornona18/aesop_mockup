import React, { Fragment } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import DailyCleansing from "./components/DailyCleansing";
import OdesseyyOfGifts from "./components/OdysseyOfGifts"
import SpaceOfDistinction from "./components/SpacesOfDistinction";
import ForAllAges from "./components/ForAllAges";






function App() {
  return (
    <div className="App">
      <Header />
      <OdesseyyOfGifts />
      <DailyCleansing />
      <SpaceOfDistinction />
      <ForAllAges />
      <Footer />

      
    </div>
  );
}

export default App;