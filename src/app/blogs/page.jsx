"use server";
import React from "react";
import data from "./data";
import Link from "next/link";
import AllContents from "./AllContents";
import Image from "next/image";
import { truncateText } from "../lib/Tool.js";

const page = () => {
  return (
    <div className="">
      <h1 className="text-3xl ">บทความทั้งหมด</h1>
      <div className="mt-2">
        <AllBlogs />
        <AllContents />
      </div>
    </div>
  );
};

export default page;

export const AllBlogs = () => {
  return (
    <div className="flex  flex-wrap     ">
      {data.map((item, index) => (
        <div className=" w-full  lg:w-1/4 py-3 px-2" key={item.id}>
          <Link href={`/blogs/${item.url}`}>
            <div className="bg-white shadow-lg rounded-lg px-3 py-4 cursor-pointer border-2 border-gray-100 flex flex-col justify-center items-start h-full">
              {/* <img
                className="w-full h-full "
                src={item.image}
                alt={item.title}
              /> */}

              <div className="relative w-full h-48">
                <Image
                  src={item.image}
                  layout="fill"
                  objectFit="cover"
                  alt={item.title}
                  className="w-full h-full"
                />
              </div>

              <h2 className="mt-4  text-sm md:text-md font-semibold">
                {item.title}
              </h2>
              <p className="mt-2 text-xs md:text-sm text-gray-600 ">
                {truncateText(item.dec, 10)}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
