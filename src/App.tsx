import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Gallery } from './components/Gallery';
import { Access } from './components/Access';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navigation />
      <Hero />
      <Features />
      <Gallery />
      <Access />
      <Footer />
    </div>
  );
}

export default App;