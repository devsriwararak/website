import React from "react";
import logo from "../../public/images/dev_sriwararak-รับทำเว็บไซต์-รับเขียนโปรแกรม-ขอนแก่น.webp";
import banner from "../../public/images/banner.webp";
import Image from "next/image";

export const metadata = {
  title: "เกี่ยวกับเรา รับเขียนโปรแกรม ทำเว็บไซต์ SEO ขอนแก่น",
  description:
    "เกี่ยวกับเรา Dev Sriwararak รับเขียนโปรแกรม รับออกแบบและทำเว็บไซต์ ขอนแก่น ทุกรูปแบบทุกธุรกิจ รับทำเว็บไซต์ SEO ทำให้ธุรกิจออนไลน์ของคุณ ติดอันดับการค้นหาใน Google Search",
  openGraph: {
    images: logo,
  },
};

const page = () => {
  return (
    <div className="    md:px-10">
      <h1 className="text-2xl md:text-3xl text-center px-8 mt-12">
        เกี่ยวกับเรา รับเขียนโปรแกรม รับทำเว็บไซต์ SEO ขอนแก่น
      </h1>

      <div className="flex flex-col justify-center  lg:flex-row gap-4 mt-10 mx-10 md:mx-20">
        <div className="w-full">
          <p className="text-gray-800">
            <strong>
              {" "}
              Dev Sriwararak รับเขียนโปรแกรม รับออกแบบและทำเว็บไซต์ ขอนแก่น
            </strong>{" "}
            ทุกรูปแบบ ทุกธุรกิจ รับทำเว็บไซต์ SEO ทำให้ธุรกิจออนไลน์ของคุณ
            ติดอันดับการค้นหาใน Google Search
            ทำให้ผู้คนมองเห็นร้านค้าของคุณมากขึ้น สินค้าก็จะขายดีมากขึ้นนั่นเอง{" "}
          </p>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <h3 className="mt-8 text-xl">ทีมผู้พัฒนาโปรแกรม</h3>

            <div className="flex flex-col md:flex-row gap-2 mt-5 md:md-0">
              <button className="bg-purple-700 text-sm hover:bg-purple-600 text-white rounded-full px-5 py-1.5">
                ติดต่อเรา
              </button>
              <button className="bg-gray-800 text-sm hover:bg-gray-700 text-white rounded-full px-5 py-1.5">
                ผลงานที่ผ่านมา
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-5 ">
            <div className="w-full bg-white shadow-lg rounded-lg px-5 py-5 ">
              <Image
                src={banner}
                loading="lazy"
                width={300}
                height={400}
                alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
              />
              <p className="text-center">Frontend Dev</p>
            </div>
            <div className="w-full bg-white shadow-lg rounded-lg px-5 py-5 ">
              <Image
                src={banner}
                loading="lazy"
                width={300}
                height={400}
                alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
              />
              <p className="text-center">Backend Dev</p>
            </div>
            <div className="w-full bg-white shadow-lg rounded-lg px-5 py-5 ">
              <Image
                src={banner}
                loading="lazy"
                width={300}
                height={400}
                alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
              />
              <p className="text-center">Devops</p>
            </div>
          </div>
        </div>
        <div className="w-full block ">
          <div className="flex justify-center ">
            <Image
              src={logo}
              loading="lazy"
              width={300}
              height={400}
              alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
