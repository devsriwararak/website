// app/posts/[id]/page.js

import axios from "axios";
import Image from "next/image";
import OtherBlogs from "../../OtherBlogs";

// สร้าง paths แบบ static สำหรับ posts ที่ต้องการ

export async function generateStaticParams() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_URL_API}/api/blogs/all/id`
  );
  return res?.data?.map((post) => ({
    id: post.id.toString(),
  }));
}

// สร้าง metadata แบบ dynamic สำหรับ SEO
export async function generateMetadata({ params }) {
  // ในที่นี้ใช้ข้อมูลตัวอย่าง โดยสามารถดึงข้อมูลจริงจาก API ได้
  const post = {
    id: params.id,
    title: `โพสต์ ${params.id}`,
    content: `เนื้อหาของโพสต์ ${params.id}`,
  };

  return {
    title: `${post.title} | My Blog`,
    description: post.content.substring(0, 160),
    alternates: {
      canonical: `https://www.example.com/posts/${post.id}`,
    },
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 160),
      url: `https://www.example.com/posts/${post.id}`,
      type: "article",
    },
  };
}

export default async function PostPage({ params }) {
  // สร้างข้อมูลโพสต์จาก params
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_URL_API}/api/blogs/${params.id}`
  );
  const data = await res.data;

  return (
    <>
      <div className=" px-6 lg:px-0 container mx-auto ">
        <div className="flex flex-col lg:flex-row gap-8">
          <section className="w-full lg:w-2/3">
            <div className="flex flex-row justify-center items-center ">
              {data.image && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE}/${data.image}`}
                  width={800}
                  height={800}
                  alt={`${data.title}`}
                  className="w-full rounded-md"
                />
              )}
            </div>

            <h1 className="text-xl lg:text-3xl mt-8">{data.title || ""}</h1>
            <p className="mt-3 text-lg text-gray-700">{data.description}</p>

            <div
              className="content  border border-gray-300 px-8 py-5 rounded-md mt-5"
              dangerouslySetInnerHTML={{ __html: data.content }}
            />
          </section>
          <section className="w-full lg:w-1/3  rounded-md  h-full bg-gray-100 px-4 py-4  ">
          <h2 className="text-2xl ">บทความที่เกี่ยวข้อง</h2>
      
          <div>
            <OtherBlogs id={params.id} />
          </div>
          </section>
        </div>
      </div>
    </>
  );
}
