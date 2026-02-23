import React from "react";
import { Heart, ShoppingCart } from "lucide-react";

export default function ProductCard({ image, title, price, pcs }) {
  return (
    <div className="group w-[260px] bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300">
      
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-[340px] object-cover group-hover:scale-105 transition duration-500"
        />

        {/* HOVER ACTIONS */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
          <button className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow hover:scale-110 transition">
            <ShoppingCart size={18} />
          </button>
          <button className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow hover:scale-110 transition">
            <Heart size={18} />
          </button>
        </div>
      </div>

      {/* PRICE BAR */}
      <div className="bg-[#3b0d63] text-white px-3 py-2 flex justify-between text-sm font-medium">
        <span>${price}</span>
        <span>Pcs:{pcs}</span>
      </div>

      {/* TITLE */}
      <div className="px-3 py-3 text-sm font-semibold text-gray-800 line-clamp-2">
        {title}
      </div>
    </div>
  );
}