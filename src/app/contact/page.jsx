import Image from "next/image";
import React from "react";
import { SiFacebook, SiLine, SiTiktok } from "react-icons/si";
import { FaMobileScreenButton } from "react-icons/fa6";
import Link from "next/link";



export const metadata = {
  title: "ติดต่อเรา ปรึกษาเรื่องเขียนโปรแกรม ปัญหาเกี่ยวกับการทำเว็บไซต์ SEO ขอนแก่น",
  description:
    "Thai Business Mate รับออกแบบเขียนโปรแกรม และทำเว็บไซต์เพื่อการตลาดทุกธรุกิจที่ต้องการสร้างความน่าเชื่อถือให้กับร้านค้าและบริการ",
  keywords:
    "ติดต่อเรา ปรึกษาเรื่องเขียนโปรแกรม ปัญหาเกี่ยวกับการทำเว็บไซต์ SEO ขอนแก่น",
  robots: "index, follow",
  alternates: {
    canonical: "https://web.thaibusinessmate.com/contact",
  },
  openGraph: {
    title: "ติดต่อเรา ปรึกษาเรื่องเขียนโปรแกรม ปัญหาเกี่ยวกับการทำเว็บไซต์ SEO ขอนแก่น",
    description:
      "Dev Sriwararak รับออกแบบเขียนโปรแกรม และทำเว็บไซต์เพื่อการตลาดทุกธรุกิจที่ต้องการสร้างความน่าเชื่อถือให้กับร้านค้าและบริการ",
    url: "https://web.thaibusinessmate.com/contact",
    images: [
      {
        url: "https://web.thaibusinessmate.com/images/review_3.webp",
        width: 800,
        height: 600,
        alt: "ติดต่อเรา ปรึกษาเรื่องเขียนโปรแกรม ปัญหาเกี่ยวกับการทำเว็บไซต์ SEO ขอนแก่น",
      },
    ],
    siteName: "ติดต่อเรา ปรึกษาเรื่องเขียนโปรแกรม ปัญหาเกี่ยวกับการทำเว็บไซต์ SEO ขอนแก่น",
    locale: "th_TH",
    type: "website",
  },
};

const Page = () => {

  return (
    <div className=" -mt-20">
      <div className="bg-purple-500 py-16 w-full  ">
        <div className="flex flex-col md:flex-row gap-4 px-10 lg:px-36 items-center container mx-auto ">
          <div className="w-full">
            <h1 className="text-2xl md:text-3xl text-white">ติดต่อเรา</h1>
            <p className="mt-2 text-gray-200 text-lg">
              Thai Business Mate รับออกแบบเขียนโปรแกรม
              และทำเว็บไซต์เพื่อการตลาดทุกธรุกิจ
              ที่ต้องการสร้างความน่าเชื่อถือให้กับร้านค้าและบริการ
            </p>
          </div>
          <div className="w-full flex justify-center ">
            <Image
              src="/images/banner_thaibusinessmate_1.webp"
              loading="lazy"
              width={200}
              height={130}
              alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
              className=""
            />
          </div>
        </div>
      </div>

      {/* card */}
      <div className="container mx-auto px-6 md:px-36" >
        <div className="bg-white shadow-2xl  py-10 px-10  -mt-10 rounded-lg flex flex-col lg:flex-row gap-4 ">
          <div className="w-full">
            <h3 className="text-lg">ช่องทางติดต่อ</h3>
            <ul className="text-base text-gray-800 mt-3">
              <Link
                href="https://www.facebook.com/dev.sriwararak"
                target="_bank"
              >
                <li className="flex gap-2 ">
                  {" "}
                  <SiFacebook size={21} /> Facebook
                </li>
              </Link>

              <Link href="tel:0850032649">
                <li className="flex gap-2 mt-4">
                  {" "}
                  <FaMobileScreenButton size={21} /> 085-003-2649 (คุณนาย)
                </li>
              </Link>

              <Link href="https://line.me/ti/p/KMjKL3G9qz" target="_bank">
                <li className="flex gap-2 mt-4">
                  {" "}
                  <SiLine size={21} /> LINE ติดต่อสอบถาม
                </li>
              </Link>

              <Link
                href="https://www.tiktok.com/@dev_sriwararak"
                target="_bank"
              >
                <li className="flex gap-2 mt-4 ">
                  {" "}
                  <SiTiktok size={21} /> Tiktok
                </li>
              </Link>
            </ul>

            <div className="mt-4">
              <small>
                Tag :
                <Link href="/" className="bg-gray-100 px-2 py-1 rounded-sm">
                  รับเขียนโปรแกรม ขอนแก่น
                </Link>
                <Link href="/" className="bg-gray-100 px-2 py-1 rounded-sm">
                  รับทำเว็บไซต์ SEO ขอนแก่น
                </Link>
              </small>
            </div>
          </div>

          <div className="w-full">
            <h3 className="text-lg">ส่งข้อความถึงเรา</h3>

            <input
              type="text"
              className="mt-3 px-3 m-1  py-1.5 rounded-lg  border border-gray-300 hover:bg-gray-100 "
              placeholder="email"
            />
            <input
              type="text"
              className="mt-3 px-3 m-1  py-1.5 rounded-lg  border border-gray-300 hover:bg-gray-100 "
              placeholder="ข้อความ"
            />

            <div>
              <button  className="bg-purple-700 rounded-full text-white px-4 text-sm py-1.5 mt-3 hover:bg-purple-600">
                ส่งข้อความ
              </button>
            </div>
          </div>

          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122451.89499528571!2d102.73769009428068!3d16.444027413245077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3122602b91988e2f%3A0x93f0805cf799cc6!2z4LmA4LiX4Lio4Lia4Liy4Lil4LiZ4LiE4Lij4LiC4Lit4LiZ4LmB4LiB4LmI4LiZIOC4reC4s-C5gOC4oOC4reC5gOC4oeC4t-C4reC4h-C4guC4reC4meC5geC4geC5iOC4mSDguILguK3guJnguYHguIHguYjguJkgNDAwMDA!5e0!3m2!1sth!2sth!4v1704959255635!5m2!1sth!2sth"
              // width="600"
              // height="450"
              // style="border:0;"

              loading="lazy"
              className=" rounded-lg w-full h-48"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
