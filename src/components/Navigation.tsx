import { Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  refs: {
    heroRef: React.RefObject<HTMLDivElement>;
    aboutRef: React.RefObject<HTMLDivElement>;
    hoursRef: React.RefObject<HTMLDivElement>;
    menuRef: React.RefObject<HTMLDivElement>;
    galleryRef: React.RefObject<HTMLDivElement>;
    locationRef: React.RefObject<HTMLDivElement>;
  };
}

export default function Navigation({
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
  refs,
}: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', ref: refs.heroRef },
    { name: 'About', ref: refs.aboutRef },
    { name: 'Hours', ref: refs.hoursRef },
    { name: 'Menu', ref: refs.menuRef },
    { name: 'Gallery', ref: refs.galleryRef },
    { name: 'Location', ref: refs.locationRef },
  ];

  return (
    <>
      {/* --- DEMO NOTICE BAR --- */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-red-600 text-white text-sm sm:text-base font-medium px-4 py-2 text-center shadow-lg">
        This is a demo website. Information shown is for preview only and will be updated after client approval. If you are the own you can contact me at <a href="mailto:sudipsudip525@gmail.com" className="underline font-semibold">sudipsudip525@gmail.com</a>.
      </div>

      {/* --- MAIN NAVBAR --- */}
      <nav
        className={`fixed top-12 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/95 shadow-lg py-3' : 'bg-black/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo / Home button */}
            <button
              onClick={() => scrollToSection(refs.heroRef)}
              className="text-2xl sm:text-3xl font-display font-bold text-white hover:text-italian-gold transition-colors"
            >
              Dean's Place
            </button>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.ref)}
                  className="text-white hover:text-italian-gold transition-colors font-medium"
                >
                  {link.name}
                </button>
              ))}
              <a
                href="tel:7023878888"
                className="flex items-center space-x-2 bg-italian-red hover:bg-red-700 text-white px-6 py-2 rounded-full transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(702) 387-8888</span>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white hover:text-italian-gold transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE MENU --- */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          
          {/* Background overlay */}
          <div
            className="absolute inset-0 bg-black/80"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Mobile menu panel */}
          <div className="absolute top-32 right-0 left-0 bg-black/95 shadow-xl">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.ref)}
                  className="block w-full text-left text-white hover:text-italian-gold transition-colors font-medium py-2 text-lg"
                >
                  {link.name}
                </button>
              ))}
              <a
                href="tel:7023878888"
                className="flex items-center justify-center space-x-2 bg-italian-red hover:bg-red-700 text-white px-6 py-3 rounded-full transition-colors w-full mt-4"
              >
                <Phone className="w-4 h-4" />
                <span>(702) 387-8888</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
