import React from "react";
import data from "./data";
import Link from "next/link";

const page = () => {
  return (
    <div className="">
      <h1 className="text-xl font-semibold">บทความทั้งหมด</h1>
      <div className="mt-5">
        <AllBlogs />
      </div>
    </div>
  );
};

export default page;

export const AllBlogs = () => {
  return (
    <div className="flex flex-wrap   ">
      {data.map((item, index) => (
        <div className=" w-full md:w-1/3 lg:w-1/4 py-3 px-2" key={item.id}>
          <Link href={`/blogs/${item.url}`}>
            <div className="bg-gray-100 shadow-lg rounded-lg px-5 py-4 cursor-pointer">
              <img
                className="w-full md:w-80 "
                src={item.image}
                alt={item.title}
              />
              <h2 className="mt-4 text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm">{item.dec}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
