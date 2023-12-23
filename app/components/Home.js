import React from "react";
import banner from "../../public/images/banner.png";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <div className="flex justify-between bg-purple-200">
        <div className=" px-10 md:px-20  py-10 flex flex-col justify-center gap-4">
          <h1 className="text-5xl">
            <span className="font-semibold">DEV SRIWARARAK</span>{" "}
            รับเขียนโปรแกรม ทำเว็บไซต์ ขอนแก่น ครบวงจร{" "}
          </h1>
          <p>
            dev sriwararak ทดสอบ next.js รับเขียนโปรแรกมขอนแก่น รับทำเว็บไซต์
            ขอนแก่น กำลังปรับปรุง{" "}
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-purple-700 text-white px-6 py-2 rounded-full border border-purple-700">
              ติดต่อเรา
            </button>
            <button className="bg-purple-200 text-purple-700 px-6 py-2 rounded-full border border-purple-700">
              ติดต่อเรา
            </button>
          </div>
        </div>
        <div className=" hidden md:block">
          <Image src={banner} loading="lazy" width={600} height={450} />
        </div>
      </div>
    </div>
  );
};

export default Home;
