import React from "react";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";

function LatestAddition({ itemsPrice, addToCard, cart, onRemoveCart }) {
  const [products] = useProducts({});
  return (
    <div className="py-14">
      <div className="flex justify-between pb-10">
        <p className="tracking-[10px] text-2xl uppercase">Latest Addition</p>
        <p className="text-xl pr-10">View All</p>
      </div>
      <div className="grid grid-cols-4 gap-1 px-14 py-8">
        {products.slice(4, 8).map((product) => (
          <ProductCard
            product={product}
            key={product._id}
            itemsPrice={itemsPrice}
            addToCard={addToCard}
            cart={cart}
            onRemoveCart={onRemoveCart}
          />
        ))}
      </div>
    </div>
  );
}

export default LatestAddition;
