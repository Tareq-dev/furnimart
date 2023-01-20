import React from "react";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import useProducts from "./../../hooks/useProducts";

function ProductList({ onRemoveCart, addToCard, cart,itemsPrice }) {
  const [products] = useProducts({});
  return (
    <div className="py-14">
      <p className="tracking-[10px] text-2xl uppercase text-center py-8">
        Our Product Lists
      </p>
      <div className="grid grid-cols-4 gap-1 px-14 py-8">
        {products.map((product) => (
          <ProductCard cart={cart} onRemoveCart={onRemoveCart} itemsPrice={itemsPrice}             product={product}
            key={product._id}
            addToCard={addToCard}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default ProductList;
