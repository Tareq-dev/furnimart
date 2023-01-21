import React from "react";
import useCustomers from "./../../hooks/useCustomers";

function Customers() {
  const [customers] = useCustomers({});
  return (
    <div className="overflow-x-auto mx-4">
      <p className="text-xl text-center py-8 font-bold">
        Our Customers Details
      </p>
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Order Qty</th>
            <th>Delivery</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, i) => (
            <tr customer={customer} key={i}>
              <th>{i + 1}</th>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.quantity}</td>
              {customer.delivered ? (
                <td className="text-green-400 font-bold">Done</td>
              ) : (
                <td>Pending</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Customers;
