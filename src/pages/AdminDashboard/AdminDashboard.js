import React from "react";
import {  NavLink, Outlet } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-[#ebfdff] mx-2 rounded-lg">
     
         <Outlet></Outlet>
        </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-44 text-base-content  bg-[#ebfdff]">
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
