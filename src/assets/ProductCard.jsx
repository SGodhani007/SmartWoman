import React from "react";
import { Heart, ShoppingCart } from "lucide-react";

export default function ProductCard({ image, title, price, pcs }) {
  return (
    <div className="group relative w-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-500">
      
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-[340px] object-cover transform group-hover:scale-110 transition duration-700"
        />

        {/* SHINE EFFECT */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
          <div className="absolute -left-1/2 top-0 w-1/2 h-full bg-white/30 skew-x-12 group-hover:left-full transition-all duration-1000"></div>
        </div>

        {/* WISHLIST FLOAT */}
        <button className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow hover:bg-pink-50 transition">
          <Heart size={18} className="text-gray-600 group-hover:text-pink-500" />
        </button>

        {/* HOVER ACTION BAR */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition duration-500">
          <button className="w-full bg-[#3b0d63] text-white py-3 flex items-center justify-center gap-2 font-medium hover:bg-[#4c1580]">
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* PRICE BAR */}
      <div className="bg-gradient-to-r from-[#3b0d63] to-purple-700 text-white px-4 py-2 flex justify-between items-center text-sm font-semibold">
        <span>${price}</span>
        <span className="bg-white/20 px-2 py-0.5 rounded text-xs">
          Pcs: {pcs}
        </span>
      </div>

      {/* TITLE */}
      <div className="px-4 py-3">
        <p className="text-gray-800 font-semibold text-sm leading-snug line-clamp-2 group-hover:text-purple-700 transition">
          {title}
        </p>
      </div>
    </div>
  );
}