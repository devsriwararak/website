import React from 'react'
import { FcOk } from "react-icons/fc";

const PriceWebsite = () => {
  return (
    <section className=" ">
    <h2 className=" text-2xl md:text-3xl text-left md:text-center">
      <span className="text-purple-700 font-semibold">ค่าบริการ </span>
      ทำเว็บไซต์ (เพื่อการตลาด)
    </h2>
    <p className="text-left md:text-center mt-4 text-gray-500 text-sm md:text-base ">
      <span className="text-purple-600">
        เลือกแพคเกจให้เข้ากับธุรกิจของคุณ
      </span>{" "}
      สำหรับบริการจ้างเขียนโปรแกรม สำหรับธุรกิจหรือองค์กรขนาดเล็ก กลาง ใหญ่
      ทุกธุรกิจ{" "}
    </p>
    <div className="flex flex-col justify-center items-center  lg:flex-row gap-6 lg:gap-1 mt-10 ">
      <div className="w-full bg-white  shadow-xl rounded-lg border border-purple-200 m-1    ">
        <div className="px-6 py-5">
          <h3 className="text-black text-md md:text-lg font-semibold mt-16 ">
            เว็บไซต์หน้าเดียว ( landing page )
          </h3>
          <p className="text-gray-600 mt-3 text-sm">
            ระยะเวลา 3 วัน สำหรับเว็บไซต์ขนาดเล็ก
          </p>

          <div className="flex  items-center flex-row gap-3 mt-8">
            <p className=" line-through text-gray-400 text-sm">
              เริ่มต้นที่ 6,500 บาท{" "}
            </p>
            <div className="bg-purple-100 px-2 py-1 rounded-full">
              <p className='text-gray-700 text-sm'>ประหยัด 8%</p>
            </div>
          </div>

          <h4 className="mt-4 text-xl md:text-2xl font-semibold">
            เริ่มต้นที่ 6,000 บาท
          </h4>
          <button className="mt-6 border-2 border-purple-300 w-full py-2 rounded-lg hover:bg-purple-100 text-purple-600 text-md md:text-lg font-semibold ">
            ติดต่อสอบถาม
          </button>
          <small className="text-purple-400">
            *ราคาไม่รวม Server Domain และอาจมีการเปลี่ยนแปลง
          </small>

          <hr className=" mt-6 border border-purple-200" />
          <ul className="md:px-4 py-5 text-xs md:text-sm">
            <li className="flex flex-row gap-4 items-center text-gray-500">
              {" "}
              <FcOk size={23} /> ออกแบบหน้าเว็บ + คอนเฟิร์มแบบ
            </li>
            <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
              {" "}
              <FcOk size={23} />
              หน้าเพจ 1 หน้า + บทความ (SEO)
            </li>
            <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
              {" "}
              <FcOk size={23} />
              รองรับบทความ สำหรับทำ SEO
            </li>
            <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
              {" "}
              <FcOk size={23} />
              ระบบจัดการหลังบ้าน 100%
            </li>
            <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
              {" "}
              <FcOk size={23} />
              ดูกราฟ GSC, GA{" "}
            </li>
            <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
              {" "}
              <FcOk size={23} />
              ใช้งานได้ทุกขนาดหน้าจอ{" "}
            </li>
            <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
              {" "}
              <FcOk size={23} />
              ดูแล 4 - 6 เดือน หรือตามตกลง{" "}
            </li>
            <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
              {" "}
              <FcOk size={23} />
              ต่ออายุ 2,000 บาท/ปี{" "}
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full bg-white  shadow-xl rounded-lg border border-purple-200 m-1    ">
        <div className=" text-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300 text-white py-3 rounded-t-lg text-xl">
          แพคเกจยอดนิยม
        </div>

        <div className="px-8 py-5 ">
          <h3 className="text-black text-md md:text-lg font-semibold mt-7 ">
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
              <p className='text-gray-600 text-sm'>ประหยัด 13%</p>
            </div>
          </div>

          <h4 className="mt-4 text-xl md:text-2xl font-semibold">
            เริ่มต้นที่ 13,000 บาท
          </h4>
          <button className="mt-6 border-2 border-purple-300 w-full py-2 rounded-lg bg-purple-600 text-white   hover:bg-purple-300  text-md md:text-lg font-semibold ">
            ติดต่อสอบถาม
          </button>
          <small className="text-purple-400">
            *ราคาไม่รวม Server Domain และอาจมีการเปลี่ยนแปลง
          </small>

          <hr className=" mt-6 border border-purple-200" />
          <ul className="md:px-4 py-5 text-xs md:text-sm">
            <li className="flex flex-row gap-4 items-center text-gray-500">
              {" "}
              <FcOk size={23} /> ออกแบบหน้าเว็บ + คอนเฟิร์มแบบ
            </li>
            <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
              {" "}
              <FcOk size={23} />
              หน้าเว็บ 5 หน้า + บทความ (SEO)
            </li>
            <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
              {" "}
              <FcOk size={23} />
              รองรับการใช้งาน 2 ภาษา 
            </li>
            <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
              {" "}
              <FcOk size={25} />
              จูน Performance SEO + ความเร็วเว็บ 
            </li>
            <li className="flex flex-row gap-4 items-center text-gray-500  mt-4 bg-purple-100 py-1 rounded-lg">
              {" "}
              <FcOk size={23} />
              ระบบจัดการหลังบ้าน 100%
            </li>
            <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
              {" "}
              <FcOk size={23} />
              ดูกราฟ GSC, GA
            </li>
            <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
              {" "}
              <FcOk size={23} />
              ใช้งานได้ทุกขนาดหน้าจอ
            </li>
            <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
              {" "}
              <FcOk size={23} />
              ดูแล 6 เดือน - 1 ปี หรือตามตกลง{" "}
            </li>
            <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
              {" "}
              <FcOk size={23} />
              ไม่มีต่ออายุ {" "}
            </li>

          </ul>
        </div>
      </div>

      <div className="w-full bg-white  shadow-xl rounded-lg border border-purple-200 m-1   ">
        <div className=" px-6 py-5">
          <h3 className="text-black text-md md:text-lg  font-semibold mt-16 ">
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
              <p className='text-gray-600 text-sm'>ประหยัด 17%</p>
            </div>
          </div>

          <h4 className="mt-4 text-xl md:text-2xl font-semibold">
            เริ่มต้นที่ 20,000 บาท
          </h4>
          <button className="mt-6 border-2 border-purple-300 w-full py-2 rounded-lg hover:bg-purple-100 text-purple-600 text-md md:text-lg font-semibold ">
            ติดต่อสอบถาม
          </button>
          <small className="text-purple-400">
            *ราคาไม่รวม Server Domain และอาจมีการเปลี่ยนแปลง
          </small>

          <hr className=" mt-6 border border-purple-200" />
          <ul className="md:px-4 py-5 text-xs md:text-sm">
            <li className="flex flex-row gap-4 items-center text-gray-500">
              {" "}
              <FcOk size={23} /> ออกแบบหน้าเว็บ + คอนเฟิร์มแบบ
            </li>
            <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
              {" "}
              <FcOk size={23} />
             ลงสินค้า ตะกร้าสินค้า + บทความ (SEO)
            </li>
            <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
              {" "}
              <FcOk size={23} />
              รองรับการใช้งาน 2 ภาษา 
            </li>
            <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
              {" "}
              <FcOk size={23} />
              จูน Performance SEO + ความเร็วเว็บ
            </li>
            <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
              {" "}
              <FcOk size={23} />
              ระบบจัดการหลังบ้าน 100%
            </li>
            <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
              {" "}
              <FcOk size={23} />
              ดูกราฟ GSC, GA{" "}
            </li>
            <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
              {" "}
              <FcOk size={23} />
              ดูรายงานยอดขายได้
            </li>
            <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
              {" "}
              <FcOk size={23} />
              ใช้งานได้ทุกขนาดหน้าจอ{" "}
            </li>
            <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
              {" "}
              <FcOk size={23} />
              ดูแล 6 เดือน - 1 ปี หรือตามตกลง{" "}
            </li>
            <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
              {" "}
              <FcOk size={23} />
              ไม่มีต่ออายุ {" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}

export default PriceWebsite