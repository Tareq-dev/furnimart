import { useEffect, useState } from "react";

const useCustomers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("https://tareq-dev.github.io/furnimart-api/customerData.json")
      .then((res) => res.json())
      .then((data) => setCustomers(data));
  }, [customers.id]);

  return [customers, setCustomers];
};
export default useCustomers;
