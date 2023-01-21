import React from "react";

function Subscribs() {
  return (
    <div className="py-14">
      <div
        className="flex justify-center items-center"
        style={{
          backgroundColor: "#ebfdff",
          backgroundRepeat: "no-repeat",
          height: "200px",
        }}
      >
        <div>
          <p className="py-4 text-center text-lg font-semibold">
            Please Subscribe us for latest update .
          </p>
          <div className="flex px-20">
            <input
              type=""
              placeholder="Enter your email address"
              className="py-2 px-4 border rounded-lg"
            />
            <button className="py-2 px-4 border bg-black text-red-400 font-bold rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribs;
