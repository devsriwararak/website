"use client";
import React, { useEffect, useState } from "react";

const CalculatePriceWeb = () => {
  const [price, setPrice] = useState(0);
  const [selectData, setSelectData] = useState({
    typeWeb: "",
    statusWeb: 0,
    page: 5,
    style: 1,
  });

  const handleChage = (e) => {
    setSelectData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCalculate = () => {
    let calculatedPrice = 0;

    if (selectData.typeWeb) {
      calculatedPrice = 10000;
    }

    if (selectData.statusWeb === "1") {
      calculatedPrice += 5000;
    } else if (selectData.statusWeb === "2") {
      calculatedPrice += 10000;
    }

    if (selectData.page > 5) {
      const extraPages = selectData.page - 5;
      calculatedPrice += extraPages * 500;
    } else {
      calculatedPrice += 0;
    }

    if (selectData.style === "2") {
      calculatedPrice += 3000;
    }

    setPrice(calculatedPrice);
  };

  useEffect(() => {
    handleCalculate();
  }, [selectData]);
  return (
    <div>
      <h2 className="text-3xl">เลือกตัวเลือกทำเว็บไซต์ ตามความต้องการ</h2>
      <div className="border border-gray-300 mt-10 px-4 py-10 rounded-md">
        <div className=" flex flex-col lg:flex-row gap-8 justify-center items-end">
          <div className="w-1/3">
            <p className="text-gray-700">1. เลือกประเภทเว็บไซต์</p>
            <select
              value={selectData?.typeWeb}
              name="typeWeb"
              onChange={(e) => handleChage(e)}
              className=" w-full border border-gray-400 px-4 py-1 rounded-md mt-3"
            >
              <option value="">เลือก</option>
              <option value="1">เว็บไซต์บริษัท</option>
              <option value="2">เว็บไซต์ส่วนตัว</option>
              <option value="3">เว็บไซต์ข่าว</option>
              <option value="4">เว็บไซต์การศึกษา</option>
              <option value="5">เว็บบันเทิง</option>
            </select>
          </div>

          <div className="w-1/3">
            <p className="text-gray-700"></p>
            <h3 className="text-3xl">
              ราคา {Number(price || 0).toLocaleString()} บาท
            </h3>
            <p className="text-sm text-red-700">
              ราคาจะมีการเปลี่ยนแปลง กำลังทดสอบระบบ
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-start mt-10 ">
          <div className="w-1/3 ">
            <p className="text-gray-700">2. เลือกรูปแบบเว็บไซต์</p>
            <div className="border border-gray-400 px-4 py-4   rounded-md mt-4">
              <div className="flex items-center mb-4">
                <input
                  //   checked={selectData.statusWeb === 1}
                  type="radio"
                  value={1}
                  name="statusWeb"
                  onChange={(e) => handleChage(e)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-1"
                  className="ms-2 text-base font-medium text-gray-900  "
                >
                  เว็บไซต์ SEO (ค้นหาเจอใน Google)
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  value={2}
                  name="statusWeb"
                  onChange={(e) => handleChage(e)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-1"
                  className="ms-2 text-base font-medium text-gray-900  "
                >
                  เว็บไซต์ SEO + เว็บไซต์ขายของ (E-commerce)
                </label>
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <p className="text-gray-700">
              3. เลือกจำนวนหน้า (เริ่มต้นที่ 5 หน้า)
            </p>
            <input
              type="number"
              min="5"
              value={selectData?.page}
              name="page"
              onChange={(e) => handleChage(e)}
              className=" w-full border border-gray-400 px-4 py-1 rounded-md mt-3"
            />

            <p className="text-gray-700 mt-4">
              4. เลือกความแตกต่างของหน้าเว็บไซต์ (หลังจากหน้าแรก)
            </p>
            <select
              value={selectData?.style}
              name="style"
              onChange={(e) => handleChage(e)}
              className=" w-full border border-gray-400 px-4 py-1 rounded-md mt-3"
            >
              <option value="1">หน้าเว็บไซต์ Default ตามโครงสร้างของเรา</option>
              <option value="2">หน้าเว็บไซต์ แต่ละหน้าเลือกเองได้</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatePriceWeb;
