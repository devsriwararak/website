"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const AllContents = () => {
  const [data, setData] = useState([]);

  // Paginations
  const [pageStart, setPageStart] = useState(1);
  const [pageEnd, setPageEnd] = useState(1);
  const [search, setSearch] = useState("");

  const fetchData = async (page_start) => {
    try {
      const data = {
        website_id: 3,
        page: page_start || 1,
        search: search,
      };
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/api/blogs`,
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

  const handleSearch = (text) => {
    setTimeout(() => {
      setSearch(text);
    }, 3000);
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
    <div className="mt-16">
      <input
        onChange={(e) => handleSearch(e.target.value)}
        type="text"
        placeholder="ค้นหาบทความ"
        className="bg-purple-100 px-8 py-1 rounded-md text-purple-600 border border-purple-200 w-full lg:w-96"
      />

      <div className="mt-6 flex flex-wrap">
        {data.map((item, index) => (
          <div className=" w-full lg:w-1/4 p-2 mt-2" key={item.id}>
            <Link href={`/contents/${item.id}`}>
              <div className="bg-white shadow-lg border border-gray-100 rounded-md  h-full ">
          

                <div className="relative w-full h-48">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE}/${item.image}`}
                    layout="fill" 
                    objectFit="cover" 
                    alt={item.title}
                    className="w-full h-full"
                  />
                </div>

                <div className=" py-4 px-4">
                  <h3 className="text-sm  font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="text-black mt-8 flex flex-row gap-2 justify-center items-center">
        <button
          onClick={() => handleActions(1)}
          className="border border-gray-300 hover:bg-gray-200 px-4 py-1 rounded-lg text-sm"
        >
          ก่อนหน้า
        </button>
        <p className="text-black">
          หน้า {pageStart} / {pageEnd}
        </p>
        <button
          onClick={() => handleActions(2)}
          className="border border-gray-300 hover:bg-gray-200 px-4 py-1 rounded-lg text-sm"
        >
          ถัดไป
        </button>
      </div>
    </div>
  );
};

export default AllContents;
