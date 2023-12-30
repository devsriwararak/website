'use client'

import React, { useState } from "react";

const Header = () => {

  const [open, setOpen] = useState(false);

  // Function to open mobile menu
  const openMobileMenu = () => {
    setOpen(!open);
  };
  return (

    <div className="bg-white shadow-lg px-5 py-3 sm:px-20 sm:py-5 w-full sticky top-0">
      <div className="flex justify-between items-center">
        <p className="font-semibold">DEV SRIWARARAK</p>
        <div className="hidden sm:flex">
          <ul className="flex flex-row gap-4 items-center cursor-pointer">
            <li className="hover:bg-purple-50 px-2 py-2 rounded-lg">หน้าหลัก</li>
            <li className="hover:bg-purple-50 px-2 py-2 rounded-lg">เกี่ยวกับเรา</li>
            <li className="hover:bg-purple-50 px-2 py-2 rounded-lg">ผลงาน</li>
            <li className="hover:bg-purple-50 px-2 py-2 rounded-lg">บทความ</li>
            <li className="hover:bg-purple-50 px-2 py-2 rounded-lg">ติดต่อเรา</li>
            <li>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1.5 rounded-full">แบบฟอร์มจ้างงาน</button>
            </li>
          </ul>
        </div>

        {JSON.stringify(open)}
        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button
            x-data="{ open: false }"
            onClick={() => openMobileMenu}
            className="text-gray-600 hover:text-gray-800 focus:outline-none "
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
  
      {/* Mobile Menu */}
      <div style={{ display: open ? "block" : "none" }} className="sm:hidden mt-2">
        <ul className="flex flex-col gap-2 items-center">
          <li className="hover:bg-purple-50 px-2 py-2 rounded-lg">หน้าหลัก</li>
          <li className="hover:bg-purple-50 px-2 py-2 rounded-lg">เกี่ยวกับเรา</li>
          <li className="hover:bg-purple-50 px-2 py-2 rounded-lg">ผลงาน</li>
          <li className="hover:bg-purple-50 px-2 py-2 rounded-lg">บทความ</li>
          <li className="hover:bg-purple-50 px-2 py-2 rounded-lg">ติดต่อเรา</li>
          <li>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1.5 rounded-full">แบบฟอร์มจ้างงาน</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
