"use server";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const fetchData = async (id, limit) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API}/api/blogs/display`,
      {
        website_id: 3,
        limit: limit ? limit : 10,
        id: id ? id : ""
      }
    );
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};
const DisplayHome = async ({id, limit}) => {
  const data = await fetchData(id, limit);
  return (
    <div className="mt-20 md:mt-24 container mx-auto px-6 md:px-10 lg:px-36  ">
      <h2 className="text-xl text-center lg:text-3xl">บทความที่เกี่ยวข้อง</h2>
      <div className="flex flex-wrap mt-8 justify-center">
        {data?.map((item, index) => (
          <div className=" w-full md:w-1/2 lg:w-1/5 px-2 py-3" key={item.id}>
            <Link href={`/contents/${item.id}`}>
              <div className="bg-white shadow-lg border border-gray-100 rounded-md fliex ">
             <div className="relative w-full h-48">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE}/${item.image}`}
                    layout="fill" 
                    objectFit="cover" 
                    alt={item.title}
                    className="w-full h-full"
                  />
                </div>
                <div className=" py-2 px-4">
                  <h3 className="text-sm lg:text-base font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayHome;
