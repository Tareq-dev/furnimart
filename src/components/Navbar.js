import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
function Navbar({cart}) {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products" className="justify-between">
                Product List
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin">Admin Dashboard</NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="text-pink-600 font-bold normal-case text-2xl">
          Furni<span className="text-black">M</span>art
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="mx-2">
            <NavLink className='h-8' to="/">Home</NavLink>
          </li>
          <li className="mx-2">
            <NavLink className='h-8' to="/products">Product List</NavLink>
          </li>
          <li className="mx-2">
            <NavLink className='h-8' to="/admin">Admin Dashboard</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <p className="mx-5">
          <BiSearchAlt2 size={24} />
        </p>
        <Link to="/cart" className="flex relative mr-2 md:mx-5">
          <p className="bg-red-600 text-white rounded-lg font-semibold text-md absolute top-[-8px] right-1 px-1">
            {cart.length}
          </p>
          <BsCart3 className="mt-3 md:ml-4" size={24} />
        </Link>
        <button className="md:mx-5 mx-2 px-2 bg-sky-200 rounded-sm">Register</button>
      </div>
    </div>
  );
}

export default Navbar;
