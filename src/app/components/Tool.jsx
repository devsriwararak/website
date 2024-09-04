import React from 'react'
import { FaCode, FaServer  } from "react-icons/fa6";

const Tool = () => {
  return (
    <div className="mt-8 flex flex-col md:flex-row gap-4">
    <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1 rounded-sm flex flex-row gap-2 items-center">
      {" "}
      <FaCode size={19} /> เครื่องมือที่ใช้พัฒนา
    </button>
    <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1 rounded-sm flex flex-row gap-2 items-center">
    <FaServer  size={18} />
      ผู้ให้บริการยอดนิยม
    </button>
  </div>
  )
}

export default Tool