import { useState } from 'react';
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProjectSection from './components/ProjectSection';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ProjectSection />
    </>
  );
}

export default App;
