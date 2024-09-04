import React from "react";
import Tool from "../../components/Tool";

export const metadata = {
  manifest: "/manifest.json",
  title:
    "ราคาค่าบริการ รับจ้างพัฒนาเว็บไซต์ขนาดใหญ่ SEO สำหรับบริษัทที่กำลังเติบโตทางการตลาด",
  description:
    "ราคาค่าบริการ พัฒนาเว็บไซต์ขนาดใหญ่ รองรับSEO เต็มรูปแบบด้วยการทำงานของ SSR ทำให้หน้าเว็บโหลดเร็วขึ้นมากเป็นที่ต้องการของบริษัทที่กำลังเติบโตทางการตลาด ",
  keywords:
    "ราคาค่าบริการพัฒนาเว็บไซต์ขนาดใหญ่ , ราคาค่าบริพัฒนาเว็บไซต์ขนาดใหญ่ รองรับ SEO , ราคาค่าบริการพัฒนาเว็บไซต์ขนาดใหญ่ ขอนแก่น   ",
  openGraph: {
    images:
      "https://devsriwararak.com/wp-content/uploads/2024/08/banner-1.webp",
  },
};

import {
  FaRegHandshake,
  FaStore,
  FaCheck,
  FaX,
  FaXmark,
} from "react-icons/fa6";
import { FaToolbox } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    id: 0,
    package: "",
    icons: <FaRegHandshake size={40} />,
    title: "เว็บไซต์สำหรับบริษัท",
    description:
      "เว็บ Blogs ลงบทความเพื่อการตลาด ทำให้ค้นหาเจอบน Google ทุกธุรกิจ",
    price_old: 22000,
    price_new: 20000,
    result: [
      { id: 0, detail: "ออกแบบหน้าเว็บไซต์ และคอนเฟิร์มแบบ", status: true },
      { id: 1, detail: "รองรับการทำงาน 2 ภาษา TH ENG", status: true },
      { id: 2, detail: "ระบบหลังบ้านแบบครอบคลุม ", status: true },
      { id: 3, detail: "ระบบจัดการเนื้อหา CMS ใช้งานง่าย ", status: true },
      { id: 4, detail: "ลงบทความ SEO ", status: true },
      { id: 5, detail: "ระบบจัดการสินค้า ", status: false },
      { id: 6, detail: "ระบบจัดการคำสั่งซื้อ ", status: false },
      { id: 7, detail: "รองรับการชำระเงินออนไลน์ ", status: false },
      { id: 8, detail: " ระบบแจ้งเตือนการสั่งซื้อและชำระเงิน", status: false },
      { id: 9, detail: " รองรับการเชื่อมต่อกับระบบขนส่ง", status: false },
      { id: 10, detail: " ดูรายงานยอดขายแบบคลอบคลุม", status: false },
      { id: 11, detail: "ใช้งานพร้อมกันได้หลายคน", status: false },
    ],
  },
  {
    id: 1,
    package: "",
    icons: <FaToolbox size={35} />,
    title: "เว็บไซต์ขนาดเล็ก-กลาง",
    description:
      "สำหรับเว็บไซต์บริษัทที่มีความซับซ้อน และต้องการทำ SEO โดยเฉพาะ",
    price_old: 44000,
    price_new: 40000,
    result: [
      { id: 0, detail: "ออกแบบหน้าเว็บไซต์ และคอนเฟิร์มแบบ", status: true },
      { id: 1, detail: "รองรับการทำงาน 2 ภาษา TH ENG", status: true },
      { id: 2, detail: "ระบบหลังบ้านแบบครอบคลุม ", status: true },
      { id: 3, detail: "ระบบจัดการเนื้อหา CMS ใช้งานง่าย ", status: true },
      { id: 4, detail: "ลงบทความ SEO ", status: true },
      { id: 5, detail: "ระบบจัดการสินค้า ", status: true },
      { id: 6, detail: "ระบบจัดการคำสั่งซื้อ ", status: true },
      { id: 7, detail: "รองรับการชำระเงินออนไลน์ ", status: true },
      { id: 8, detail: " ระบบแจ้งเตือนการสั่งซื้อและชำระเงิน", status: true },
      { id: 9, detail: " รองรับการเชื่อมต่อกับระบบขนส่ง", status: false },
      { id: 10, detail: " ดูรายงานยอดขายแบบคลอบคลุม", status: true },
      { id: 11, detail: "ใช้งานพร้อมกันได้หลายคน", status: false },
    ],
  },
  {
    id: 2,
    package: "",
    icons: <FaStore size={35} />,
    title: "เว็บไซต์ขนาดใหญ่",
    description:
      "เว็บขายของพร้อมระบบชำระเงิน สามารถใช้งานได้หลาย User พร้อมกัน",
    price_old: 65000,
    price_new: 60000,
    result: [
      { id: 0, detail: "ออกแบบหน้าเว็บไซต์ และคอนเฟิร์มแบบ", status: true },
      { id: 1, detail: "รองรับการทำงาน 2 ภาษา TH ENG", status: true },
      { id: 2, detail: "ระบบหลังบ้านแบบครอบคลุม ", status: true },
      { id: 3, detail: "ระบบจัดการเนื้อหา CMS ใช้งานง่าย ", status: true },
      { id: 4, detail: "ลงบทความ SEO ", status: true },
      { id: 5, detail: "ระบบจัดการสินค้า ", status: true },
      { id: 6, detail: "ระบบจัดการคำสั่งซื้อ ", status: true },
      { id: 7, detail: "รองรับการชำระเงินออนไลน์ ", status: true },
      { id: 8, detail: " ระบบแจ้งเตือนการสั่งซื้อและชำระเงิน", status: true },
      { id: 9, detail: " รองรับการเชื่อมต่อกับระบบขนส่ง", status: true },
      { id: 10, detail: " ดูรายงานยอดขายแบบคลอบคลุม", status: true },
      { id: 11, detail: "ใช้งานพร้อมกันได้หลายคน", status: true },
    ],
  },
];

const page = () => {
  return (
    <div className="lg:px-10">
      <h2 className=" text-xl md:text-3xl text-left md:text-center">
        <span className="text-purple-700 font-semibold">ค่าบริการ </span>
        พัฒนาเว็บไซต์ขนาดใหญ่
      </h2>
      <p className="text-left md:text-center mt-4 text-gray-500 text-sm md:text-base ">
        <span className="text-purple-600">
          สำหรับเว็บไซต์บริษัทที่มีความซับซ้อน
        </span>{" "}
        มีระบบจัดการหน้าบ้าน-หลังบ้านให้ครบจบ โหลดหน้าเว็บเร็วกว่า
        ปรับแต่งได้ง่ายกว่า รองรับการใช้งานจำนวนมาก{" "}
      </p>

      <Tool />

      <section className="flex flex-wrap mt-10  lg:mt-14">
        {data.map((item, index) => (
          <div className="w-full  lg:w-1/3 py-8 lg:p-2 ">
            <div
              className={`bg-white shadow-xl rounded-md  py-6 px-6 ${
                index === 1
                  ? "border-t-4 border-purple-600"
                  : "border border-gray-100"
              }`}
            >
              <div className="flex flex-row gap-4 justify-between items-center">
                <h3 className="text-lg font-semibold text-purple-400 text-center">
                  {item.title}
                </h3>

                <div className="flex justify-center -mt-16 ">
                  <div className="bg-purple-100 w-fit rounded-full p-3 ">
                    <div className="text-purple-700">{item.icons}</div>
                  </div>
                </div>
              </div>

              <p className="mt-3 text-sm text-gray-500">{item.description}</p>

              <div className="flex flex-row gap-4 items-center justify-start mt-4">
                <p className="text-xl md:text-2xl font-semibold">
                  {item.price_new.toLocaleString()} บาท
                </p>
                <p className="text-gray-300 line-through text-sm">
                  {" "}
                  ลดจาก {item.price_old.toLocaleString()} บาท
                </p>
              </div>

              <hr className=" my-4 border border-purple-100" />

              <p className="text-sm  text-gray-400">รายละเอียด</p>

              <ul className="flex flex-col gap-2 mt-3 pl-3">
                {item.result.map((list, index) => (
                  <li className="flex flex-row gap-3 items-center">
                    {" "}
                    {list.status ? (
                      <FaCheck size={18} color="green" />
                    ) : (
                      <FaXmark size={19} color="red" />
                    )}{" "}
                    <p
                      className={`text-sm ${
                        list.status ? "text-gray-500" : "text-red-500"
                      }`}
                    >
                      {list.detail}
                    </p>
                  </li>
                ))}
              </ul>

              <p className="text-sm mt-4  text-gray-400">ระบบ</p>

              <ul className="flex flex-col gap-2 mt-3 pl-3 text-gray-500 text-sm">
                <li className="flex flex-row gap-3 items-center">
                  {" "}
                  <FaCheck size={18} color="green" />
                  ฟรีโดเมน + Server 1 ปี{" "}
                </li>
                <li className="flex flex-row gap-3 items-center">
                  {" "}
                  <FaCheck size={18} color="green" />
                  โหมด SSR โหลดหน้าเว็บเร็วขึ้น{" "}
                </li>
                <li className="flex flex-row gap-3 items-center">
                  {" "}
                  <FaCheck size={18} color="green" />
                  SSL เพิ่มความปลอดภัยให้เว็บไซต์{" "}
                </li>
                <li className="flex flex-row gap-3 items-center">
                  {" "}
                  <FaCheck size={18} color="green" />
                  ปรับแต่งรองรับ SEO ครบวงจร{" "}
                </li>
                <li className="flex flex-row gap-3 items-center">
                  {" "}
                  <FaCheck size={18} color="green" />
                  Responsive ใช้งานได้ทุกหน้าจอ{" "}
                </li>
                <li className="flex flex-row gap-3 items-center">
                  {" "}
                  <FaCheck size={18} color="green" />
                  ต่ออายุเริ่มต้น 3,000 บาท/ปี{" "}
                </li>
              </ul>

              <hr className=" my-4 border border-purple-100" />

              <button
                className={`mt-2 w-full border border-purple-500 text-purple-600 rounded-sm py-1 hover:bg-purple-700 hover:text-white ${
                  index === 1
                    ? "bg-purple-700 hover:bg-purple-800 text-white"
                    : ""
                }`}
              >
                ติดต่อเรา
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* หมายเหตุ */}
      <section className="mt-4">
        <b className="">หมายเหตุ</b>
        <p className="text-sm text-gray-500 mt-2">
          ระยะเวลาในการพัฒนาเว็บไซต์อยู่ที่ 1-2 เดือน
          ทั้งระบบหน้าบ้านและหลังบ้าน โดยนับจากลูกค้าส่งข้อมูลให้เรา
          และทีมงานออกแบบหน้าเว็บไซต์บริษัทเพื่อส่งตรวจแก้ไขและคอนเฟิร์มแบบ 1
          อาทิตย์ สามารถแก้งานออกแบบ และงานทำเว็บไซต์ได้ อย่างละ 2 ครั้ง รวมแล้ว
          4 ครั้ง หากมีการแก้ไขอื่นๆ ที่ไม่ใช่ Layout
          รูปแบบเว็บตามที่ตกลงกันจะมีค่าบริการ แถมฟรีโดเมน และ Server สำหรับ 1
          ปีแรกเท่านั้น ในแพคเกจเริ่มต้นชำระ 3,000 บาท/ปี
          กรณีลูกค้าลงข้อมูลเป็นจำนวนมาก และจำเป็นจะต้องอัพเดทขนาดของ Server
          ราคาจะเปลี่ยนไปตามแพคเกจที่ลูกค้าอัพเดทและรวมค่าดำเนินการ
          โดยทางเราจะแจ้งให้ทราบก่อนทุกครั้ง
        </p>
      </section>

      {/* บทความ */}
      <section className="flex flex-col lg:flex-row gap-4 py-8 mt-14  ">
        <div className="w-full">
          <Image
            src="https://devsriwararak.com/wp-content/uploads/2024/09/31164763_7753459-removebg-preview.webp"
            width={500}
            height={500}
            alt="พัฒนาเว็บไซต์บริษัทขนาดใหญ่"
            loading="lazy"
          />
        </div>
        <div className="w-full">
          <h2 className="text-2xl">
            พัฒนาเว็บไซต์บริษัทขนาดใหญ่ สำคัญกับธุรกิจยังไง
          </h2>
          <p className="mt-4 text-sm text-gray-600 leading-normal">
            การพัฒนาเว็บไซต์ขนาดใหญ่สำหรับบริษัท เป็นหนึ่งในความท้าทายที่ต้องการความเชี่ยวชาญและความรู้เชิงลึกในด้านเทคโนโลยี
            การออกแบบเว็บไซต์ขนาดใหญ่ไม่เพียงแค่เกี่ยวกับการสร้างระบบหน้าบ้าน
            (Frontend Ux/Ui) ที่สวยงามและใช้งานง่าย
            แต่ยังรวมถึงการวางโครงสร้างระบบหลังบ้าน (Backend)
            บริษัทที่ต้องการพัฒนาเว็บไซต์ขนาดใหญ่จำเป็นต้องมีการวางแผนและจัดการทรัพยากรอย่างเหมาะสม
            เพื่อให้เว็บไซต์ที่พัฒนาขึ้นสามารถรองรับการขยายตัวในอนาคต และ SEO สำหรับการตลาดได้อย่างไม่จำกัด
          </p>
          <p className="mt-4 text-sm text-gray-600 leading-normal">
            การออกแบบและพัฒนาเว็บไซต์บริษัทขนาดใหญ่ยังต้องคำนึงถึงความปลอดภัยและประสิทธิภาพในการทำงานของระบบ
            เว็บไซต์องค์กรขนาดใหญ่ต้องมีการจัดการข้อมูลที่ซับซ้อน
            รวมถึงการเชื่อมต่อกับระบบต่าง ๆ ที่มีความสำคัญต่อการดำเนินธุรกิจ
            การเลือกใช้เทคโนโลยีที่เหมาะสม เช่น Next.js และ Node.js
            จะช่วยให้เว็บไซต์มีความเสถียรและรวดเร็วในการให้บริการแก่ผู้ใช้งาน
            นอกจากนี้ <Link href="/" className="link"> รับทำ seo ขอนแก่น </Link>
            ยังเป็นสิ่งจำเป็นเพื่อให้เว็บไซต์ของบริษัทปรากฏในอันดับต้น
            ๆ ของผลการค้นหา เพิ่มโอกาสในการเข้าถึงลูกค้าใหม่ และยอดขายที่มากขึ้น
          </p>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row gap-4 py-8 mt-0  ">
        <div className="w-full">
          <h2 className="text-2xl">เว็บไซต์ SSR โหลดหน้าเว็บเร็บ รองรับ SEO</h2>
          <p className="mt-4 text-sm text-gray-600 leading-normal">
            สำหรับการพัฒนาเว็บไซต์ขนาดใหญ่
            จำเป็นต้องมีทีมพัฒนาที่มีความเชี่ยวชาญและเข้าใจในความต้องการของธุรกิจอย่างแท้จริง
            โซลูชันเว็บไซต์สำหรับองค์กรขนาดใหญ่ควรมีการวิเคราะห์ความต้องการของผู้ใช้
            เพื่อรองรับปริมาณการเข้าถึงที่สูงได้โดยไม่เกิดปัญหา
            เว็บไซต์ระดับองค์กรต้องมีการคำนึงถึงการจัดการเนื้อหาที่ง่ายและรวดเร็ว
            รวมถึงการรองรับหลายภาษาและการทำงานร่วมกับระบบที่ซับซ้อน <Link href="/" className="link"> รับทำเว็บไซต์ ขอนแก่น </Link>
          </p>
          <p className="mt-4 text-sm text-gray-600 leading-normal">
            นอกจากนี้
            เว็บไซต์องค์กรขนาดใหญ่ ยังต้องมีความยืดหยุ่นในการปรับปรุงและอัปเกรดระบบตามความต้องการที่เปลี่ยนแปลงไป
            การพัฒนาเว็บแอปพลิเคชันขนาดใหญ่ที่มีประสิทธิภาพสูงจะช่วยให้บริษัทสามารถให้บริการลูกค้าได้อย่างต่อเนื่อง
            ด้วยการใช้เทคโนโลยีที่ทันสมัย
            เว็บไซต์บริษัทขนาดใหญ่สามารถสร้างความประทับใจให้กับลูกค้าและเพิ่มขีดความสามารถในการแข่งขันในตลาดได้เป็นอย่างดี
          </p>
        </div>

        <div className="w-full">
          <Image
            src="https://devsriwararak.com/wp-content/uploads/2024/09/31164754_7744158-removebg-preview.webp"
            width={500}
            height={500}
            alt="พัฒนาเว็บไซต์บริษัทขนาดใหญ่"
            loading="lazy"
          />
        </div>
      </section>

      <section className="py-8 mt-0">
        <h2 className="text-2xl">
          บทสรุป รับพัฒนาเว็บไซต์สำหรับธุรกิจขนาดใหญ่
        </h2>
        <p className="mt-4 text-sm text-gray-600 leading-normal">
        <Link href="/" className="link"> รับเขียนโปรแกรม ขอนแก่น </Link> ขอแนะนำการพัฒนาเว็บไซต์ขนาดใหญ่สำหรับบริษัทเป็นกระบวนการที่ต้องใช้ความรู้ความสามารถในหลายด้าน
          ทั้งการออกแบบ การพัฒนา และการจัดการระบบ
          ให้เว็บไซต์ของคุณมีประสิทธิภาพสูง ปลอดภัย
          และ SEO รองรับการขยายตัวในอนาคต 
          
        </p>
      </section>
    </div>
  );
};

export default page;
