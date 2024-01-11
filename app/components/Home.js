import React from "react";
// import banner from "../../public/images/banner.webp";
// import mobile from "../../public/images/mobile.webp";
// import logo from "../../public/images/dev_sriwararak-รับทำเว็บไซต์-รับเขียนโปรแกรม-ขอนแก่น.webp";
// เกี่ยวกับ
// import about_1 from "../../public/images/สอบถาม-ออกแบบ รับเขียนโปรแกรม ขอนแก่น.webp";
// import about_2 from "../../public/images/ลงมือทำ รับเขียนโปรแกรม ขอนแก่น.webp";
// import about_3 from "../../public/images/ส่งมอบงาน รับเขียนโปรแกรม ขอนแก่น.webp";
// import about_4 from "../../public/images/ดูแลหลังการขาย รับเขียนโปรแกรม ขอนแก่น.webp";
// ผลงานที่ผ่านมา
// import review_1 from "../../public/images/ผลงาน/ผลงานเขียนโปรแกรมศาลเจ้าขอนแก่น.webp";
// import review_2 from "../../public/images/ผลงาน/ผลงานรับทำเว็บไซต์ บริษัทอสังหาริมทรัพย์.webp";
// import review_3 from "../../public/images/ผลงาน/ผงานทำเว็บไซต์โรงน้ำแข็งที่ขอนแก่น.webp";
// import review_4 from "../../public/images/ผลงาน/ผลงานรับทำเว็บไซต์ ขอนแก่น บริษัทจำหน่ายอุปกรณ์ฟิตเนส.webp";
// import review_5 from "../../public/images/ผลงาน/ผลงานรับทำเว็บไซต์ ขอนแก่น เว็บขายเสื้อผ้าออนไลน์.webp";
// import review_6 from "../../public/images/ผลงาน/ผลงานรับทำเว็บไซต์ ขอนแก่น เว็บรับฝากสุนัข.webp";
// ขอขอบคุณลูกค้า
// import thankyou_1 from "../../public/images/ขอบคุณลูกค้า/ขอขอบคุณลูกค้า รับเขียนโปรแกรม ขอนแก่น 1.webp";
// import thankyou_2 from "../../public/images/ขอบคุณลูกค้า/ขอขอบคุณลูกค้า-รับเขียนโปรแกรม-ขอนแก่น-2.webp";
// import thankyou_3 from "../../public/images/ขอบคุณลูกค้า/ขอขอบคุณลูกค้า-รับเขียนโปรแกรม-ขอนแก่น-3.webp";
// import thankyou_4 from "../../public/images/ขอบคุณลูกค้า/ขอขอบคุณลูกค้า รับเขียนโปรแกรม ขอนแก่น 4.webp";

import Image from "next/image";
import { FaBeer } from "react-icons/fa";
import { AiFillFacebook, AiFillPhone } from "react-icons/ai";
import { FcComboChart } from "react-icons/fc";
import { SiLine, SiTiktok } from "react-icons/si";
import {
  HiComputerDesktop,
  HiMiniCpuChip,
  HiMiniGlobeAsiaAustralia,
  HiMiniPresentationChartLine,
  HiMiniServerStack,
  HiMiniShieldExclamation,
  HiMiniUserGroup,
} from "react-icons/hi2";

import Footer from "./Footer";
import Link from "next/link";
import Accordion from "./Accordion";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row  gap-1  bg-purple-200">
        {/* Hero Secction */}
        <div className="  px-10 md:px-16 lg:px-0 lg:pl-20  text-center lg:text-left py-16 md:py-20 flex flex-col gap-3 lg:w-3/4 justify-center ">
          <h1 className="text-2xl md:text-3xl lg:text-5xl   ">
            <span className="font-semibold  leading-relaxed ">
              DEV SRIWARARAK
            </span>{" "}
            รับเขียนโปรแกรม ทำเว็บไซต์ SEO ขอนแก่น{" "}
          </h1>

          <p className="mt-3">
            รับเขียนโปรแกรม ขอนแก่น และ รับทำเว็บไซต์ SEO ติด Google Search
            พัฒนาซอฟต์แวร์ วิเคราะห์ข้อมูลโดยทีมงานมืออาชีพ
            เหมาะสำหรับทุกธุรกิจที่กำลังเติบโต
          </p>
          <div className="flex flex-col justify-center lg:justify-normal md:flex-row gap-4 mt-5 ">
            <Link href="/contact">
              <button className="bg-purple-700 text-white px-6 py-2 rounded-full border border-purple-700 hover:bg-purple-200 hover:text-purple-700">
                ติดต่อเรา
              </button>
            </Link>

            <Link href="/review">
              <button className="bg-purple-200 text-purple-700 px-6 py-2 rounded-full border border-purple-700 hover:bg-purple-900 hover:text-white hover:border-white">
                ผลงานที่ผ่านมา
              </button>
            </Link>
          </div>
        </div>
        <div className=" hidden   w-2/4  lg:flex justify-center items-end    ">
          <div className="">
            <Image
              src="https://devsriwararak.com/wp-content/uploads/2024/01/%E0%B8%AA%E0%B8%AD%E0%B8%9A%E0%B8%96%E0%B8%B2%E0%B8%A1-%E0%B8%AD%E0%B8%AD%E0%B8%81%E0%B9%81%E0%B8%9A%E0%B8%9A-%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1-%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99.webp"
              loading="lazy"
              width={500}
              height={500}
              alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
              // layout="responsive"
              objectFit="cover"
              quality={75}
            />
          </div>
        </div>
      </div>

      {/*  About Me section */}

      <section className="flex flex-col lg:flex-row gap-4 mt-16 md:mt-20 py-0 px-10 md:px-20">
        <div className="w-full ">
          <h2 className="text-2xl lg:text-3xl">เกี่ยวกับเรา รับเขียนโปรแกรม</h2>
          <p className="text-gray-700 mt-2 text-sm lg:text-base">
            <b className="text-black">Dev Sriwararak</b> รับเขียน ออกแบบ โปรแกรม
            เว็บไซต์ ในรูปแบบออนไลน์
          </p>
          <p className="text-gray-700 ">
            สามารถสอบถามพูดคุยก่อนเริ่มงานได้ครับ
          </p>
          <div className="flex flex-row justify-center md:justify-start flex-wrap md:flex-row gap-2 mt-10">
            <Link
              href={"https://www.facebook.com/dev.sriwararak"}
              target="_blank"
            >
              <button className="flex gap-2 items-center bg-blue-700 px-5 py-1.5 rounded-lg text-white">
                {" "}
                <AiFillFacebook /> Facebook
              </button>
            </Link>
            <Link href={"tel:0850032649"}>
              <button className="flex gap-2 items-center bg-red-600 px-4 py-1.5 rounded-full text-white">
                {" "}
                <AiFillPhone /> โทรศัพท์
              </button>
            </Link>
            <Link href={"https://line.me/ti/p/KMjKL3G9qz"} target="_blank">
              <button className="flex gap-2 items-center bg-green-700 px-4 py-1.5 rounded-full text-white">
                {" "}
                <SiLine /> Line ติดต่อ
              </button>
            </Link>
            <Link
              href={"https://www.tiktok.com/@dev_sriwararak"}
              target="_blank"
            >
              <button className="flex gap-2 items-center bg-black px-4 py-1.5 rounded-full text-white">
                {" "}
                <SiTiktok /> Tiktok
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full hidden md:block">
          <p className="text-gray-700 mt-5 text-sm lg:text-base ">
            การเขียนโปรแกรม เป็นเครื่องมือสำคัญในการทำให้กิจการ
            ธุรกิจของลูกค้าเข้าสู่ยุคดิจิทัล (Industry 4.0) อย่างเต็มตัว
            โปรแกรมสามารถตรวจสอบข้อมูล และคำนวณได้อย่างแม่นยำ และเว็บไซต์
            ที่ติดอันดับจากการค้นหา Google Search หรือ SEO
            จะช่วยให้สินค้าถูกมองเห็นได้มากขึ้น ขายได้มากขึ้น
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-10 justify-between items-center ">
            <p className="text-2xl">คะแนน</p>
            <div>
              <p className="text-5xl font-semibold text-purple-700">10+</p>
              <p className="text-purple-600">ความพึงพอใจ</p>
            </div>
            <div>
              <p className="text-5xl font-semibold text-purple-700">20+</p>
              <p className="text-purple-600">ดูแลหลังการขาย</p>
            </div>
            <div>
              <p className="text-5xl font-semibold text-purple-700">30+</p>
              <p className="text-purple-600">ราคาสบายกระเป๋า</p>
            </div>
          </div>
        </div>
      </section>

      {/*  */}

      <div className="mt-20 bg-gray-200 py-20">
        <h2 className=" text-center text-2xl  lg:text-3xl mx-10  md:mx-14 lg:mx-0">
          4 ขั้นตอนการจ้างงาน เขียนโปรแกรม ทำเว็บไซต์ ขอนแก่น
        </h2>
        <p className="text-center mt-4 text-gray-700 text-sm lg:text-base">
          สรุปการจ้างงานกับ Dev Sriwararak 4 ขั้นตอน ดังนี้
        </p>

        <div className="flex flex-col md:flex-row   gap-0 mt-10 mx-14 lg:mx-20 ">
          <div className="w-full flex  flex-col gap-2 items-center  ">
            <Image
              src="https://devsriwararak.com/wp-content/uploads/2024/01/%E0%B8%AA%E0%B8%AD%E0%B8%9A%E0%B8%96%E0%B8%B2%E0%B8%A1-%E0%B8%AD%E0%B8%AD%E0%B8%81%E0%B9%81%E0%B8%9A%E0%B8%9A-%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1-%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99.webp"
              loading="lazy"
              width={200}
              height={130}
              alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
              objectFit="cover"
              quality={75}
            />
            <h3 className=" text-lg">1. สอบถาม-ออกแบบ</h3>
            <p className=" text-gray-700 text-center text-sm lg:text-base px-2 lg:px-5">
              แนะนำโปรแกรม - เว็บไซต์ ที่เหมาะสำหรับธุรกิจของลูกค้าแบบตรงจุด
            </p>
          </div>
          <div className=" w-full flex  flex-col gap-2 items-center">
            <Image
              src="https://devsriwararak.com/wp-content/uploads/2024/01/%E0%B8%A5%E0%B8%87%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%97%E0%B8%B3-%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1-%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99.webp"
              loading="lazy"
              width={200}
              height={130}
              alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
              objectFit="cover"
              quality={75}
            />
            <h3 className="text-center text-lg ">2. ลงมือทำ</h3>
            <p className="text-center text-gray-700 text-sm lg:text-base px-2 lg:px-5">
              เริ่มการพัฒนาโปรแกรมและเว็บไซต์ให้ตรงตามความต้องการของลูกค้า
            </p>
          </div>
          <div className=" w-full flex  flex-col gap-2 items-center">
            <Image
              src="https://devsriwararak.com/wp-content/uploads/2024/01/%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%A1%E0%B8%AD%E0%B8%9A%E0%B8%87%E0%B8%B2%E0%B8%99-%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1-%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99.webp"
              loading="lazy"
              width={200}
              height={130}
              alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
              objectFit="cover"
              quality={75}
            />
            <h3 className="text-center text-lg">3. ส่งมอบงาน</h3>
            <p className="text-center text-gray-700 text-sm lg:text-base px-2 lg:px-5">
              ส่งตรวจงานเป็นรอบๆ เพื่อปรับแก้ไขในส่วนที่ผิดพลาด ให้ถูกต้อง{" "}
            </p>
          </div>
          <div className=" w-full flex  flex-col gap-2 items-center">
            <Image
              src="https://devsriwararak.com/wp-content/uploads/2024/01/%E0%B8%94%E0%B8%B9%E0%B9%81%E0%B8%A5%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%82%E0%B8%B2%E0%B8%A2-%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1-%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99.webp"
              loading="lazy"
              width={200}
              height={130}
              alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
              objectFit="cover"
              quality={75}
            />
            <h3 className="text-center text-lg">4. ดูแลหลังการขาย</h3>
            <p className="text-center text-gray-700 text-sm lg:text-base px-2 lg:px-5">
              ซัพพอต ให้คำปรึกษา หลังการขาย หรือต้องการอัพเกรดระบบใหม่
            </p>
          </div>
        </div>
      </div>

      {/* show mobile */}

      <h2 className="mt-16 lg:mt-28 text-center text-2xl lg:text-3xl px-10 lg:px-0">
        ทำไมธุรกิจสมัยใหม่ต้องมีโปรแกรม หรือ เว็บไซต์ เป็นของตัวเอง ?
      </h2>

      <section className="flex flex-col md:flex-row gap-2 lg:gap-10 mx-10 lg:mx-20 mt-10  ">
        <div className=" w-full lg:w-2/3 flex flex-col items-center justify-center gap-10  ">
          <div className="flex  flex-row gap-4 ">
            <HiMiniPresentationChartLine size={49} />
            <div>
              <h3 className="text-base lg:text-xl">1. ช่วยเพิ่มยอดขาย</h3>
              <p className="text-gray-700 text-sm lg:text-base mt-1">
                ผู้คนจำนวนมากบนโลกออนไลน์ จะเห็นร้านค้าของคุณมากขึ้น
                ทำให้ผู้คนเหล่านั้นแวะเวียนเข้ามาชมสินค้าในร้านมากขึ้น
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-4 ">
            <HiMiniServerStack size={40} />
            <div>
              <h3 className="text-base lg:text-xl">2. จัดเก็บข้อมูลเป็นระบบ</h3>
              <p className="text-gray-700 text-sm lg:text-base mt-1">
                โปรแกรมจะจัดเก็บข้อมูลและเอกสารให้อย่างปลอดภัย
                สามารถค้นหาย้อนหลังได้ ไม่หายไปไหน
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-4 ">
            <HiMiniShieldExclamation size={42} />
            <div>
              <h3 className="text-base lg:text-xl">3. ลดการทำงานที่ซ้ำซ้อน</h3>
              <p className="text-gray-700 text-sm lg:text-base mt-1">
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
              <h3 className="text-base lg:text-xl">
                4. ออนไลน์ใช้งานได้ทุกที่
              </h3>
              <p className="text-gray-700 text-sm lg:text-base mt-1">
                ผู้จัดการสามารถตรวจสอบยอดขาย หรือ
                ความเคลื่อนไหวของร้านค้าตัวเองได้จากที่ไหนก็ได้ ทุกที่ทุกเวลา
              </p>
            </div>
            <HiMiniGlobeAsiaAustralia size={42} />
          </div>

          <div className="flex flex-row gap-4 text-left md:text-right ">
            <div>
              <h3 className="text-base lg:text-xl">
                5. คำนวณแม่น ลดการผิดพลาด
              </h3>
              <p className="text-gray-700 text-sm lg:text-base mt-1">
                โปรแกรมถูกตั้งคำสั่งให้ทำงานถูกต้องแม่นยำ 100%
                ทำให้ลดอาการผิดพลาดลงได้เยอะ ทำให้ธุรกิจเดินหน้าต่ออย่างรวดเร็ว
              </p>
            </div>
            <HiMiniCpuChip size={49} />
          </div>

          <div className="flex flex-row gap-4 text-left md:text-right ">
            <div>
              <h3 className="text-base lg:text-xl">6. สร้างความน่าเชื่อถือ</h3>
              <p className="text-gray-700 text-sm lg:text-base mt-1">
                เว็บไซต์สำหรับธุรกิจของตัวเอง
                จะทำให้ลูกค้าที่จะมาใช้บริการได้รับความไว้วางใจ
                และเชื่อถือในความเป็นมืออาชีพของเรา
              </p>
            </div>
            <HiMiniUserGroup size={49} />
          </div>
        </div>
      </section>

      {/* ผลงานที่ผ่านมทา */}
      <section className="mt-24 lg:mt-28 px-10">
        <h2 className="text-2xl lg:text-3xl text-center">
          ผลงานรับทำเว็บไซต์ และรับเขียนโปรแกรม ที่ผ่านมา
        </h2>
        <p className="text-gray-700 text-center mt-2 text-sm lg:text-base">
          รวบรวมผลงานเขียนโปรแกรม และ ออกแบบ รับทำเว็บไซต์ SEO กับ Dev
          Sriwararak
        </p>

        <div className="flex flex-row  gap-1 md:gap-4 md:mx-16  mt-2 md:mt-5">
          <div className="w-full">
            <Image
              src="https://devsriwararak.com/wp-content/uploads/2024/01/%E0%B8%9C%E0%B8%A5%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B8%A8%E0%B8%B2%E0%B8%A5%E0%B9%80%E0%B8%88%E0%B9%89%E0%B8%B2%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99.webp"
              loading="lazy"
              width={768}
              height={644}
              alt="ผลงานเขียนโปรแกรมศาลเจ้าขอนแก่น"
              objectFit="cover"
              quality={75}
            />
          </div>

          <div className="w-full">
            <Image
              src="https://devsriwararak.com/wp-content/uploads/2023/11/webport.webp"
              loading="lazy"
              width={768}
              height={644}
              alt="ผลงานรับทำเว็บไซต์ บริษัทอสังหาริมทรัพย์"
              objectFit="cover"
              quality={75}
            />
          </div>

          <div className="w-full">
            <Image
              src="https://devsriwararak.com/wp-content/uploads/2023/08/finalp.webp"
              loading="lazy"
              width={768}
              height={644}
              alt="ผงานทำเว็บไซต์โรงน้ำแข็งที่ขอนแก่น"
              objectFit="cover"
              quality={75}
            />
          </div>
        </div>

        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 md:mx-16 mt-5">
          <div className="w-full">
            <Image
              src="https://devsriwararak.com/wp-content/uploads/2023/09/fb-post-1.webp"
              loading="lazy"
              width={760}
              height={500}
              alt="ผลงานรับทำเว็บไซต์ ขอนแก่น บริษัทจำหน่ายอุปกรณ์ฟิตเนส"
              objectFit="cover"
              quality={75}
            />
          </div>

          <div className="w-full">
            <Image
              src="https://devsriwararak.com/wp-content/uploads/2023/08/fb-post.webp"
              loading="lazy"
              width={760}
              height={500}
              alt="ผลงานรับทำเว็บไซต์ ขอนแก่น เว็บขายเสื้อผ้าออนไลน์"
              objectFit="cover"
              quality={75}
            />
          </div>

          <div className="w-full">
            <Image
              src="https://devsriwararak.com/wp-content/uploads/2023/10/fb-post-2.webp"
              loading="lazy"
              width={760}
              height={500}
              alt="ผลงานรับทำเว็บไซต์ ขอนแก่น เว็บรับฝากสุนัข"
              objectFit="cover"
              quality={75}
            />
          </div>

          <div className="w-full">
            <Image
              src="https://devsriwararak.com/wp-content/uploads/2023/08/fb-post.webp"
              loading="lazy"
              width={760}
              height={500}
              alt="ผลงานรับทำเว็บไซต์ ขอนแก่น เว็บขายเสื้อผ้าออนไลน์"
              objectFit="cover"
              quality={75}
            />
          </div>
        </div>
      </section>

      <section className="mt-24 px-10">
        <h2 className="text-2xl lg:text-3xl text-center">
          ขอขอบคุณลูกค้าทุกท่าน
        </h2>
        <p className="text-gray-700 text-center mt-2 text-sm lg:text-base">
          ขอขอบพระคุณลูกค้าทุกท่าน ที่ไว้วางใขใช้บริการเขียนโปรแกรม
          และทำเว็บไซต์ที่ขอนแก่น กับ Dev Sriwararak
        </p>

        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 md:mx-16 mt-10">
          <div className="w-full">
            <Image
              src="https://devsriwararak.com/wp-content/uploads/2023/09/%E0%B8%A3%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%A7%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%84%E0%B9%89%E0%B8%B2-%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B8%82%E0%B8%AD%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99-%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%97%E0%B8%B3%E0%B9%80%E0%B8%A7%E0%B9%87%E0%B8%9A%E0%B9%84%E0%B8%8B%E0%B8%95%E0%B9%8C-%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99-1.webp"
              loading="lazy"
              width={760}
              height={500}
              alt="ขอขอบคุณลูกค้า รับเขียนโปรแกรม รับทำเว็บไซต์"
              objectFit="cover"
              quality={75}
            />
          </div>

          <div className="w-full">
            <Image
              src="https://devsriwararak.com/wp-content/uploads/2023/09/%E0%B8%A3%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%A7%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%84%E0%B9%89%E0%B8%B2-%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B8%82%E0%B8%AD%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99-%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%97%E0%B8%B3%E0%B9%80%E0%B8%A7%E0%B9%87%E0%B8%9A%E0%B9%84%E0%B8%8B%E0%B8%95%E0%B9%8C-%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99-2.webp"
              loading="lazy"
              width={760}
              height={500}
              alt="ขอขอบคุณลูกค้า รับเขียนโปรแกรม รับทำเว็บไซต์ "
              objectFit="cover"
              quality={75}
            />
          </div>

          <div className="w-full">
            <Image
              src="https://devsriwararak.com/wp-content/uploads/2024/01/%E0%B8%82%E0%B8%AD%E0%B8%82%E0%B8%AD%E0%B8%9A%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%84%E0%B9%89%E0%B8%B2-%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1-%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99-3.webp"
              loading="lazy"
              width={760}
              height={500}
              alt="ขอขอบคุณลูกค้า รับเขียนโปรแกรม รับทำเว็บไซต์"
              objectFit="cover"
              quality={75}
            />
          </div>

          <div className="w-full">
            <Image
              src="https://devsriwararak.com/wp-content/uploads/2024/01/%E0%B8%82%E0%B8%AD%E0%B8%82%E0%B8%AD%E0%B8%9A%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%84%E0%B9%89%E0%B8%B2-%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1-%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99-4.webp"
              loading="lazy"
              width={760}
              height={500}
              alt="ขอขอบคุณลูกค้า รับเขียนโปรแกรม รับทำเว็บไซต์"
              objectFit="cover"
              quality={75}
            />
          </div>
        </div>
      </section>

      <section className="mt-24 mx-10 md:mx-32">
        <h2 className="text-center text-2xl lg:text-3xl">
          FAQ คำถามที่พบบ่อย เกี่ยวกับการเขียนโปรแกรม และทำเว็บไซต์บริษัท
        </h2>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-12 ">
          <div className="w-full">
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
