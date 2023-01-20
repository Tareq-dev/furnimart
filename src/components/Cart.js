import React from "react";

function Cart({ cart, onRemoveCart, itemsPrice }) {
  const handleOrder = () => {
    console.log(cart);

  };

  return (
    <div className="text-black">
      <h1 className="text-xl pb-1 text-center py-14">Cart</h1>
      <div className="md:flex md:flex-col md:items-center py-8">
        {cart.length === 0 && <p className="text-xl font-semibold">Cart is empty ! Please add to cart</p>}
        {cart?.map((item) => (
          <div className="flex w-[400px] px-2 text-center items-center shadow-sm mt-4 bg-[#ebfdff] rounded-sm">
            <img className="w-1/4 h-20" src={item.picture} alt="" />
            <div className="flex justify-between w-3/4 items-center">
              <div>
                <p className="text-xl">{item.name}</p>
                <p className="text-sm pl-2">Quantity: {item.quantity} Pcs </p>
              </div>
              <p>Price : {item.price} Tk</p>
              <div
                onClick={() => onRemoveCart(item)}
                className="btn btn-sm bg-red-500 btn-circle"
              >
                ✕
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr />
      <p className="text-center font-semibold py-2">
        Sub Total: {itemsPrice} Tk
      </p>

     <div className="flex justify-center py-4">
     <button onClick={handleOrder} type="" className="bg-sky-200 px-2 rounded-md py-1">Order Now</button>
     </div>
    </div>
  );
}

export default Cart;
