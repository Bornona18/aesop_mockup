import React, { Fragment } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import DailyCleansing from "./components/DailyCleansing";
import OdesseyyOfGifts from "./components/OdysseyOfGifts"
import SpaceOfDistinction from "./components/SpacesOfDistinction";
import ForAllAges from "./components/ForAllAges";
import DiscoverMore from './components/DiscoverMore';
import StaplesSlider from './components/StaplesSlider';






function App() {
  return (
    <div className="App">
      <Header />
      <StaplesSlider />
      <OdesseyyOfGifts />
      <DailyCleansing />
      <SpaceOfDistinction />
      <ForAllAges />
      <DiscoverMore />
      <Footer />

      
    </div>
  );
}

export default App;