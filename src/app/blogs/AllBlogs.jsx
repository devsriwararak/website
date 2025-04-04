"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const AllBlogs = () => {
  const [data, setData] = useState([]);

  // Paginations
  const [pageStart, setPageStart] = useState(1);
  const [pageEnd, setPageEnd] = useState(1);
  const [search, setSearch] = useState("");

  const fetchData = async (page_start) => {
    try {
      const data = {
        page: page_start || 1,
        search: search,
      };
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_URL_API}/api/blogs/all`,
        data
      );
      console.log(res.data);

      if (res.status === 200) {
        setData(res.data.data);
        setPageStart(res.data.page);
        setPageEnd(res.data.totalPages);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleActions = (typePage) => {
    if (typePage === 1) {
      if (pageStart > 1) {
        fetchData(pageStart - 1);
      }
    } else {
      if (pageStart < pageEnd) {
        fetchData(pageStart + 1);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  return (
    <div className="mt-8">
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="ค้นหาบทความ"
        className=" px-8 py-1 rounded-md text-gray-600 border border-gray-400 w-full lg:w-96"
      />

      <div className="mt-6 flex flex-wrap">
        {data.map((item, index) => (
          <div className=" w-full md:w-1/2 lg:w-1/4 p-2 mt-2" key={item.id}>

            <Link href={`/blogs/list/${item.id}`}>
              <div className="bg-white shadow-lg border border-gray-100 rounded-md  h-full ">
                <div className="relative w-full h-48">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE}/${item.image}`}
                    layout="fill"
                    objectFit="cover"
                    alt={item.title}
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>

                <div className=" py-4 px-4">
                  <h3 className="text-sm  ">{item.title}</h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className=" mt-8 flex flex-row gap-2 justify-start items-center">
        <button
          onClick={() => handleActions(1)}
          className="bg-white border border-gray-100 hover:bg-gray-50 px-4 py-1 rounded-lg shadow-lg text-sm text-gray-700"
        >
          ก่อนหน้า
        </button>
        <p className="text-gray-500">
          หน้า {pageStart} / {pageEnd}
        </p>
        <button
          onClick={() => handleActions(2)}
          className="bg-white border border-gray-100 hover:bg-gray-50 px-4 py-1 rounded-lg shadow-lg text-sm text-gray-700"
        >
          ถัดไป
        </button>
      </div>
    </div>
  );
};

export default AllBlogs;
