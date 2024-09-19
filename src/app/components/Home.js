import React, { lazy } from "react";
import Image from "next/image";
import { FaBeer, FaLaptopCode, FaChartLine } from "react-icons/fa";
import { AiFillFacebook, AiFillPhone } from "react-icons/ai";
import { FcComboChart } from "react-icons/fc";
import { SiLine, SiTiktok } from "react-icons/si";
import {
  MdOutlineQueuePlayNext,
  MdOutlineLocalGroceryStore,
} from "react-icons/md";

import {
  HiMiniCpuChip,
  HiMiniGlobeAsiaAustralia,
  HiMiniPresentationChartLine,
  HiMiniServerStack,
  HiMiniShieldExclamation,
  HiMiniUserGroup,
} from "react-icons/hi2";

import Link from "next/link";
import Accordion from "./Accordion";
import BannerSwiper from "./BannerSwiper";
import Prices from "./price/Prices";
import Carousel from "./carousel/Carousel";
import Thank from "./Thank";
import DisplayHome from "./display/DisplayHome";
import Intro from "./Intro";
import Step from "./Step";

const Home = () => {
  const scrollToTarget = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth", // เลื่อนอย่างเรียบเนียน
      });
    }
  };

  return (
    <div className="    ">
      {/* Hero Secction */}
      <div className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300 pt-32 lg:pt-48 pb-14 lg:pb-32  -mt-36 ">
        <div className="flex flex-col md:flex-row  gap-1  container mx-auto px-6 md:px-8  lg:px-32     ">
          <div className=" text-center lg:text-left  flex flex-col gap-3 lg:w-3/5 justify-start  lg:pr-20  tracking-widest   ">
            <p className="text-gray-200 font-semibold text-md text-left ">
              ปรึกษา เว็บไซต์สำหรับการตลาดฟรี
            </p>
            <h1 className=" text-3xl md:text-5xl text-white font-semibold leading-tight text-left   ">
              รับเขียนโปรแกรม ทำเว็บไซต์ SEO ขอนแก่น
            </h1>

            <p className="mt-1 text-gray-300 text-base   text-left pr-10">
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
                src="https://devsriwararak.com/wp-content/uploads/2024/04/รับเขียนโปรแกรมขอนแก่น-next-js.webp"
                loading="lazy"
                width={200}
                height={200}
                alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
                // layout="responsive"
                objectFit="cover"
                quality={75}
              />
            </div>

            <div className="w-full  rounded-2xl  -mb-20">
              <Image
                src="https://devsriwararak.com/wp-content/uploads/2024/08/18301793_5881558-removebg-preview.png"
                loading="lazy"
                width={600}
                height={600}
                alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
                // layout="responsive"
                objectFit="cover"
                quality={75}
              />
            </div>

            <div className="w-40 bg-white bg-opacity-30  rounded-xl skew-x-3  py-7 px-5 -ml-28 -mt-20 ">
              <Image
                src="https://devsriwararak.com/wp-content/uploads/2024/04/รับเขียนโปรแกรมขอนแก่น_docker_compose.webp"
                loading="lazy"
                width={300}
                height={300}
                alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
                // layout="responsive"
                objectFit="cover"
                quality={75}
              />
            </div>
          </div>
        </div>
      </div>

      {/* xxx */}
      <div className="  bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300 border-t-2 border-purple-200 ">
        <div className="bg-red-100 bg-opacity-20 px-4  lg:px-32 py-4    ">
          <ul className="flex flex-wrap lg:flex-row gap-2  lg:gap-10 justify-between md:justify-center  ">
            <li className="text-sm md:text-base lg:text-lg    text-gray-100 hover:bg-white hover:bg-opacity-25  py-2 px-4 rounded-lg  ">
              <Link
                href="/#web_1"
                className="flex flex-row gap-2 items-center transition duration-300 ease-in-out"
              >
                {" "}
                <MdOutlineQueuePlayNext color="white" size={25} />{" "}
                รับเขียนโปรแกรม
              </Link>
            </li>
            <li className="text-sm md:text-base lg:text-lg text-gray-100 hover:bg-white hover:bg-opacity-25  py-2 px-4 rounded-lg ">
              <Link href="/" className="flex flex-row gap-2 items-center">
                {" "}
                <MdOutlineLocalGroceryStore color="white" size={25} />{" "}
                รับทำเว็บไซต์สำเร็จรูป
              </Link>
            </li>
            <li className="text-sm md:text-base lg:text-lg  text-gray-100 hover:bg-white hover:bg-opacity-25  py-2 px-4 rounded-lg ">
              <Link href="/" className="flex flex-row gap-2 items-center">
                {" "}
                <FaLaptopCode color="white" size={25} /> รับทำเว็บไซต์ขนาดใหญ่
              </Link>
            </li>
            <li className="text-sm md:text-base lg:text-lg  text-gray-100 hover:bg-white hover:bg-opacity-25  py-2 px-4 rounded-lg ">
              <Link href="/" className="flex flex-row gap-2 items-center">
                {" "}
                <FaChartLine color="white" size={25} /> รับดูแล SEO รายเดือน
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/*  About Me section */}
      <section
        className="px-6 md:px-10 lg:px-32 py-10 container mx-auto  mt-6 md:mt-14    "
        id="web_1"
      >
        <h2 className="text-2xl md:text-3xl text-center">
          ออกแบบ{" "}
          <span className="text-purple-700 font-semibold">พัฒนาซอฟต์แวร์</span>{" "}
          ธุรกิจออนไลน์
        </h2>
        <p className="text-gray-500 mt-4 px-4 text-sm text-center">
          รับเขียนโปรแกรม รับทำเว็บไซต์ ขอนแก่น ให้เราดูแลคุณในการออกแบบ
          และพัฒนาซอฟต์แวร์สำหรับธุรกิจของคุณ ให้มีความแม่นยำ รวดเร็ว
          ติดต่อกับผู้ให้บริการที่ปลอดภัย
        </p>

        <Intro />
      </section>

      {/* Image detail */}
      <section className=" px-6 md:px-10 lg:px-32    container mx-auto">
        <h2 className="text-center text-xl lg:text-3xl">เดินหน้าธุรกิจออนไลน์ของคุณ ให้มีรายได้มากกว่าเดิม </h2>
        <p className="text-gray-500 text-center mt-3">  ดูแลและพัฒนาซอฟต์แวร์หน้าบ้าน-หลังบ้าน <b className="text-purple-600 font-semibold text-sm">จัดการระบบบริษัท</b> และองค์กรได้ง่ายขึ้น </p>
        <div className=" mt-4 ">
          {/* <img src="https://devsriwararak.com/wp-content/uploads/2024/09/Frame-1-1.webp" className="w-[1000px] object-cover "/> */}
          <Image
            src="https://devsriwararak.com/wp-content/uploads/2024/09/Frame-1-4.webp"
            width={500}
            height={500}
            alt="รับทำเว็บไซต์ ขอนแก่น"
            className=""
            layout="responsive"
          />
        </div>
      </section>

      {/* 4 ขั้นตอน  */}
      <section className=" bg-gradient-to-r from-indigo-300 via-purple-200 to-pink-200 py-10 md:py-20 mt-16 lg:mt-20  ">
        <div className="container mx-auto px-6 md:px-20 lg:px-32">
          <div className="bg-white bg-opacity-25 py-10 rounded-xl px-2 lg:px-6 ">
            <h2 className=" text-center text-xl  lg:text-3xl mx-10  md:mx-14 lg:mx-0">
              4 ขั้นตอนการจ้างงาน เขียนโปรแกรม รับทำเว็บไซต์ ขอนแก่น
            </h2>
            <p className="text-center mt-4 text-gray-500 text-sm lg:text-base px-10">
              สรุป 4 ขั้นตอนง่ายๆ เพื่อโปรแกรมที่สมบูรณ์ที่สุด
            </p>
            <Step />
          </div>
        </div>
      </section>

      {/* show mobile */}
      <h2 className=" mt-20 lg:mt-28 text-center text-2xl lg:text-3xl px-10 lg:px-0">
        ทำไมธุรกิจ{" "}
        <span className="font-semibold text-purple-700">สมัยใหม่</span>{" "}
        ต้องมีโปรแกรม หรือ เว็บไซต์ เป็นของตัวเอง ?
      </h2>
      <section className="flex flex-col md:flex-row gap-2 lg:gap-10  mt-10  container mx-auto px-10 lg:px-36  ">
        <div className=" w-full lg:w-2/3 flex flex-col items-center justify-center gap-10   ">
          <div className="flex  flex-row gap-4 ">
            <HiMiniPresentationChartLine className="" size={49} />
            <div>
              <h3 className=" text-base lg:text-lg ">1. ช่วยเพิ่มยอดขาย</h3>
              <p className="text-gray-500 text-sm  mt-1">
                ผู้คนจำนวนมากบนโลกออนไลน์ เห็นร้านค้าของคุณมากขึ้น
                ทำให้ผู้คนเข้ามาชมสินค้าในร้านมากขึ้น
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-4 ">
            <HiMiniServerStack className="" size={40} />
            <div>
              <h3 className="text-base lg:text-lg  ">2. จัดเก็บข้อมูลเป็นระบบ</h3>
              <p className="text-gray-500 text-sm mt-1">
                โปรแกรมจะจัดเก็บข้อมูลและเอกสารให้อย่างปลอดภัย
                สามารถค้นหาย้อนหลังได้ ไม่หายไปไหน
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-4 ">
            <HiMiniShieldExclamation className="" size={42} />
            <div>
              <h3 className="text-base lg:text-lg ">3. ลดการทำงานที่ซ้ำซ้อน</h3>
              <p className="text-gray-500 text-sm mt-1">
                โปรแกรมถูกตั้งคำสั่งให้ทำงานอย่างเป็นระบบ ตามที่ลูกค้าต้องการ
                ทำงานเสร็จเร็ว ไม่ทำงานซ้ำ{" "}
              </p>
            </div>
          </div>
        </div>
        <div className=" w-full md:w-2/3 lg:w-1/3 flex justify-center py-5 md:py-0  ">
          <Image
            src="https://devsriwararak.com/wp-content/uploads/2024/01/mobile.webp"
            width={150}
            height={80}
            loading="lazy"
            className="w-32 md:w-full"
            alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
            objectFit="cover"
            quality={75}
          />
        </div>
        <div className="w-full lg:w-2/3 flex flex-col items-center justify-center gap-10 ">
          <div className="flex flex-row gap-4 text-left md:text-right">
            <div>
              <h3 className="text-base lg:text-lg ">4. ออนไลน์ใช้งานได้ทุกที่</h3>
              <p className="text-gray-500 text-sm  mt-1">
                ผู้จัดการสามารถตรวจสอบยอดขาย หรือ
                ความเคลื่อนไหวของร้านค้าตัวเองได้จากที่ไหนก็ได้ ทุกที่ทุกเวลา
              </p>
            </div>
            <HiMiniGlobeAsiaAustralia size={42} />
          </div>

          <div className="flex flex-row gap-4 text-left md:text-right ">
            <div>
              <h3 className="text-base lg:text-lg">5. คำนวณแม่น ลดการผิดพลาด</h3>
              <p className="text-gray-500 text-sm  mt-1">
                พัฒนาโปรแกรมให้ทำงานถูกต้องแม่นยำ 100%
                ลดข้อผิดพลาดละหว่างการทำงาน ลดการใช้พนักงาน
              </p>
            </div>
            <HiMiniCpuChip size={49} />
          </div>

          <div className="flex flex-row gap-4 text-left md:text-right ">
            <div>
              <h3 className="text-base lg:text-lg">6. สร้างความน่าเชื่อถือ</h3>
              <p className="text-gray-500 text-sm  mt-1">
                เว็บไซต์สำหรับธุรกิจทำให้ลูกค้าที่มาใช้บริการได้รับความไว้วางใจ
                และเชื่อถือในความเป็นมืออาชีพของเรา
              </p>
            </div>
            <HiMiniUserGroup size={49} />
          </div>
        </div>
      </section>

      {/* carousel  bg-gradient-to-b from-transparent via-indigo-50 to-purple-50 */}
      <section className=" mt-10 md:mt-24  py-14 bg-gradient-to-b from-transparent via-indigo-50 to-purple-50     ">
        <div className="px-6 md:px-10 lg:px-36 container mx-auto ">
          <h2 className="text-2xl lg:text-3xl text-center  ">
            ผลงานรับทำเว็บไซต์ และรับเขียนโปรแกรม ที่ผ่านมา
          </h2>
          <p className="text-gray-600 text-center mt-4 text-sm lg:text-base ">
            สำหรับลูกค้าที่มีความชอบแนว มินิมอล ลักชูรี่ (Minimal luxury)
            เราพร้อมบริการ{" "}
            <span className="text-purple-700">
              รับเขียนโปรแกรม รับทำเว็บไซต์ SEO ขอนแก่น
            </span>
          </p>

          <div className="flex flex-col lg:flex-row gap-4 mt-10 items-center">
            <div className="w-full lg:w-2/3">
              <Carousel />
            </div>
            <div className="w-full lg:w-1/3  flex flex-col gap-4">
              <Image
                width={500}
                height={500}
                loading="lazy"
                src="https://devsriwararak.com/wp-content/uploads/2024/08/banner-1.webp"
                className=" rounded-lg w-full"
              />

              <Image
                width={500}
                height={500}
                loading="lazy"
                src="https://devsriwararak.com/wp-content/uploads/2024/01/%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99-%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%97%E0%B8%B3%E0%B9%80%E0%B8%A7%E0%B9%87%E0%B8%9A%E0%B9%84%E0%B8%8B%E0%B8%95%E0%B9%8C-%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99-1.webp"
                className=" rounded-lg w-full"
              />
            </div>
          </div>

          <div className="mt-10 shadow-lg rounded-md px-10 py-10 border border-gray-100 relative overflow-hidden ">
            <div
              className="absolute inset-0 "
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0)), url('https://devsriwararak.com/wp-content/uploads/2024/08/4959.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="relative flex flex-col lg:flex-row gap-8 px-0 md:px-12 lg:px-32 items-center ">
              <div className="w-full">
                <h3 className="text-xl">
                  เพิ่มความเชื่อถือ และผู้ช่วยในการทำงานให้ธุรกิจ
                </h3>
                <p className="mt-3 text-gray-500 text-sm">
                  Dev Sriwararak เรามีบริการรับทำเว็บไซต์รองรับ SEO
                  และออกแบบพัฒนาโปรแกรมสำหรับทุกธุรกิจ{" "}
                </p>
              </div>
              <div className="w-full">
                <Link
                  href="/review"
                  className=" bg-purple-800 hover:bg-purple-700 text-white px-6 py-2 rounded-md"
                >
                  ผลงานที่ผ่านมา
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ขอขอบคุณลูกค้าทุกท่าน */}
      <Thank />

      {/* 5 บทความยอดนิยม */}
      <DisplayHome />

      {/* FAQ */}
      <section className="mt-20 md:mt-32 container mx-auto px-6 md:px-10 lg:px-36">
        <h2 className="text-center text-xl lg:text-3xl">
          <span className="font-semibold text-purple-700">
            FAQ คำถามที่พบบ่อย
          </span>{" "}
          เกี่ยวกับการเขียนโปรแกรม และทำเว็บไซต์บริษัท
        </h2>

        <div className="flex flex-col lg:flex-row gap-4 justify-center mt-8 md:mt-16  ">
          <div className="w-full ">
            <Accordion />
          </div>

          <div className="w-full  block mt-4 ">
            <div className="flex justify-center items-center">
              <Image
                src="https://devsriwararak.com/wp-content/uploads/2023/09/dev_sriwararak-%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%97%E0%B8%B3%E0%B9%80%E0%B8%A7%E0%B9%87%E0%B8%9A%E0%B9%84%E0%B8%8B%E0%B8%95%E0%B9%8C-%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1-%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99.webp"
                loading="lazy"
                width={300}
                height={300}
                className=" rounded-lg w-64 md:w-80 block "
                alt="ขอขอบคุณลูกค้า รับเขียนโปรแกรม รับทำเว็บไซต์"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
