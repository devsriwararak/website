import React from "react";
import banner from "../../public/images/banner.png";
import Image from "next/image";
import { FaBeer } from "react-icons/fa";
import { AiFillFacebook, AiFillPhone } from "react-icons/ai";
import { SiLine, SiTiktok } from "react-icons/si";

const Home = () => {
  return (
    <div>
      <div className="flex justify-between bg-purple-200">
        {/* Hero Secction */}
        <div className=" px-10 md:px-20  py-10 flex flex-col justify-center gap-4">
          <h1 className="text-5xl leading-normal  ">
            <span className="font-semibold ">DEV SRIWARARAK</span>{" "}
            รับเขียนโปรแกรม ทำเว็บไซต์ ขอนแก่น ครบวงจร{" "}
          </h1>
          <p>
            dev sriwararak ทดสอบ next.js รับเขียนโปรแรกมขอนแก่น 
            รับทำเว็บไซต์ ขอนแก่น กำลังปรับปรุง{" "}
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-purple-700 text-white px-6 py-2 rounded-full border border-purple-700 hover:bg-purple-200 hover:text-purple-700">
              ติดต่อเรา
            </button>
            <button className="bg-purple-200 text-purple-700 px-6 py-2 rounded-full border border-purple-700 hover:bg-purple-900 hover:text-white hover:border-white">
              ผลงานที่ผ่านมา
            </button>
          </div>
        </div>
        <div className=" hidden md:block">
          <Image src={banner} loading="lazy" width={600} height={450} />
        </div>
      </div>

      {/*  About Me section */}

      <div className="flex flex-col md:flex-row gap-4 mt-20 px-20">
        <div className="w-full">
          <h2 className="text-3xl">เกี่ยวกับเรา</h2>
          <p className="text-gray-700 mt-2">xxxxxxxxxxxxxxxxxxxxxxxxx</p>
          <p className="text-gray-700 ">xxxxxxxxxxxxxxxxxxxxxxxxx</p>
          <div className="flex flex-row gap-4 mt-10">
            <button className="flex gap-2 items-center bg-blue-600 px-5 py-1.5 rounded-lg text-white">
              {" "}
              <AiFillFacebook  /> Facebook
            </button>
            <button className="flex gap-2 items-center bg-red-600 px-4 py-1.5 rounded-full text-white">
              {" "}
              <AiFillPhone /> โทรศัพท์
            </button>
            <button className="flex gap-2 items-center bg-green-700 px-4 py-1.5 rounded-full text-white">
              {" "}
              <SiLine  /> Line
            </button>
            <button className="flex gap-2 items-center bg-black px-4 py-1.5 rounded-full text-white">
              {" "}
              <SiTiktok /> Tiktok
            </button>
          </div>
        </div>
        <div className="w-full">
          <p className="text-gray-700 ">
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </p>

          <div className="flex flex-row gap-4 mt-10 justify-between items-center ">
            <h2 className="text-2xl">xxxxx</h2>
            <div>
              <p className="text-5xl font-semibold text-purple-700">10+</p>
              <p className="text-purple-600">xxxxxxxxxxxxx</p>
            </div>
            <div>
              <p className="text-5xl font-semibold text-purple-700">10+</p>
              <p className="text-purple-600">xxxxxxxxxxxxxx</p>
            </div>
            <div>
              <p className="text-5xl font-semibold text-purple-700">10+</p>
              <p className="text-purple-600">xxxxxxxxxxxxxxx</p>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="mt-20 bg-gray-200 py-20">
        <h2 className=" text-center text-3xl">xxxxxxxxxxxxxxxxxxxxxxxxx</h2>
        <p className="text-center text-gray-700">xxxxxx</p>

        <div className="flex flex-row justify-center gap-5 mt-10 ">
          <div>
            <Image src={banner} loading="lazy" width={200} height={300} />
            <h3 className="text-center text-lg">1111</h3>
            <p className="text-center text-gray-700">xxxxxx</p>
          </div>
          <div>
            <Image src={banner} loading="lazy" width={200} height={300} />
            <h3 className="text-center text-lg">1111</h3>
            <p className="text-center text-gray-700">xxxxxx</p>
          </div>
          <div>
            <Image src={banner} loading="lazy" width={200} height={300} />
            <h3 className="text-center text-lg">1111</h3>
            <p className="text-center text-gray-700">xxxxxx</p>
          </div>
          <div>
            <Image src={banner} loading="lazy" width={200} height={300} />
            <h3 className="text-center text-lg">1111</h3>
            <p className="text-center text-gray-700">xxxxxx</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
