"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();



  const handleSubmit = async (e) => {
    e.preventDefault();
  // if (!username || !password) return toast.error('อย่ามาแอบเข้าสู่ระบบ !');

    // if (username === "admin" && password === "1234") {
    //     Cookies.set("auth_web_dev", "1", { expires: 1 }); //
    //     router.replace("/admin");
    // } else {
    //   toast.error('ไม่ถูกต้อง')
    // }

    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_URL_API}/api/auth/login`, {
        username, password
      })
      if(res.status === 200){
        toast.success(res.data.message)
        Cookies.set("auth_web_dev", "1", { expires: 1 });
        router.replace("/admin");
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
      
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
       
      <div className="border border-gray-300 shadow-lg rounded-md px-6 py-4 ">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            value={username || ""}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="border border-gray-400 px-4 py-2  rounded-md"
          />
          <input
            type="password"
            value={password || ""}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border border-gray-400 px-4 py-2  rounded-md "
          />
          <button className="bg-purple-700 text-white px-4 py-2 rounded-md" type="submit">เข้าสู่ระบบ</button>
        </form>
      </div>
    </div>
  );
};

export default page;
