import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/rank/rank';
import './App.css';


const particleOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particleOptions}
        />
 
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />

        {/*
        <FaceRecognition />
        */}

      </div>
    );
  }
}

export default App;
