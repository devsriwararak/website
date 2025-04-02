"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import ArticleEditor from "./ArticleEditor";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Pagination from "../components/Pagination";

const page = () => {
  // Systems
  const router = useRouter();

  // States
  const [data, setData] = useState([]);
  const [id , setId] = useState(0)

  // Pagination
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)

  const handleLogout = () => {
    Cookies.remove("auth_web_dev");
    router.replace("/");
  };

  const fetchData = async () => {
    try {
      const data = {
        page,
      };
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_URL_API}/api/blogs/all`,
        data
      );
      if (res.status === 200) {
        setData(res.data.data);
        setTotalPage(res.data.totalPages)
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleConfirmDelete = async(id)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "red",
      cancelButtonColor: "gray",
      confirmButtonText: "ลบ",
      cancelButtonText : "ยกเลิก"
    }).then(async(result) => {
      if (result.isConfirmed) {
       await handleDelete(id)
      }
    });
  }

  const handleDelete = async(id)=> {
    try {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_URL_API}/api/blogs/${id}`
      );
      if(res.status === 200){
        toast.success(res.data.message)
        fetchData()
      }
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    if(page) fetchData();
  }, [page]);
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
        <h2 className="text-xl">บทความทั้งหมด</h2>

        <div className="flex flex-row gap-4">
        <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={()=>router.refresh()}
          >
            เพิ่มใหม่
          </button>

          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
            onClick={handleLogout}
          >
            ออกแบบระบบ
          </button>

    

        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 mt-4">
        <div className="w-1/3">
          <ul className="border border-gray-400 px-4 py-2 rounded-md">
            {data?.map((item, index) => (
              <li className="flex flex-row gap-4 justify-between mt-4" key={index}>
                <div>
                  {item.title} {" "}
                </div>
                <div className="flex gap-1">
                  <button onClick={()=>setId(item.id)} className="bg-yellow-400 px-4  rounded-md">แก้ไข</button>
                  <button onClick={()=>handleConfirmDelete(item.id)} className="bg-red-500 text-white px-4  rounded-md">ลบ</button>
                </div>
              </li>
            ))}
          </ul>

          <Pagination page={page} setPage={setPage} totalPage={totalPage} />
        </div>

        <div className="w-2/3">
          <ArticleEditor id={id} fetchData={fetchData} />
        </div>
      </div>
    </div>
  );
};

export default page;
