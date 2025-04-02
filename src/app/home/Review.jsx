import Image from "next/image";
import React from "react";
import Carousel from "../components/Carousel";
import Link from "next/link";

const Review = () => {
  return (
    <section className=" mt-10 md:mt-24  py-14 bg-gradient-to-b from-transparent via-indigo-50 to-purple-50     ">
      <div className="px-6 md:px-10 lg:px-36 container mx-auto ">
        <h2 className="text-2xl lg:text-3xl text-center  ">
          ผลงาน รับทำเว็บไซต์ รับเขียนโปรแกรม
        </h2>
        <p className="text-gray-600 text-center mt-4 text-base lg:text-lg ">
          สำหรับลูกค้าที่มีความชอบแนว มินิมอล ลักชูรี่ (Minimal luxury)
          เราพร้อมบริการ{" "}
          <span className="text-purple-700">
            รับเขียนโปรแกรม รับทำเว็บไซต์ SEO ขอนแก่น
          </span>
        </p>

        <div className="flex flex-col lg:flex-row gap-4 mt-10 items-center">
          <div className="w-full lg:w-2/3">
            <Carousel />
          </div>
          <div className="w-full lg:w-1/3  flex flex-col gap-4">
            <Image
              width={500}
              height={500}
              loading="lazy"
              src="/images/thaibusinessmate_1.webp"
              className=" rounded-lg w-full"
              alt="รับเขียนโปรแกรม ขอนแก่น"
            />

            <Image
              width={500}
              height={500}
              loading="lazy"
              src="/images/thaibusinessmate_2.webp"
              alt="รับทำ seo รายเดือน ขอนแก่น"
            className=" rounded-lg w-full"
            />
          </div>
        </div>

        <div className="mt-10 shadow-lg rounded-md px-10 py-16 border border-gray-100 relative overflow-hidden ">
          <div
            className="absolute inset-0 "
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0)), url('/images/review_end.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="relative flex flex-col lg:flex-row gap-8 px-0 md:px-12 lg:px-32 items-center ">
            <div className="w-full">
              <h3 className="text-xl">
                เพิ่มความเชื่อถือ และผู้ช่วยในการทำงานให้ธุรกิจ
              </h3>
              <p className="mt-3 text-gray-500 text-base lg:text-lg">
                Thai Bussiness Mate เรามีบริการรับทำเว็บไซต์บริษัท รองรับ SEO
                และออกแบบพัฒนาโปรแกรมสำหรับทุกธุรกิจ{" "}
              </p>
            </div>
            <div className="w-full">
              <Link
                href="/review"
                className=" bg-purple-800 hover:bg-purple-700 text-white px-6 py-2 rounded-md"
              >
                ผลงานที่ผ่านมา
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
