import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChartLine, FaLaptopCode } from "react-icons/fa";
import { MdOutlineLocalGroceryStore, MdOutlineQueuePlayNext } from "react-icons/md";

const Hero = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300 pt-36 lg:pt-48 pb-14 lg:pb-32  -mt-36 ">
        <div className="flex flex-col md:flex-row  gap-6  container mx-auto px-6 md:px-8  lg:px-32     ">
          <div className=" text-center lg:text-left  flex flex-col gap-3 lg:w-3/5 justify-start  lg:pr-20  tracking-widest   ">
            <p className="text-gray-200 font-medium text-md text-left ">
              ให้คำปรึกษา การตลาด และเว็บไซต์บริษัท ฟรี
            </p>
            <h1 className=" text-3xl md:text-6xl text-white font-semibold leading-10 text-left   ">
              รับเขียนโปรแกรม ทำเว็บไซต์ SEO ขอนแก่น
            </h1>

            <p className="mt-2 text-gray-200 text-xl   text-left pr-10">
              รับเขียนโปรแกรม รับทำเว็บไซต์ SEO{" "}
              <b className="text-yellow-400"> ค้นหาเจอใน Google Search </b>
              พัฒนาซอฟต์แวร์ วิเคราะห์ข้อมูลโดยทีมงานมืออาชีพ
              เหมาะสำหรับทุกธุรกิจที่กำลังเติบโต
            </p>
            <div className="flex flex-row justify-start items-start lg:justify-normal  gap-4 mt-6  ">
              <Link href="/contact">
                <button className="bg-purple-600 text-white px-6 py-1 rounded-full border border-gray-200 hover:bg-purple-800 ">
                  ติดต่อเรา
                </button>
              </Link>

              <Link href="/review">
                <button className="bg-purple-200 text-gray-700 px-6 py-1 rounded-full border border-white hover:bg-purple-300 hover:text-white hover:border-white">
                  ผลงานที่ผ่านมา
                </button>
              </Link>
            </div>
          </div>
          <div className=" hidden    w-2/5  lg:flex flex-col     ">
            <div className="w-28 bg-white bg-opacity-30  rounded-lg  skew-x-12  px-5  flex ml-36 -mb-5    ">
              <Image
                src="/images/banner_thaibusinessmate_2.png"
                loading="lazy"
                width={200}
                height={200}
                alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
                quality={75}
              />
            </div>

            <div className="w-full  rounded-2xl  -mb-20">
              <Image
                src="/images/banner_thaibusinessmate_1.webp"
                loading="lazy"
                width={600}
                height={600}
                alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
                quality={75}
              />
            </div>

            <div className="w-40 bg-white bg-opacity-30  rounded-xl skew-x-3  py-7 px-5 -ml-28 -mt-20 ">
              <Image
                src="/images/banner_thaibusinessmate_3.png"
                loading="lazy"
                width={300}
                height={300}
                alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
                quality={75}
              />
            </div>
          </div>
        </div>
      </div>

      {/* xxx */}
      <div className="  bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300 border-t-2 border-purple-200 ">
        <div className="bg-red-100 bg-opacity-20 px-4  lg:px-32 py-3    ">
          <ul className="flex flex-wrap lg:flex-row gap-0  lg:gap-10 justify-between md:justify-center  ">
            <li className="text-sm md:text-base lg:text-lg    text-gray-100 hover:bg-white hover:bg-opacity-25 px-1 py-1  lg:py-2 lg:px-4 rounded-lg  ">
              <Link
                href="/#web_1"
                className="flex flex-row gap-2 items-center transition duration-300 ease-in-out "
              >
                {" "}
                <MdOutlineQueuePlayNext color="white" className="lg:text-2xl" />{" "}
                รับเขียนโปรแกรม
              </Link>
            </li>
            <li className="text-sm md:text-base lg:text-lg text-gray-100 hover:bg-white hover:bg-opacity-25 px-1 py-1 lg:py-2 lg:px-4  rounded-lg ">
              <Link href="/" className="flex flex-row gap-2 items-center">
                {" "}
                <MdOutlineLocalGroceryStore color="white" className="lg:text-2xl" />{" "}
                รับทำเว็บไซต์สำเร็จรูป
              </Link>
            </li>
            <li className="text-sm md:text-base lg:text-lg  text-gray-100 hover:bg-white hover:bg-opacity-25 px-1 py-1  lg:py-2 lg:px-4  rounded-lg ">
              <Link href="/" className="flex flex-row gap-2 items-center">
                {" "}
                <FaLaptopCode color="white" className="lg:text-2xl" /> รับทำเว็บไซต์ขนาดใหญ่
              </Link>
            </li>
            <li className="text-sm md:text-base lg:text-lg  text-gray-100 hover:bg-white hover:bg-opacity-25 px-1 py-1  lg:py-2 lg:px-4  rounded-lg ">
              <Link href="/" className="flex flex-row gap-2 items-center">
                {" "}
                <FaChartLine color="white" className="lg:text-2xl" /> รับดูแล SEO รายเดือน
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
