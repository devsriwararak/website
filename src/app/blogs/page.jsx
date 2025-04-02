
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { truncateText } from "../lib/Tool.js";
import AllBlogs from "./AllBlogs";

export const metadata = {
  manifest: "/manifest.json",
  title: "บทความ อัพเดทข่าวสารเรื่องโปรแกรมเมอร์ ที่คุณไม่ควรพลาด",
  description:
    "บทความ อัพเดทข่าวสารเรื่องโปรแกรมเมอร์ ตามทันข่าวเครื่องมือในการพัฒนาซอฟต์แวร์ฟีเจอร์ใหม่ๆ แนะนำสอนการเขียนโปรแกรมเบื้อต้น",
  keywords:
    "บทความรับเขียนโปรแกรม , บทความรับทำเว็บไซต์ , บทความอัพเดท seo  ",
  openGraph: {
    images:
      "/images/banner รับทำเว็บไซต์ ขอนแก่น 2.png",
  },
};

const page = () => {
  return (
    <div className="px-6   lg:px-36 container mx-aut">
      <h1 className="text-3xl ">บทความทั้งหมด</h1>
      <div className="mt-2">
        <AllBlogs />
      </div>

    </div>
  );
};

export default page;

// export const AllBlogs = () => {
//   return (
//     <OldPosts/>
//   );
// };
