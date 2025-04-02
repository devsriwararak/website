"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { FcOk, FcCancel } from "react-icons/fc";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // ใช้ไอคอนซ้าย-ขวา
import { AiOutlineClose } from "react-icons/ai";


const data = [
  {
    id: 0,
    header: "",
    title: "โปรแกรมขนาดเล็ก ช่วยลดการทำงาน",
    dec: "พัฒนาโปรแกรมเพื่อช่วยลดการทำงาน ทำให้ปิดงานได้เร้วขึ้นและแม่นยำ 100%",
    price_start: "เริ่มต้นที่ - บาท",
    price: "ราคา ตามรายละเอียดของงาน",
    discount: "ประหยัด 0%",
    result: [
      { id: 0, status: true, title: "สำหรับเว็บไซต์ที่มีความซับซ้อน" },
      { id: 1, status: true, title: "สำหรับเว็บไซต์ที่ต้องการลูกเล่นมากๆ" },
      { id: 2, status: true, title: "พัฒนาเครื่องมือที่ตอบโจทย์ ในการทำงาน" },
      { id: 3, status: true, title: "ช่วยลดการทำงาน" },
      { id: 4, status: true, title: "ใช้งานได้แบบ Online 24 ชม." },
      { id: 5, status: true, title: "ใช้งานได้ทุกขนาดหน้าจอ" },
      { id: 6, status: true, title: "ดูแลบัค 4-6 เดือน หรือตามตกลง" },
      { id: 7, status: false, title: "" },
      { id: 8, status: false, title: "" },
      { id: 9, status: false, title: "" },
      { id: 10, status: false, title: "" },
    ],
  },
  {
    id: 1,
    header: "แพคเกจยอดนิยม",
    title: "โปรแกรมขนาดกลาง สำหรับองค์กร",
    dec: "พัฒนาโปรแกรมสำหรับธุรกิจที่ต้องการเครื่องมือ หรือตัวช่วยที่สะดวก รวดเร็ว และแม่นยำในการทำงาน",
    price_start: "เริ่มต้นที่ - บาท",
    price: "ราคา ตามรายละเอียดของงาน",
    discount: "ประหยัด 0%",
    result: [
      { id: 0, status: true, title: "สำหรับองค์กร หรือบริษัทขนาดเล็ก" },
      { id: 1, status: true, title: "ปรึกษาพูดคุยออกแบบระบบ" },
      { id: 2, status: true, title: "ช่วยลดการทำงานของพนักงาน" },
      { id: 3, status: true, title: "พัฒนาเครื่องมือที่ตอบโจทย์การใช้งาน" },
      { id: 4, status: true, title: "ช่วยเตือน ช่วยวิเคาะห์ และคำนวณ" },
      { id: 5, status: true, title: "ใช้งานพร้อมกันได้หลายยูสเซอร์" },
      { id: 6, status: true, title: "ใช้งานได้แบบ Online 24 ชม." },
      { id: 7, status: true, title: "ใช้งานได้ทุกขนาดหน้าจอ" },
      { id: 8, status: true, title: "ดูแลบัค 6 เดือน - 1 ปี หรือตามตกลง" },
      { id: 9, status: false, title: "" },
      { id: 10, status: false, title: "" },
    ],
  },
  {
    id: 2,
    header: "",
    title: "โปรแกรมบริหารจัดการธุรกิจขนาดใหญ่",
    dec: "สร้างเว็บไซต์การตลาดที่มีความซับซ้อน หรือโปรแกรมขนาดเล็ก เป็นตัวช่วยที่ดีในการทำงาน",
    price_start: "เริ่มต้นที่ - บาท",
    price: "ราคา ตามรายละเอียดของงาน",
    discount: "ประหยัด 0%",
    result: [
      { id: 0, status: true, title: "สำหรับองค์กร หรือบริษัทขนาดใหญ่" },
      { id: 1, status: true, title: "ปรึกษาพูดคุยออกแบบระบบ" },
      { id: 2, status: true, title: "ช่วยลดการทำงานของพนักงาน" },
      { id: 3, status: true, title: "พัฒนาโปรแกรมตามความต้องการ" },
      { id: 4, status: true, title: "ปรับตั้งค่าระบบได้เอง ลดความซ้ำซ้อน" },
      { id: 5, status: true, title: "Super Admin Full System" },
      { id: 6, status: true, title: "ช่วยวิเคาะห์ ลดการทำงาน รายงาน" },
      { id: 7, status: true, title: "ใช้งานได้แบบ Online 24 ชม." },
      { id: 8, status: true, title: "ใช้งานได้ทุกขนาดหน้าจอ" },
      { id: 9, status: true, title: "ใช้บริการ Cloud Server ปลอดภัย" },
      { id: 10, status: true, title: "ดูแลบัค 6 เดือน - 1 ปี หรือตามตกลง" },
    ],
  },
];

const PriceProgram = () => {
  return (
    <section className="  ">
      <h1 className=" text-xl md:text-3xl text-left md:text-center">
        <span className="text-purple-700 font-semibold">ค่าบริการ </span>
        จ้างเขียนโปรแกรมทุกบริษัท
      </h1>
      <p className="text-left md:text-center mt-4 text-gray-500 text-sm md:text-lg ">
        <span className="text-purple-600">พัฒนาโปรแกรม</span> เพื่อตอบโจทย์
        และลดการทำงานในบริษัทของคุณ สำหรับธุรกิจหรือองค์กรขนาดเล็ก กลาง ใหญ่
        ทุกธุรกิจ{" "}
      </p>


        {/* Swiper สำหรับมือถือ  */}
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
                        <p className="text-gray-600 text-sm">
                          {slide.discount}
                        </p>
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
                          {item.title ? (
                            item.title
                          ) : (
                            <p className="text-red-500">Service</p>
                          )}
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

export default PriceProgram;
