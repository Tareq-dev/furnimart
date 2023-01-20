import React from "react";
import table from "../images/table.png";
function Banner() {
  return (
    <div
      style={{
        backgroundColor: "#ebfdff",
        height: "400px",
      }}
    >
      <div className="flex justify-between">
        <div className="pl-24 py-28">
        <h1 className="text-3xl font-bold">Aarong Furniture set</h1>
        <div className="py-4">
        <span className="text-2xl text-blue-700 font-semibold">$3580</span>
        <span className="text-2xl text-gray-400 line-through px-4">$3880</span>
        </div>
        <button className="uppercase bg-blue-400 rounded-lg text-white font-bold px-2 py-1" type="">Purchase</button>
        <p className="pt-10 text-xl">Shipping</p>
        <p className="text-blue-700 text-xl">Worldwide</p>
        </div>
        <img className="py-14 px-10 h-3/4" src={table} alt="" />
      </div>
    </div>
  );
}

export default Banner;
