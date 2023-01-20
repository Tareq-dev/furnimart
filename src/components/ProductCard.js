import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product, addToCard, cart, onRemoveCart, itemsPrice }) {
  return (
    <div className="mt-10">
      <img
        className="h-52 w-56 bg-[#ebfdff] rounded-md"
        src={product.picture}
        alt=""
      />
      <div className="flex justify-between w-56 px-2">
        <div>
          <h4 className="font-bold">{product.name}</h4>
          <h4 className="font-semibold">{product.price}</h4>
        </div>
        <div className="pt-4">
          <label
            htmlFor="my-modal-4"
            onClick={() => addToCard(product)}
            className="bg-sky-100 px-2 rounded-md"
          >
            Add cart
          </label>
          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <label htmlFor="my-modal-4" className="modal cursor-pointer">
            <label className="modal-box relative" htmlFor="">
              <div className="">
                {cart?.map((c) => (
                  <div className="flex px-4 text-center items-center border">
                    <img className="w-1/4 h-20" src={c.picture} alt="" />
                    <div className="flex justify-between w-3/4 items-center">
                      <div>
                        <p className="text-xl">{c.name}</p>
                        <p className="text-sm pl-2">
                          Quantity: {c.quantity} Pcs{" "}
                        </p>
                      </div>
                      <p>Price : {c.price} Tk</p>
                      <div
                        onClick={() => onRemoveCart(c)}
                        className="btn btn-sm bg-red-500 btn-circle"
                      >
                        ✕
                      </div>
                    </div>
                  </div>
                ))}

                <p className="py-8 text-center font-bold">Sub Total : {itemsPrice} Tk</p>
                <div className="flex justify-center">
                <Link to='/cart' className="text-center bg-blue-300 px-2 rounded-md">View Cart</Link>
                </div>
              </div>
            </label>
          </label>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
