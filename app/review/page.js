import React from "react";
// import logo from "../../public/images/dev_sriwararak-รับทำเว็บไซต์-รับเขียนโปรแกรม-ขอนแก่น.webp";
// import banner from "../../public/images/banner.webp";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "ผลงานรับเขียนโปรแกรม และรับทำเว็บไซต์ที่ผ่านมา",
  description:
    "ขอขอบพระคุณลูกค้าทุกท่านที่ไว้วางใจจ้างเขียนโปรแกรม และทำเว็บไซต์ SEO ขอนแก่นกับเรา",
  openGraph: {
    images:
      "https://devsriwararak.com/wp-content/uploads/2024/01/%E0%B8%94%E0%B8%B9%E0%B9%81%E0%B8%A5%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%82%E0%B8%B2%E0%B8%A2-%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1-%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99.webp",
  },
};

const page = () => {
  return (
    <div className="     md:px-20">
      <h1 className="text-2xl md:text-3xl text-center px-8 mt-12">
        ผลงานรับเขียนโปรแกรม และรับทำเว็บไซต์ที่ผ่านมา
      </h1>

      <div className=" mx-14 md:mx-20 py-8">
        <p className="text-gray-800 ">
          <strong>
            {" "}
            ขอขอบพระคุณลูกค้าทุกท่านที่ไว้วางใจจ้างเขียนโปรแกรม และทำเว็บไซต์
            SEO ขอนแก่นกับเรา
          </strong>{" "}
          ขอแนะนำเว็บไซต์ และโปรแกรม สำหรับธุรกิจขายสินค้าและบริการทั่วประเทศไทย
          ใช้งานออนไลน์ควบคุมได้ง่าย เหมาะสำหรับทุกๆ ธุรกิจที่กำลังเติบโตที่นี้ <Link href="/">รับเขียนโปรแกรม ขอนแก่น</Link>{" "}
        </p>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <h3 className="mt-8 text-xl">
            ผลงานทำเว็บไซต์ SEO ( ติดอันดับ Google Search )
          </h3>

    
          <div className="flex flex-row gap-2 mt-5 md:md-0">
            <Link href="/contact">
              <button className="bg-purple-700 text-sm hover:bg-purple-600 text-white rounded-full px-5 py-1.5">
                ติดต่อเรา
              </button>
            </Link>
            <Link href="/review">
              <button className="bg-gray-800 text-sm hover:bg-gray-700 text-white rounded-full px-5 py-1.5">
                ผลงานที่ผ่านมา
              </button>
            </Link>
          </div>

        </div>

        <div className="flex flex-row  gap-1 md:gap-4  mt-6">
          <div className="w-full ">
            <Image
              src="https://devsriwararak.com/wp-content/uploads/2024/01/%E0%B8%9C%E0%B8%A5%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B8%A8%E0%B8%B2%E0%B8%A5%E0%B9%80%E0%B8%88%E0%B9%89%E0%B8%B2%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99.webp"
              loading="lazy"
              width={760}
              height={500}
              alt="ผลงานเขียนโปรแกรมศาลเจ้าขอนแก่น"
              className="rounded-md"
            />
          </div>

          <div className="w-full">
            <Image
              src="https://devsriwararak.com/wp-content/uploads/2023/11/webport.webp"
              loading="lazy"
              width={760}
              height={500}
              alt="ผลงานรับทำเว็บไซต์ บริษัทอสังหาริมทรัพย์"
              className="rounded-md"
            />
          </div>

          <div className="w-full">
            <Image
              src="https://devsriwararak.com/wp-content/uploads/2023/08/finalp.webp"
              loading="lazy"
              width={760}
              height={500}
              alt="ผงานทำเว็บไซต์โรงน้ำแข็งที่ขอนแก่น"
              className="rounded-md"
            />
          </div>
        </div>

        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4  mt-5">
          <div className="w-full">
            <Image
              src="https://devsriwararak.com/wp-content/uploads/2023/09/fb-post-1.webp"
              loading="lazy"
              width={760}
              height={500}
              alt="ผลงานรับทำเว็บไซต์ ขอนแก่น บริษัทจำหน่ายอุปกรณ์ฟิตเนส"
              className="rounded-md"
            />
          </div>

          <div className="w-full">
            <Image
              src="https://devsriwararak.com/wp-content/uploads/2023/08/fb-post.webp"
              loading="lazy"
              width={760}
              height={500}
              alt="ผลงานรับทำเว็บไซต์ ขอนแก่น เว็บขายเสื้อผ้าออนไลน์"
              className="rounded-md"
            />
          </div>

          <div className="w-full">
            <Image
              src="https://devsriwararak.com/wp-content/uploads/2023/10/fb-post-2.webp"
              loading="lazy"
              width={760}
              height={500}
              alt="ผลงานรับทำเว็บไซต์ ขอนแก่น เว็บรับฝากสุนัข"
              className="rounded-md"
            />
          </div>

          <div className="w-full">
            <Image
              src="https://devsriwararak.com/wp-content/uploads/2024/01/devich.webp"
              loading="lazy"
              width={500}
              height={500}
              alt="ผลงานรับทำเว็บไซต์ ขอนแก่น เว็บขายเสื้อผ้าออนไลน์"
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
