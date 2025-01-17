"use client";
import React, { useState } from "react";
import PriceProgram from "./PriceProgram";
import PriceWebsite from "./PriceWebsite";
import Link from "next/link";

const Prices = () => {
  const [status, setStatus] = useState(1);

  const changeStatus = (num) => {
    setStatus(num);
  };
  return (
    <div className="py-20 md:py-28 px-6 md:px-32 container mx-auto">
      <div className="flex flex-wrap lg:flex-row gap-2 justify-center">

      <button
          onClick={() => changeStatus(1)}
          className={`${
            status === 1
              ? "bg-purple-600 text-white"
              : "bg-purple-200 text-black"
          } px-3 md:px-4 py-2 rounded-lg text-sm lg:text-base `}
        >
          ค่าบริการทำเว็บไซต์
        </button>

        <button
          onClick={() => changeStatus(2)}
          className={`${
            status === 2
              ? "bg-purple-600 text-white"
              : "bg-purple-200 text-black"
          } px-3 md:px-4 py-2 rounded-lg text-sm lg:text-base `}
        >
          ค่าบริการเขียนโปรแกรม
        </button>
          
          <Link className="  px-3 md:px-4 py-2 rounded-lg text-sm text-center lg:text-base bg-gradient-to-r from-pink-400 to-purple-400 text-white" href="/pricing">บริการทั้งหมด</Link>
       
      </div>

      <div className="mt-16">
        {status === 1 ? <PriceWebsite />  : <PriceProgram /> }
      </div>
    </div>
  );
};

export default Prices;
