import React from "react";
import data from "./data";
import Link from "next/link";

const page = () => {
  return (
    <div className="">
      <h1 className="text-xl font-semibold">บทความทั้งหมด</h1>
      <div className="mt-2">
        <AllBlogs />
      </div>
    </div>
  );
};

export default page;

export const AllBlogs = () => {
  return (
    <div className="flex  flex-wrap   md:mx-20   ">
      {data.map((item, index) => (
        <div className=" w-full  lg:w-1/4 py-3 px-2" key={item.id}>
          <Link href={`/blogs/${item.url}`}>
            <div className="bg-white shadow-lg rounded-lg px-3 py-4 cursor-pointer border-2 border-gray-100 flex flex-col justify-center items-center">
              <img
                className="w-full md:w-80 "
                src={item.image}
                alt={item.title}
              />
              <h2 className="mt-4 text-sm md:text-md font-semibold">{item.title}</h2>
              <p className="mt-2 text-xs md:text-sm text-gray-600">{item.dec}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
