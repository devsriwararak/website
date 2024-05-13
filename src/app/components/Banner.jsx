"use client";
import React, { useEffect, useState } from "react";

const Banner = () => {
  const [zIndex, setZIndex] = useState(50);

  useEffect(() => {
    const handleScroll = () => {
      // เมื่อ scroll ลงมาจากด้านบนเพิ่มค่า zIndex เป็น 0
      if (window.scrollY > 0) {
        setZIndex(0);
      } else {
        setZIndex(50);
      }
    };

    // เพิ่ม event listener เมื่อมีการ scroll
    window.addEventListener("scroll", handleScroll);

    // คืนฟังก์ชัน cleanup เพื่อลบ event listener เมื่อ component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const img =
    "https://img.freepik.com/free-vector/business-banner-with-space-your-text_1017-19582.jpg?t=st=1715421608~exp=1715425208~hmac=6587c4aad5a3aadc14fb2036f7356f51945076f849a1d8954695e7040d93241c&w=1380";
  const img_2 =
    "https://devsriwararak.com/wp-content/uploads/2024/05/2150063157-removebg-preview.png";
  return (
    <div className="flex flex-col md:flex-row gap-4 bg-red-500 bg-opacity-20 px-2 lg:px-20">
      <div className={`-mt-5 ${zIndex === 0 ? ` z-0` : `z-30`}`}>
        <img src={img_2} className="w-full object-cover" alt="xxxx" />
      </div>

      <div className="mx-10 py-10 flex flex-col justify-center">
        <h1 className="text-4xl font-semibold">รีวิวหนังใหม่ สปอยหนังดัง 2024</h1>
        <p className="mt-4">สวัสดี เช้าสวันเสาสวัสดีวันนี้มาเล่นเกมที่บ้านเพื่อนเลยแวะไปที่นั่นนี้ไปดื่มกาแฟร์</p>
        <div className="mt-8 flex flex-row gap-4">
          <button className="border-2 border-red-500 rounded-full px-4 py-3 text-red-600 font-semibold">หนังมาใหม่</button>
          <button className="border-2 border-red-500 bg-red-500 rounded-full px-4 py-3 text-white font-semibold">ติดต่อเรา ลงโฆษณา</button>
        </div>
      </div>

    
    </div>
  );
};

export default Banner;
