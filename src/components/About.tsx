import { UtensilsCrossed, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-italian-red mb-4">
            Our Story
          </h2>
          <div className="h-1 w-24 bg-italian-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              Opened in 2016 by Chef Dominic Tedesco, affectionately known as the "Hillbilly Italian,"
              Dean's Place has become a beloved hidden gem for Las Vegas locals seeking authentic,
              homemade Italian-American cuisine.
            </p>
            <p>
              Located just off the Strip, we pride ourselves on serving family recipes passed down
              through generations. Every dish is crafted with love, using the finest ingredients and
              time-honored cooking techniques that bring the warmth of an Italian kitchen to your table.
            </p>
            <p>
              Whether you're craving a classic lasagna at 3 AM or celebrating with friends in our
              banquet room, Dean's Place is your home away from home—24 hours a day, 365 days a year.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Italian food preparation"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform">
            <div className="bg-italian-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <UtensilsCrossed className="w-8 h-8 text-italian-red" />
            </div>
            <h3 className="font-display text-2xl font-bold text-gray-800 mb-3">
              Two Full Bars
            </h3>
            <p className="text-gray-600">
              Smoking & non-smoking sections with full bar service and 20 slot machines
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform">
            <div className="bg-italian-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-italian-red" />
            </div>
            <h3 className="font-display text-2xl font-bold text-gray-800 mb-3">
              Since 2016
            </h3>
            <p className="text-gray-600">
              Nearly a decade of serving authentic Italian-American favorites to our community
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform">
            <div className="bg-italian-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-italian-red" />
            </div>
            <h3 className="font-display text-2xl font-bold text-gray-800 mb-3">
              Locals' Favorite
            </h3>
            <p className="text-gray-600">
              A true neighborhood spot where everyone knows your name and your favorite dish
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
