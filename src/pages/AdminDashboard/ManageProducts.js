import React from "react";
import { Link } from "react-router-dom";
import { CgExtensionAdd } from "react-icons/cg";

function ManageProducts() {
  const productData = localStorage.getItem("products");
  const productDataParse = JSON.parse(productData);
  return (
    <div className="py-8">
      <div className="flex justify-center md:justify-end md:pr-14">
        <Link
          to="add-product"
          className="bg-white px-4 py-2 font-semibold rounded flex items-center"
        >
          <CgExtensionAdd size={30} className="mr-4" /> Add Product
        </Link>
      </div>
      <p className="text-xl text-center pt-8 font-bold">Product List</p>
      <div className=" w-[450px] md:w-full my-6 flex justify-center">
        <table className="table w-full mx-4">
          <thead>
            <tr>
              <th>Products</th>
              <th>Sale</th>
              <th>Earning</th>
              <th>Availablity</th>
            </tr>
          </thead>
          <tbody>
            {productDataParse.map((product) => (
              <tr key={product._id}>
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
                <td>150 Pcs</td>
                <td>$1250</td>
                <th>
                  <button className="bg-sky-200 rounded-xl px-4">
                    In Stock
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageProducts;
