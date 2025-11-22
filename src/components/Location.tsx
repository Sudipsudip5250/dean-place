import { MapPin, Navigation, ParkingCircle } from 'lucide-react';

export default function Location() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-italian-red mb-4">
            Find Us
          </h2>
          <div className="h-1 w-24 bg-italian-gold mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Just off the Strip, easy to find with plenty of free parking
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-italian-red">
              <div className="flex items-start space-x-4">
                <div className="bg-italian-red/10 p-3 rounded-full flex-shrink-0">
                  <MapPin className="w-6 h-6 text-italian-red" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-gray-800 mb-2">
                    Address
                  </h3>
                  <a
                    href="https://maps.google.com/?q=8355+Dean+Martin+Dr,+Las+Vegas,+NV+89139"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-gray-700 hover:text-italian-red transition-colors"
                  >
                    8355 Dean Martin Dr<br />
                    Las Vegas, NV 89139
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-italian-gold">
              <div className="flex items-start space-x-4">
                <div className="bg-italian-gold/10 p-3 rounded-full flex-shrink-0">
                  <Navigation className="w-6 h-6 text-italian-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold text-gray-800 mb-3">
                    Directions
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Located on Dean Martin Drive, just west of I-15 and easily accessible
                    from the Las Vegas Strip. We're in a locals' neighborhood with convenient
                    access from all parts of the valley.
                  </p>
                  <a
                    href="https://maps.google.com/?q=8355+Dean+Martin+Dr,+Las+Vegas,+NV+89139"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-italian-red hover:bg-red-700 text-white px-6 py-3 rounded-full transition-colors font-semibold"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-gray-700">
              <div className="flex items-start space-x-4">
                <div className="bg-gray-700/10 p-3 rounded-full flex-shrink-0">
                  <ParkingCircle className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-gray-800 mb-2">
                    Parking
                  </h3>
                  <p className="text-gray-700 text-lg">
                    <span className="font-bold text-italian-gold">Free parking lot</span> available
                    for all guests with ample spaces
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-24">
            <div className="rounded-lg overflow-hidden shadow-2xl border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.6841589879474!2d-115.18924122346697!3d36.037068772340026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c5b6e3e3e3e3%3A0x3e3e3e3e3e3e3e3e!2s8355%20Dean%20Martin%20Dr%2C%20Las%20Vegas%2C%20NV%2089139!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dean's Place Location Map"
              />
            </div>
            <div className="mt-6 bg-italian-red/10 border border-italian-red/20 rounded-lg p-6">
              <p className="text-center text-gray-700">
                <span className="font-bold text-italian-red">Open 24/7</span> — Come visit us anytime!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
