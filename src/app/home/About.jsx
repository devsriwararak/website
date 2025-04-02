import React from "react";
import Intro from "../components/Intro";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <section
        className="px-6 md:px-10 lg:px-32 py-10 container mx-auto  mt-6 md:mt-14    "
        id="web_1"
      >
        <h2 className="text-2xl md:text-3xl text-center">
          ออกแบบ{" "}
          <span className="text-purple-700 font-semibold">พัฒนาซอฟต์แวร์</span>{" "}
          ธุรกิจออนไลน์
        </h2>
        <p className="text-gray-500 mt-4 px-4 text-base lg:text-lg text-center">
          รับเขียนโปรแกรม รับทำเว็บไซต์ ขอนแก่น ให้เราดูแลคุณเรื่องการออกแบบ
          พัฒนาซอฟต์แวร์สำหรับธุรกิจที่แม่นยำ รวดเร็ว
          และปลอดภัย
        </p>

        <Intro />
      </section>

      {/* Image detail */}
      <section className=" mt-10 px-6 md:px-10 lg:px-32    container mx-auto">
        <h2 className="text-center text-xl lg:text-3xl ">
          เดินหน้าธุรกิจออนไลน์ของคุณ ให้มีรายได้มากกว่าเดิม{" "}
        </h2>
        <p className="text-gray-500 text-center mt-3 text-base lg:text-lg">
          {" "}
          ดูแลและพัฒนาซอฟต์แวร์หน้าบ้าน-หลังบ้าน{" "}
          <b className="text-purple-600 font-semibold text-base">
            จัดการระบบบริษัท
          </b>{" "}
          และองค์กรได้ง่ายขึ้น{" "}
        </p>
        <div className=" mt-8   flex justify-center py-4 ">
          <Image
            src="/images/about_thaibusinessmate_1.webp"
            width={800}
            height={800}
            alt="รับทำเว็บไซต์ ขอนแก่น"
            className="w-10/12 border-2 border-gray-200 rounded-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
