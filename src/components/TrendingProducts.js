import React from "react";
import useProducts from "./../hooks/useProducts";
import ProductCard from "./ProductCard";

function TrendingProducts({ itemsPrice, addToCard, cart, onRemoveCart }) {
  const [products] = useProducts({});
  return (
    <div className="py-14">
      <div className="flex justify-between pb-6">
        <p className="md:tracking-[10px] tracking-[4px] md:text-2xl px-4 uppercase">Trending Products</p>
        <p className="md:text-xl md:pr-10 pr-4">View All</p>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-1 justify-items-center md:px-14 py-6">
        {products.slice(0, 4).map((product,i) => (
          <ProductCard
            product={product}
            key={i}
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

export default TrendingProducts;
