import React from "react";
// import logo from "../../public/images/dev_sriwararak-รับทำเว็บไซต์-รับเขียนโปรแกรม-ขอนแก่น.webp";
// import banner from "../../public/images/banner.webp";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "เกี่ยวกับเรา รับเขียนโปรแกรม ทำเว็บไซต์ SEO ขอนแก่น",
  description:
    "เกี่ยวกับเรา Dev Sriwararak รับเขียนโปรแกรม รับออกแบบและทำเว็บไซต์ ขอนแก่น ทุกรูปแบบทุกธุรกิจ รับทำเว็บไซต์ SEO ทำให้ธุรกิจออนไลน์ของคุณ ติดอันดับการค้นหาใน Google Search",
  openGraph: {
    images:
      "https://devsriwararak.com/wp-content/uploads/2024/01/%E0%B8%94%E0%B8%B9%E0%B9%81%E0%B8%A5%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%82%E0%B8%B2%E0%B8%A2-%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1-%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99.webp",
  },
};

const page = () => {
  return (
    <div className="  md:px-10 lg:px-36 container mx-auto">
      <h1 className="text-2xl md:text-3xl text-center px-8 mt-12">
        เกี่ยวกับเรา รับเขียนโปรแกรม รับทำเว็บไซต์ SEO ขอนแก่น
      </h1>

      <div className=" mx-6 md:mx-20">
        <p className="text-gray-800 mt-8 text-sm">
          <strong>
            {" "}
            Dev Sriwararak{" "}
            <Link className="text-blue-500" href="/">
              รับเขียนโปรแกรม ทำเว็บไซต์ ขอนแก่น
            </Link>
          </strong>{" "}
          ทุกรูปแบบ ทุกธุรกิจ รับทำเว็บไซต์ SEO ทำให้ธุรกิจออนไลน์ของคุณ
          ติดอันดับการค้นหาใน Google Search
          ทำให้ผู้คนมองเห็นร้านค้าของคุณมากขึ้น สินค้าก็จะขายดีมากขึ้นนั่นเอง
          รับงานโดยทีม Freelance มืออาชีพ{" "}
        </p>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <h3 className="mt-8 text-md md:text-xl">ทีมผู้พัฒนาโปรแกรม และเว็บไซต์ SEO</h3>

          <div className="flex flex-row gap-2 mt-5 md:md-0">
            <Link href="/contact">
              <button className="bg-purple-700 text-sm hover:bg-purple-600 text-white rounded-full px-5 py-1.5">
                ติดต่อเรา
              </button>
            </Link>
            <Link href="/review">
              <button className="bg-gray-800 text-sm hover:bg-gray-700 text-white rounded-full px-5 py-1.5">
                ผลงานที่ผ่านมา
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row  gap-4 mt-5   ">
          <div className="w-full bg-white shadow-xl  lg:m-5 rounded-lg px-5 py-2 flex flex-col justify-center items-center ">
            <Image
              src="https://devsriwararak.com/wp-content/uploads/2024/08/27470352_7309689-removebg-preview.png"
              loading="lazy"
              width={300}
              height={300}
              alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
              className="w-full"
            />
            <p className="text-center">Frontend Dev</p>
          </div>
          <div className="w-full bg-white shadow-xl lg:m-5 ring ring-gray-300/5 rounded-lg px-5 py-2 flex flex-col justify-center items-center ">
            <Image
              src="https://devsriwararak.com/wp-content/uploads/2024/08/27470355_7309678-removebg-preview.png"
              loading="lazy"
              width={300}
              height={300}
              alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
              className="w-full"
            />
            <p className="text-center">Backend Dev</p>
          </div>
          <div className="w-full bg-white shadow-xl lg:m-5 ring ring-gray-300/5 rounded-lg px-5 py-2 flex flex-col justify-center items-center ">
            <Image
              src="https://devsriwararak.com/wp-content/uploads/2024/08/27470359_7309667-removebg-preview.png"
              loading="lazy"
              width={300}
              height={300}
              alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
              className="w-full"
            />
            <p className="text-center">Devops</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
