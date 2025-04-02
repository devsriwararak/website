import React from 'react'
import Step from '../components/Step'

const Step4 = () => {
  return (
         <section className=" bg-gradient-to-r from-indigo-300 via-purple-200 to-pink-200 py-10 md:py-20 mt-16 lg:mt-28  ">
            <div className="container mx-auto px-6 md:px-20 lg:px-32">
              <div className="bg-white bg-opacity-25 py-10 rounded-xl px-2 lg:px-6 ">
                <h2 className=" text-center text-xl  lg:text-3xl mx-10  md:mx-14 lg:mx-0">
                  4 ขั้นตอนการจ้างงาน เขียนโปรแกรม รับทำเว็บไซต์ ขอนแก่น
                </h2>
                <p className="text-center mt-4 text-gray-500 text-base lg:text-lg px-10">
                  สรุป 4 ขั้นตอนง่ายๆ เพื่อพัฒนาโปรแกรมที่สมบูรณ์
                </p>
                <Step />
              </div>
            </div>
          </section>
  )
}

export default Step4