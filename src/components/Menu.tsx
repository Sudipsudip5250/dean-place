import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
  const [openCategory, setOpenCategory] = useState<string | null>('Appetizers');

  const menuCategories: MenuCategory[] = [
    {
      title: 'Appetizers',
      items: [
        { name: 'Italian Wedding Soup', description: 'Classic homemade soup with tender meatballs', price: '$8' },
        { name: 'Bacon-Wrapped Shrimp', description: 'Jumbo shrimp wrapped in crispy bacon', price: '$14' },
        { name: 'Fried Calamari', description: 'Lightly breaded and served with marinara', price: '$12' },
        { name: 'Bruschetta', description: 'Toasted bread with fresh tomatoes, basil, and garlic', price: '$9' },
        { name: 'Mozzarella Sticks', description: 'Golden fried mozzarella with marinara', price: '$10' },
        { name: 'Garlic Bread', description: 'Fresh baked with butter and herbs', price: '$6' },
        { name: 'Antipasto Platter', description: 'Cured meats, cheeses, olives, and roasted peppers', price: '$16' },
        { name: 'Stuffed Mushrooms', description: 'Filled with Italian sausage and breadcrumbs', price: '$11' },
      ],
    },
    {
      title: 'Pizza',
      items: [
        { name: 'Margherita Pizza', description: 'Fresh mozzarella, tomato sauce, and basil', price: '$14' },
        { name: 'Pepperoni Pizza', description: 'Classic pepperoni with mozzarella', price: '$15' },
        { name: 'Meat Lovers Pizza', description: 'Pepperoni, sausage, bacon, and ham', price: '$18' },
        { name: 'Veggie Supreme', description: 'Mushrooms, peppers, onions, olives, and tomatoes', price: '$16' },
        { name: 'White Pizza', description: 'Garlic, ricotta, mozzarella, and herbs', price: '$15' },
        { name: 'BBQ Chicken Pizza', description: 'Grilled chicken with BBQ sauce and red onions', price: '$17' },
        { name: 'Hawaiian Pizza', description: 'Ham and pineapple', price: '$15' },
        { name: 'Build Your Own', description: 'Choose your favorite toppings', price: '$13+' },
      ],
    },
    {
      title: 'Pasta & Italian Classics',
      items: [
        { name: 'Homemade Lasagna', description: 'Layers of pasta, meat sauce, ricotta, and mozzarella', price: '$18' },
        { name: 'Chicken Parmigiana', description: 'Breaded chicken breast with marinara and melted mozzarella', price: '$19' },
        { name: 'Eggplant Parmigiana', description: 'Breaded eggplant layered with sauce and cheese', price: '$17' },
        { name: 'Spaghetti & Meatballs', description: 'Classic pasta with homemade meatballs', price: '$16' },
        { name: 'Fettuccine Alfredo', description: 'Creamy parmesan sauce', price: '$15' },
        { name: 'Chicken Alfredo', description: 'Grilled chicken over fettuccine alfredo', price: '$18' },
        { name: 'Shrimp Scampi', description: 'Garlic butter white wine sauce over linguine', price: '$22' },
        { name: 'Baked Ziti', description: 'Penne pasta with ricotta, marinara, and mozzarella', price: '$16' },
        { name: 'Ravioli', description: 'Cheese ravioli with your choice of sauce', price: '$17' },
        { name: 'Veal Parmigiana', description: 'Tender veal with marinara and mozzarella', price: '$24' },
      ],
    },
    {
      title: 'Burgers & Sandwiches',
      items: [
        { name: 'Dean\'s Burger', description: 'Half-pound Angus beef with all the fixings', price: '$14' },
        { name: 'Italian Sausage Sandwich', description: 'Grilled sausage with peppers and onions', price: '$13' },
        { name: 'Meatball Sub', description: 'Homemade meatballs with marinara and mozzarella', price: '$13' },
        { name: 'Chicken Parm Sandwich', description: 'Breaded chicken with sauce and cheese', price: '$14' },
        { name: 'Philly Cheesesteak', description: 'Shaved ribeye with peppers, onions, and cheese', price: '$15' },
        { name: 'Italian Combo', description: 'Salami, pepperoni, ham, provolone, and Italian dressing', price: '$13' },
        { name: 'Grilled Chicken Sandwich', description: 'With lettuce, tomato, and mayo', price: '$13' },
        { name: 'Patty Melt', description: 'Burger patty with grilled onions on rye', price: '$14' },
      ],
    },
    {
      title: 'Steaks & Specialties',
      items: [
        { name: 'Godfather Steak', description: '16 oz ribeye grilled to perfection', price: '$32' },
        { name: 'New York Strip', description: '12 oz premium cut', price: '$28' },
        { name: 'Filet Mignon', description: '8 oz tender filet', price: '$34' },
        { name: 'All-You-Can-Eat Ribs', description: 'Fall-off-the-bone BBQ ribs (select nights)', price: '$24' },
        { name: 'Grilled Salmon', description: 'Fresh Atlantic salmon with lemon butter', price: '$24' },
        { name: 'Veal Marsala', description: 'Tender veal in mushroom wine sauce', price: '$26' },
        { name: 'Pork Chops', description: 'Two center-cut chops, grilled or breaded', price: '$20' },
        { name: 'Surf & Turf', description: 'Filet mignon and lobster tail', price: '$42' },
      ],
    },
    {
      title: 'Breakfast (Served 24/7)',
      items: [
        { name: 'Eggs Benedict', description: 'Poached eggs on English muffin with hollandaise', price: '$14' },
        { name: 'Italian Benedict', description: 'With prosciutto and fresh mozzarella', price: '$16' },
        { name: 'Western Omelet', description: 'Ham, peppers, onions, and cheese', price: '$13' },
        { name: 'Veggie Omelet', description: 'Fresh vegetables and cheese', price: '$12' },
        { name: 'Meat Lovers Omelet', description: 'Bacon, sausage, ham, and cheese', price: '$14' },
        { name: 'Pancake Stack', description: 'Three fluffy buttermilk pancakes', price: '$10' },
        { name: 'French Toast', description: 'Thick-cut with powdered sugar', price: '$11' },
        { name: 'Steak & Eggs', description: '8 oz sirloin with two eggs any style', price: '$22' },
        { name: 'Biscuits & Gravy', description: 'Homemade sausage gravy', price: '$11' },
        { name: 'Breakfast Burrito', description: 'Eggs, cheese, potatoes, and your choice of meat', price: '$12' },
      ],
    },
    {
      title: 'Desserts',
      items: [
        { name: 'Tiramisu', description: 'Classic Italian coffee-soaked ladyfingers', price: '$8' },
        { name: 'Cannoli', description: 'Crispy shell filled with sweet ricotta cream', price: '$7' },
        { name: 'New York Cheesecake', description: 'Rich and creamy', price: '$8' },
        { name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with molten center', price: '$9' },
        { name: 'Gelato', description: 'Ask about daily flavors', price: '$6' },
        { name: 'Spumoni Ice Cream', description: 'Traditional Italian tri-color ice cream', price: '$6' },
      ],
    },
  ];

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
            Every dish is made from scratch with family recipes and the finest ingredients
          </p>
        </div>

        <div className="space-y-4">
          {menuCategories.map((category) => (
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
            <span className="font-bold">Serving breakfast 24/7!</span> All entrees come with your choice of side.
          </p>
          <p className="text-gray-600 mt-2">
            Prices subject to change. Ask your server about daily specials and all-you-can-eat nights.
          </p>
        </div>
      </div>
    </section>
  );
}
