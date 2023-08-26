import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Works from './components/Works';
//import Particles from 'react-particles';
//import particlesConfig from './config/configParticles';
import Stars from './Particles';


function App() {
  return (
    <div className="App">
      <Stars />
      <Header />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
    </div>  
  )
}

export default App;
