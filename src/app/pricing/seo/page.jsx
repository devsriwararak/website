import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { IoCheckmarkSharp, IoCloseSharp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import List from "./List";

export const metadata = {
  manifest: "/manifest.json",
  title:
    "ราคาค่าบริการ ดูแล SEO เว็บไซต์แบบรายเดือน รักษาอันดับหน้า 1 ไม่ให้ตก ค้นหาเจอได้ง่ายบน Google",
  description:
    "ราคาค่าบริการ รับดูแล SEO เว็บไซต์แบบรายเดือน ช่วยรักษาให้คุณอยู่หน้า 1 ไม่ให้อันดับตก ค้นหาเจอบน Google เพิ่มยอดขายด้วยพลังของ SEO ",
  keywords:
    "รับทำ seo ขอนแก่น , รับทำ seo รายเดือนขอนแก่น , ดูแล seo เว็บไซต์บริษัท   ",
  openGraph: {
    images:
      "https://devsriwararak.com/wp-content/uploads/2024/08/banner-1.webp",
  },
};

const page = () => {
  return (
    <div className=" lg:px-10">
      <h1 className=" text-xl md:text-3xl text-left md:text-center">
        <span className="text-purple-700 font-semibold">ค่าบริการ </span>
        ดูแล SEO เว็บไซต์บริษัท รายเดือน
      </h1>
      <p className="text-left md:text-center mt-4 text-gray-500 text-sm md:text-base ">
        <span className="text-purple-600">รับดูแล SEO เว็บไซต์บริษัท</span>{" "}
        ช่วยทำให้ค้นหาเว็บไซต์ของคุณเจอบน Google ช่วยเพิ่มการมองเห็น
        ทำให้มียอดขายมากขึ้น ช่วยรักษาระดับไม่ให้อันดับตกหล่น{" "}
      </p>

      <List />

      <section className="flex flex-col lg:flex-row gap-4 py-8 mt-14  ">
        <div className="w-full">
          <h2 className="text-2xl">ข้อดีของการเลือกใช้บริการ SEO รายเดือน</h2>
          <p className="mt-4 text-sm text-gray-600 leading-normal">
            บริการ SEO รายเดือน
            นั้นมีข้อดีหลายประการที่สามารถช่วยธุรกิจของคุณเติบโตได้ การดูแล SEO
            แบบต่อเนื่องทำให้คุณไม่ต้องกังวลเกี่ยวกับการทำ SEO ด้วยตัวเอง
            เพราะผู้เชี่ยวชาญ{" "}
            <Link href="/" className="link">
              {" "}
              รับทำเว็บไซต์ ขอนแกน{" "}
            </Link>{" "}
            จะดูแลทุกขั้นตอนอย่างใกล้ชิด ซึ่งรวมถึงการวิเคราะห์คู่แข่ง
            การทำเนื้อหาที่ตรงกลุ่มเป้าหมาย
            และการปรับปรุงเว็บไซต์ให้เหมาะสมกับการใช้งานบนมือถือ
            การใช้บริการเหล่านี้ช่วยให้เว็บไซต์ธุรกิจของคุณสามารถติดอันดับในการค้นหาของ
            Google Search ได้อย่างมั่นคงและยาวนานแบบธรรมชาตินั่นเอง
          </p>
          <p className="mt-4 text-sm text-gray-600 leading-normal">
            นอกจากนี้ การดูแล SEO
            รายเดือนยังช่วยในการสร้างความน่าเชื่อถือให้กับแบรนด์หรือธุรกิจของคุณ
            การที่เว็บไซต์ของคุณปรากฏอยู่บนหน้าแรกของ Google Search
            จะช่วยให้ลูกค้ามองว่าแบรนด์หรือธุรกิจของคุณเป็นผู้นำในอุตสาหกรรมที่คุณทำอยู่
            ด้วยการดูแล SEO ที่ดีและต่อเนื่อง
            รวมไปถึงการรักษาระดับไม่ให้ตกอันดับ เมื่อมีเว็บไซต์คู่แข่ง
            คุณสามารถสร้างความประทับใจและความเชื่อมั่นในสายตาของลูกค้าได้
            ซึ่งจะส่งผลให้มีการติดต่อและการทำธุรกรรมที่มากขึ้น
          </p>
        </div>

        <div className="w-full">
          <Image
            src="https://devsriwararak.com/wp-content/uploads/2024/09/31164754_7744158-removebg-preview.webp"
            width={500}
            height={500}
            alt="ราคาค่าบริการ รับทำ seo รายเดือน ขอนแก่น"
            loading="lazy"
          />
        </div>
      </section>

      <section className="py-8 mt-8">
        <h2 className="text-2xl">บทสรุป รับจ้างดูแล SEO และเว็บไซต์รายเดือน</h2>
        <p className="mt-4 text-sm text-gray-600 leading-normal">
          การดูแล SEO รายเดือน
          เป็นการลงทุนที่คุ้มค่าสำหรับธุรกิจที่ต้องการเพิ่มโอกาสในการแข่งขันในโลกออนไลน์
          และธุรกิจที่กำลังวางแผนกลยุทธ์ทางการตลาด
          ด้วยการปรับปรุงและดูแลเว็บไซต์บริษัทอย่างต่อเนื่อง
          คุณสามารถมั่นใจได้ว่าเว็บไซต์บริษัทของคุณจะมีประสิทธิภาพสูงสุดและได้รับการจัดอันดับที่ดีในเสิร์ชเอ็นจิน
          การเลือกใช้บริการดูแล SEO รายเดือน เราทีมงาน{" "}
          <Link href="/" className="link">
            {" "}
            รับเขียนโปรแกรม ขอนแกน{" "}
          </Link>{" "}
          จะช่วยให้ธุรกิจของคุณเติบโตและได้รับผลตอบแทนที่ดีในระยะยาว
        </p>
      </section>
    </div>
  );
};

export default page;
