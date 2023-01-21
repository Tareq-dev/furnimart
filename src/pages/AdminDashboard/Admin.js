import React from "react";
import { BsBoxSeam } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { CiWallet } from "react-icons/ci";
import Chart from "../../components/Chart";
import TopSellingProduct from "../../components/TopSellingProduct";

function Admin() {
  return (
    <div>
      <div className="py-10 grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="flex items-center justify-center bg-white py-6 mx-2 shadow-sm rounded-md">
          <div className="px-4 mx-4 bg-sky-100 rounded-full w-16 h-16">
            <BsBoxSeam className="mt-4" size={30} />
          </div>
          <div>
            <h2 className="font-bold text-2xl">$2320</h2>
            <p className="text-gray-400">Total Sale Unit</p>
          </div>
        </div>
        <div className="flex items-center justify-center bg-white py-6 mx-2 shadow-sm rounded-md">
          <div className="px-4 mx-4 bg-sky-100 rounded-full w-16 h-16">
            <RiMoneyDollarCircleFill className="mt-4" size={30} />
          </div>
          <div>
            <h2 className="font-bold text-2xl">$18952</h2>
            <p className="text-gray-400">Total Earning</p>
          </div>
        </div>
        <div className="flex items-center justify-center bg-white py-6 mx-2 shadow-sm rounded-md">
          <div className="px-4 mx-4 bg-sky-100 rounded-full w-16 h-16">
            <RiMoneyDollarCircleFill className="mt-4" size={30} />
          </div>
          <div>
            <h2 className="font-bold text-2xl">$23520</h2>
            <p className="text-gray-400">Total Profit</p>
          </div>
        </div>
        <div className="flex items-center justify-center bg-white py-6 mx-2 shadow-sm rounded-md">
          <div className="px-4 mx-4 bg-sky-100 rounded-full w-16 h-16">
            <CiWallet className="mt-4" size={30} />
          </div>
          <div>
            <h2 className="font-bold text-2xl">$23.20K</h2>
            <p className="text-gray-400">This Year Profit</p>
          </div>
        </div>
      </div>
      <div>
        <Chart />
        <TopSellingProduct />
      </div>
    </div>
  );
}

export default Admin;
