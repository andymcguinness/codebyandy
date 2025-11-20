'use client';

import Hero from './components/Hero';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
import About from './components/About';
import Process from './components/Process';
import Navigation from './components/Navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Process />
      <Contact />
      <Footer />
    </>
  );
}
