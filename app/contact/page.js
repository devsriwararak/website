import Image from "next/image";
import React from "react";
import { SiFacebook, SiLine, SiTiktok } from "react-icons/si";
import { FaMobileScreenButton } from "react-icons/fa6";
import Link from "next/link";

export const metadata = {
    title: "ติดต่อเรา รับเขียนโปรแกรม รับทำเว็บไซต์ SEO ขอนแก่น",
    description:
      "Dev Sriwararak รับออกแบบเขียนโปรแกรม และทำเว็บไซต์เพื่อการตลาดของทุกๆธรุกิจ ที่ต้องการสร้างความน่าเชื่อถือให้กับร้านค้าและบริการ",
    openGraph: {
      images:
        "https://devsriwararak.com/wp-content/uploads/2024/01/%E0%B8%94%E0%B8%B9%E0%B9%81%E0%B8%A5%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%82%E0%B8%B2%E0%B8%A2-%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1-%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99.webp",
    },
  };
  

const page = () => {
  return (
    <div>
      <div className="bg-purple-500 py-14 w-full">
        <div className="flex flex-col md:flex-row gap-4 px-10 md:mx-32 items-center ">
          <div className="w-full">
            <h1 className="text-2xl md:text-3xl text-white">ติดต่อเรา</h1>
            <p className="mt-2 text-gray-200">
              Dev Sriwararak รับออกแบบเขียนโปรแกรม และทำเว็บไซต์เพื่อการตลาดของ
              ทุกๆธรุกิจ ที่ต้องการสร้างความน่าเชื่อถือให้กับร้านค้าและบริการ
            </p>
          </div>
          <div className="w-full flex justify-center ">
            <Image
              src="https://devsriwararak.com/wp-content/uploads/2024/01/%E0%B8%A5%E0%B8%87%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%97%E0%B8%B3-%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1-%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99.webp"
              loading="lazy"
              width={200}
              height={130}
              alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
              className=""
            />
          </div>
        </div>
      </div>

      {/* card */}

      <div className="bg-white shadow-2xl mx-5 md:mx-40 py-10 px-10 -mt-10 rounded-lg flex flex-col lg:flex-row gap-4">
        <div className="w-full">
          <h3 className="text-lg">ช่องทางติดต่อ</h3>
          <ul className="text-base text-gray-800 mt-3">
            <Link href="https://www.facebook.com/dev.sriwararak" target="_bank">
              <li className="flex gap-2 ">
                {" "}
                <SiFacebook size={21} /> Facebook
              </li>
            </Link>

            <Link href="tel:0850032649">
              <li className="flex gap-2 mt-2">
                {" "}
                <FaMobileScreenButton size={21} /> 0850032649 (คุณนาย)
              </li>
            </Link>

            <Link href="https://line.me/ti/p/KMjKL3G9qz" target="_bank">
              <li className="flex gap-2 mt-2">
                {" "}
                <SiLine size={21} /> LINE ติดต่อสอบถาม
              </li>
            </Link>

            <Link href="https://www.tiktok.com/@dev_sriwararak" target="_bank">
            <li className="flex gap-2 mt-2 ">
              {" "}
              <SiTiktok size={21} /> Tiktok
            </li>
            </Link>

      

          </ul>
          
          <div className="mt-4">
          <small  >Tag : 
            <Link href='/' className="bg-gray-100 px-2 py-1 rounded-sm">รับเขียนโปรแกรม ขอนแก่น</Link>
            <Link href='/' className="bg-gray-100 px-2 py-1 rounded-sm">รับทำเว็บไซต์ SEO ขอนแก่น</Link>
            
            </small>

          </div>
        </div>

        <div className="w-full">
          <h3 className="text-lg">ส่งข้อความถึงเรา</h3>

          <input
            type="text"
            className="mt-3 px-3  py-1.5 rounded-lg  border border-gray-300 hover:bg-gray-100 "
            placeholder="email"
          />
          <input
            type="text"
            className="mt-3 px-3  py-1.5 rounded-lg  border border-gray-300 hover:bg-gray-100 "
            placeholder="ข้อความ"
          />

          <div>
            <button className="bg-purple-700 rounded-full text-white px-4 text-sm py-1.5 mt-3 hover:bg-purple-600">
              ส่งข้อความ
            </button>
          </div>
        </div>

        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122451.89499528571!2d102.73769009428068!3d16.444027413245077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3122602b91988e2f%3A0x93f0805cf799cc6!2z4LmA4LiX4Lio4Lia4Liy4Lil4LiZ4LiE4Lij4LiC4Lit4LiZ4LmB4LiB4LmI4LiZIOC4reC4s-C5gOC4oOC4reC5gOC4oeC4t-C4reC4h-C4guC4reC4meC5geC4geC5iOC4mSDguILguK3guJnguYHguIHguYjguJkgNDAwMDA!5e0!3m2!1sth!2sth!4v1704959255635!5m2!1sth!2sth"
            // width="600"
            // height="450"
            // style="border:0;"
           
            loading="lazy"
            className=" rounded-lg w-full h-48"
          ></iframe>
        </div>
      </div>
      
    </div>
  );
};

export default page;
