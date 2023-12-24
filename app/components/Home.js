import React from "react";
import banner from "../../public/images/banner.png";
import mobile from "../../app/components/images/mobile.png";
import review_1 from "../components/images/รับเขียนโปรแกรม-ขอนแก่น-1.webp";
import review_2 from "../components/images/รับเขียนโปรแกรม-ขอนแก่น-2.webp";
import Image from "next/image";
import { FaBeer } from "react-icons/fa";
import { AiFillFacebook, AiFillPhone } from "react-icons/ai";
import { SiLine, SiTiktok } from "react-icons/si";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <div className="flex   bg-purple-200">
        {/* Hero Secction */}
        <div className=" px-10 md:px-20  py-20 flex flex-col gap-4 w-3/4 justify-center">
          <h1 className="text-5xl leading-normal  ">
            <span className="font-semibold ">DEV SRIWARARAK</span>{" "}
            รับเขียนโปรแกรม ทำเว็บไซต์ ขอนแก่น{" "}
          </h1>
          <p>
            dev sriwararak ทดสอบ next.js รับเขียนโปรแรกมขอนแก่น รับทำเว็บไซต์
            ขอนแก่น กำลังปรับปรุง{" "}
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-5 ">
            <button className="bg-purple-700 text-white px-6 py-2 rounded-full border border-purple-700 hover:bg-purple-200 hover:text-purple-700">
              ติดต่อเรา
            </button>
            <button className="bg-purple-200 text-purple-700 px-6 py-2 rounded-full border border-purple-700 hover:bg-purple-900 hover:text-white hover:border-white">
              ผลงานที่ผ่านมา
            </button>
          </div>
        </div>
        <div className=" hidden md:block  w-2/4  ">
          <div className="flex justify-start">
            <Image src={banner} loading="lazy" width={400} height={400} />
          </div>
        </div>
      </div>

      {/*  About Me section */}

      <div className="flex flex-col md:flex-row gap-4 mt-10 py-16 px-20">
        <div className="w-full">
          <h2 className="text-3xl">เกี่ยวกับเรา</h2>
          <p className="text-gray-700 mt-2">xxxxxxxxxxxxxxxxxxxxxxxxx</p>
          <p className="text-gray-700 ">xxxxxxxxxxxxxxxxxxxxxxxxx</p>
          <div className="flex flex-row gap-4 mt-10">
            <button className="flex gap-2 items-center bg-blue-600 px-5 py-1.5 rounded-lg text-white">
              {" "}
              <AiFillFacebook /> Facebook
            </button>
            <button className="flex gap-2 items-center bg-red-600 px-4 py-1.5 rounded-full text-white">
              {" "}
              <AiFillPhone /> โทรศัพท์
            </button>
            <button className="flex gap-2 items-center bg-green-700 px-4 py-1.5 rounded-full text-white">
              {" "}
              <SiLine /> Line
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

      {/* show mobile */}

      <section className="flex flex-row gap-10 mx-20 mt-20 ">
        <div className="w-2/3 flex flex-col items-center justify-center gap-10 ">
          <div className="flex flex-row gap-4 ">
            <SiTiktok size={40} />
            <div>
              <h3 className="text-xl">xxxxxxxxxx</h3>
              <p className="text-gray-700">xxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            </div>
          </div>

          <div className="flex flex-row gap-4 ">
            <SiTiktok size={40} />
            <div>
              <h3 className="text-xl">xxxxxxxxxx</h3>
              <p className="text-gray-700">xxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            </div>
          </div>

          <div className="flex flex-row gap-4 ">
            <SiTiktok size={40} />
            <div>
              <h3 className="text-xl">xxxxxxxxxx</h3>
              <p className="text-gray-700">xxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            </div>
          </div>
        </div>
        <div className="w-1/3 flex justify-center ">
          <Image src={mobile} loading="lazy" />
        </div>
        <div className="w-2/3 flex flex-col items-center justify-center gap-10 ">
          <div className="flex flex-row gap-4 text-right">
            <div>
              <h3 className="text-xl">xxxxxxxxxx</h3>
              <p className="text-gray-700">xxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            </div>
            <SiTiktok size={40} />
          </div>

          <div className="flex flex-row gap-4 text-right ">
            <div>
              <h3 className="text-xl">xxxxxxxxxx</h3>
              <p className="text-gray-700">xxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            </div>
            <SiTiktok size={40} />
          </div>

          <div className="flex flex-row gap-4 text-right ">
            <div>
              <h3 className="text-xl">xxxxxxxxxx</h3>
              <p className="text-gray-700">xxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            </div>
            <SiTiktok size={40} />
          </div>
        </div>
      </section>

      {/* ผลงานที่ผ่านมทา */}
      <section className="mt-24">
        <h2 className="text-3xl text-center">ผลงานที่ผ่านมา</h2>
        <p className="text-gray-700 text-center mt-2">
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        </p>
        <div className="flex flex-row gap-4 mx-16 mt-10">
          <div className="w-full">
            <Image src={review_1} loading="lazy" />
          </div>

          <div className="w-full">
            <Image src={review_2} loading="lazy" />
          </div>

          <div className="w-full">
            <Image src={review_1} loading="lazy" />
          </div>

          <div className="w-full">
            <Image src={review_2} loading="lazy" />
          </div>
        </div>

        <div className="flex flex-row gap-4 mx-16 mt-5">
          <div className="w-full">
            <Image src={review_2} loading="lazy" />
          </div>

          <div className="w-full">
            <Image src={review_1} loading="lazy" />
          </div>

          <div className="w-full">
            <Image src={review_2} loading="lazy" />
          </div>

          <div className="w-full">
            <Image src={review_1} loading="lazy" />
          </div>
        </div>

      </section>

      <Footer/>
    </div>
  );
};

export default Home;
