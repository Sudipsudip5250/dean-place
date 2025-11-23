import { useState } from "react";
import menuData from "../data/menu.json";
import { ChevronDown, ChevronUp } from "lucide-react";

interface MenuItem {
  name: string;
  description?: string;
  price: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export default function Menu() {
  const categories: MenuCategory[] = menuData.categories;

  const [openCategory, setOpenCategory] = useState<string | null>(
    categories[0]?.title || null
  );

  const toggleCategory = (title: string) => {
    setOpenCategory(openCategory === title ? null : title);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-italian-red mb-4">
            Our Menu
          </h2>
          <div className="h-1 w-24 bg-italian-gold mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every dish is made from scratch with family recipes and the finest
            ingredients
          </p>
        </div>

        <div className="space-y-4">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
            >
              <button
                onClick={() => toggleCategory(category.title)}
                className="w-full px-6 py-5 flex items-center justify-between bg-gradient-to-r from-italian-red to-red-800 text-white hover:from-red-800 hover:to-italian-red transition-all"
              >
                <h3 className="font-display text-2xl md:text-3xl font-bold">
                  {category.title}
                </h3>
                {openCategory === category.title ? (
                  <ChevronUp className="w-6 h-6" />
                ) : (
                  <ChevronDown className="w-6 h-6" />
                )}
              </button>

              {openCategory === category.title && (
                <div className="p-6 bg-white">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {category.items.map((item, index) => (
                      <div
                        key={index}
                        className="border-b border-gray-200 pb-4 last:border-0"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-lg text-gray-800 flex-1">
                            {item.name}
                          </h4>
                          <span className="font-display text-italian-gold font-bold text-lg ml-4">
                            {item.price}
                          </span>
                        </div>
                        {item.description && (
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-italian-red/10 border border-italian-red/20 rounded-lg p-8">
          <p className="text-gray-700 text-lg">
            <span className="font-bold">Serving breakfast 24/7!</span> All
            entrees come with your choice of side.
          </p>
          <p className="text-gray-600 mt-2">
            Prices subject to change. Ask your server about daily specials and
            all-you-can-eat nights.
          </p>
        </div>
      </div>
    </section>
  );
}
