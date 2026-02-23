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
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Heart className="text-red-500" /> My Wishlist
        </h1>

        {wishlist.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            Your wishlist is empty ❤️
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden group"
              >
                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                  />

                  {/* REMOVE */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-red-50"
                  >
                    <Trash2 size={18} className="text-red-500" />
                  </button>
                </div>

                {/* INFO */}
                <div className="p-4 space-y-2">
                  <p className="text-sm font-medium text-gray-800 line-clamp-2">
                    {item.name}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-lg text-purple-900">
                      ₹{item.price}
                    </span>
                  </div>

                  {/* ACTION */}
                  <button
                    onClick={() => moveToCart(item)}
                    className="w-full mt-3 bg-purple-900 hover:bg-purple-800 text-white py-2 rounded-lg flex items-center justify-center gap-2 transition"
                  >
                    <ShoppingCart size={18} />
                    Move to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}