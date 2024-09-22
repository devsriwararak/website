"use client";
import React from "react";
import { FcOk, FcCancel } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const data = [
  {
    id: 0,
    header: "",
    title: "เว็บไซต์หน้าเดียว (landing page)",
    dec: "ระยะเวลา 3 วัน สำหรับเว็บไซต์ขนาดเล็ก",
    price_start: "เริ่มต้นที่ 6,500 บาท",
    price: "เริ่มต้นที่ 6,000 บาท",
    discount: "ประหยัด 8%",
    result: [
      { id: 0, status: false, title: "ออกแบบเฉพาะหน้าหลัก" },
      { id: 1, status: false, title: "ลงสินค้า ตะกร้าสินค้า " },
      { id: 2, status: true, title: "ลงบทความสำหรับทำ (SEO)" },
      { id: 3, status: false, title: "รองรับการใช้งาน 2 ภาษา TH ENG" },
      { id: 4, status: true, title: "จูน Performance SEO + ความเร็วเว็บ" },
      { id: 5, status: true, title: "ติดตั้ง SSL เพิ่มความปลอดภัย" },
      { id: 6, status: false, title: "ระบบจัดการหลังบ้าน 100%" },
      { id: 7, status: true, title: "ดูกราฟ GSC, GA วิเคาะห์ยอดขาย" },
      { id: 8, status: false, title: "ดูรายงานยอดขายได้" },
      { id: 9, status: true, title: "ใช้งานได้ทุกขนาดหน้าจอ" },
      { id: 10, status: true, title: "ดูแล 6 เดือน - 1 ปี หรือตามตกลง" },
      { id: 11, status: false, title: "คู่มือสอนแก้ไข จุดที่แก้ไขได้เอง" },
      { id: 12, status: true, title: "ต่ออายุ 2,000 บาท/ปี" },
    ],
  },
  {
    id: 1,
    header: "แพคเกจยอดนิยม",
    title: "เว็บไซต์ 5 หน้า (เพิ่มความน่าเชื่อถือ)",
    dec: "ระยะเวลาไม่เกิน 2 อาทิตย์ (หลังคอนเฟิร์มแบบ)",
    price_start: "เริ่มต้นที่ 15,000 บาท",
    price: "เริ่มต้นที่ 13,000 บาท ",
    discount: "ประหยัด 13%",
    result: [
      { id: 0, status: true, title: "ออกแบบเฉพาะหน้าหลัก" },
      { id: 1, status: false, title: "ลงสินค้า ตะกร้าสินค้า " },
      { id: 2, status: true, title: "ลงบทความสำหรับทำ (SEO)" },
      { id: 3, status: true, title: "รองรับการใช้งาน 2 ภาษา TH ENG" },
      { id: 4, status: true, title: "จูน Performance SEO + ความเร็วเว็บ" },
      { id: 5, status: true, title: "ติดตั้ง SSL เพิ่มความปลอดภัย" },
      { id: 6, status: true, title: "ระบบจัดการหลังบ้าน 100%" },
      { id: 7, status: true, title: "ดูกราฟ GSC, GA วิเคาะห์ยอดขาย" },
      { id: 8, status: false, title: "ดูรายงานยอดขายได้" },
      { id: 9, status: true, title: "ใช้งานได้ทุกขนาดหน้าจอ" },
      { id: 10, status: true, title: "ดูแล 6 เดือน - 1 ปี หรือตามตกลง" },
      { id: 11, status: true, title: "คู่มือสอนแก้ไข จุดที่แก้ไขได้เอง" },
      { id: 12, status: true, title: "ไม่มีต่ออายุรายปี" },
    ],
  },
  {
    id: 2,
    header: "",
    title: "เว็บไซต์ Ecommerce (เว็บไซต์ขายของ)",
    dec: "ระยะเวลาไม่เกิน 2 อาทิตย์ (หลังคอนเฟิร์มแบบ)",
    price_start: "เริ่มต้นที่ 24,000 บาท",
    price: "เริ่มต้นที่ 20,000 บาท ",
    discount: "ประหยัด 17%",
    result: [
      { id: 0, status: true, title: "ออกแบบเฉพาะหน้าหลัก" },
      { id: 1, status: true, title: "ลงสินค้า ตะกร้าสินค้า " },
      { id: 2, status: true, title: "ลงบทความสำหรับทำ (SEO)" },
      { id: 3, status: true, title: "รองรับการใช้งาน 2 ภาษา TH ENG" },
      { id: 4, status: true, title: "จูน Performance SEO + ความเร็วเว็บ" },
      { id: 5, status: true, title: "ติดตั้ง SSL เพิ่มความปลอดภัย" },
      { id: 6, status: true, title: "ระบบจัดการหลังบ้าน 100%" },
      { id: 7, status: true, title: "ดูกราฟ GSC, GA วิเคาะห์ยอดขาย" },
      { id: 8, status: true, title: "ดูรายงานยอดขายได้" },
      { id: 9, status: true, title: "ใช้งานได้ทุกขนาดหน้าจอ" },
      { id: 10, status: true, title: "ดูแล 6 เดือน - 1 ปี หรือตามตกลง" },
      { id: 11, status: true, title: "คู่มือสอนแก้ไข จุดที่แก้ไขได้เอง" },
      { id: 12, status: true, title: "ไม่มีต่ออายุรายปี" },
    ],
  },
];

const PriceWebsite = () => {
  return (
    <section className=" ">
      <h1 className=" text-xl md:text-3xl text-left md:text-center">
        <span className="text-purple-700 font-semibold">ค่าบริการ </span>
        รับทำเว็บไซต์ แพคเกจ 1 (เพื่อการตลาด) 
      </h1>
      <p className="text-left md:text-center mt-4 text-gray-500 text-sm md:text-base ">
        <span className="text-purple-600">
          เลือกแพคเกจเว็บไซต์ให้เข้ากับธุรกิจของคุณ
        </span>{" "}
        สำหรับเว็บไซต์การตลาดที่ต้องการเพิ่มยอดขายบนโลกออนไลน์
        ด้วยรูปแบบเว็บที่ทันสมัย{" "}
      </p>

      {/* Swiper   */}
      <div className=" flex items-center justify-center  md:mt-2    ">
        {/* ปุ่มซ้าย */}
        {/* <button className="prev-btn text-2xl text-gray-400   ">
          <FaChevronLeft />
        </button> */}

        {/* Swiper เอง */}
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          className="flex-grow"
          breakpoints={{
            1024: {
              slidesPerView: 3, // แสดง 3 สไลด์ในหน้าจอขนาดใหญ่
              spaceBetween: 10,
            },
          }}
        >
          {data.map((slide) => (
            <SwiperSlide key={slide.id} className=" py-4">
              <div
                className={` border border-gray-200 rounded-lg bg-white shadow-md my-4  `}
              >
                <header
                  className={`${
                    slide.header
                      ? " bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300 text-white "
                      : "bg-white pt-10"
                  } text-center py-3 rounded-t-lg text-xl`}
                >
                  {slide.header}
                </header>
                <section className="p-4 text-center pt-5 py-10 px-6 ">
                  <h2 className="text-black text-md md:text-lg  text-left">
                    {slide.title}
                  </h2>
                  <p className="text-gray-600 mt-3 text-sm text-left">
                    {slide.dec}
                  </p>
                  <div className="flex  items-center flex-row gap-3 mt-8">
                    <p className=" line-through text-sm text-gray-400">
                      {slide.price_start}
                    </p>
                    <div className="bg-purple-100 px-2 py-1 rounded-full">
                      <p className="text-gray-600 text-sm">{slide.discount}</p>
                    </div>
                  </div>
                  <h3 className="mt-4 text-xl md:text-2xl font-semibold text-start">
                    {slide.price}
                  </h3>

                  <button
                    className={`${
                      slide.header
                        ? "bg-purple-600 hover:bg-purple-700  text-white"
                        : "text-purple-600 hover:bg-purple-100 "
                    } mt-6 border-2 border-purple-300 w-full py-2 rounded-lg  text-md  font-semibold `}
                  >
                    ติดต่อสอบถาม
                  </button>
                  <small className="text-purple-400 text-left">
                    *ราคาไม่รวม Server Domain และอาจมีการเปลี่ยนแปลง
                  </small>

                  <hr className=" mt-6 border border-purple-200" />

                  <ul className="md:px-2 py-2 text-xs md:text-sm ">
                    {slide.result.map((item, index) => (
                      <li
                        className="flex flex-row gap-2 items-center text-gray-500 mt-4"
                        key={item.id}
                      >
                        {" "}
                        {item.status ? (
                          <FcOk size={21} />
                        ) : (
                          <AiOutlineClose size={21} color="red" />
                        )}{" "}
                        <p
                          className={`text-sm ${
                            item.status ? "" : " text-red-500"
                          }`}
                        >
                          {item.title}
                        </p>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ปุ่มขวา */}
        {/* <button className="next-btn text-2xl text-gray-400  ">
          <FaChevronRight />
        </button> */}
      </div>

    </section>
  );
};

export default PriceWebsite;
