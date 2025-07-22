import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingAnimation from './components/LoadingAnimation';
import LawIconAnimations from './components/LawIconAnimations';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoadingAnimation />
      <LawIconAnimations />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
