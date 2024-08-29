import React from 'react'
import { FcOk } from "react-icons/fc";

const PriceProgram = () => {
  return (
    <section className=" ">
    <h2 className=" text-2xl md:text-3xl text-left md:text-center">
      <span className="text-purple-700 font-semibold">ค่าบริการ </span>
      จ้างเขียนโปรแกรมทุกบริษัท
    </h2>
    <p className="text-left md:text-center mt-4 text-gray-500 text-sm md:text-base ">
      <span className="text-purple-600">
        พัฒนาโปรแกรม
      </span>{" "}
      เพื่อตอบโจทย์ และลดการทำงานในบริษัทของคุณ สำหรับธุรกิจหรือองค์กรขนาดเล็ก กลาง ใหญ่
      ทุกธุรกิจ{" "}
    </p>
    <div className="flex flex-col justify-center items-center  lg:flex-row gap-6 lg:gap-1 mt-10 ">

      <div className="w-full bg-white  shadow-xl rounded-lg border border-purple-200 m-1    ">
        <div className="px-6 py-5">
          <h3 className="text-black text-md md:text-lg font-semibold mt-16 ">
            โปรแกรมขนาดเล็ก ช่วยวิเคราะห์บันทึก
          </h3>
          <p className="text-gray-600 mt-3 text-sm">
            สร้างเว็บไซต์การตลาดที่มีความซับซ้อน หรือพัฒนาฟีเจอเล็กๆ เพื่อให้การทำงานง่ายขึ้น
          </p>

          <div className="flex  items-center flex-row gap-3 mt-8">
            <p className=" line-through text-sm text-gray-400">
              เริ่มต้นที่ 9,500 บาท{" "}
            </p>
            <div className="bg-purple-100 px-2 py-1 rounded-full">
              <p className='text-gray-600 text-sm'>ประหยัด 6%</p>
            </div>
          </div>

          <h4 className="mt-4 text-xl md:text-2xl font-semibold">
            เริ่มต้นที่ 9,000 บาท
          </h4>
          <button className="mt-6 border-2 border-purple-300 w-full py-2 rounded-lg hover:bg-purple-100 text-purple-600 text-md md:text-lg font-semibold ">
            ติดต่อสอบถาม
          </button>
          <small className="text-purple-400">
            *ราคาไม่รวม Server Domain และอาจมีการเปลี่ยนแปลง
          </small>

          <hr className=" mt-6 border border-purple-200" />
          <ul className="md:px-4 py-5 text-xs md:text-sm">
        
            <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
              {" "}
              <FcOk size={23} />
              สำหรับเว็บไซต์ที่มีความซับซ้อน
            </li>
            
            <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
              {" "}
              <FcOk size={23} />
              สำหรับเว็บไซต์ที่ต้องการลูกเล่นมากๆ
            </li>
            <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
              {" "}
              <FcOk size={23} />
              พัฒนาโปรแกรมขนาดเล็ก ช่วยในการทำงาน
            </li>
            <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
              {" "}
              <FcOk size={23} />
              พัฒนาตัวช่วยที่ตอบโจทย์ ในการทำงาน
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
          </ul>
        </div>
      </div>

      <div className="w-full bg-white  shadow-xl rounded-lg border border-purple-200 m-1    ">
        <div className=" text-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300 text-white py-3 rounded-t-lg text-xl">
          แพคเกจยอดนิยม
        </div>

        <div className="px-8 py-5 ">
          <h3 className="text-black text-md md:text-lg font-semibold mt-7 ">
            โปรแกรมขนาดกลาง สำหรับองค์กร
          </h3>
          <p className="text-gray-600 mt-3 text-sm">
            พัฒนาโปรแกรมสำหรับธุรกิจที่ต้องการเครื่องมือ หรือตัวช่วยที่สะดวก
            รวดเร็ว และแม่นยำในการทำงาน
          </p>

          <div className="flex flex-col items-start md:items-center lg:flex-row gap-3 mt-8">
            <p className=" line-through text-gray-400 text-sm ">
              เริ่มต้นที่ 23,000 บาท{" "}
            </p>
            <div className="bg-purple-100 px-2 py-1 rounded-full">
              <p className='text-gray-600 text-sm'>ประหยัด 13%</p>
            </div>
          </div>

          <h4 className="mt-4 text-xl md:text-2xl font-semibold">
            เริ่มต้นที่ 20,000 บาท
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
              <FcOk size={23} /> สำหรับองค์กร หรือบริษัทขนาดเล็ก
            </li>

            <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
              {" "}
              <FcOk size={23} />
              ปรึกษาพูดคุยออกแบบระบบ
            </li>

            <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
              {" "}
              <FcOk size={23} />
              ช่วยลดการทำงานของพนักงาน
            </li>
            <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
              {" "}
              <FcOk size={25} />
              ช่วยเตือน ช่วยวิเคาะห์ และคำนวณ
            </li>
            <li className="flex flex-row gap-4 items-center text-gray-500  mt-4 bg-purple-100 py-1 rounded-lg">
              {" "}
              <FcOk size={23} />
              ใช้งานพร้อมกันได้หลายยูสเซอร์
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
          </ul>
        </div>
      </div>

      <div className="w-full bg-white  shadow-xl rounded-lg border border-purple-200 m-1   ">
        <div className=" px-6 py-5">
          <h3 className="text-black text-md md:text-lg font-semibold mt-16 ">
            โปรแกรมบริหารจัดการธุรกิจขนาดใหญ่
          </h3>
          <p className="text-gray-600 mt-3 text-sm">
            สร้างเว็บไซต์การตลาดที่มีความซับซ้อน หรือโปรแกรมขนาดเล็ก
            เป็นตัวช่วยที่ดีในการทำงาน
          </p>

          <div className="flex flex-col items-start md:items-center lg:flex-row gap-3 mt-8">
            <p className=" line-through text-gray-400 text-sm">
              เริ่มต้นที่ 60,000 บาท{" "}
            </p>
            <div className="bg-purple-100 px-2 py-1 rounded-full">
              <p className='text-gray-600 text-sm'>ประหยัด 17%</p>
            </div>
          </div>

          <h4 className="mt-4 text-xl md:text-2xl font-semibold">
            เริ่มต้นที่ 50,000 บาท
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
              <FcOk size={23} /> สำหรับองค์กร หรือบริษัทขนาดใหญ่
            </li>
            <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
              {" "}
              <FcOk size={23} />
              ปรึกษาพูดคุยออกแบบระบบ
            </li>
            <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
              {" "}
              <FcOk size={23} />
              พัฒนาโปรแกรมตามความต้องการของลูกค้า
            </li>
            <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
              {" "}
              <FcOk size={23} />
              ช่วยวิเคาะห์ ลดการทำงาน รายงาน
            </li>
            <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
              {" "}
              <FcOk size={23} />
              ปรับตั้งค่าระบบได้เอง ลดความซ้ำซ้อน
            </li>
            <li className="flex flex-row gap-4 items-center text-gray-500  mt-4">
              {" "}
              <FcOk size={23} />
              Super Admin Full System
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
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}

export default PriceProgram