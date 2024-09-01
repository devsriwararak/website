import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { IoCheckmarkSharp, IoCloseSharp } from "react-icons/io5";

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
      <h2 className=" text-xl md:text-3xl text-left md:text-center">
        <span className="text-purple-700 font-semibold">ค่าบริการ </span>
        ดูแล SEO เว็บไซต์บริษัท รายเดือน
      </h2>
      <p className="text-left md:text-center mt-4 text-gray-500 text-sm md:text-base ">
        <span className="text-purple-600">รับดูแล SEO เว็บไซต์บริษัท</span>{" "}
        ช่วยทำให้ค้นหาเว็บไซต์ของคุณเจอบน Google ช่วยเพิ่มการมองเห็น
        ทำให้มียอดขายมากขึ้น ช่วยรักษาระดับไม่ให้อันดับตกหล่น{" "}
      </p>

      <section className="flex flex-col lg:flex-row gap-8 lg:gap-3 mt-10 justify-center items-center lg:mx-4">
        {/* card 1 */}
        <div className="w-full   ">
          <p className="text-xl text-center py-2 rounded-t-lg text-white bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300">
            แพ็กเกจเกจเริ่มต้น
          </p>
          <div className=" bg-white shadow-xl px-4 py-6 pt-10  rounded-md border border-gray-100 ">
            <p className="text-sm bg-purple-500 hover:bg-purple-700 text-white w-fit px-2 py-1 rounded-lg">
              SEO รายเดือน
            </p>
            <p className="text-sm text-gray-500 mt-3">
              ดูแลปรับปรุง SEO เว็บไซต์ธุรกิจของคุณให้อยู่อันดับต้นๆ
              และรักษาระดับจากเว็บไซต์คู่แข่ง
            </p>
            <p className="text-sm mt-6 text-gray-400">
              ราคาเดิม <span className="  line-through">0 บาท</span>
            </p>
            <h3 className=" text-2xl font-semibold mt-2">
              5,000 บาท{" "}
              <span className="text-base font-normal text-gray-400">
                /เดือน
              </span>
            </h3>

            <hr className="border border-purple-100 my-5" />
            <ul className="text-sm text-gray-600 flex flex-col gap-3">
              <li className="flex gap-3 items-center">
                {" "}
                <IoCheckmarkSharp size={20} color="green" /> รองรับ 4 Keywords
              </li>
              <li className="flex gap-3 items-center">
                {" "}
                <IoCheckmarkSharp size={20} color="green" />{" "}
                วิเคราะห์เว็บไซต์เบื้องต้น (Website Audit)
              </li>
              <li className="flex gap-3 items-center">
                {" "}
                <IoCheckmarkSharp size={20} color="green" />{" "}
                ติดตั้งเครื่องมือที่จำเป็น
              </li>
              <li className="flex gap-3 items-center">
                {" "}
                <IoCheckmarkSharp size={20} color="green" />{" "}
                ปรับปรุงด้านเทคนิคของเว็บไซต์{" "}
              </li>
              <li className="flex gap-3 items-center">
                {" "}
                <IoCheckmarkSharp size={20} color="green" />{" "}
                ปรังปรุงโครงสร้างเว็บไซต์ (On-page){" "}
              </li>
              <li className="flex gap-3 items-center">
                {" "}
                <IoCheckmarkSharp size={20} color="green" />{" "}
                บริการลิงก์สายขาวคุณภาพ PBN
              </li>
              <li className="flex gap-3 items-center">
                {" "}
                <IoCheckmarkSharp size={20} color="green" />{" "}
                ลงบทความใหม่ไม่ซ้ำใคร 1 บท/อาทิตย์
              </li>
              <li className="flex gap-3 items-center text-red-500">
                {" "}
                <IoCloseSharp size={21} color="red" /> เพิ่ม Performance
                ความเร็วเว็บ
              </li>
              <li className="flex gap-3 items-center text-red-500">
                {" "}
                <IoCloseSharp size={21} color="red" /> กู้ทุกหน้าให้ใช้งานเต็ม
                100%
              </li>
              <li className="flex gap-3 items-center text-red-500">
                {" "}
                <IoCloseSharp size={21} color="red" /> ปรับปรุง UX/UI
                หน้าเว็บไซต์ WP
              </li>
              <li className="flex gap-3 items-center text-red-500">
                {" "}
                <IoCloseSharp size={21} color="red" />{" "}
                เป็นพนักงานดูแลเว็บไซต์บริษัทคุณ
              </li>
              <li className="flex gap-3 items-center">
                {" "}
                <IoCheckmarkSharp size={20} color="green" />{" "}
                วิเคราะห์ผลลัพธ์และรายงาน
              </li>
              <li className="flex gap-3 items-center">
                {" "}
                <IoCheckmarkSharp size={20} color="green" />
                รายงานประจำเดือนจากเรา{" "}
              </li>
            </ul>
            <hr className="border border-purple-100 my-5" />
            <button className="w-full rounded-md py-1.5 border border-purple-200 text-purple-600 hover:bg-purple-100 ">
              ติดต่อสอบถาม
            </button>
          </div>
        </div>

        {/* card 2 */}
        <div className="w-full ">
          <p className="text-xl text-center py-2 rounded-t-lg text-white bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300">
            แพ็กเกจยอดนิยม !!
          </p>
          <div className="bg-white shadow-xl px-4 py-6 pt-10  rounded-md border border-gray-100">
            <p className="text-sm bg-purple-500 hover:bg-purple-700 text-white w-fit px-2 py-1 rounded-lg">
              SEO + แก้ไขโครงสร้าง
            </p>
            <p className="text-sm text-gray-500 mt-3">
              นอกจาก SEO แล้วเราช่วยจัดการหน้าเว็บไซต์ที่เสียหาย
              หรือมีปัญหาให้มาใช้งานได้ 100%
            </p>
            <p className="text-sm mt-6 text-gray-400">
              ราคาเดิม <span className="  line-through">9,000 บาท</span>
            </p>
            <h3 className="mt-2 text-2xl font-semibold">
              8,000 บาท{" "}
              <span className="text-base font-normal text-gray-400">
                /เดือน
              </span>
            </h3>

            <hr className="border border-purple-100 my-5" />
            <ul className="text-sm text-gray-600 flex flex-col gap-3">
              <li className="flex gap-3 items-center">
                {" "}
                <IoCheckmarkSharp size={20} color="green" /> รองรับ 4 Keywords
              </li>
              <li className="flex gap-3 items-center">
                {" "}
                <IoCheckmarkSharp size={20} color="green" />{" "}
                วิเคราะห์เว็บไซต์เบื้องต้น (Website Audit)
              </li>
              <li className="flex gap-3 items-center">
                {" "}
                <IoCheckmarkSharp size={20} color="green" />{" "}
                ติดตั้งเครื่องมือที่จำเป็น
              </li>
              <li className="flex gap-3 items-center">
                {" "}
                <IoCheckmarkSharp size={20} color="green" />{" "}
                ปรับปรุงด้านเทคนิคของเว็บไซต์{" "}
              </li>
              <li className="flex gap-3 items-center">
                {" "}
                <IoCheckmarkSharp size={20} color="green" />{" "}
                ปรังปรุงโครงสร้างเว็บไซต์ (On-page){" "}
              </li>
              <li className="flex gap-3 items-center">
                {" "}
                <IoCheckmarkSharp size={20} color="green" />{" "}
                บริการลิงก์สายขาวคุณภาพ PBN
              </li>
              <li className="flex gap-3 items-center">
                {" "}
                <IoCheckmarkSharp size={20} color="green" />{" "}
                ลงบทความใหม่ไม่ซ้ำใคร 1 บท/อาทิตย์
              </li>
              <li className="flex gap-3 items-center ">
                {" "}
                <IoCheckmarkSharp size={20} color="green" /> เพิ่ม Performance
                ความเร็วเว็บ
              </li>
              <li className="flex gap-3 items-center ">
                {" "}
                <IoCheckmarkSharp size={20} color="green" />{" "}
                กู้ทุกหน้าให้ใช้งานเต็ม 100%
              </li>
              <li className="flex gap-3 items-center text-red-500">
                {" "}
                <IoCloseSharp size={21} color="red" /> ปรับปรุง UX/UI
                หน้าเว็บไซต์ WP
              </li>
              <li className="flex gap-3 items-center text-red-500">
                {" "}
                <IoCloseSharp size={21} color="red" />{" "}
                เป็นพนักงานดูแลเว็บไซต์บริษัทคุณ
              </li>
              <li className="flex gap-3 items-center">
                {" "}
                <IoCheckmarkSharp size={20} color="green" />{" "}
                วิเคราะห์ผลลัพธ์และรายงาน
              </li>
              <li className="flex gap-3 items-center">
                {" "}
                <IoCheckmarkSharp size={20} color="green" />
                รายงานประจำเดือนจากเรา{" "}
              </li>
            </ul>
            <hr className="border border-purple-100 my-5" />
            <button className="w-full rounded-md py-1.5 border border-purple-200  bg-gradient-to-r from-indigo-500 to-purple-400 text-white  ">
              ติดต่อสอบถาม
            </button>
          </div>
        </div>
        {/* card 3 */}
        <div className="w-full ">
          <p className="text-xl text-center py-2 rounded-t-lg text-white bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300">
            แพ็กเกจขายดี ปี2024 !!
          </p>
          <div className="bg-white shadow-xl px-4 py-6 pt-10  rounded-md border border-gray-100">
            <p className="text-sm bg-purple-500 hover:bg-purple-700 text-white w-fit px-2 py-1 rounded-lg">
              SEO + ดูแลเว็บไซต์
            </p>
            <p className="text-sm text-gray-500 mt-3">
              จัดการ Performance SEO และดูแลแก้ไข UX/UI
              เว็บไซต์เวิร์ดเพรสของบริษัทคุณ
            </p>
            <p className="text-sm mt-6 text-gray-400">
              ราคาเดิม <span className="  line-through">12,000 บาท</span>
            </p>
            <h3 className="mt-2 text-2xl font-semibold">
              10,000 บาท{" "}
              <span className="text-base font-normal text-gray-400">
                /เดือน
              </span>
            </h3>

            <hr className="border border-purple-100 my-5" />
            <ul className="text-sm text-gray-600 flex flex-col gap-3">
              <li className="flex gap-3 items-center">
                {" "}
                <IoCheckmarkSharp size={20} color="green" /> รองรับ 4 Keywords
              </li>
              <li className="flex gap-3 items-center">
                {" "}
                <IoCheckmarkSharp size={20} color="green" />{" "}
                วิเคราะห์เว็บไซต์เบื้องต้น (Website Audit)
              </li>
              <li className="flex gap-3 items-center">
                {" "}
                <IoCheckmarkSharp size={20} color="green" />{" "}
                ติดตั้งเครื่องมือที่จำเป็น
              </li>
              <li className="flex gap-3 items-center">
                {" "}
                <IoCheckmarkSharp size={20} color="green" />{" "}
                ปรับปรุงด้านเทคนิคของเว็บไซต์{" "}
              </li>
              <li className="flex gap-3 items-center">
                {" "}
                <IoCheckmarkSharp size={20} color="green" />{" "}
                ปรังปรุงโครงสร้างเว็บไซต์ (On-page){" "}
              </li>
              <li className="flex gap-3 items-center">
                {" "}
                <IoCheckmarkSharp size={20} color="green" />{" "}
                บริการลิงก์สายขาวคุณภาพ PBN
              </li>
              <li className="flex gap-3 items-center">
                {" "}
                <IoCheckmarkSharp size={20} color="green" />{" "}
                ลงบทความใหม่ไม่ซ้ำใคร 1 บท/อาทิตย์
              </li>
              <li className="flex gap-3 items-center 0">
                {" "}
                <IoCheckmarkSharp size={20} color="green" /> เพิ่ม Performance
                ความเร็วเว็บ
              </li>
              <li className="flex gap-3 items-center ">
                {" "}
                <IoCheckmarkSharp size={20} color="green" />{" "}
                กู้ทุกหน้าให้ใช้งานเต็ม 100%
              </li>
              <li className="flex gap-3 items-center ">
                {" "}
                <IoCheckmarkSharp size={20} color="green" /> ปรับปรุง UX/UI
                หน้าเว็บไซต์ WP
              </li>
              <li className="flex gap-3 items-center ">
                {" "}
                <IoCheckmarkSharp size={20} color="green" />{" "}
                เป็นพนักงานดูแลเว็บไซต์บริษัทคุณ
              </li>
              <li className="flex gap-3 items-center">
                {" "}
                <IoCheckmarkSharp size={20} color="green" />{" "}
                วิเคราะห์ผลลัพธ์และรายงาน
              </li>
              <li className="flex gap-3 items-center">
                {" "}
                <IoCheckmarkSharp size={20} color="green" />
                รายงานประจำเดือนจากเรา{" "}
              </li>
            </ul>
            <hr className="border border-purple-100 my-5" />
            <button className="w-full rounded-md py-1.5 border border-purple-200 text-purple-600 hover:bg-purple-100 ">
              ติดต่อสอบถาม
            </button>
          </div>
        </div>
      </section>

      {/* บทความ */}
      <section className="flex flex-col lg:flex-row gap-4 py-8 mt-14  ">
        <div className="w-full">
          <Image
            src="https://devsriwararak.com/wp-content/uploads/2024/09/31164763_7753459-removebg-preview.webp"
            width={500}
            height={500}
            alt="ราคาค่าบริการ รับทำ seo รายเดือน ขอนแก่น"
            loading="lazy"
          />
        </div>
        <div className="w-full">
          <h2 className="text-2xl">ความสำคัญของการดูแล SEO รายเดือน</h2>
          <p className="mt-4 text-sm text-gray-600 leading-normal">
            การดูแล SEO
            รายเดือนมีความสำคัญอย่างมากในยุคของการแข่งขันบนโลกออนไลน์ที่มีมากขึ้นทุกวันๆ 
            การที่เว็บไซต์ธุรกิจของคุณติดอันดับต้น ๆ ในการค้นหาบน Google
            จะช่วยเพิ่มจำนวนผู้เข้าชมเว็บไซต์ธุรกิจ และสร้างโอกาสในการขายหรือการติดต่อที่มากขึ้น
            การดูแล SEO รายเดือนเป็นการตรวจสอบและปรับปรุงเนื้อหา โครงสร้าง
            และการเชื่อมโยงในเว็บไซต์ธุรกิจของคุณอย่างต่อเนื่อง
            เพื่อให้สอดคล้องกับการอัปเดตอัลกอริทึมของเสิร์ชเอ็นจินระดับโลก และการเปลี่ยนแปลงของตลาด
          </p>
          <p className="mt-4 text-sm text-gray-600 leading-normal">
            การใช้บริการดูแล SEO
            รายเดือน จากผู้เชี่ยวชาญ <Link href="/" className="link">รับทำ seo ขอนแก่น </Link> จะช่วยให้คุณมั่นใจว่าเว็บไซต์ธุรกิจของคุณจะได้รับการดูแลอย่างมืออาชีพ
            รวมถึงการวิเคราะห์คำค้นหา (Keywords) การปรับปรุงความเร็วเว็บไซต์
            และการสร้างลิงก์ที่มีคุณภาพ
            สิ่งเหล่านี้จะช่วยเพิ่มประสิทธิภาพและความน่าเชื่อถือให้กับเว็บไซต์ของคุณในระยะยาว
            นอกจากนี้
            การอัปเดตเนื้อหาอย่างสม่ำเสมอจะช่วยให้ผู้เข้าชมกลับมาเยี่ยมชมเว็บไซต์ของคุณบ่อยขึ้น
            และเพิ่มโอกาสในการทำธุรกิจมากขึ้น
          </p>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row gap-4 py-8 mt-14  ">
        <div className="w-full">
          <h2 className="text-2xl">ข้อดีของการเลือกใช้บริการ SEO รายเดือน</h2>
          <p className="mt-4 text-sm text-gray-600 leading-normal">
            บริการ SEO
            รายเดือน นั้นมีข้อดีหลายประการที่สามารถช่วยธุรกิจของคุณเติบโตได้
            การดูแล SEO แบบต่อเนื่องทำให้คุณไม่ต้องกังวลเกี่ยวกับการทำ SEO
            ด้วยตัวเอง เพราะผู้เชี่ยวชาญ <Link href="/" className="link"> รับทำเว็บไซต์ ขอนแกน </Link> จะดูแลทุกขั้นตอนอย่างใกล้ชิด
            ซึ่งรวมถึงการวิเคราะห์คู่แข่ง การทำเนื้อหาที่ตรงกลุ่มเป้าหมาย
            และการปรับปรุงเว็บไซต์ให้เหมาะสมกับการใช้งานบนมือถือ
            การใช้บริการเหล่านี้ช่วยให้เว็บไซต์ธุรกิจของคุณสามารถติดอันดับในการค้นหาของ
            Google Search ได้อย่างมั่นคงและยาวนานแบบธรรมชาตินั่นเอง
          </p>
          <p className="mt-4 text-sm text-gray-600 leading-normal">
            นอกจากนี้ การดูแล SEO
            รายเดือนยังช่วยในการสร้างความน่าเชื่อถือให้กับแบรนด์หรือธุรกิจของคุณ
            การที่เว็บไซต์ของคุณปรากฏอยู่บนหน้าแรกของ Google Search
            จะช่วยให้ลูกค้ามองว่าแบรนด์หรือธุรกิจของคุณเป็นผู้นำในอุตสาหกรรมที่คุณทำอยู่
            ด้วยการดูแล SEO ที่ดีและต่อเนื่อง รวมไปถึงการรักษาระดับไม่ให้ตกอันดับ เมื่อมีเว็บไซต์คู่แข่ง
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
          การดูแล SEO
          รายเดือน เป็นการลงทุนที่คุ้มค่าสำหรับธุรกิจที่ต้องการเพิ่มโอกาสในการแข่งขันในโลกออนไลน์ และธุรกิจที่กำลังวางแผนกลยุทธ์ทางการตลาด
          ด้วยการปรับปรุงและดูแลเว็บไซต์บริษัทอย่างต่อเนื่อง
          คุณสามารถมั่นใจได้ว่าเว็บไซต์บริษัทของคุณจะมีประสิทธิภาพสูงสุดและได้รับการจัดอันดับที่ดีในเสิร์ชเอ็นจิน
          การเลือกใช้บริการดูแล SEO
          รายเดือน เราทีมงาน <Link href="/" className="link"> รับเขียนโปรแกรม ขอนแกน </Link> จะช่วยให้ธุรกิจของคุณเติบโตและได้รับผลตอบแทนที่ดีในระยะยาว
        </p>

      </section>
    </div>
  );
};

export default page;
