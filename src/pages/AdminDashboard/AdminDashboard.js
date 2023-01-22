import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";

function AdminDashboard() {
  const navigate = useNavigate();
  const logOut = () => {
    signOut(auth);
    navigate("/");
  };
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
          <li>
            <NavLink className="py-2 my-1" to="/admin">
              Overview
            </NavLink>
          </li>
          <li className="py-1 my-2">
            <NavLink to="/admin/customers">Customers</NavLink>
          </li>
          <li className="py-1 my-2">
            <NavLink to="/admin/order">Order List</NavLink>
          </li>
          <li className="py-1 my-2">
            <NavLink to="/admin/manage-product">Product List</NavLink>
          </li>
          <li>
            <button
              className="my-2 px-8 bg-slate-200 items-center rounded-sm font-bold py-1"
              onClick={logOut}
            >
              Log out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AdminDashboard;
