import Image from 'next/image'
import React from 'react'
import Accordion from '../components/Accordion'

const Faq = () => {
  return (
    <section className="mt-20 md:mt-32 container mx-auto px-6 md:px-10 lg:px-36">
    <h2 className="text-center text-xl lg:text-3xl">
      <span className="font-semibold text-purple-700">
        FAQ คำถามที่พบบ่อย
      </span>{" "}
      เกี่ยวกับการเขียนโปรแกรม และทำเว็บไซต์บริษัท
    </h2>

    <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mt-8 md:mt-12  ">
      <div className="w-full ">
        <Accordion />
        </div>

      <div className="w-full  block mt-4 ">
        <div className="flex justify-center items-center">
          <Image
            src="/images/FAQ.png"
            loading="lazy"
            width={1000}
            height={1000}
            className=" rounded-lg w-64 md:w-full block "
            alt="ขอขอบคุณลูกค้า รับเขียนโปรแกรม รับทำเว็บไซต์"
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Faq