import React, { useState } from "react";
import { useEffect } from "react";

function ManageProducts() {
  const [products, setProducts] = useState({});
  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="overflow-x-auto w-full my-14 bg-white">
      <p className="text-xl text-center py-8 font-bold">Top Selling Products</p>
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>No</th>
            <th>Products</th>
            <th>Sale</th>
            <th>Earning</th>
            <th>Availablity</th>
          </tr>
        </thead>
       
      </table>
    </div>
  );
}

export default ManageProducts;
