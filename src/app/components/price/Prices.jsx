"use client";
import React, { useState } from "react";
import PriceProgram from "./PriceProgram";
import PriceWebsite from "./PriceWebsite";

const Prices = () => {
  const [status, setStatus] = useState(1);

  const changeStatus = (num) => {
    setStatus(num);
  };
  return (
    <div className="py-20 md:py-28 px-6 md:px-32 container mx-auto">
      <div className="flex flex-row gap-2 justify-center">

      <button
          onClick={() => changeStatus(1)}
          className={`${
            status === 1
              ? "bg-purple-600 text-white"
              : "bg-purple-200 text-black"
          } px-4 py-2 rounded-lg `}
        >
          ค่าบริการทำเว็บไซต์
        </button>

        <button
          onClick={() => changeStatus(2)}
          className={`${
            status === 2
              ? "bg-purple-600 text-white"
              : "bg-purple-200 text-black"
          } px-4 py-2 rounded-lg `}
        >
          ค่าบริการเขียนโปรแกรม
        </button>
       
      </div>

      <div className="mt-16">
        {status === 1 ? <PriceWebsite />  : <PriceProgram /> }
      </div>
    </div>
  );
};

export default Prices;
