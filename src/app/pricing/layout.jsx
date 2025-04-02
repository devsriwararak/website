"use client";
import Link from "next/link";
import { usePathname, useRouter  } from "next/navigation";
import { useState } from "react";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter()

  const menu = [
    { name: "รับเขียนโปรแกรม", path: "/pricing/program" },
    { name: "รับทำเว็บไซต์ ทุกธุรกิจ", path: "/pricing/website" },
    { name: "ดูแล SEO รายเดือน", path: "/pricing/seo" },
  ];

  const mobileOnChange = (link)=> {
    return router.push(link)
    
  }


  return (
    <div className="px-6 md:px-10 lg:px-14  container mx-auto ">
      <section className="flex flex-col lg:flex-row gap-3">
        <div className="w-full lg:w-2/12    ">
          <p className="text-lg">บริการของเรา </p>

          
          <div className="lg:hidden block py-6">
            <select className="bg-gray-100 border border-gray-300 py-2 rounded-md px-4 w-full" onChange={(e)=>mobileOnChange(e.target.value)} >
              {menu.map((item,index)=> (
                <option key={index}  value={item.path}>{item.name}</option>
              ))}
            </select>

          </div>
          <ul className=" mt-4   flex-col gap-0 text-gray-700 text-sm     rounded-md overflow-y-scroll h-28 md:h-60 hidden lg:flex">
            {menu.map((item, index) => (
              <div key={index}>
                <li
                  className={`${
                    pathname.startsWith(item.path)
                      ? "bg-gradient-to-r from-indigo-400 via-purple-400 to-purple-200  text-white"
                      : ""
                  } hover:bg-purple-200 hover:text-white py-3 text-base`}
                >
                  <Link className=" px-4  " href={item.path}>
                    {item.name}
                  </Link>
                </li>
                <hr className="px-4" />
              </div>
            ))}
          </ul>
        </div>

        <div className=" mt-4  md:mt-0 w-full lg:w-10/12  md:px-2 ">
          {children}
        </div>
      </section>
    </div>
  );
}
