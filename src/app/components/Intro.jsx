"use client";
import Image from "next/image";
import Link from "next/link";
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
    title: "เขียนโปรแกรมเฉพาะธุรกิจ",
    dec: "รับจ้างเขียนโปรแกรม ตามที่ลูกค้าต้องการรูปแบบ web application",
    link: "https://www.facebook.com/dev.sriwararak",
    link_name: "Facebook",
    color: "bg-purple-800",
    icon: "https://devsriwararak.com/wp-content/uploads/2023/09/icon-รับเขียนโปรแกรม-ขอนแก่น-1.webp",
  },
  {
    id: 1,
    title: "พัฒนาเว็บไซต์การตลาด",
    dec: "จ้างทำเว็บไซต์บริษัท เพิ่มความน่าเชื่อถือ บ่งบอกถึงภาพลักษณ์บริษัท",
    link: "tel:0850032649",
    link_name: "โทรศัพท์",
    color: "bg-purple-600",
    icon: "https://devsriwararak.com/wp-content/uploads/2023/09/icon-รับเขียนโปรแกรม-ขอนแก่น-2.webp",
  },
  {
    id: 2,
    title: "LINE OA ครบวงจร",
    dec: "ออกแบบและตั้งค่าเขียนโปรแกรมเชื่อมต่อ LINE OA ครบวงจร",
    link: "https://line.me/ti/p/KMjKL3G9qz",
    link_name: "LINE",
    color: "bg-purple-400",
    icon: "https://devsriwararak.com/wp-content/uploads/2023/09/icon-รับเขียนโปรแกรม-ขอนแก่น-3.webp",
  },
  {
    id: 3,
    title: "ดูแล SEO รายเดือน",
    dec: "ค้นหาธุรกิจของคุณเจอบน Google Search ช่วยเพื่มการมองเห็น ",
    link: "https://www.tiktok.com/@dev_sriwararak",
    link_name: "TikTok",
    color: "bg-pink-300",
    icon: "https://devsriwararak.com/wp-content/uploads/2023/09/icon-รับเขียนโปรแกรม-ขอนแก่น-4.webp",
  },
];

const Intro = () => {
  return (
    <section>
      <div className="mt-0 py-8   mx-6 md:mx-0     ">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={20}
          pagination={{ clickable: true }}
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
          className="flex-grow"
        >
     {data.map((item, index) => (
            <SwiperSlide
              key={item.id}
              className="  bg-white  shadow-xl rounded-md px-8 md:px-6 py-8   border border-gray-300 border-b-4 border-b-purple-600 mt-9  mb-12 lg:mb-0    "
            >
              <div className={` ${item.color} w-14 p-3 rounded-full -mt-14 `}>
                <Image
                  src={item.icon}
                  loading="lazy"
                  width={200}
                  height={200}
                  alt={item.title}
                  objectFit="cover"
                  quality={75}
                />
              </div>
              <h3 className="text-lg mt-4">{item.title}</h3>
              <p className="mt-2 mb-4 text-sm text-gray-500 text-left">
                {item.dec}
              </p>
              <Link
                href={item.link}
                className=" text-sm  bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300 text-white px-5 py-1 rounded-full"
              >
                {item.link_name}
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


      {/* <div className=" hidden  lg:flex lg:flex-row justify-center items-center gap-3 md:gap-10 lg:gap-2 mt-20 px-6 md:px-20 lg:px-0   ">
        {data.map((item, index) => (
          <div className="w-full m-2 bg-white shadow-md rounded-md px-4 py-10 lg:py-4 flex flex-col justify-center items-center border border-gray-100 border-b-4 border-b-purple-600  ">
              <div className={` ${item.color} w-16 p-3 rounded-full -mt-14 `}>
              <Image
                src={item.icon}
                loading="lazy"
                width={200}
                height={200}
                alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
                // layout="responsive"
                objectFit="cover"
                quality={75}
              />
            </div>
            <h3 className="text-lg mt-4">{item.title}</h3>
            <p className="mt-2 text-sm text-gray-600 text-center">
              {item.dec}
            </p>
            <Link
              href={item.link}
              className=" text-sm mt-5 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300 text-white px-5 py-1 rounded-full"
            >
              {item.link_name}
            </Link>
          </div>
        ))}
      </div> */}


    </section>
  );
};

export default Intro;
