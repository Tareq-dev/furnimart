import React from "react";
import table from "../images/table.png";
function Banner() {
  return (
    <div
      style={{
        backgroundColor: "#ebfdff",
      }}
    >
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:pl-24 pl-4 md:py-28 py-5">
          <h1 className="md:text-3xl text-xl font-bold text-center md:text-start">
            Aarong Furniture set
          </h1>
          <div className="md:py-4 py-1 text-center md:text-start">
            <span className="md:text-2xl text-blue-700 font-semibold">
              $3580
            </span>
            <span className="md:text-2xl text-gray-400 line-through px-4">
              $3880
            </span>
          </div>
          <div className="flex justify-center md:block">
            <button
              className="uppercase bg-blue-400 rounded-lg text-white font-bold px-2 py-1"
              type=""
            >
              Purchase
            </button>
          </div>

          <p className="md:pt-10 pt-4 md:text-xl text-center md:text-start">Shipping</p>
          <p className="text-blue-700 md:text-xl text-center md:text-start">Worldwide</p>
        </div>
        <img className="md:py-14 py-2 md:px-10 px-2 h-3/4" src={table} alt="" />
      </div>
    </div>
  );
}

export default Banner;
