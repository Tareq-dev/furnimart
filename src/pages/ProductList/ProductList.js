import React from "react";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";

function ProductList({ onRemoveCart, addToCard, cart, itemsPrice }) {
  const productData = localStorage.getItem("products");
  const productDataParse = JSON.parse(productData);

  return (
    <div className="md:py-14 pt-8">
      <p className="md:tracking-[10px] tracking-[5px] md:text-2xl uppercase text-center md:py-8 py-4">
        Our Product Lists
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-1 px-14 md:py-8">
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
