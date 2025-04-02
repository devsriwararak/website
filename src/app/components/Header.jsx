"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to open mobile menu
  const openMobileMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`fixed top-0 w-full transition-colors duration-300 z-50 ${
          pathname === "/"
            ? isScrolled
              ? "bg-white shadow-lg"
              : open
              ? "bg-white  "
              : " bg-transparent "
            : "bg-white shadow-lg"
        } `}
      >
        <div className=" container mx-auto py-3 px-10  lg:px-32  sm:py-5 lg:py-4 w-full ">
          <div className="flex justify-between items-center">
            <Link href="/">
              <p
                className={`${
                  pathname === "/"
                    ? isScrolled
                      ? "text-black "
                      : open
                      ? "text-black"
                      : "text-white"
                    : "text-black"
                }  font-semibold  text-xl`}
              >
                Thai Business Mate{" "}
              </p>
            </Link>
            <div className="hidden lg:flex">
              <ul
                className={`flex flex-row gap-4 items-center cursor-pointer ${
                  pathname === "/"
                    ? isScrolled
                      ? "text-gray-900"
                      : "text-white"
                    : "text-black"
                }`}
              >
                <li
                  className={` px-2 py-1.5 rounded-lg ${
                    pathname === "/"
                      ? isScrolled
                        ? "bg-purple-100  "
                        : " bg-purple-100 bg-opacity-50 text-purple-500"
                      : ""
                  }`}
                >
                  <Link href="/">หน้าหลัก</Link>
                </li>

                <li
                  className={` px-2 py-1.5 rounded-lg ${
                    pathname.startsWith("/about")
                      ? isScrolled
                        ? "bg-purple-100 "
                        : " bg-purple-100 bg-opacity-50 text-purple-500"
                      : ""
                  }`}
                >
                  <Link href="/about">เกี่ยวกับเรา</Link>
                </li>

                <li
                  className={` px-2 py-1.5 rounded-lg ${
                    pathname.startsWith("/pricing")
                      ? isScrolled
                        ? "bg-purple-100 "
                        : " bg-purple-100 bg-opacity-50 text-purple-500"
                      : ""
                  }`}
                >
                  <Link href="/pricing">บริการ/ราคา</Link>
                </li>

                <li
                  className={` px-2 py-1.5 rounded-lg ${
                     pathname.startsWith("/review")
                      ? isScrolled
                        ? "bg-purple-100 "
                        : " bg-purple-100 bg-opacity-50 text-purple-500"
                      : ""
                  }`}
                >
                  <Link href="/review">ผลงาน</Link>
                </li>

                <li
                  className={`hover:bg-purple-100 px-2 py-2 rounded-lg ${
                    pathname.startsWith("/blogs") ||
                    pathname.startsWith("/contents")
                      ? isScrolled
                        ? "bg-purple-100 "
                        : " bg-purple-100 bg-opacity-50 text-purple-500"
                      : ""
                  }`}
                >
                  <Link href="/blogs">บทความ</Link>
                </li>

                <li
                  className={`hover:bg-purple-100 px-2 py-2 rounded-lg ${
                    pathname.startsWith("/contact")  && "bg-purple-100 text-purple-500"
                  }`}
                >
                  <Link href="/contact">ติดต่อเรา</Link>
                </li>

                <li>
                  <button className="bg-purple-800 hover:bg-purple-700 text-white px-3 py-1 rounded-full">
                    ฟอร์มจ้างงาน
                  </button>
                </li>
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
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

              <Link href="/about" onClick={() => openMobileMenu()}>
                <li
                  className={`hover:bg-purple-100 px-2 py-2 rounded-lg ${
                    pathname.startsWith(`/about`)  && "bg-purple-200"
                  }`}
                >
                  เกี่ยวกับเรา
                </li>
              </Link>

              <Link href="/pricing" onClick={() => openMobileMenu()}>
                <li
                  className={`hover:bg-purple-100 px-2 py-2 rounded-lg ${
                    pathname.startsWith("/pricing") && "bg-purple-200"
                  }`}
                >
                  บริการ/ราคา
                </li>
              </Link>

              <Link href="/review" onClick={() => openMobileMenu()}>
                <li
                  className={`hover:bg-purple-100 px-2 py-2 rounded-lg ${
                    pathname.startsWith(`/review`)  && "bg-purple-200"
                  }`}
                >
                  ผลงาน
                </li>
              </Link>

              <Link href="/blogs" onClick={() => openMobileMenu()}>
                <li
                  className={`hover:bg-purple-100 px-2 py-2 rounded-lg ${
                    pathname.startsWith("/blogs") && "bg-purple-200"
                  }`}
                >
                  บทความ
                </li>
              </Link>

              <Link href="/contact" onClick={() => openMobileMenu()}>
                <li
                  className={`hover:bg-purple-100 px-2 py-2 rounded-lg ${
                    pathname.startsWith(`/contact`)  && "bg-purple-200"
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
      </header>
    </>
  );
};

export default Header;
