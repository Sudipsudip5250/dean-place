import { ChevronDown } from 'lucide-react';

interface HeroProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  menuRef: React.RefObject<HTMLDivElement>;
  locationRef: React.RefObject<HTMLDivElement>;
}

export default function Hero({ scrollToSection, menuRef, locationRef }: HeroProps) {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-4 drop-shadow-2xl">
            Dean's Place
          </h1>
          <div className="h-1 w-32 bg-italian-gold mx-auto mb-6" />
          <p className="text-xl sm:text-2xl md:text-3xl text-white/95 font-medium leading-relaxed">
            Homemade Italian-American Food
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-italian-gold font-medium mt-2">
            24 Hours • Locals' Favorite Since 2016
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <button
            onClick={() => scrollToSection(menuRef)}
            className="bg-italian-red hover:bg-red-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-2xl w-full sm:w-auto"
          >
            View Menu
          </button>
          <button
            onClick={() => scrollToSection(locationRef)}
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white px-10 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-2xl w-full sm:w-auto"
          >
            Get Directions
          </button>
        </div>

        <div className="mt-16 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/80 mx-auto" />
        </div>
      </div>
    </div>
  );
}
