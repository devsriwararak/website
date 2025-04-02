import React from "react";
import Image from "next/image";
import Link from "next/link";
import { data } from "./data.js";

export const metadata = {
  title: "ผลงานรับเขียนโปรแกรม และรับทำเว็บไซต์ที่ผ่านมา",
  description:
    "ขอขอบพระคุณลูกค้าทุกท่านที่ไว้วางใจจ้างงานเขียนและพัฒนาโปรแกรมรับทำเว็บไซต์ SEO ขอนแก่นกับเรา ให้บริการออกแบบและพัฒนาเว็บไซต์สมัยใหม่",
  keywords: "ผลงานรับเขียนโปรแกรม และรับทำเว็บไซต์ที่ผ่านมา",
  robots: "index, follow",
  alternates: {
    canonical: "https://web.thaibusinessmate.com/review",
  },
  openGraph: {
    title: "ผลงานรับเขียนโปรแกรม และรับทำเว็บไซต์ที่ผ่านมา",
    description:
      "ขอขอบพระคุณลูกค้าทุกท่านที่ไว้วางใจจ้างงานเขียนและพัฒนาโปรแกรมรับทำเว็บไซต์ SEO ขอนแก่นกับเรา ให้บริการออกแบบและพัฒนาเว็บไซต์สมัยใหม่",
    url: "https://web.thaibusinessmate.com/review",
    images: [
      {
        url: "https://web.thaibusinessmate.com/images/review_3.webp",
        width: 800,
        height: 600,
        alt: "ผลงานรับเขียนโปรแกรม และรับทำเว็บไซต์ที่ผ่านมา",
      },
    ],
    siteName: "ผลงานรับเขียนโปรแกรม และรับทำเว็บไซต์ที่ผ่านมา",
    locale: "th_TH",
    type: "website",
  },
};

const Page = () => {
  return (
    <div className="px-6   lg:px-36 container mx-auto">
      <h1 className="text-xl md:text-3xl text-left lg:text-center  mt-12">
        ผลงานรับเขียนโปรแกรม และรับทำเว็บไซต์ที่ผ่านมา
      </h1>

      <div className="  py-8">
        <p className="text-gray-600  text-base lg:text-lg">
          <strong className=" font-semibold">
            {" "}
            ขอขอบพระคุณลูกค้าทุกท่านที่ไว้วางใจจ้างเขียนโปรแกรม และทำเว็บไซต์
            SEO ขอนแก่นกับเรา
          </strong>{" "}
          เว็บไซต์ และโปรแกรมสำหรับธุรกิจขายสินค้าและบริการทั่วประเทศไทย
          ใช้งานออนไลน์ควบคุมได้ง่าย เหมาะสำหรับธุรกิจที่กำลังเติบโต{" "}
          <Link href="/">รับเขียนโปรแกรม ขอนแก่น</Link>{" "}
        </p>

        <div className="flex flex-col lg:flex-row justify-between items-center mt-4">
          <h3 className="mt-8 text-base lg:text-lg ">
            ผลงานทำเว็บไซต์ SEO ( ติดอันดับ Google Search )
            และพัฒนาซอฟต์แวร์เฉพาะธุรกิจ
          </h3>

          <div className="flex flex-row gap-2 mt-5 md:md-0">
            <Link
              href="/contact"
              className="bg-purple-700 text-sm hover:bg-purple-600 text-white rounded-full px-5 py-1.5"
            >
              ติดต่อเรา
            </Link>
            <Link
              href="/pricing"
              className="bg-gray-800 text-sm hover:bg-gray-700 text-white rounded-full px-5 py-1.5"
            >
              ราคาค่าบริการ
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap mt-5">
          {data.map((item, index) => (
            <div className="w-full md:w-1/2 lg:w-1/3 py-2 px-2" key={item.id}>
              <div className="bg-white shadow-lg rounded-md border border-gray-100">
                <div className=" relative w-full h-56">
                  <Image
                    src={item.image}
                    loading="lazy"
                    alt={item.alt}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out transform hover:scale-90"
                  />
                </div>
                <div className="px-4 py-4">
                  <p className="  text-sm mb-2"> {item.alt}</p>
                  {item.link ? (
                    <Link
                      target="_bank"
                      href={item.link}
                      className="text-xs  text-purple-600 bg-purple-100 hover:bg-purple-200 w-fit px-4 py-1 rounded-full"
                    >
                      คลิกดูเว็บไซต์
                    </Link>
                  ) : (
                    <p className="text-xs mt-2 text-red-700 bg-red-100 w-fit px-4 py-1 rounded-full">
                      ไม่พบข้อมูล
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
