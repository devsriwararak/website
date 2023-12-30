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
            <button className="bg-purple-700 text-white px-6 py-2 rounded-full border border-purple-700 hover:bg-purple-200 hover:text-purple-700">
              ติดต่อเรา
            </button>
            <button className="bg-purple-200 text-purple-700 px-6 py-2 rounded-full border border-purple-700 hover:bg-purple-900 hover:text-white hover:border-white">
              ผลงานที่ผ่านมา
            </button>
          </div>
        </div>
        <div className=" hidden lg:block  w-2/4   ">
          <div className="flex justify-start ">
            <Image
              src={banner}
              loading="lazy"
              width={400}
              height={400}
              alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
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
              <SiLine /> Line ติดต่อ
            </button>
            <button className="flex gap-2 items-center bg-black px-4 py-1.5 rounded-full text-white">
              {" "}
              <SiTiktok /> Tiktok
            </button>
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
            <h2 className="text-2xl">คะแนน</h2>
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
              src={banner}
              loading="lazy"
              width={200}
              height={300}
              alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
            />
            <h3 className=" text-lg">1. สอบถาม-ออกแบบ</h3>
            <p className=" text-gray-700 text-center text-sm lg:text-base px-2 lg:px-5">
              แนะนำโปรแกรม - เว็บไซต์ ที่เหมาะสำหรับธุรกิจของลูกค้าแบบตรงจุด
            </p>
          </div>
          <div className=" w-full flex  flex-col gap-2 items-center">
            <Image
              src={banner}
              loading="lazy"
              width={200}
              height={300}
              alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
            />
            <h3 className="text-center text-lg">2. ลงมือทำ</h3>
            <p className="text-center text-gray-700 text-sm lg:text-base px-2 lg:px-5">
              เริ่มการพัฒนาโปรแกรมและเว็บไซต์ให้ตรงตามความต้องการของลูกค้า
            </p>
          </div>
          <div className=" w-full flex  flex-col gap-2 items-center">
            <Image
              src={banner}
              loading="lazy"
              width={200}
              height={300}
              alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
            />
            <h3 className="text-center text-lg">3. ส่งมอบงาน</h3>
            <p className="text-center text-gray-700 text-sm lg:text-base px-2 lg:px-5">
              ส่งตรวจงานเป็นรอบๆ เพื่อปรับแก้ไขในส่วนที่ผิดพลาด ให้ถูกต้อง{" "}
            </p>
          </div>
          <div className=" w-full flex  flex-col gap-2 items-center">
            <Image
              src={banner}
              loading="lazy"
              width={200}
              height={300}
              alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
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
            <SiTiktok size={40} />
            <div>
              <h3 className="text-base lg:text-xl">1. ช่วยเพิ่มยอดขาย</h3>
              <p className="text-gray-700 text-sm lg:text-base mt-1">
                ผู้คนจำนวนมากบนโลกออนไลน์ จะเห็นร้านค้าของคุณมากขึ้น
                ทำให้ผู้คนเหล่านั้นแวะเวียนเข้ามาชมสินค้าในร้านมากขึ้น
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-4 ">
            <SiTiktok size={40} />
            <div>
              <h3 className="text-base lg:text-xl">2. จัดเก็บข้อมูลเป็นระบบ</h3>
              <p className="text-gray-700 text-sm lg:text-base mt-1">
                โปรแกรมจะจัดเก็บข้อมูลและเอกสารให้อย่างปลอดภัย
                สามารถค้นหาย้อนหลังได้ ไม่หายไปไหน
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-4 ">
            <SiTiktok size={40} />
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
            src={mobile}
            loading="lazy"
            className="w-32 md:w-full"
            alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
          />
        </div>
        <div className="w-full lg:w-2/3 flex flex-col items-center justify-center gap-10 ">
          <div className="flex flex-row gap-4 text-right">
            <div>
              <h3 className="text-base lg:text-xl">
                4. Online ใช้งานได้ทุกที่
              </h3>
              <p className="text-gray-700 text-sm lg:text-base mt-1">
                ผู้จัดการสามารถตรวจสอบยอดขาย หรือ
                ความเคลื่อนไหวของร้านค้าตัวเองได้จากที่ไหนก็ได้ ทุกที่ทุกเวลา
              </p>
            </div>
            <SiTiktok size={40} />
          </div>

          <div className="flex flex-row gap-4 text-right ">
            <div>
              <h3 className="text-base lg:text-xl">
                5. คำนวณแม่น ลดการผิดพลาด
              </h3>
              <p className="text-gray-700 text-sm lg:text-base mt-1">
                โปรแกรมถูกตั้งคำสั่งให้ทำงานถูกต้องแม่นยำ 100%
                ทำให้ลดอาการผิดพลาดลงได้เยอะ ทำให้ธุรกิจเดินหน้าต่ออย่างรวดเร็ว
              </p>
            </div>
            <SiTiktok size={40} />
          </div>

          <div className="flex flex-row gap-4 text-right ">
            <div>
              <h3 className="text-base lg:text-xl">6. สร้างความน่าเชื่อถือ</h3>
              <p className="text-gray-700 text-sm lg:text-base mt-1">
                เว็บไซต์สำหรับธุรกิจของตัวเอง
                จะทำให้ลูกค้าที่จะมาใช้บริการได้รับความไว้วางใจ
                และเชื่อถือในความเป็นมืออาชีพของเรา
              </p>
            </div>
            <SiTiktok size={40} />
          </div>
        </div>
      </section>

      {/* ผลงานที่ผ่านมทา */}
      <section className="mt-24 lg:mt-28 px-10">
        <h2 className="text-2xl lg:text-3xl text-center">
          ผลงานรับทำเว็บไซต์ และรับเขียนโปรแกรม ที่ผ่านมา
        </h2>
        <p className="text-gray-700 text-center mt-2 text-sm lg:text-base">
          ขอขอบพระคุณลูกค้าทุกท่าน ที่ไว้วางใขใช้บริการเขียนโปรแกรม
          และทำเว็บไซต์ที่ขอนแก่น กับ Dev Sriwararak
        </p>
        <div className="flex flex-row gap-1 md:gap-4 md:mx-16 mt-10">
          <div className="w-full">
            <Image
              src={review_1}
              loading="lazy"
              width={400}
              height={400}
              alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
            />
          </div>

          <div className="w-full">
            <Image
              src={review_2}
              loading="lazy"
              width={400}
              height={400}
              alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
            />
          </div>

          <div className="w-full">
            <Image
              src={review_1}
              loading="lazy"
              width={400}
              height={400}
              alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
            />
          </div>

          <div className="w-full">
            <Image
              src={review_2}
              loading="lazy"
              width={400}
              height={400}
              alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
            />
          </div>
        </div>

        <div className="flex flex-row  gap-1 md:gap-4 md:mx-16  mt-2 md:mt-5">
          <div className="w-full">
            <Image
              src={review_2}
              loading="lazy"
              width={400}
              height={400}
              alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
            />
          </div>

          <div className="w-full">
            <Image
              src={review_1}
              loading="lazy"
              width={400}
              height={400}
              alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
            />
          </div>

          <div className="w-full">
            <Image
              src={review_2}
              loading="lazy"
              width={400}
              height={400}
              alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
            />
          </div>

          <div className="w-full">
            <Image
              src={review_1}
              loading="lazy"
              width={400}
              height={400}
              alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
