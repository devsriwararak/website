'use client'
import React from 'react'
import data from './data'
import Link from 'next/link'
import Image from 'next/image'
import { truncateText } from "../lib/Tool.js";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";

const OldPosts = () => {
  return (

    <div className="flex  flex-wrap     ">
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={20}
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
        <SwiperSlide className=" w-full  lg:w-1/4 py-3 px-2" key={item.id}>
          <Link href={`/blogs/${item.url}`}>
            <div className="bg-white shadow-lg rounded-lg px-3 py-4 cursor-pointer border-2 border-gray-100 flex flex-col justify-center items-start h-full">
              <div className="relative w-full h-48">
                <Image
                  src={item.image} 
                  layout="fill"
                  objectFit="cover"
                  alt={item.title}
                  className="w-full h-full"
                />
              </div>

              <h2 className="mt-4  text-sm md:text-md font-semibold">
                {item.title} 
              </h2>
              <p className="mt-2 text-xs md:text-sm text-gray-600 ">
                {truncateText(item.dec, 10)}
              </p>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
 </div>
  )
}

export default OldPosts