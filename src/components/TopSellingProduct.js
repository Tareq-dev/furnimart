import React from "react";
import useProducts from "./../hooks/useProducts";

function TopSellingProduct() {
  const [products] = useProducts({});
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
        <tbody>
          {/* <!-- row 1 --> */}
          {products.slice(0,4).map((product,i) => (
            <tr key={i} >
              <th>{i+1}</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={product.picture}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{product.name}</div>
                  </div>
                </div>
              </td>
              <td>
               150 Pcs
              </td>
              <td>$1250</td>
              <th>
                <button className="bg-sky-200 rounded-xl px-4">In Stock</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopSellingProduct;
