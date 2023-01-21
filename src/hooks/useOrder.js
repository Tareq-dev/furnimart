import { useEffect, useState } from "react";
import axios from "axios";

const useOrder = () => {
  const [orders, setOrders] = useState([]);
  const baseURL = "https://tareq-dev.github.io/furnimart-api/orderData.json";
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setOrders(response.data);
    });
  }, []);

  return [orders, setOrders];
};
export default useOrder;
