import { useEffect, useState } from "react";
import axios from "axios";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const baseURL =
    "https://tareq-dev.github.io/furnimart-api/products-data.json";
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProducts(response.data);
    });
  }, []);
  
 localStorage.setItem("products", JSON.stringify(products));
  
  return [products];
};
export default useProducts;
