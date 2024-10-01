"use client";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FcOk, FcCancel } from "react-icons/fc";
import { IoCheckmarkSharp, IoCloseSharp } from "react-icons/io5";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const data = [
  {
    id: 0,
    header: "เริ่มต้น",
    title: "SEO รายเดือน",
    dec: "ดูแลปรับปรุง SEO เว็บไซต์ธุรกิจของคุณให้อยู่อันดับต้นๆ และรักษาระดับจากเว็บไซต์คู่แข่ง",
    price_start: "ราคาเดิม 0 บาท",
    price: "5,000 บาท",
    discount: "",
    color_header: "bg-purple-400",
    result: [
      { id: 0, status: true, title: "รองรับ 4 Keywords" },
      {
        id: 1,
        status: true,
        title: "วิเคราะห์เว็บไซต์เบื้องต้น (Website Audit)",
      },
      { id: 2, status: true, title: "ติดตั้งเครื่องมือที่จำเป็น" },
      { id: 3, status: true, title: "ปรับปรุงด้านเทคนิคของเว็บไซต์" },
      { id: 4, status: true, title: "ปรังปรุงโครงสร้างเว็บไซต์ (On-page)" },
      { id: 5, status: true, title: "บริการลิงก์สายขาวคุณภาพ PBN" },
      { id: 6, status: true, title: "ลงบทความใหม่ไม่ซ้ำใคร 1 บท/อาทิตย์" },
      { id: 7, status: false, title: "เพิ่ม Performance ความเร็วเว็บ" },
      { id: 8, status: false, title: "กู้ทุกหน้าให้ใช้งานเต็ม 100%" },
      { id: 9, status: false, title: "ปรับปรุง UX/UI หน้าเว็บไซต์ WP" },
      { id: 10, status: false, title: "เป็นพนักงานดูแลเว็บไซต์บริษัทคุณ" },
      { id: 11, status: true, title: "วิเคราะห์ผลลัพธ์และรายงาน" },
      { id: 12, status: true, title: "รายงานประจำเดือนจากเรา" },
    ],
  },

  {
    id: 1,
    header: "ยอดนิยม",
    title: "SEO + แก้ไขโครงสร้างเว็บไซต์",
    dec: "นอกจาก SEO แล้วเราช่วยจัดการหน้าเว็บไซต์ที่เสียหาย หรือมีปัญหาให้มาใช้งานได้ 100%",
    price_start: "ราคาเดิม 9,000 บาท",
    price: "8,000 บาท",
    discount: "",
    color_header: "bg-purple-400",
    result: [
      { id: 0, status: true, title: "รองรับ 10 Keywords" },
      {
        id: 1,
        status: true,
        title: "วิเคราะห์เว็บไซต์เบื้องต้น (Website Audit)",
      },
      { id: 2, status: true, title: "ติดตั้งเครื่องมือที่จำเป็น" },
      { id: 3, status: true, title: "ปรับปรุงด้านเทคนิคของเว็บไซต์" },
      { id: 4, status: true, title: "ปรังปรุงโครงสร้างเว็บไซต์ (On-page)" },
      { id: 5, status: true, title: "บริการลิงก์สายขาวคุณภาพ PBN" },
      { id: 6, status: true, title: "ลงบทความใหม่ไม่ซ้ำใคร 3 บท/อาทิตย์" },
      { id: 7, status: true, title: "เพิ่ม Performance ความเร็วเว็บ" },
      { id: 8, status: true, title: "กู้ทุกหน้าให้ใช้งานเต็ม 100%" },
      { id: 9, status: false, title: "ปรับปรุง UX/UI หน้าเว็บไซต์ WP" },
      { id: 10, status: false, title: "เป็นพนักงานดูแลเว็บไซต์บริษัทคุณ" },
      { id: 11, status: true, title: "วิเคราะห์ผลลัพธ์และรายงาน" },
      { id: 12, status: true, title: "รายงานประจำเดือนจากเรา" },
    ],
  },

  {
    id: 2,
    header: "แพ็กเกจขายดี ปี2024",
    title: "SEO + ดูแลเว็บไซต์แบบพนักงาน",
    dec: "จัดการ Performance SEO และดูแลแก้ไข UX/UI เว็บไซต์เวิร์ดเพรสของบริษัทคุณ",
    price_start: "ราคาเดิม 12,000 บาท",
    price: "10,000 บาท",
    discount: "",
    color_header: "bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300",
    result: [
      { id: 0, status: true, title: "รองรับ 14 Keywords" },
      {
        id: 1,
        status: true,
        title: "วิเคราะห์เว็บไซต์เบื้องต้น (Website Audit)",
      },
      { id: 2, status: true, title: "ติดตั้งเครื่องมือที่จำเป็น" },
      { id: 3, status: true, title: "ปรับปรุงด้านเทคนิคของเว็บไซต์" },
      { id: 4, status: true, title: "ปรังปรุงโครงสร้างเว็บไซต์ (On-page)" },
      { id: 5, status: true, title: "บริการลิงก์สายขาวคุณภาพ PBN" },
      { id: 6, status: true, title: "ลงบทความใหม่ไม่ซ้ำใคร 5 บท/อาทิตย์" },
      { id: 7, status: true, title: "เพิ่ม Performance ความเร็วเว็บ" },
      { id: 8, status: true, title: "กู้ทุกหน้าให้ใช้งานเต็ม 100%" },
      { id: 9, status: true, title: "ปรับปรุง UX/UI หน้าเว็บไซต์ WP" },
      { id: 10, status: true, title: "เป็นพนักงานดูแลเว็บไซต์บริษัทคุณ" },
      { id: 11, status: true, title: "วิเคราะห์ผลลัพธ์และรายงาน" },
      { id: 12, status: true, title: "รายงานประจำเดือนจากเรา" },
    ],
  },
];

const List = () => {
  return (
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
                  slide.color_header ? `${slide.color_header} text-white` : ""
                } text-center py-3 rounded-t-lg text-xl `}
              >
                {slide.header}
              </header>
              <section className="p-4 text-center pt-5 py-10 px-6 ">
                <h2 className="text-sm bg-purple-500 hover:bg-purple-700 text-white w-fit px-2 py-1 rounded-lg">
                  {slide.title}
                </h2>
                <p className="text-gray-500 mt-5 text-sm text-left">
                  {slide.dec}
                </p>
                <div className="flex  items-center flex-row gap-3 mt-5">
                  <p className=" line-through text-sm text-gray-400">
                    {slide.price_start}
                  </p>
                </div>
                <h3 className="mt-3 text-xl md:text-2xl font-semibold text-start">
                  {slide.price}{" "}
                  <span className="text-base font-normal text-gray-400">
                    /เดือน
                  </span>
                </h3>

                <hr className="border border-purple-100 mt-5" />

                <ul className="md:px-2 py-2 text-xs md:text-sm ">
                  {slide.result.map((item, index) => (
                    <li
                      className="flex flex-row gap-2 items-center text-gray-500 mt-4"
                      key={item.id}
                    >
                      {" "}
                      {item.status ? (
                        <IoCheckmarkSharp size={18} color="green" />
                      ) : (
                        <AiOutlineClose size={18} color="red" />
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

                <hr className="border border-purple-100 my-5" />
                {/* bg-gradient-to-r from-indigo-500 to-purple-400 text-white */}

                <button
                  className={` ${
                    slide.id === 1
                      ? "bg-gradient-to-r from-indigo-500 to-purple-400 text-white"
                      : "text-purple-600 hover:bg-purple-100"
                  } w-full rounded-md py-1.5 border border-purple-200   `}
                >
                  ติดต่อสอบถาม
                </button>
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
  );
};

export default List;
