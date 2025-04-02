import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OtherBlogs = async ({ id }) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_URL_API}/api/blogs/other`,
    { id }
  );
  let data = [];
  if (res.status === 200) {
    data = res.data;
  }
  //   ต้องการให้ index 0 เป็น flex-col แค่ index 1 นอกนั้นเป็น flex-row ตามปกติ
  // ต้องการให้รูป index 0 ปกติ แต่ รูปใน index 2 เป็นต้นไป ไม่ว่าจะลงขนาดไหน ให้เท่ากันหมด
  return (
    <div className=" mt-6 ">
      <div className="flex flex-col gap-8 px-1">
        {data.map((item, index) => (
          <div key={item.id}>
            <Link href={`/blogs/list/${item.id}`}>
              <div
                className={`flex ${
                  index === 0
                    ? "flex-col justify-start"
                    : "flex-col lg:flex-row justify-center items-center"
                }  gap-4`}
              >
                <div
                  className={`${index === 0 ? "w-full" : "w-full lg:w-1/3"}`}
                >
                  {item.image && (
                    <div className=" relative w-full h-28">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMAGE}/${item.image}`}
                        loading="lazy"
                        alt={`${item.title}`}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 ease-in-out transform hover:scale-90 rounded-md"
                      />
                    </div>
                  )}
                </div>
                <div
                  className={`${index === 0 ? "w-full" : "w-full lg:w-2/3"}`}
                >
                  <small className=" text-purple-700">บทความใหม่</small>
                  <h3
                    className={`${
                      index === 0 ? "text-xl" : "text-base"
                    } font-semibold`}
                  >
                    {item?.title}
                  </h3>
                  <small className="text-gray-800 font-medium">
                    รายละเอียด
                  </small>

                  {index === 0 && (
                    <p className="text-sm text-gray-600 font-light">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherBlogs;
