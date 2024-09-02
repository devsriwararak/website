
import React from "react";
import data from "./data";
import Link from "next/link";
import AllContents from "./AllContents";
import Image from "next/image";
import { truncateText } from "../lib/Tool.js";
import OldPosts from "./OldPosts";

export const metadata = {
  manifest: "/manifest.json",
  title: "บทความ อัพเดทข่าวสารเรื่องโปรแกรมเมอร์ ที่คุณไม่ควรพลาด",
  description:
    "บทความ อัพเดทข่าวสารเรื่องโปรแกรมเมอร์ ตามทันข่าวเครื่องมือในการพัฒนาซอฟต์แวร์ฟีเจอร์ใหม่ๆ แนะนำสอนการเขียนโปรแกรมเบื้อต้น",
  keywords:
    "บทความรับเขียนโปรแกรม , บทความรับทำเว็บไซต์ , บทความอัพเดท seo  ",
  openGraph: {
    images:
      "https://devsriwararak.com/wp-content/uploads/2024/08/banner-1.webp",
  },
};

const page = () => {
  return (
    <div className="">
      <h1 className="text-3xl ">บทความทั้งหมด</h1>
      <div className="mt-2">
        <AllContents />
      </div>

      <div className="mt-14">
        <h2 className="text-2xl mb-4 ">บทความยอดนิยม</h2>
      <AllBlogs />
      </div>
    </div>
  );
};

export default page;

export const AllBlogs = () => {
  return (
    <OldPosts/>
  );
};
