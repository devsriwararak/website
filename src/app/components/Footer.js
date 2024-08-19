import Image from "next/image";
import React from "react";
import { AiFillFacebook, AiFillPhone } from "react-icons/ai";
import { SiLine, SiTiktok } from "react-icons/si";
const Footer = () => {
  return (
    <>
      <div className="mt-20 ">
        <div className="px-6 md:px-16 mx-10   lg:mx-[300px] py-10 md:py-16 flex flex-col md:flex-row gap-4 justify-center items-center bg-gradient-to-r from-indigo-400  to-pink-200 rounded-xl">
          <div className="w-full lg:w-2/3  lg:pr-20 ">
            <h2 className="text-2xl md:text-3xl text-white font-semibold leading-normal">
              พัฒนาโปรแกรมสำหรับองค์กร และธุรกิจที่กำลังเติบโต
            </h2>
            <p className="text-gray-100 mt-4">
              ติดต่อให้คำปรึกษาก่อน-หลัง เขียนโปรแกรม ทำเว็บไซต์ ทำ SEO
              รายเดือนขอนแก่น ครบวงจร
            </p>

            <div className="flex flex-row gap-4 w-20 md:w-40 lg:w-28 mt-8">
              <Image
                src="https://devsriwararak.com/wp-content/uploads/2024/08/02.png"
                loading="lazy"
                width={200}
                height={200}
                className=" rounded-lg w-full  "
                alt=""
              />
              <Image
                src="https://devsriwararak.com/wp-content/uploads/2024/08/01.png"
                loading="lazy"
                width={200}
                height={200}
                className=" rounded-lg w-full "
                alt=""
              />
            </div>
            
          </div>

          <div className="w-full lg:w-1/3 -mb-28 flex justify-center ">
            <Image
              src="https://devsriwararak.com/wp-content/uploads/2024/08/18841273_5984708-removebg-preview.png"
              loading="lazy"
              width={300}
              height={300}
              className=" rounded-lg w-64 md:w-80 block "
              alt="ขอขอบคุณลูกค้า รับเขียนโปรแกรม รับทำเว็บไซต์"
            />
          </div>
        </div>
        

        <div className="  px-10 lg:px-36     mt-28 ">
          <div className="container mx-auto flex flex-col lg:flex-row gap-10">
            <div className="w-full">
              <h3 className="text-lg md:text-xl text-gray-600">DEV SRIWARARAK</h3>
              <p className="text-gray-400 mt-2 text-sm md:text-base">
                รับเขียนโปรแกรม รับออกแบบเว็บไซต์ ตามความต้องการของลูกค้า
                ทุกธุรกิจ ครบวงจร
              </p>
              <button className="bg-gradient-to-r from-indigo-500  to-pink-400 text-white px-10 py-1.5 rounded-full mt-5 hover:bg-purple-600">
                ติดต่อเรา
              </button>
            </div>

            <div className="w-full">
              <h3 className="text-lg md:text-xl text-gray-600">เมนู</h3>
              <ul className="text-gray-400 mt-2 text-sm md:text-base">
                <li>หน้าหลัก</li>
                <li>เกี่ยวกับเรา</li>
                <li>ผลงานที่ผ่านมา</li>
                <li>บทความ เขียนโปรแกรม</li>
                <li>ติดต่อเรา</li>
                <li className="py-1 bg-gradient-to-r from-indigo-500  to-purple-400 hover:bg-red-600 mt-2 text-white flex justify-center rounded-full cursor-pointer">
                  แบบฟอร์มจ้างงาน
                </li>
              </ul>
            </div>

            <div className="w-full">
              <h3 className="text-lg md:text-xl text-gray-600">ข่าวใหม่</h3>
              <ul className="text-gray-400 mt-2 text-sm md:text-base">
                <li>Next.js เวอร์ชั่นใหม่</li>
                <li>PERN STACK สอน</li>
                <li>สอนทำ SEO 2024</li>
                <li>สอนใช้ Astro Framework </li>
                <li>อัพเดทข่าวโปรแกรมเมอร์ 2024</li>
              </ul>
            </div>

            <div className="w-full">
              <h3 className="text-lg md:text-xl text-gray-600">Stack For Developer</h3>
              <ul className="text-gray-400 mt-2 text-sm md:text-base">
                <li>React.js / Next.js 14</li>
                <li>Node.js</li>
                <li>Python / Fast API</li>
                <li>Wordpress</li>
                <li>Html Css javascript</li>
              </ul>
            </div>

            <div className="w-full">
              <h3 className="text-lg md:text-xl text-gray-600">ติดต่อเรา</h3>
              <p className="text-gray-400 mt-2 text-sm md:text-base">test : khonkaen 40000</p>
              <a href="tel:0850032649" className="text-gray-400 text-sm md:text-base">
                โทรศัพท์ : 085-0032649
              </a>
              <p className="text-gray-400 text-sm md:text-base">tel : 0850032649</p>
              <p className="text-gray-400 text-sm md:text-base" >tel : 0850032649</p>
              <div
                className="flex flex-row gap-4 mt-4"
              >
                <AiFillFacebook size={26} className="rounded-full text-gray-600" />
                <AiFillPhone size={26} className="rounded-full text-gray-600"  />
                <SiLine size={26} className="rounded-full text-gray-600" />
                <SiTiktok size={26} className="rounded-full text-gray-600" />
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-purple-50 text-gray-600 py-4 text-center mt-10">
          web.devsriwararak.com รับเขียนโปรแกรม รับออกแบบเว็บไซต์ ขอนแก่น
        </div>
      </div>
    </>
  );
};

export default Footer;
