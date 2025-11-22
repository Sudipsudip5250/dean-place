import { Clock, Phone, MapPin, Utensils, PartyPopper, Gamepad2 } from 'lucide-react';

export default function HoursInfo() {
  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-italian-gold mb-4">
            Visit Us
          </h2>
          <div className="h-1 w-24 bg-italian-red mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-italian-gold/50 transition-all">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-italian-red/20 p-3 rounded-full">
                <Clock className="w-8 h-8 text-italian-gold" />
              </div>
              <h3 className="font-display text-2xl font-bold">Hours</h3>
            </div>
            <div className="space-y-2 text-lg">
              <p className="text-italian-gold font-bold text-2xl">Open 24/7</p>
              <p className="text-gray-300">365 Days a Year</p>
              <p className="text-sm text-gray-400 mt-4">
                Breakfast, lunch, dinner, and late-night dining anytime you crave it
              </p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-italian-gold/50 transition-all">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-italian-red/20 p-3 rounded-full">
                <Phone className="w-8 h-8 text-italian-gold" />
              </div>
              <h3 className="font-display text-2xl font-bold">Contact</h3>
            </div>
            <div className="space-y-3 text-lg">
              <a href="tel:7023878888" className="block hover:text-italian-gold transition-colors">
                <span className="font-bold">(702) 387-8888</span>
              </a>
              <a href="mailto:info@deansplacelv.com" className="block hover:text-italian-gold transition-colors text-gray-300">
                info@deansplacelv.com
              </a>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-italian-gold/50 transition-all">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-italian-red/20 p-3 rounded-full">
                <MapPin className="w-8 h-8 text-italian-gold" />
              </div>
              <h3 className="font-display text-2xl font-bold">Address</h3>
            </div>
            <div className="space-y-2 text-lg">
              <a
                href="https://maps.google.com/?q=8355+Dean+Martin+Dr,+Las+Vegas,+NV+89139"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-italian-gold transition-colors"
              >
                <p>8355 Dean Martin Dr</p>
                <p>Las Vegas, NV 89139</p>
              </a>
              <p className="text-sm text-gray-400 mt-4">Free parking lot available</p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-italian-gold/50 transition-all">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-italian-red/20 p-3 rounded-full">
                <Gamepad2 className="w-8 h-8 text-italian-gold" />
              </div>
              <h3 className="font-display text-2xl font-bold">Gaming</h3>
            </div>
            <p className="text-gray-300">
              20 slot machines available in our comfortable gaming bar area
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-italian-gold/50 transition-all">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-italian-red/20 p-3 rounded-full">
                <PartyPopper className="w-8 h-8 text-italian-gold" />
              </div>
              <h3 className="font-display text-2xl font-bold">Banquets</h3>
            </div>
            <p className="text-gray-300">
              Private banquet room available for your special events and celebrations
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-italian-gold/50 transition-all">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-italian-red/20 p-3 rounded-full">
                <Utensils className="w-8 h-8 text-italian-gold" />
              </div>
              <h3 className="font-display text-2xl font-bold">Delivery</h3>
            </div>
            <p className="text-gray-300">
              Available via DoorDash and Uber Eats for your convenience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
