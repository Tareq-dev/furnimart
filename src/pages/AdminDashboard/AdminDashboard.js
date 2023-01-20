import React from "react";
import {  NavLink, Outlet } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-[#ebfdff] mx-2 rounded-lg">
        <div className='pt-4 flex justify-end px-4'>
        <label htmlFor="my-drawer-2" className="px-2 py-1 font-bold rounded-xl shadow-md drawer-button lg:hidden">Open Admin drawer</label>
        </div>
         <Outlet></Outlet>
        </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-44 text-base-content  bg-[#ebfdff] mx-2 rounded-lg">
          {/* <!-- Sidebar content here --> */}
          <li><NavLink className='py-2 my-1' to="/admin">Overview</NavLink></li>
          <li className="py-1 my-2">
            <NavLink to="/admin/customers">Customers</NavLink>
          </li>
          <li className="py-1 my-2">
            <NavLink to="/admin/order">Order List</NavLink>
          </li>
          <li className="py-1 my-2">
            <NavLink to="/admin/manage-product">Product List</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AdminDashboard;
