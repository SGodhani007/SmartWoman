import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

import img1 from "../Images/P1.png";
import img2 from "../Images/P2.png";
import img3 from "../Images/P1.png";
import img4 from "../Images/P2.png";
import img5 from "../Images/P1.png";
import img6 from "../Images/P2.png";

export default function SingleProduct() {
  const images = [img1, img2, img3, img4, img5, img6];
  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("M");

  return (
    <div className=" bg-[#f6f6f6] py-6 sm:py-10">
      <div className=" grid lg:grid-cols-2 gap-8 px-3 sm:px-6">

        {/* ===== LEFT GALLERY ===== */}
        <div className="flex flex-col lg:flex-row gap-3">

          {/* MAIN IMAGE */}
          <div className=" bg-red-200 rounded-xl shadow flex items-center justify-center order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                src={images[active]}
                alt="product"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.35 }}
                className="
                   object-contain
                  h-[230px]        /* small phones */
                  sm:h-[320px]     /* large phones */
                  md:h-[420px]     /* tablets */
                  lg:h-[500px]     /* desktop */
                "
              />
            </AnimatePresence>
          </div>

          {/* THUMBNAILS */}
          <div className="
            flex lg:flex-col gap-2
            order-2 lg:order-1
            
            pb-2
          ">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex-shrink-0
                  w-10 h-10
                  sm:w-16 sm:h-16
                  lg:w-20 lg:h-20
                  rounded-lg overflow-hidden border
                  ${active === i
                    ? "border-red-500"
                    : "border-gray-200 opacity-70 hover:opacity-100"}
                `}
              >
                <img
                  src={img}
                  alt="thumb"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

        </div>

        {/* ===== RIGHT INFO ===== */}
        <div className="space-y-6">

          <div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">
              KILORY ART OF SUMMER PURE LAWN SALWAR SUIT
            </h1>

            <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-gray-500">
              ⭐⭐⭐⭐⭐ <span>(150 Reviews)</span>
              <span className="text-green-600">In Stock</span>
            </div>
          </div>

          <div className="text-2xl sm:text-3xl font-bold text-gray-900">
            $12.90{" "}
            <span className="text-sm sm:text-base font-normal text-gray-500">
              per piece
            </span>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            Pure Lawn cotton digital print suit with embroidery work and mulmul
            dupatta. Premium summer collection by Kilory.
          </p>

          {/* COLORS */}
          <div>
            <p className="font-medium mb-2">Colours</p>
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-red-400 border-2 border-gray-300 cursor-pointer"></span>
              <span className="w-6 h-6 rounded-full bg-green-400 border-2 border-gray-300 cursor-pointer"></span>
              <span className="w-6 h-6 rounded-full bg-purple-400 border-2 border-gray-300 cursor-pointer"></span>
            </div>
          </div>

          {/* SIZE */}
          <div>
            <p className="font-medium mb-2">Size</p>
            <div className="flex flex-wrap gap-2">
              {["XS", "S", "M", "L", "XL"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-3 py-1 border rounded text-sm ${
                    size === s
                      ? "bg-red-500 text-white border-red-500"
                      : "border-gray-300 hover:border-red-400"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* QTY + ACTIONS */}
          <div className="flex flex-wrap items-center gap-4">

            <div className="flex border rounded overflow-hidden">
              <button
                onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                className="px-3 py-2 bg-gray-100"
              >
                −
              </button>
              <div className="px-4 py-2">{qty}</div>
              <button
                onClick={() => setQty(qty + 1)}
                className="px-3 py-2 bg-gray-100"
              >
                +
              </button>
            </div>

            <button className="bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-3 rounded font-medium">
              Buy Now
            </button>

            <button className="w-11 h-11 border rounded flex items-center justify-center hover:bg-gray-100">
              <Heart size={20} />
            </button>
          </div>

          <div className="border rounded-lg p-4 space-y-2 text-sm bg-white">
            <div className="flex items-center gap-2">
              🚚 <span>Free Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              🔄 <span>7 Days Return Policy</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}