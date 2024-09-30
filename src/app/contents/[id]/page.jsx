"use server";
import axios from "axios";
import Image from "next/image";
import React from "react";
import parse from "html-react-parser";
import DisplayHome from "../../components/display/DisplayHome";

const fetchData = async (id) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API}/api/blogs/${id}`
    );
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const generateMetadata = async ({ params }) => {
  if (!params || !params.id) {
    return {};
  }
  const data = await fetchData(params.id);
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [`${process.env.NEXT_PUBLIC_IMAGE}/${data.image}`],
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/blogs/${params.id}`,
      type: "article",
    },
  };
};

const page = async ({ params }) => {
  const data = await fetchData(params.id);

  return (
    <>
      <div className="container mx-auto px-6 md:px-10 lg:px-36   ">
        <div className="flex flex-col justify-center ">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE}/${data.image}`}
            width={500}
            height={500}
            loading="lazy"
            className="w-[800px] rounded-md mx-auto"
          />
        </div>
        <div className="mt-8 md:mt-12 lg:mt-20">
          <h1 className=" text-xl md:text-3xl font-semibold">{data.title}</h1>
          <p className="mt-4 text-gray-700 text-sm md:text-lg">
            {data.description}
          </p>

          <div className="mt-8 text-gray-500 text-lg custom-container">
            {parse(data.content)}
          </div>
        </div>
      </div>

      {/* บทความที่เกี่ยวข้อง */}
      <div className="container mx-auto px-6 md:px-10 lg:px-36">
        <DisplayHome id={params.id} limit={5} />
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-36 mt-16 ">
        <div className="text-center bg-purple-900 py-14 text-xl text-white rounded-md">
          ADS SPACE
        </div>
      </div>
    </>
  );
};

export default page;
