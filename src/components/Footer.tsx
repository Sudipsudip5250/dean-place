import { Phone, Mail, MapPin, Facebook, ArrowUp } from 'lucide-react';

interface FooterProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  heroRef: React.RefObject<HTMLDivElement>;
}

export default function Footer({ scrollToSection, heroRef }: FooterProps) {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display text-3xl font-bold text-italian-gold mb-4">
              Dean's Place
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Homemade Italian-American food served with love, 24 hours a day, 365 days a year.
              A Las Vegas locals' favorite since 2016.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/DeansPlaceLasVegas/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-italian-red p-3 rounded-full transition-colors"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl font-bold mb-4 text-italian-gold">
              Contact Us
            </h4>
            <div className="space-y-3">
              <a
                href="tel:7023878888"
                className="flex items-center space-x-3 text-gray-300 hover:text-italian-gold transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>(702) 387-8888</span>
              </a>
              <a
                href="mailto:info@deansplacelv.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-italian-gold transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@deansplacelv.com</span>
              </a>
              <a
                href="https://maps.google.com/?q=8355+Dean+Martin+Dr,+Las+Vegas,+NV+89139"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 text-gray-300 hover:text-italian-gold transition-colors"
              >
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>
                  8355 Dean Martin Dr<br />
                  Las Vegas, NV 89139
                </span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl font-bold mb-4 text-italian-gold">
              Hours
            </h4>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-white">Open 24/7</p>
              <p className="text-gray-300">Every Day of the Year</p>
              <p className="text-sm text-gray-400 mt-4 pt-4 border-t border-gray-800">
                Breakfast • Lunch • Dinner • Late Night
              </p>
              <p className="text-sm text-gray-400">
                Gaming Bar • Banquet Room • Delivery Available
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Dean's Place Las Vegas. All rights reserved.
            </p>
            <button
              onClick={() => scrollToSection(heroRef)}
              className="flex items-center space-x-2 text-gray-400 hover:text-italian-gold transition-colors group"
            >
              <span className="text-sm">Back to Top</span>
              <div className="bg-white/10 group-hover:bg-italian-red p-2 rounded-full transition-colors">
                <ArrowUp className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
