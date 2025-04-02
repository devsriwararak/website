"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/autoplay';
import { Navigation, Autoplay  } from "swiper/modules";

const Thank = () => {
  const articles = [
    {
      img: "/images/customer_1.webp",
    },
    {
      img: "/images/customer_2.webp",
    },
    {
      img: "/images/customer_3.webp",
    },
    {
      img: "/images/customer_4.webp",
    },
    {
      img: "/images/customer_5.webp",
    },
  ];

  return (
    <section className="mt-16 md:mt-24 px-6 md:px-10 lg:px-36 container mx-auto ">
      <h2 className="text-2xl lg:text-3xl text-center">
        ขอขอบคุณ ลูกค้าทุกท่าน
      </h2>
      <p className="text-gray-600 text-center mt-4 text-base lg:text-lg">
        ขอขอบพระคุณลูกค้าทุกท่าน ที่ไว้วางใจใช้บริการเขียนโปรแกรม และทำเว็บไซต์
        ขอนแก่น กับเรา
      </p>
 


        <div className="mt-10 ">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            breakpoints={{
                640: { // สำหรับหน้าจอที่กว้างกว่า 640px (sm)
                  slidesPerView: 1,
                },
                768: { // สำหรับหน้าจอที่กว้างกว่า 768px (md)
                  slidesPerView: 2,
                },
                1024: { // สำหรับหน้าจอที่กว้างกว่า 1024px (lg)
                  slidesPerView: 4,
                },
              }}
              autoplay={{
                delay: 2000, // หน่วงเวลา (ms) ระหว่างการเปลี่ยนสไลด์
                disableOnInteraction: false, // หยุด autoplay เมื่อผู้ใช้โต้ตอบกับสไลด์
              }}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            loop={true}
          >
            {articles.map((article, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-48">
                  <Image
                    layout="fill" 
                    objectFit="cover" 
                    src={article.img}
                    loading="lazy"
                    className="  w-full rounded-md"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        
       
    
    </section>
  );
};

export default Thank;
