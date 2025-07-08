import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Committees from './components/Committees';
import Secretariat from './components/Secretariat';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Registration from './components/Registration';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <About />
      <Committees />
      <Secretariat />
      <Gallery />
      <FAQ />
      <Registration />
      <Footer />
    </div>
  );
}

export default App;