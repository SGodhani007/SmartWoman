import React, { useState } from "react";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";

const initialWishlist = [
  {
    id: 1,
    name: "Banarasi Silk Saree",
    price: 1299,
    image: "https://i.imgur.com/1GrakTl.jpg",
  },
  {
    id: 2,
    name: "Designer Party Wear Saree",
    price: 1599,
    image: "https://i.imgur.com/b9zDbyb.jpg",
  },
  {
    id: 3,
    name: "Wedding Collection Lehenga",
    price: 2999,
    image: "https://i.imgur.com/6RMhx.gif",
  },
];

export default function Wishlist() {
  const [wishlist, setWishlist] = useState(initialWishlist);

  const removeItem = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  const moveToCart = (item) => {
    alert("Moved to cart: " + item.name);
    removeItem(item.id);
  };

  return (
    <div className="min-h-screen font-[Poppins] bg-gray-50 py-6 sm:py-8 md:py-10 px-3 sm:px-4">
      <div className="max-w-6xl p-5 mx-auto">
        
        {/* TITLE */}
        <h1 className="text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 flex items-center gap-2">
          <Heart className="text-red-500" size={26} />
          My Wishlist
        </h1>
        <br />

        {wishlist.length === 0 ? (
          <div className="text-center py-16 text-gray-500 text-sm sm:text-base">
            Your wishlist is empty ❤️
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="
                  bg-white rounded-xl shadow-sm hover:shadow-lg
                  transition overflow-hidden
                  flex flex-col
                "
              >
                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 md:h-60 lg:h-64 object-cover"
                  />

                  <button
                    onClick={() => removeItem(item.id)}
                    className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-red-50"
                  >
                    <Trash2 size={16} className="text-red-500" />
                  </button>
                </div>

                {/* CONTENT */}
                <div className="flex flex-col flex-1 p-3 sm:p-4">
                  
                  {/* TEXT AREA */}
                  <div>
                    <p className="text-sm font-medium text-gray-800 line-clamp-2">
                      {item.name}
                    </p>

                    <span className="font-semibold text-base sm:text-lg text-purple-900 block mt-1">
                      ₹{item.price}
                    </span>
                  </div>

                  {/* BUTTON AREA (push bottom) */}
                  <div className="mt-auto pt-3">
                    <button
                      onClick={() => moveToCart(item)}
                      className="
                        w-full
                        bg-purple-900 hover:bg-purple-800
                        text-white
                        py-2
                        rounded-lg
                        flex items-center justify-center gap-2
                        text-sm sm:text-base
                        transition
                      "
                    >
                      <ShoppingCart size={18} />
                      Move to Cart
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}