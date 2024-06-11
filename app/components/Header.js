"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Function to open mobile menu
  const openMobileMenu = () => {
    setOpen(!open);
  };
  return (
    <div className="bg-white shadow-lg px-5 py-3 sm:px-20 sm:py-5 lg:py-4 w-full sticky top-0">
      <div className="flex justify-between items-center">
        <p className="font-semibold">DEV SRIWARARAK </p>
        <div className="hidden md:flex">
          <ul className="flex flex-row gap-4 items-center cursor-pointer">
            <Link href="/">
              <li
                className={`hover:bg-purple-100 px-2 py-2 rounded-lg ${
                  pathname === "/" && "bg-purple-100"
                }`}
              >
                หน้าหลัก
              </li>
            </Link>
            <Link href="/about">
              <li
                className={`hover:bg-purple-100 px-2 py-2 rounded-lg ${
                  pathname === "/about" && "bg-purple-100"
                }`}
              >
                เกี่ยวกับเรา
              </li>
            </Link>
            <Link href="/review">
              <li
                className={`hover:bg-purple-100 px-2 py-2 rounded-lg ${
                  pathname === "/review" && "bg-purple-100"
                }`}
              >
                ผลงาน
              </li>
            </Link>
            <li 
              className={`hover:bg-purple-100 px-2 py-2 rounded-lg ${
                pathname === "/blogs" && "bg-purple-200"
              }`}
            
            >
              <Link href="/blogs">บทความ</Link>
            </li>
            <Link href="/contact">
              <li
                className={`hover:bg-purple-100 px-2 py-2 rounded-lg ${
                  pathname === "/contact" && "bg-purple-100"
                }`}
              >
                ติดต่อเรา
              </li>
            </Link>

            <li>
              <button className="bg-purple-800 hover:bg-purple-700 text-white px-3 py-1.5 rounded-full">
                ฟอร์มจ้างงาน
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => openMobileMenu()}
            className="text-gray-600 hover:text-gray-800 focus:outline-none "
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        style={{ display: open ? "block" : "none" }}
        className="md:hidden mt-2 py-4 "
      >
        <ul className="flex flex-col gap-2 justify-start ">
          <Link href="/" onClick={() => openMobileMenu()}>
            <li
              className={`hover:bg-purple-100 px-2 py-2 rounded-lg ${
                pathname === "/" && "bg-purple-200"
              }`}
              
            >
              หน้าหลัก
            </li>
          </Link>

          <Link href="/about"  onClick={() => openMobileMenu()}>
            <li
              className={`hover:bg-purple-100 px-2 py-2 rounded-lg ${
                pathname === "/about" && "bg-purple-200"
              }`}
            >
              เกี่ยวกับเรา
            </li>
          </Link>

          <Link href="/review"  onClick={() => openMobileMenu()}>
            <li
              className={`hover:bg-purple-100 px-2 py-2 rounded-lg ${
                pathname === "/review" && "bg-purple-200"
              }`}
            >
              ผลงาน
            </li>
          </Link>

          <li 
            className={`hover:bg-purple-100 px-2 py-2 rounded-lg ${
              pathname === "/blogs" && "bg-purple-200"
            }`}
          >
            <Link href="/blogs">บทความ</Link></li>

          <Link href="/contact"  onClick={() => openMobileMenu()}>
            <li
              className={`hover:bg-purple-100 px-2 py-2 rounded-lg ${
                pathname === "/contact" && "bg-purple-200"
              }`}
            >
              ติดต่อเรา
            </li>
          </Link>

       
          <li>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1.5 rounded-full">
              แบบฟอร์มจ้างงาน
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
