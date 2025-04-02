import React from "react";
import Image from "next/image";
import Link from "next/link";



export const metadata = {
  title: "เกี่ยวกับเรา รับเขียนโปรแกรม ทำเว็บไซต์ SEO ขอนแก่น",
  description:
    "เกี่ยวกับเรา รับเขียนโปรแกรม รับออกแบบและทำเว็บไซต์ ขอนแก่น ทุกรูปแบบทุกธุรกิจ รับทำเว็บไซต์ SEO ทำให้ธุรกิจออนไลน์ของคุณ ติดอันดับการค้นหาใน Google Search",
  keywords:
    "เกี่ยวกับเรา รับเขียนโปรแกรม ทำเว็บไซต์ SEO ขอนแก่น",
  robots: "index, follow",
  alternates: {
    canonical: "https://web.thaibusinessmate.com/about",
  },
  openGraph: {
    title: "เกี่ยวกับเรา รับเขียนโปรแกรม ทำเว็บไซต์ SEO ขอนแก่น",
    description:
      "เกี่ยวกับเรา รับเขียนโปรแกรม รับออกแบบและทำเว็บไซต์ ขอนแก่น ทุกรูปแบบทุกธุรกิจ รับทำเว็บไซต์ SEO ทำให้ธุรกิจออนไลน์ของคุณ ติดอันดับการค้นหาใน Google Search",
    url: "https://web.thaibusinessmate.com/about",
    images: [
      {
        url: "https://web.thaibusinessmate.com/images/review_3.webp",
        width: 800,
        height: 600,
        alt: "เกี่ยวกับเรา รับเขียนโปรแกรม ทำเว็บไซต์ SEO ขอนแก่น",
      },
    ],
    siteName: "เกี่ยวกับเรา รับเขียนโปรแกรม ทำเว็บไซต์ SEO ขอนแก่น",
    locale: "th_TH",
    type: "website",
  },
};

const Page = () => {
  return (
    <div className="   lg:px-36 container mx-auto">
      <h1 className="text-2xl md:text-3xl text-center px-8 mt-12">
        เกี่ยวกับเรา รับเขียนโปรแกรม รับทำเว็บไซต์บริษัท SEO ขอนแก่น
      </h1>

      <div className=" mx-6 md:mx-20">
        <p className="text-gray-600 mt-8 text-base lg:text-lg">
        Thai Bussiness Mate
          <strong>
            {" "}
            <Link className="text-purple-600" href="/">
              รับเขียนโปรแกรม ทำเว็บไซต์ ขอนแก่น
            </Link>
          </strong>{" "}
          ทุกรูปแบบ ทุกธุรกิจ รับทำเว็บไซต์ SEO ทำให้ธุรกิจออนไลน์ของคุณ
          ติดอันดับการค้นหาใน Google Search
          ทำให้ผู้คนมองเห็นร้านค้าของคุณมากขึ้น สินค้าก็จะขายดีมากขึ้นนั่นเอง
          รับงานโดยทีมงานมืออาชีพ{" "}
        </p>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
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
              src="/images/thaibusinessmate_about_me_1.webp"
              width={300}
              height={300}
              alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
              className="w-full rounded-md"
            />
            <p className="text-center mt-4 text-xl">Frontend Dev</p>
          </div>
          <div className="w-full bg-white shadow-xl lg:m-5 ring ring-gray-300/5 rounded-lg px-5 py-2 flex flex-col justify-center items-center ">
            <Image
              src="/images/thaibusinessmate_about_me_1.webp"
              loading="lazy"
              width={300}
              height={300}
              alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
              className="w-full"
            />
            <p className="text-center mt-4 text-xl">Backend Dev</p>
          </div>
          <div className="w-full bg-white shadow-xl lg:m-5 ring ring-gray-300/5 rounded-lg px-5 py-2 flex flex-col justify-center items-center ">
            <Image
              src="/images/thaibusinessmate_about_me_1.webp"
              loading="lazy"
              width={300}
              height={300}
              alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
              className="w-full"
            />
            <p className="text-center mt-4 text-xl">Devops / Maintenance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
