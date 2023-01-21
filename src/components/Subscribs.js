import React from "react";

function Subscribs() {
  return (
    <div className="md:py-14">
      <div
        className="flex justify-center items-center w-88"
        style={{
          backgroundColor: "#ebfdff",
          backgroundRepeat: "no-repeat",
          height: "200px",
        }}
      >
        <div>
          <p className="py-4 text-center md:text-lg font-semibold">
            Please Subscribe us for latest update .
          </p>
          <div className="flex px-20">
            <input
              type=""
              placeholder="Enter your email address"
              className="py-2 md:px-4 px-2 border rounded-lg"
            />
            <button className="py-2 md:px-4 px-2 border bg-black text-red-400 font-bold rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribs;
