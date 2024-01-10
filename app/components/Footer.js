import React from "react";
import { AiFillFacebook, AiFillPhone } from "react-icons/ai";
import { SiLine, SiTiktok } from "react-icons/si";
const Footer = () => {
  return (
<>
<div className="mt-20 bg-gray-600  px-16 py-24 text-white flex flex-col md:flex-row gap-10">
      <div className="w-full">
        <h3 className="text-xl">DEV SRIWARARAK</h3>
        <p className="text-gray-300 mt-2">รับเขียนโปรแกรม รับออกแบบเว็บไซต์ ตามความต้องการของลูกค้า ทุกธุรกิจ ครบวงจร</p>
        <button className="bg-purple-700 px-10 py-1.5 rounded-full mt-5 hover:bg-purple-600">ติดต่อเรา</button>
      </div>

      <div  className="w-full">
        <h3 className="text-xl">เมนู</h3>
       <ul className="text-gray-300 mt-2">
        <li>หน้าหลัก</li>
        <li>เกี่ยวกับเรา</li>
        <li>ผลงานที่ผ่านมา</li>
        <li>บทความ เขียนโปรแกรม</li>
        <li>ติดต่อเรา</li>
        <li className="py-1 bg-red-700 hover:bg-red-600 mt-2 text-white flex justify-center rounded-full cursor-pointer">แบบฟอร์มจ้างงาน</li>
       </ul>
      </div>

      <div  className="w-full">
        <h3 className="text-xl">ข่าวใหม่</h3>
       <ul className="text-gray-300 mt-2">
        <li>Next.js เวอร์ชั่นใหม่</li>
        <li>PERN STACK สอน</li>
        <li>สอนทำ SEO 2024</li>
        <li>สอนใช้ Astro Framework </li>
        <li>อัพเดทข่าวโปรแกรมเมอร์ 2024</li>
      
       </ul>
      </div>

      <div  className="w-full">
        <h3 className="text-xl">Stack For Developer</h3>
       <ul className="text-gray-300 mt-2">
        <li>React.js / Next.js 14</li>
        <li>Node.js</li>
        <li>Python / Fast API</li>
        <li>Wordpress</li>
        <li>Html Css javascript</li>
       </ul>
      </div>


      <div  className="w-full">
        <h3 className="text-xl">ติดต่อเรา</h3>
        <p className="text-gray-300 mt-2">test : khonkaen 40000</p>
        <a href="tel:0850032649" className="text-gray-300">โทรศัพท์ : 085-0032649</a>
        <p className="text-gray-300">tel : 0850032649</p>
        <p className="text-gray-300">tel : 0850032649</p>
        <div className="flex flex-row gap-4 mt-4
        
        ">
            <AiFillFacebook size={26} className="rounded-full"/>
            <AiFillPhone size={26} className="rounded-full"/>
            <SiLine size={26} className="rounded-full"/>
            <SiTiktok size={26} className="rounded-full"/>
        </div>
      </div>
    </div>
    <div className="bg-gray-800 text-white py-2 text-center">
        web.devsriwararak.com รับเขียนโปรแกรม รับออกแบบเว็บไซต์ ขอนแก่น
    </div>
</>
  );
};

export default Footer;
