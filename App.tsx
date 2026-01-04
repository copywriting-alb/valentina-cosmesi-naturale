import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Method from './components/Method';
import Products from './components/Products';
import Workshops from './components/Workshops';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AiConsultant from './components/AiConsultant';

function App() {
  return (
    <div className="font-sans text-regal-text antialiased selection:bg-regal-gold/30">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Method />
        <Products />
        <Workshops />
        <AiConsultant />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;