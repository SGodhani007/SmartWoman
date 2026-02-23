import React from "react";

import ProductCard from "../assets/ProductCard";
import saree1 from "../Images/P1.png";
import saree2 from "../Images/P2.png";

export default function Products() {
  return (
    <div className="w-full px-6 md:px-10 lg:px-16 py-10">
      
      {/* PAGE TITLE */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        Saree Collection
      </h1>

      {/* PRODUCTS GRID */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4">
        
        <ProductCard
    
          image={saree1}
          title="ZARKAASHI DHOOP CHAV VOL 3 BANARASI SILK SAREE"
          price="10.31"
          pcs="4"
        />

        <ProductCard
          image={saree2}
          title="RAJTEX KORRA TISSUE PAITHANI HANDLOOM"
          price="14.04"
          pcs="6"
        />

        <ProductCard
          image={saree1}
          title="GOBUNI SWARA SOFT SILK SAREES"
          price="13.82"
          pcs="6"
        />

        <ProductCard
          image={saree2}
          title="SAROJ POLKI PURE SILK SAREES"
          price="16.66"
          pcs="6"
        />
      </div>
    </div>
  );
}