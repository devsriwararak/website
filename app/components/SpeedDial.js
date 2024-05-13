"use client";

import classname from "classname";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const SpeedDial = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div data-dial-init className="fixed end-6 bottom-6 group">
      <div
        id="speed-dial-menu-default"
        className={classname(
          open ? "flex" : "hidden",
          " flex-col items-center  mb-4 space-y-2"
        )}
      >
    
        <Link href={"https://line.me/ti/p/KMjKL3G9qz"} target="_blank">
          <Image
            src={"https://www.vectorlogo.zone/logos/line/line-official.svg"}
            loading="lazy"
            width={50}
            height={50}
            alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
            className=" cursor-pointer"
          />
        </Link>

        <div
          id="tooltip-share"
          role="tooltip"
          className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Share
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <Link href={"https://m.me/108441321397730"} target="_blank">
          <Image
            src={
              "https://www.vectorlogo.zone/logos/messenger/messenger-icon.svg"
            }
            loading="lazy"
            width={50}
            height={50}
            alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
            className=" cursor-pointer"
          />
        </Link>

        <div
          id="tooltip-print"
          role="tooltip"
          className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Print
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>

        <Link href={"tel:0850032649"}>
        <svg
          className="w-12  h-12 p-3 ring-1 ring-black text-gray-800 rounded-full dark:text-white bg-black  cursor-pointer"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 19 18"
        >
          <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
        </svg>
        </Link>

 
      </div>
      <button
        onClick={handleClick}
        type="button"
        data-dial-toggle="speed-dial-menu-default"
        aria-controls="speed-dial-menu-default"
        aria-expanded="false"
        className="flex items-center justify-center text-white bg-purple-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-purple-600 dark:hover:bg-purple-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-purple-100"
      >
        <svg
          className="w-5 h-5 transition-transform group-hover:rotate-45"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
        <span className="sr-only">ติดต่อเรา</span>
      </button>
    </div>
  );
};

export default SpeedDial;
