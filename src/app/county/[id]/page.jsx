import React from "react";
import { data, data_step } from "../data.js";
import Image from "next/image";
import Link from "next/link";
import DisplayHome from "../../components/display/DisplayHome.jsx";

const fetchData = async (id) => {
  const res = data.find((item) => item.id === Number(id));
  return res;
};

const page = async ({ params }) => {
  const data = await fetchData(params.id);
  console.log(data);

  return (
    <div className="">
      <div className="flex flex-col md:flex-row gap-4 bg-gray-100 container mx-auto px-6 md:px-10 lg:px-36 -mt-20 py-20">
        <div className="w-full">
          <h1 className=" text-3xl">{data.title}</h1>
          <p className="mt-5 text-gray-500 text-sm">{data.dec_1}</p>
          <div className="mt-8 flex flex-row gap-4">
            <Link
              href="/county"
              className="bg-purple-700 hover:bg-purple-800 text-sm text-white px-4 py-1.5 rounded-md border border-purple-800  "
            >
              รับทำเว็บไซต์บริษัท ทุกจังหวัด
            </Link>

            <Link
              href="/pricing/website"
              className=" text-sm text-purple-800 hover:bg-purple-600 hover:text-white px-4 py-1.5 rounded-md border border-purple-800 "
            >
              อัตราค่าบริการ
            </Link>
          </div>
        </div>
        <div className="w-full">
          <Image
            src={data.image}
            width={700}
            height={700}
            alt={data.title}
            className="w-full rounded-md"
          />
        </div>
      </div>

      <section className="">
        <div className="flex flex-col md:flex-row gap-6 mt-14 justify-center items-center  container mx-auto px-6 md:px-10 lg:px-36">
          <div className="w-full lg:w-2/3">
            <h2 className="text-xl">{data.title} ได้อะไรบ้าง ?</h2>
            <p className="mt-5 text-gray-500 text-sm">
              เราให้บริการ {data.title} ดูแลการตลาดออนไลน์ให้ธุรกิจของคุณ
              ให้โดดเด่น เว็บสวยน่าเชื่อถือมากกว่าคู่แข่งในตลาด
              ช่วยเพิ่มการมองเห็น และดึงดูดลูกค้าเข้ามาใช้บริการ
            </p>

            <div className="flex flex-wrap mt-7 ">
              {data.result_why.map((item, index) => (
                <div className="lg:w-1/2 p-2 " key={item.id}>
                  <div className="bg-white  shadow-lg px-6 py-6 rounded-md border border-gray-100">
                    <h3 className="text-base">{item.title}</h3>
                    <p className="text-sm mt-3 text-gray-500">{item.dec}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <Image
              src="https://devsriwararak.com/wp-content/uploads/2024/09/DALL_E_2024-09-28_03.28.06_-_A_3D_rendered_image_showing_three_devices__a_computer_screen__a_tablet__and_a_mobile_phone__each_displaying_an_IT-themed_interface._The_computer_scree-removebg-preview.png"
              alt={data.title}
              width={700}
              height={700}
            />
            <div className="mt-8 w-full text-center">
              <Link
                href="/review"
                className="bg-purple-800 hover:bg-purple-700 text-white px-8 py-1 rounded-md"
              >
                ผลงานที่ผ่านมา
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 mt-16">
          <div className="container mx-auto px-6 md:px-10 lg:px-36 py-20">
            <h2 className="text-center text-xl">
              ขั้นตอนการจ้าง {data.title}{" "}
            </h2>
            <p className="mt-4 text-gray-500 text-center">xxxxxx</p>

            <div className="flex flex-wrap mt-12">
              {data_step.map((item, index) => (
                <div className="lg:w-1/4 text-center">
                  <div className="flex flex-col justify-center items-center">
                    {item.icons}
                    <h3 className="text-base mt-3">{item.title}</h3>
                    <p className="mt-2 text-gray-500 text-sm">{item.dec}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 container mx-auto px-6 md:px-10 lg:px-36 ">
          <DisplayHome />
        </div>
      </section>
    </div>
  );
};

export default page;
