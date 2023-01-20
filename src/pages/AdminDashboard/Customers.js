import React from "react";

function Customers() {
  const data = [
    {
      delivered: false,
      quantity: 2,
      name: "Ayers Wilkinson",
      email: "ayerswilkinson@steeltab.com",
    },
    {
      delivered: false,
      quantity: 1,
      name: "Morin Conley",
      email: "morinconley@steeltab.com",
    },
    {
      delivered: true,
      quantity: 2,
      name: "Latoya Hart",
      email: "latoyahart@steeltab.com",
    },
    {
      delivered: false,
      quantity: 3,
      name: "Castillo Stanley",
      email: "castillostanley@steeltab.com",
    },
    {
      delivered: true,
      quantity: 4,
      name: "Mayo Cook",
      email: "mayocook@steeltab.com",
    },
    {
      delivered: true,
      quantity: 2,
      name: "Candy Blanchard",
      email: "candyblanchard@steeltab.com",
    },
    {
      delivered: false,
      quantity: 3,
      name: "Ella Garcia",
      email: "ellagarcia@steeltab.com",
    },
    {
      delivered: true,
      quantity: 3,
      name: "Evangelina Bond",
      email: "evangelinabond@steeltab.com",
    },
    {
      delivered: true,
      quantity: 3,
      name: "Rice Chaney",
      email: "ricechaney@steeltab.com",
    },
    {
      delivered: false,
      quantity: 2,
      name: "Morgan Gutierrez",
      email: "morgangutierrez@steeltab.com",
    },
  ];
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
          {data.map((customer, i) => (
            <tr customer={customer} key={i}>
              <th>{i+1}</th>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.quantity}</td>
              {customer.delivered ?<td className="text-green-400 font-bold">Done</td>:<td>Pending</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Customers;
