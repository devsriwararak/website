"use client";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [clickMenu, setClickMenu] = useState(false);
  const handleClick = () => {
    setClickMenu(!clickMenu);
  };
  return (
    <div className="bg-red-500 py-6 px-36  border-b-0 z-20 shadow-md sticky top-0">
      <div className="flex md:flex-col-2 justify-between">
        <div>
          <p className="text-white text-2xl"> รีวิวหนัง สปอยหนังใหม่ ทุกแนว</p>
        </div>

        {/* tailwind css อยากให้ หมวดหมู่หนัง เป็น dropdrow list menu  */}

        {/* <div>
                <ul className='flex gap-3 text-white'>
                    <li>หน้าหลัก</li>
                    <li>หมวดหมู่หนัง</li>
                    <li>บทความ</li>
                    <li>ติดต่อเรา</li>
                </ul>
            </div> */}

        <div className="relative">
          <ul className="flex gap-6 text-white">
            <li>
                <Link href="/">หน้าหลัก</Link>
            </li>
            {/* ตำแหน่ง relative สำหรับองค์ประกอบแม่ */}
            <li className="relative group">
              {/* ตัวเลือก dropdown คำสั่งเปลี่ยน class */}
              <div className="cursor-pointer" onClick={handleClick}>
                หมวดหมู่หนัง
              </div>
              {/* รายการ dropdown */}
              <ul
                className={` ${
                  clickMenu ? `block` : `hidden`
                } w-56 px-4 py-2 absolute z-10 inset-x-0 mt-2 bg-white text-red-500 origin-top-right rounded-md`}
              >
                <li className="py-1 px-2 hover:bg-red-100 rounded-md">
                  Action
                </li>
                <li className="py-1 px-2 hover:bg-red-100 rounded-md">
                  Adventure
                </li>
                <li className="py-1 px-2 hover:bg-red-100 rounded-md">
                  Comedy
                </li>
                {/* เพิ่มรายการตามที่ต้องการ */}
              </ul>
            </li>
            <li><Link href="/blogs">บทความ</Link></li>
          
            <li><Link href="/contact">ติดต่อเรา</Link></li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
