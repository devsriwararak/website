"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { FiMonitor, FiServer, FiSettings, FiShare2, FiTrello } from "react-icons/fi";

const data = [
  {
    id: 0,
    title: "สอบถาม-ออกแบบระบบ",
    dec: "แนะนำโปรแกรม หรือเว็บไซต์ ที่เหมาะสำหรับธุรกิจของลูกค้าแบบตรงจุด",
    image: <FiTrello size={80} />
    ,
  },
  {
    id: 1,
    title: "พัฒนาซอฟต์แวร์",
    dec: "เริ่มการพัฒนาโปรแกรมและเว็บไซต์ให้ตรงตามความต้องการของลูกค้า",
    image: <FiMonitor size={80} />,
  },
  {
    id: 2,
    title: "ส่งมอบงาน",
    dec: "ส่งตรวจงานเป็นรอบๆ เพื่อปรับแก้ไขในส่วนที่ผิดพลาด ให้ถูกต้อง",
    image: <FiServer size={80} />,
  },
  {
    id: 3,
    title: "ดูแลหลังการขาย",
    dec: "ซัพพอต ให้คำปรึกษา หลังการขาย หรือต้องการอัพเกรดระบบใหม่",
    image: <FiShare2 size={80} />,
  },
];

const Step = () => {
  return (
    <div className=" mt-12    ">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={20}
        pagination={{ clickable: true }}
        className="flex-grow"
        breakpoints={{
          640: {
            // สำหรับหน้าจอที่กว้างกว่า 640px (sm)
            slidesPerView: 1,
          },
          768: {
            // สำหรับหน้าจอที่กว้างกว่า 768px (md)
            slidesPerView: 2,
          },
          1024: {
            // สำหรับหน้าจอที่กว้างกว่า 1024px (lg)
            slidesPerView: 4,
          },
        }}
        autoplay={{
          delay: 3000, // หน่วงเวลา (ms) ระหว่างการเปลี่ยนสไลด์
          disableOnInteraction: false, // หยุด autoplay เมื่อผู้ใช้โต้ตอบกับสไลด์
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        loop={true}
      >
        {data.map((item, index) => (
          <SwiperSlide className="w-full flex  flex-col gap-2 justify-center items-center mb-16 lg:mb-0  " key={index}>
            <div className=" relative w-full mb-8 flex justify-center text-gray-700  ">
              {item.image}

            </div>
            <h3 className="  text-xl text-center ">{item.title}</h3>
            <p className=" text-gray-500 mt-2 text-center text-base lg:text-lg  px-2 lg:px-3">
              {item.dec}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Step;
