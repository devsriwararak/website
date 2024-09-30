import React from "react";
import { data } from "./data.js";
import Image from "next/image";
import Link from "next/link.js";

const page = () => {
  return (
    <div className="container mx-auto px-6 md:px-10 lg:px-36 ">
      <h1 className="text-3xl text-center">
        รับทำเว็บไซต์ รับเขียนโปรแกรม ดูแล SEO การตลาดออนไลน์{" "}
      </h1>
      <p className="mt-6 text-gray-500 text-center">ออกแบบ และพัฒนาเว็บไซต์ดูแลการตลาดออนไลน์ SEO สำหรับบริษัทที่ต้องการเพิ่มยอดขาย เพิ่มการมองเห็น</p>
      <div className="flex flex-wrap mt-10 ">
        {data.map((item, index) => (
          <div className="lg:w-1/4 p-2" key={item.id}>
            <Link href={`/county/${item.id}`}>
              <div className="bg-white shadow-xl rounded-md">
                <div className="relative w-full h-48">
                  <Image
                    src={item.image}
                    layout="fill"
                    objectFit="cover"
                    alt={item.title}
                    className="w-full h-full rounded-t-md transition-transform duration-300 ease-in-out transform hover:scale-90"
                  />
                </div>

                <p className="px-4 py-2 text-sm">{item.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
