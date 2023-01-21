import React from "react";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";

function ProductList({ onRemoveCart, addToCard, cart, itemsPrice }) {
  const productData = localStorage.getItem("products");
  const productDataParse = JSON.parse(productData);

  return (
    <div className="py-14">
      <p className="tracking-[10px] text-2xl uppercase text-center py-8">
        Our Product Lists
      </p>
      <div className="grid grid-cols-4 gap-1 px-14 py-8">
        {productDataParse
          .map((product, i) => (
            <ProductCard
              cart={cart}
              onRemoveCart={onRemoveCart}
              itemsPrice={itemsPrice}
              product={product}
              key={i}
              addToCard={addToCard}
            />
          ))
          .reverse()}
      </div>
      <Footer />
    </div>
  );
}

export default ProductList;
