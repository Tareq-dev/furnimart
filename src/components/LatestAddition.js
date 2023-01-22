import React from "react";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";
import { Link } from 'react-router-dom';

function LatestAddition({ itemsPrice, addToCard, cart, onRemoveCart }) {
  const [products] = useProducts({});
  return (
    <div className="py-10">
      <div className="flex justify-between pb-6 px-4">
        <p className="md:tracking-[10px] tracking-[4px] md:text-2xl uppercase">Latest Addition</p>
        <Link to='/products' className="md:text-xl md:pr-10">View All</Link>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 justify-items-center gap-1 md:px-14 py-4">
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
