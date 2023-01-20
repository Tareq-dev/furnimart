import React from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import TrendingProducts from "../../components/TrendingProducts";
import LatestAddition from "./../../components/LatestAddition";
import Subscribs from "./../../components/Subscribs";

function Home({ itemsPrice, addToCard, cart, onRemoveCart }) {
  return (
    <div>
      <Banner />
      <TrendingProducts
        itemsPrice={itemsPrice}
        addToCard={addToCard}
        cart={cart}
        onRemoveCart={onRemoveCart}
      />
      <LatestAddition
        itemsPrice={itemsPrice}
        addToCard={addToCard}
        cart={cart}
        onRemoveCart={onRemoveCart}
      />
      <Subscribs />
      <Footer />

    </div>
  );
}

export default Home;
