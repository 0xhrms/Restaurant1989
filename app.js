// Use React and ReactDOM from global scope (loaded via CDN in index.html)
const { useState } = React;

// Simple SVG icons to replace lucide-react (which requires module bundler)
const MapPinIcon = ({ className, strokeWidth = 2 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ShoppingCartIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const XIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Restaurant1989 = () => {
  const [activeCategory, setActiveCategory] = useState('ريوكات');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Replace these placeholder URLs with your actual image URLs
  const LOGO_URL = "https://i.ibb.co/q37BvwxY/1989-logo.jpg";
  
  const menuData = {
    'ريوكات': [
      { 
        name: 'ريوك لحم', 
        desc: 'لحم بقري مشوي مع خضروات طازجة وصلصة خاصة',
        price: 8000,
        image: 'https://via.placeholder.com/400x300/F5F5DC/000000?text=ريوك+لحم'
      },
      { 
        name: 'ريوك دجاج', 
        desc: 'دجاج متبل بالتوابل العراقية مع مخلل وطماطم',
        price: 7000,
        image: 'https://via.placeholder.com/400x300/F5F5DC/000000?text=ريوك+دجاج'
      },
      { 
        name: 'ريوك كفتة', 
        desc: 'كفتة مشوية على الفحم مع بقدونس وبصل',
        price: 7500,
        image: 'https://via.placeholder.com/400x300/F5F5DC/000000?text=ريوك+كفتة'
      },
      { 
        name: 'ريوك فلافل', 
        desc: 'فلافل مقرمش مع طحينة وخضروات موسمية',
        price: 5000,
        image: 'https://via.placeholder.com/400x300/F5F5DC/000000?text=ريوك+فلافل'
      }
    ],
    'تاجينة': [
      { 
        name: 'تاجينة لحم', 
        desc: 'لحم بقري طري مطبوخ ببطء مع الخضار والبهارات',
        price: 12000,
        image: 'https://via.placeholder.com/400x300/F5F5DC/000000?text=تاجينة+لحم'
      },
      { 
        name: 'تاجينة دجاج', 
        desc: 'دجاج طري مع صلصة الطماطم والتوابل العراقية',
        price: 10000,
        image: 'https://via.placeholder.com/400x300/F5F5DC/000000?text=تاجينة+دجاج'
      },
      { 
        name: 'تاجينة خضار', 
        desc: 'خضروات موسمية طازجة مع الأرز العراقي',
        price: 8000,
        image: 'https://via.placeholder.com/400x300/F5F5DC/000000?text=تاجينة+خضار'
      },
      { 
        name: 'تاجينة سمك', 
        desc: 'سمك طازج مشوي مع صلصة الليمون والثوم',
        price: 15000,
        image: 'https://via.placeholder.com/400x300/F5F5DC/000000?text=تاجينة+سمك'
      }
    ],
    'لفات': [
      { 
        name: 'لفة شاورما', 
        desc: 'شاورما لحم أو دجاج ملفوفة بخبز التنور',
        price: 6000,
        image: 'https://via.placeholder.com/400x300/F5F5DC/000000?text=لفة+شاورما'
      },
      { 
        name: 'لفة كباب', 
        desc: 'كباب مشوي مع خضروات وصلصة الطحينة',
        price: 6500,
        image: 'https://via.placeholder.com/400x300/F5F5DC/000000?text=لفة+كباب'
      },
      { 
        name: 'لفة سمك', 
        desc: 'سمك مقلي مع سلطة وصلصة ثومية',
        price: 7000,
        image: 'https://via.placeholder.com/400x300/F5F5DC/000000?text=لفة+سمك'
      },
      { 
        name: 'لفة فلافل', 
        desc: 'فلافل محلي الصنع مع خضروات طازجة',
        price: 4500,
        image: 'https://via.placeholder.com/400x300/F5F5DC/000000?text=لفة+فلافل'
      }
    ],
    'بركرات': [
      { 
        name: 'بركر عراقي', 
        desc: 'لحم بقري طازج مع جبنة وصلصة خاصة',
        price: 9000,
        image: 'https://via.placeholder.com/400x300/F5F5DC/000000?text=بركر+عراقي'
      },
      { 
        name: 'بركر دجاج', 
        desc: 'دجاج مقرمش مع خس وطماطم وصلصة مايونيز',
        price: 8000,
        image: 'https://via.placeholder.com/400x300/F5F5DC/000000?text=بركر+دجاج'
      },
      { 
        name: 'بركر لحم مشوي', 
        desc: 'لحم مشوي على الفحم مع بصل كرملي',
        price: 10000,
        image: 'https://via.placeholder.com/400x300/F5F5DC/000000?text=بركر+لحم+مشوي'
      },
      { 
        name: 'بركر نباتي', 
        desc: 'برجر نباتي مع أفوكادو وخضروات طازجة',
        price: 7500,
        image: 'https://via.placeholder.com/400x300/F5F5DC/000000?text=بركر+نباتي'
      }
    ]
  };

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.name === item.name 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemName) => {
    setCart(cart.filter(item => item.name !== itemName));
  };

  const updateQuantity = (itemName, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(itemName);
    } else {
      setCart(cart.map(item => 
        item.name === itemName ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const sendWhatsAppOrder = () => {
    // Replace with your restaurant's WhatsApp number (with country code, no + or spaces)
    const phoneNumber = "9647733728327"; // Example: 9647801234567 for Iraq
    
    let message = "طلب جديد من موقع 1989:%0A%0A";
    
    cart.forEach(item => {
      message += `${item.name} x${item.quantity} - ${(item.price * item.quantity).toLocaleString()} IQD%0A`;
    });
    
    message += `%0Aالمجموع الكلي: ${getTotalPrice().toLocaleString()} IQD`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-stone-100 text-black font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="black" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern)"/>
          </svg>
        </div>
        
        <div className="text-center z-10 px-6">
          {/* Logo */}
          <img 
            src={LOGO_URL} 
            alt="1989 Logo" 
            className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 object-contain"
          />
          
          <h1 className="text-8xl md:text-9xl font-light tracking-wider mb-8 transition-all duration-700 hover:tracking-widest">
            1989
          </h1>
          <div className="w-24 h-px bg-black mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl font-light tracking-wide text-stone-800">
            نكهة العراق الأصيلة
          </p>
          <p className="text-lg md:text-xl font-light tracking-wide text-stone-600 mt-2">
            Authentic Iraqi Heritage
          </p>
        </div>

        {/* Floating Cart Button */}
        <button
          onClick={() => setShowCart(true)}
          className="fixed bottom-8 right-8 bg-black text-white p-4 rounded-full shadow-lg z-50 hover:bg-stone-800 transition-all"
        >
          <ShoppingCartIcon className="w-6 h-6" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-white text-black w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          )}
        </button>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-16 tracking-wide">
            القائمة
          </h2>

          {/* Menu Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {Object.keys(menuData).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 text-lg md:text-xl font-light tracking-wide transition-all duration-300 border-b-2 ${
                  activeCategory === category
                    ? 'border-black text-black'
                    : 'border-transparent text-stone-500 hover:text-black'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {menuData[activeCategory].map((item, index) => (
              <div
                key={index}
                className="bg-white transition-all duration-500 hover:shadow-lg border border-stone-200 overflow-hidden"
                style={{
                  animation: `fadeIn 0.5s ease-in-out ${index * 0.1}s both`
                }}
              >
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-light text-right flex-1">{item.name}</h3>
                    <span className="text-xl font-light mr-4">{item.price.toLocaleString()} IQD</span>
                  </div>
                  <p className="text-stone-600 leading-relaxed text-right font-light mb-4">
                    {item.desc}
                  </p>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full bg-black text-white py-3 hover:bg-stone-800 transition-all font-light tracking-wide"
                  >
                    أضف إلى السلة
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-16 tracking-wide">
            الموقع
          </h2>
          
          <div className="bg-stone-100 p-12 text-center border border-stone-200">
            <div className="flex justify-center mb-6">
              <MapPinIcon className="w-12 h-12 text-stone-800" strokeWidth={1} />
            </div>
            <p className="text-xl md:text-2xl font-light mb-2 tracking-wide">
              بغداد، العراق
            </p>
            <p className="text-lg text-stone-600 font-light tracking-wide">
              Baghdad, Iraq
            </p>
            <div className="mt-8 h-64 bg-stone-200 flex items-center justify-center border border-stone-300">
              <p className="text-stone-500 font-light">Map will be embedded here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-stone-200 p-6 flex justify-between items-center">
              <h3 className="text-3xl font-light">سلة الطلبات</h3>
              <button onClick={() => setShowCart(false)} className="hover:bg-stone-100 p-2 rounded">
                <XIcon className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              {cart.length === 0 ? (
                <p className="text-center text-stone-500 py-12 text-xl">السلة فارغة</p>
              ) : (
                <>
                  {cart.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 mb-6 pb-6 border-b border-stone-200">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                      <div className="flex-1 text-right">
                        <h4 className="text-xl font-light mb-1">{item.name}</h4>
                        <p className="text-stone-600">{item.price.toLocaleString()} IQD</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => updateQuantity(item.name, item.quantity - 1)}
                          className="w-8 h-8 bg-stone-200 hover:bg-stone-300 flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.name, item.quantity + 1)}
                          className="w-8 h-8 bg-stone-200 hover:bg-stone-300 flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.name)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <XIcon className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                  
                  <div className="mt-8 pt-6 border-t-2 border-black">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-2xl font-light">المجموع الكلي:</span>
                      <span className="text-3xl font-light">{getTotalPrice().toLocaleString()} IQD</span>
                    </div>
                    <button
                      onClick={sendWhatsAppOrder}
                      className="w-full bg-green-600 text-white py-4 text-xl hover:bg-green-700 transition-all font-light tracking-wide"
                    >
                      إرسال الطلب عبر واتساب
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-12 px-6 bg-black text-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-16 h-px bg-white mx-auto mb-6"></div>
          <p className="text-2xl font-light tracking-widest">1989</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');
        
        * {
          font-family: 'Amiri', serif;
        }
      `}</style>
    </div>
  );
};

// Render the app to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(Restaurant1989));
