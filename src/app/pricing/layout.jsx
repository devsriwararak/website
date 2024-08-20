'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useState } from "react";

export default function RootLayout({ children }) {
    const pathname = usePathname()

    const styleBtn =  (path)=> {
       return ` ${pathname === path ? "bg-purple-500 text-white" : ""} px-4  hover:bg-purple-300 hover:text-white py-1 rounded-md `
    }
  return (
    <div className="px-6 md:px-10 lg:px-14  container mx-auto ">
      <section className="flex flex-col lg:flex-row gap-3">

        <div className="w-full lg:w-2/12  ">
          <h1 className="text-lg">บริการของเรา  </h1>
          <ul className=" mt-4 py-7 flex flex-col gap-5 text-gray-700 text-sm  px-4 border-2 border-purple-100 rounded-md overflow-y-scroll h-28 md:h-96">
            <li>
              <Link className={styleBtn("/pricing/program")} href="/pricing/program">รับเขียนโปรแกรม</Link>
            </li>
            <li>
              <Link className={styleBtn("/pricing/website")} href="/pricing/website">รับทำเว็บไซต์ SEO</Link>
            </li>
          </ul>
        </div>

        <div className=" mt-4  md:mt-0 w-full lg:w-10/12  md:px-6 ">{children}</div>
      </section>
    </div>
  );
}
