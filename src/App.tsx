import { useRef, useState } from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import About from './components/About';
import HoursInfo from './components/HoursInfo';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const hoursRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-body">
      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
        refs={{ heroRef, aboutRef, hoursRef, menuRef, galleryRef, locationRef }}
      />
      <div ref={heroRef}>
        <Hero scrollToSection={scrollToSection} menuRef={menuRef} locationRef={locationRef} />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={hoursRef}>
        <HoursInfo />
      </div>
      <div ref={menuRef}>
        <Menu />
      </div>
      <div ref={galleryRef}>
        <Gallery />
      </div>
      <div ref={locationRef}>
        <Location />
      </div>
      <Footer scrollToSection={scrollToSection} heroRef={heroRef} />
    </div>
  );
}

export default App;
