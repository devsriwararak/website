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
import { FaRegHandshake, FaStore, FaToolbox } from "react-icons/fa";

const data = [
  {
    id: 0,
    header: "",
    title: "เว็บไซต์สำหรับบริษัท",
    dec: "เว็บ Blogs ลงบทความเพื่อการตลาด ทำให้ค้นหาเจอบน Google ทุกธุรกิจ",
    price_start: "ลดจาก 22,000 บาท",
    price: "20,000 บาท",
    discount: "",
    color_header: "",
    icons: <FaRegHandshake size={40} />,
    result: [
      { id: 0, status: true, title: "ออกแบบหน้าเว็บไซต์ และคอนเฟิร์มแบบ" },
      { id: 1, status: true, title: "รองรับการทำงาน 2 ภาษา TH ENG" },
      { id: 2, status: true, title: "ระบบหลังบ้านแบบครอบคลุม" },
      { id: 3, status: true, title: "ระบบจัดการเนื้อหา CMS ใช้งานง่าย" },
      { id: 4, status: true, title: "ลงบทความ SEO" },
      { id: 5, status: true, title: "ระบบจัดการสินค้า และบริการ" },
      { id: 6, status: true, title: "ระบบจัดการคำสั่งซื้อ" },
      { id: 7, status: false, title: "รองรับการชำระเงินออนไลน์" },
      { id: 8, status: false, title: "ระบบแจ้งเตือนการสั่งซื้อและชำระเงิน" },
      { id: 9, status: false, title: "รองรับการเชื่อมต่อกับระบบขนส่ง" },
      { id: 10, status: false, title: "ดูรายงานยอดขายแบบคลอบคลุม" },
      { id: 11, status: true, title: "ใช้งานพร้อมกันได้หลายคน" },
    ],
  },
  {
    id: 1,
    header: "",
    title: "เว็บไซต์ขนาดเล็ก-กลาง",
    dec: "สำหรับเว็บไซต์บริษัทที่มีความซับซ้อน และต้องการทำ SEO โดยเฉพาะ",
    price_start: "ลดจาก 44,000 บาท",
    price: "40,000 บาท",
    discount: "",
    color_header: "",
    icons: <FaToolbox size={35} />,
    result: [
      { id: 0, status: true, title: "ออกแบบหน้าเว็บไซต์ และคอนเฟิร์มแบบ" },
      { id: 1, status: true, title: "รองรับการทำงาน 2 ภาษา TH ENG" },
      { id: 2, status: true, title: "ระบบหลังบ้านแบบครอบคลุม" },
      { id: 3, status: true, title: "ระบบจัดการเนื้อหา CMS ใช้งานง่าย" },
      { id: 4, status: true, title: "ลงบทความ SEO" },
      { id: 5, status: true, title: "ระบบจัดการสินค้า และบริการ" },
      { id: 6, status: true, title: "ระบบจัดการคำสั่งซื้อ" },
      { id: 7, status: false, title: "รองรับการชำระเงินออนไลน์" },
      { id: 8, status: false, title: "ระบบแจ้งเตือนการสั่งซื้อและชำระเงิน" },
      { id: 9, status: false, title: "รองรับการเชื่อมต่อกับระบบขนส่ง" },
      { id: 10, status: false, title: "ดูรายงานยอดขายแบบคลอบคลุม" },
      { id: 11, status: true, title: "ใช้งานพร้อมกันได้หลายคน" },
    ],
  },
  {
    id: 2,
    header: "",
    title: "เว็บไซต์ขนาดใหญ่",
    dec: "เว็บขายของพร้อมระบบชำระเงิน สามารถใช้งานได้หลาย User พร้อมกัน",
    price_start: "ลดจาก 65,000 บาท",
    price: "60,000 บาท",
    discount: "",
    color_header: "",
    icons: <FaStore size={35} />,
    result: [
      { id: 0, status: true, title: "ออกแบบหน้าเว็บไซต์ และคอนเฟิร์มแบบ" },
      { id: 1, status: true, title: "รองรับการทำงาน 2 ภาษา TH ENG" },
      { id: 2, status: true, title: "ระบบหลังบ้านแบบครอบคลุม" },
      { id: 3, status: true, title: "ระบบจัดการเนื้อหา CMS ใช้งานง่าย" },
      { id: 4, status: true, title: "ลงบทความ SEO" },
      { id: 5, status: true, title: "ระบบจัดการสินค้า และบริการ" },
      { id: 6, status: true, title: "ระบบจัดการคำสั่งซื้อ" },
      { id: 7, status: false, title: "รองรับการชำระเงินออนไลน์" },
      { id: 8, status: false, title: "ระบบแจ้งเตือนการสั่งซื้อและชำระเงิน" },
      { id: 9, status: false, title: "รองรับการเชื่อมต่อกับระบบขนส่ง" },
      { id: 10, status: false, title: "ดูรายงานยอดขายแบบคลอบคลุม" },
      { id: 11, status: true, title: "ใช้งานพร้อมกันได้หลายคน" },
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
        {data.map((slide, index) => (
          <SwiperSlide key={slide.id} className=" py-10">
            <div
              className={` border border-gray-200 rounded-lg bg-white shadow-md my-4 ${
                index === 1
                  ? "border-t-4 border-purple-600"
                  : "border border-gray-100"
              }  `}
            >
              <section className="p-4 text-center pt-5 py-10 px-6 ">
                <div className="flex flex-row gap-4 justify-between items-center ">
                  <h2 className="text-lg font-semibold text-purple-400 text-center">
                    {slide.title}
                  </h2>

                  <div className="flex justify-center -mt-16 ">
                    <div className="bg-purple-100 w-fit rounded-full p-3 ">
                      <div className="text-purple-700">{slide.icons}</div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-500 mt-5 text-sm text-left">
                  {slide.dec}
                </p>

                <div className="flex flex-row gap-4 items-center justify-start mt-4">
                  <p className="text-xl md:text-2xl font-semibold">
                    {slide.price}{" "}
                  </p>
                  <p className="text-gray-300 line-through text-sm">
                    {" "}
                    {slide.price_start}
                  </p>
                </div>

                <hr className="border border-purple-100 mt-5" />

                <p className="text-sm  text-gray-400 text-left mt-4">
                  รายละเอียด
                </p>

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

                <p className="text-sm  text-gray-400 text-left mt-4">
                  ระบบ
                </p>

                <ul className="flex flex-col gap-2 mt-3 pl-3 text-gray-500 text-sm">
                <li className="flex flex-row gap-3 items-center">
                  {" "}
                  <IoCheckmarkSharp size={18} color="green" />
                  ฟรีโดเมน + Server 1 ปี{" "}
                </li>
                <li className="flex flex-row gap-3 items-center">
                  {" "}
                  <IoCheckmarkSharp size={18} color="green" />
                  โหมด SSR โหลดหน้าเว็บเร็วขึ้น{" "}
                </li>
                <li className="flex flex-row gap-3 items-center">
                  {" "}
                  <IoCheckmarkSharp size={18} color="green" />
                  SSL เพิ่มความปลอดภัยให้เว็บไซต์{" "}
                </li>
                <li className="flex flex-row gap-3 items-center">
                  {" "}
                  <IoCheckmarkSharp size={18} color="green" />
                  ปรับแต่งรองรับ SEO ครบวงจร{" "}
                </li>
                <li className="flex flex-row gap-3 items-center">
                  {" "}
                  <IoCheckmarkSharp size={18} color="green" />
                  Responsive ใช้งานได้ทุกหน้าจอ{" "}
                </li>
                <li className="flex flex-row gap-3 items-center">
                  {" "}
                  <IoCheckmarkSharp size={18} color="green" />
                  ต่ออายุเริ่มต้น 3,000 บาท/ปี{" "}
                </li>
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
