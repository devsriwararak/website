import React from "react";
import { FcOk, FcCancel } from "react-icons/fc";
import {
  AiFillCloseCircle,
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlineStop,
} from "react-icons/ai";

const PriceWebsite = () => {
  return (
    <section className=" ">
      <h2 className=" text-xl md:text-3xl text-left md:text-center">
        <span className="text-purple-700 font-semibold">ค่าบริการ </span>
        ทำเว็บไซต์ (เพื่อการตลาด)
      </h2>
      <p className="text-left md:text-center mt-4 text-gray-500 text-sm md:text-base ">
        <span className="text-purple-600">
          เลือกแพคเกจเว็บไซต์ให้เข้ากับธุรกิจของคุณ
        </span>{" "}
        สำหรับเว็บไซต์การตลาดที่ต้องการเพิ่มยอดขายบนโลกออนไลน์
        ด้วยรูปแบบเว็บที่ทันสมัย{" "}
      </p>
      <div className="flex flex-col justify-center items-center  lg:flex-row gap-6 lg:gap-1 mt-10 ">
        {/* card 1 */}
        <div className="w-full bg-white  shadow-xl rounded-lg border border-purple-200 m-1    ">
          <div className="px-6 py-3 mt-6 lg:mt-0 ">
            <h3 className="text-gray-900 text-md md:text-lg  font-semibold lg:mt-16 ">
              เว็บไซต์หน้าเดียว ( landing page )
            </h3>
            <p className="text-gray-600 mt-3 text-sm">
              ระยะเวลา 3 วัน สำหรับเว็บไซต์ขนาดเล็ก
            </p>

            <div className="flex flex-col items-start md:items-center lg:flex-row gap-3 mt-8">
              <p className=" line-through text-gray-400 text-sm">
                เริ่มต้นที่ 6,500 บาท{" "}
              </p>
              <div className="bg-purple-100 px-2 py-1 rounded-full">
                <p className="text-gray-600 text-sm">ประหยัด 8%</p>
              </div>
            </div>

            <h4 className="mt-4 text-xl md:text-2xl font-semibold">
              เริ่มต้นที่ 6,000 บาท
            </h4>
            <button className="mt-6 border-2 border-purple-300 w-full py-2 rounded-lg hover:bg-purple-100 text-purple-600 text-md  font-semibold ">
              ติดต่อสอบถาม
            </button>
            <small className="text-purple-400">
              *ราคาไม่รวม Server Domain และอาจมีการเปลี่ยนแปลง
            </small>

            <hr className=" mt-6 border border-purple-200" />

            <ul className="md:px-2 py-5 text-xs md:text-sm">
              <li className="flex flex-row gap-4 items-center text-gray-500">
                {" "}
                <FcOk size={21} /> ออกแบบหน้าเว็บ + คอนเฟิร์มแบบ
              </li>
              <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
                {" "}
                <FcOk size={21} />
                หน้าเพจ 1 หน้า + บทความ (SEO)
              </li>
              <li className="flex flex-row gap-4 items-center text-red-500  mt-4">
                {" "}
                <AiOutlineClose color="red" size={21} />
                รองรับการใช้งาน 2 ภาษา TH ENG
              </li>
              <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
                {" "}
                <FcOk size={21} />
                จูน Performance SEO + ความเร็วเว็บ
              </li>
              <li className="flex flex-row gap-4 items-center text-red-500  mt-4 ">
                {" "}
                <AiOutlineClose color="red" size={21} />
                ระบบจัดการหลังบ้าน 100%
              </li>
              <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
                {" "}
                <FcOk size={21} />
                ดูกราฟ GSC, GA วิเคาะห์ยอดขาย{" "}
              </li>
              <li className="flex flex-row gap-4 items-center text-red-500  mt-4">
                {" "}
                <AiOutlineClose color="red" size={21} />
                ดูรายงานยอดขายได้
              </li>
              <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
                {" "}
                <FcOk size={21} />
                ใช้งานได้ทุกขนาดหน้าจอ{" "}
              </li>
              <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
                {" "}
                <FcOk size={21} />
                ดูแล 4 - 6 เดือน หรือตามตกลง{" "}
              </li>
              <li className="flex flex-row gap-4 items-center text-red-500  mt-4">
                {" "}
                <AiOutlineClose color="red" size={21} />
                คู่มือสอนแก้ไข จุดที่แก้ไขได้เอง{" "}
              </li>
              <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
                {" "}
                <FcOk size={21} />
                ต่ออายุ 2,000 บาท/ปี{" "}
              </li>
            </ul>
          </div>
        </div>

        {/* card 2 */}
        <div className="w-full bg-white  shadow-xl rounded-lg border border-purple-200 m-1    ">
          <div className=" text-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300 text-white py-3 rounded-t-lg text-xl">
            แพคเกจยอดนิยม
          </div>

          <div className="px-6 py-5 ">
            <h3 className="text-gray-900 text-md md:text-lg font-semibold mt-7 ">
              เว็บไซต์ 5 หน้า ( เพิ่มความน่าเชื่อถือ )
            </h3>
            <p className="text-gray-600 mt-3 text-sm">
              ระยะเวลาไม่เกิน 2 อาทิตย์ (หลังคอนเฟิร์มแบบ)
            </p>

            <div className="flex flex-col items-start md:items-center lg:flex-row gap-3 mt-8">
              <p className=" line-through text-gray-400 text-sm ">
                เริ่มต้นที่ 15,000 บาท{" "}
              </p>
              <div className="bg-purple-100 px-2 py-1 rounded-full">
                <p className="text-gray-600 text-sm">ประหยัด 13%</p>
              </div>
            </div>

            <h4 className="mt-4 text-xl md:text-2xl font-semibold">
              เริ่มต้นที่ 13,000 บาท
            </h4>
            <button className="mt-6 border-2 border-purple-300 w-full py-2 rounded-lg bg-purple-600 text-white   hover:bg-purple-300  text-md font-semibold ">
              ติดต่อสอบถาม
            </button>
            <small className="text-purple-400">
              *ราคาไม่รวม Server Domain และอาจมีการเปลี่ยนแปลง
            </small>

            <hr className=" mt-6 border border-purple-200" />
            <ul className="md:px-2 py-5 text-xs md:text-sm">
              <li className="flex flex-row gap-4 items-center text-gray-500">
                {" "}
                <FcOk size={21} /> ออกแบบหน้าเว็บ + คอนเฟิร์มแบบ
              </li>
              <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
                {" "}
                <FcOk size={21} />
                รูปแบบเว็บ 5 หน้า + บทความ (SEO)
              </li>
              <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
                {" "}
                <FcOk size={21} />
                รองรับการใช้งาน 2 ภาษา TH ENG
              </li>
              <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
                {" "}
                <FcOk size={21} />
                จูน Performance SEO + ความเร็วเว็บ
              </li>
              <li className="flex flex-row gap-4 items-center text-gray-500  mt-4 bg-purple-100 py-2 rounded-md">
                {" "}
                <FcOk size={21} />
                ระบบจัดการหลังบ้าน 100%
              </li>
              <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
                {" "}
                <FcOk size={21} />
                ดูกราฟ GSC, GA วิเคาะห์ยอดขาย{" "}
              </li>
              <li className="flex flex-row gap-4 items-center text-red-500  mt-4">
                {" "}
                <AiOutlineClose color="red" size={21} />
                ดูรายงานยอดขายได้
              </li>
              <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
                {" "}
                <FcOk size={21} />
                ใช้งานได้ทุกขนาดหน้าจอ{" "}
              </li>
              <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
                {" "}
                <FcOk size={21} />
                ดูแล 6 เดือน - 1 ปี หรือตามตกลง{" "}
              </li>
              <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
                {" "}
                <FcOk size={21} />
                คู่มือสอนแก้ไข จุดที่แก้ไขได้เอง{" "}
              </li>
              <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
                {" "}
                <FcOk size={21} />
                ไม่มีต่ออายุรายปี{" "}
              </li>
            </ul>
          </div>
        </div>

        {/* card 3 */}
        <div className="w-full bg-white  shadow-xl rounded-lg border border-purple-200 m-1   ">
          <div className=" px-6 py-3 mt-6">
            <h3 className="text-gray-900 text-md md:text-lg  font-semibold lg:mt-16 ">
              เว็บไซต์ Ecommerce (เว็บไซต์ขายของ)
            </h3>
            <p className="text-gray-600 mt-3 text-sm">
              ระยะเวลาไม่เกิน 2 อาทิตย์ (หลังคอนเฟิร์มแบบ)
            </p>

            <div className="flex flex-col items-start md:items-center lg:flex-row gap-3 mt-8">
              <p className=" line-through text-gray-400 text-sm">
                เริ่มต้นที่ 24,000 บาท{" "}
              </p>
              <div className="bg-purple-100 px-2 py-1 rounded-full">
                <p className="text-gray-600 text-sm">ประหยัด 17%</p>
              </div>
            </div>

            <h4 className="mt-4 text-xl md:text-2xl font-semibold">
              เริ่มต้นที่ 20,000 บาท
            </h4>
            <button className="mt-6 border-2 border-purple-300 w-full py-2 rounded-lg hover:bg-purple-100 text-purple-600 text-md  font-semibold ">
              ติดต่อสอบถาม
            </button>
            <small className="text-purple-400">
              *ราคาไม่รวม Server Domain และอาจมีการเปลี่ยนแปลง
            </small>

            <hr className=" mt-6 border border-purple-200" />
            <ul className="md:px-2 py-5 text-xs md:text-sm">
              <li className="flex flex-row gap-4 items-center text-gray-500">
                {" "}
                <FcOk size={21} /> ออกแบบหน้าเว็บ + คอนเฟิร์มแบบ
              </li>
              <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
                {" "}
                <FcOk size={21} />
                ลงสินค้า ตะกร้าสินค้า + บทความ (SEO)
              </li>
              <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
                {" "}
                <FcOk size={21} />
                รองรับการใช้งาน 2 ภาษา TH ENG
              </li>
              <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
                {" "}
                <FcOk size={21} />
                จูน Performance SEO + ความเร็วเว็บ
              </li>
              <li className="flex flex-row gap-4 items-center text-gray-500  mt-4 bg-purple-100 py-2 rounded-md">
                {" "}
                <FcOk size={21} />
                ระบบจัดการหลังบ้าน 100%
              </li>
              <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
                {" "}
                <FcOk size={21} />
                ดูกราฟ GSC, GA วิเคาะห์ยอดขาย{" "}
              </li>
              <li className="flex flex-row gap-4 items-center text-gray-500  mt-4 bg-purple-100 py-2 rounded-md">
                {" "}
                <FcOk size={21} />
                ดูรายงานยอดขายได้
              </li>
              <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
                {" "}
                <FcOk size={21} />
                ใช้งานได้ทุกขนาดหน้าจอ{" "}
              </li>
              <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
                {" "}
                <FcOk size={21} />
                ดูแล 6 เดือน - 1 ปี หรือตามตกลง{" "}
              </li>
              <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
                {" "}
                <FcOk size={21} />
                คู่มือสอนแก้ไข จุดที่แก้ไขได้เอง{" "}
              </li>
              <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
                {" "}
                <FcOk size={21} />
                ไม่มีต่ออายุรายปี{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceWebsite;
