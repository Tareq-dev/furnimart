import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("productData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products.id]);

  return [products, setProducts];
};
export default useProducts;
