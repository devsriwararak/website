"use client"; // ถ้าใช้ Next.js 13+ ใน app directory

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { toast } from "react-toastify";

// ใช้ dynamic import สำหรับ react-quill เพื่อโหลดเฉพาะใน client side
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const ArticleEditor = ({ id, fetchData }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [keywords, setKeywords] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (image) {
      formData.append("image", image);
    }

    formData.append("id", id || 0);
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("content", content);
    formData.append("keywords", keywords);

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_URL_API}/api/blogs/add`,
        formData
      );
     if(res.status === 200){
      toast.success(res.data.message)
      fetchData()
      if(!id){
        setTitle("")
        setDesc("")
        setKeywords("")
        setContent("")
        setImage(null)
      }
    
     }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
    }
  };

  const fetchDataById = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_URL_API}/api/blogs/${id}`
      );
      if (res.status === 200) {
        console.log(res.data);
        setTitle(res.data.title);
        setDesc(res.data.description);
        setKeywords(res.data.keywords);
        setContent(res.data.content);
        setImage(res.data.image);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) fetchDataById();
  }, [id]);

  return (
    <div style={{ padding: "1rem", maxWidth: "800px", margin: "0 auto" }}>
      <form onSubmit={handleSubmit}>
        <div className="w-full">
          <label
            htmlFor="title"
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
            หัวข้อบทความ {id}
          </label>
          <input
            id="title"
            type="text"
            placeholder="ใส่หัวข้อบทความ"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-400 px-4 py-2 w-full rounded-md"
            required
          />
        </div>

        <div className="w-full mt-8">
          <label
            htmlFor="title"
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
            Desc
          </label>
          <input
            type="text"
            placeholder="ใส่หัวข้อบทความ"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="border border-gray-400 px-4 py-2 w-full rounded-md"
            required
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mt-8">
          <div className="w-full ">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="border border-gray-400 px-4 py-2 w-full rounded-md"
            />
          </div>

          <div className="w-full ">
            <input
              type="text"
              value={keywords}
              placeholder="keywords"
              onChange={(e) => setKeywords(e.target.value)}
              className="border border-gray-400 px-4 py-2 w-full rounded-md"
            />
          </div>
        </div>

        <div style={{ marginBottom: "1rem" }} className="mt-8">
          <label
            htmlFor="content"
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
            เนื้อหาบทความ
          </label>
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            placeholder="เขียนเนื้อหาบทความของคุณที่นี่..."
          />
        </div>

        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-1 rounded-md"
        >
          บันทึก
        </button>
      </form>
    </div>
  );
};

export default ArticleEditor;
