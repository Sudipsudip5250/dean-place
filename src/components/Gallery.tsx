export default function Gallery() {
  const images = [
    {
      url: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Homemade pasta preparation',
    },
    {
      url: 'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Fresh pizza from our kitchen',
    },
    {
      url: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Italian meatballs in sauce',
    },
    {
      url: 'https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Classic Italian lasagna',
    },
    {
      url: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Delicious breakfast spread',
    },
    {
      url: 'https://images.pexels.com/photos/725990/pexels-photo-725990.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Gourmet burger and fries',
    },
    {
      url: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Grilled steak dinner',
    },
    {
      url: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Chicken Parmigiana',
    },
    {
      url: 'https://images.pexels.com/photos/1337824/pexels-photo-1337824.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Fresh Italian bruschetta',
    },
    {
      url: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Classic tiramisu dessert',
    },
    {
      url: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg',
      alt: 'Pasta carbonara',
    },
    {
      url: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Restaurant interior atmosphere',
    },
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-italian-gold mb-4">
            Gallery
          </h2>
          <div className="h-1 w-24 bg-italian-red mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A taste of what awaits you at Dean's Place
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white text-sm font-medium p-4">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300 text-lg">
            Follow us on{' '}
            <a
              href="https://www.facebook.com/DeansPlaceLasVegas/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-italian-gold hover:text-italian-red transition-colors font-bold"
            >
              Facebook
            </a>{' '}
            to see more photos and daily specials
          </p>
        </div>
      </div>
    </section>
  );
}
