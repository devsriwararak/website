"use client";
import Image from "next/image";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import { Navigation, Autoplay, Pagination } from "swiper/modules";

const data = [
  {
    id: 0,
    title: "สอบถาม-ออกแบบระบบ",
    dec: "แนะนำโปรแกรม หรือเว็บไซต์ ที่เหมาะสำหรับธุรกิจของลูกค้าแบบตรงจุด",
    image:
      "https://devsriwararak.com/wp-content/uploads/2024/01/%E0%B8%AA%E0%B8%AD%E0%B8%9A%E0%B8%96%E0%B8%B2%E0%B8%A1-%E0%B8%AD%E0%B8%AD%E0%B8%81%E0%B9%81%E0%B8%9A%E0%B8%9A-%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1-%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99.webp",
  },
  {
    id: 1,
    title: "พัฒนาซอฟต์แวร์",
    dec: "เริ่มการพัฒนาโปรแกรมและเว็บไซต์ให้ตรงตามความต้องการของลูกค้า",
    image:
      "https://devsriwararak.com/wp-content/uploads/2024/01/%E0%B8%A5%E0%B8%87%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%97%E0%B8%B3-%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1-%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99.webp",
  },
  {
    id: 2,
    title: "ส่งมอบงาน",
    dec: "ส่งตรวจงานเป็นรอบๆ เพื่อปรับแก้ไขในส่วนที่ผิดพลาด ให้ถูกต้อง",
    image:
      "https://devsriwararak.com/wp-content/uploads/2024/01/%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%A1%E0%B8%AD%E0%B8%9A%E0%B8%87%E0%B8%B2%E0%B8%99-%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1-%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99.webp",
  },
  {
    id: 3,
    title: "ดูแลหลังการขาย",
    dec: "ซัพพอต ให้คำปรึกษา หลังการขาย หรือต้องการอัพเกรดระบบใหม่",
    image:
      "https://devsriwararak.com/wp-content/uploads/2024/01/%E0%B8%94%E0%B8%B9%E0%B9%81%E0%B8%A5%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%82%E0%B8%B2%E0%B8%A2-%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1-%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99.webp",
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
          <SwiperSlide className="w-full flex  flex-col gap-2 justify-center items-center mb-16 lg:mb-0  ">
            <div className=" relative w-full h-32 mb-4">
              <Image
                src={item.image}
                loading="lazy"
                layout="fill"
                objectFit="cover"
                alt={item.title}
                quality={75}
                className="w-full "
              />
            </div>
            <h3 className="  text-lg text-center ">{item.title}</h3>
            <p className=" text-gray-500 text-center text-sm  px-2 lg:px-10">
              {item.dec}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Step;
