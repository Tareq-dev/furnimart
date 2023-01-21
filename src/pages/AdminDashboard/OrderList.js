import React from "react";
import useOrder from "./../../hooks/useOrder";

function OrderList() {
  const [orders] = useOrder({});
  return (
    <div className="overflow-x-auto mx-4">
      <p className="text-xl text-center py-8 font-bold">Order Details</p>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone No</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => (
            <tr order={order} key={i}>
              <td>{order.name}</td>
              <td>{order.email}</td>
              <td>{order.address}</td>
              <td>{order.phone}</td>
              {order.payment?<td className="text-green-400">Success</td>:<td className="text-red-400">Pending</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderList;
