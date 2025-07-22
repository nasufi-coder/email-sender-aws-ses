import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import BigBangAnimation from './components/BigBangAnimation';
import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Team from './components/Team';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [showAnimation, setShowAnimation] = useState(true);

  const handleAnimationComplete = () => {
    setShowAnimation(false);
  };

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {showAnimation ? (
          <BigBangAnimation key="animation" onComplete={handleAnimationComplete} />
        ) : (
          <div key="content" className="main-content">
            <Header />
            <Hero />
            <Solutions />
            <Team />
            <Contact />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;