import '../index.css';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Delicious Pizza<br />Delivered Hot & Fresh
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Handcrafted with premium ingredients, baked to perfection. 
                Experience the best pizza in town!
              </p>
              <div className="flex gap-4">
                <button onClick={() => window.location.href = '/'} className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition duration-300 shadow-lg">
                  Order Now
                </button>
                <button onClick={() => window.location.href = '/'} className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition duration-300">
                  View Menu
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-96 h-96 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-9xl">🍕</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Fast Delivery</h3>
              <p className="text-gray-600">
                Hot pizza at your doorstep in 30 minutes or less, guaranteed!
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-6xl mb-4">🌟</div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Premium Quality</h3>
              <p className="text-gray-600">
                Only the finest ingredients, fresh dough made daily, authentic recipes.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-6xl mb-4">💰</div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Best Prices</h3>
              <p className="text-gray-600">
                Affordable prices without compromising on taste and quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Pizzas Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Our Popular Pizzas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pizza Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center">
                <span className="text-8xl">🍕</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Margherita</h3>
                <p className="text-gray-600 mb-4">
                  Classic tomato sauce, fresh mozzarella, and basil
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">Rs. 120</span>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Pizza Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <span className="text-8xl">🍕</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Pepperoni</h3>
                <p className="text-gray-600 mb-4">
                  Loaded with pepperoni and extra cheese
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">Rs. 140</span>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Pizza Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                <span className="text-8xl">🍕</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Veggie Supreme</h3>
                <p className="text-gray-600 mb-4">
                  Fresh vegetables with herbs and spices
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">Rs. 130</span>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">👨</div>
                <div>
                  <h4 className="font-semibold text-gray-800">John Doe</h4>
                  <div className="text-blue-500">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Best pizza I've ever had! The crust is perfect and the toppings are always fresh."
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">👩</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Sarah Smith</h4>
                  <div className="text-blue-500">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Fast delivery and amazing taste! Their pepperoni pizza is my favorite."
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">👨</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Mike Johnson</h4>
                  <div className="text-blue-500">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Great value for money. The family loves it every time we order!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Hungry? Order Your Favorite Pizza Now!
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get 20% off on your first order. Use code: PIZZA20
          </p>
          <button onClick={() => window.location.href = '/'} className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition duration-300 shadow-lg">
            Order Now & Save
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">🍕 2 Pizza</h3>
              <p className="text-gray-400">
                Serving the best pizzas in town since 2020. Made with love and passion.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-500 transition">Menu</a></li>
                <li><a href="#" className="hover:text-blue-500 transition">About Us</a></li>
                <li><a href="#" className="hover:text-blue-500 transition">Contact</a></li>
                <li><a href="#" className="hover:text-blue-500 transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📞 (555) 123-4567</li>
                <li>📧 info@2pizza.com</li>
                <li>📍 123 Pizza Street, Food City</li>
                <li className="flex gap-4 mt-4">
                  <span className="cursor-pointer hover:text-blue-500 transition">📘</span>
                  <span className="cursor-pointer hover:text-blue-500 transition">📷</span>
                  <span className="cursor-pointer hover:text-blue-500 transition">🐦</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
            <p>&copy; 2025 2 Pizza. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;