"use client";
import classname from "classname";
import React, { useState } from "react";

const Accordion = () => {
  const [isActive, setIsActive] = useState({});

  const handleActive = (number) => {
    // setIsActive(!isActive);
    setIsActive((prev) => ({
      ...prev,
      [number]: !isActive[number],
    }));
  };
  return (
 
      <div  className=" shadow-xl flex flex-col gap-4 ">

        <div className=" border border-gray-200  shadow-lg rounded-lg py-2    ">
          <h3 className="mb-0" id="headingOne">
            <button
              className={classname(
                isActive.number1 ? "bg-purple-100 " : "bg-white text-neutral-800",
                "group  flex w-full items-center  border-0  px-5 py-4 text-left text-base  transition "
              )}
              type="button"
              data-te-collapse-init
              data-te-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
              onClick={() => handleActive("number1")}
            >
              1. โปรแกรม จะช่วยเพิ่มประสิทธิภาพในการทำงาน มากขึ้น
              <span
                className={`ml-auto h-5 w-5 shrink-0   fill-[#336dec] transition-transform duration-200  `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-7 w-7 bg-purple-700 text-white rounded-full p-0.5  "
                  
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h3>
          <div
            id="collapseOne"
            className={`!visible bg-white ${!isActive.number1 && "hidden"}  px-4`}
            data-te-collapse-item
            data-te-collapse-show
            aria-labelledby="headingOne"
            data-te-parent="#accordionExample"
          >
            <p className="px-5 py-4">
              <strong>โปรแกรม ที่ช่วยเพิ่มประสิทธิภาพในการทำงาน </strong>
              โปรแกรมช่วยให้ทุกอย่างทำงานแบบอัตโนมัติ
              และเพิ่มประสิทธิภาพในการทำงานของธุรกิจ
              ไม่ว่าจะเป็นการจัดการข้อมูลลูกค้า การบริหารจัดการคลังสินค้า
              หรือกระบวนการธุรกิจอื่น ๆ อยากมืออาชีพ 100%
            </p>
          </div>
        </div>
        

        {/* number 2 */}

        <div className="border  border-gray-200 rounded-lg py-2 shadow-lg  ">
          <h3 className="mb-0" id="headingTwo">
            <button
              className={` ${
                isActive.number2
                  ? "bg-purple-200   "
                  : "bg-white text-neutral-800"
              }group  flex w-full items-center e border-0  px-5 py-4 text-left text-base transition `}
              type="button"
              data-te-collapse-init
              data-te-collapse-collapsed
              data-te-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              onClick={() => handleActive("number2")}
            >
              2. วิเคราะห์ข้อมูล ถูกต้อง และแม่นยำ
              <span
                className={`ml-auto h-5 w-5 shrink-0   fill-[#336dec] transition-transform duration-200  `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-7 w-7 bg-purple-700 text-white rounded-full p-0.5  "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h3>
          <div
            id="collapseTwo"
            className={`!visible bg-white ${!isActive.number2 && "hidden"} px-4 `}
            data-te-collapse-item
            aria-labelledby="headingTwo"
            data-te-parent="#accordionExample"
          >
            <div className="px-5 py-4">
              <strong>ช่วยคุณวิเคราะห์ข้อมูลต่างๆ ตามที่ตั้งโปรแกรมไว้ </strong>
              ทำให้รู้จุดอ่อน จุดแข็ง และส่วนที่ต้องปรับปรุง
              เพื่อช่วยในการตัดสินใจทางธุรกิจ เช่น การทำนายแนวโน้มตลาด
              การวิเคราะห์ผลประกอบการ เป็นต้น
            </div>
          </div>
        </div>



        {/* number 3 */}
        <div className="border border-gray-200 py-2 rounded-lg shadow-lg  ">
          <h3 className="" id="headingThree">
            <button
              className={` ${
                isActive.number3
                  ? "bg-purple-200   "
                  : "bg-white text-neutral-800"
              }group  flex w-full items-center  px-5 py-4 text-left text-base transition `}
              type="button"
              data-te-collapse-init
              data-te-collapse-collapsed
              data-te-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              onClick={() => handleActive("number3")}
            >
              3. พัฒนาผลิตภัณฑ์และบริการให้ดีขึ้น
              <span
                className={`ml-auto h-5 w-5 shrink-0   fill-[#336dec] transition-transform duration-200  `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-7 w-7 bg-purple-700 text-white rounded-full p-0.5  "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h3>
          <div
            id="collapseThree"
            className={`!visible bg-white ${!isActive.number3 && "hidden"} px-4`}
            data-te-collapse-item
            aria-labelledby="headingThree"
            data-te-parent="#accordionExample"
          >
            <div className="px-5 py-4">
              <strong>โปรแกรมช่วยในกระบวนการวิจัยและพัฒนาผลิตภัณฑ์ </strong>
              ทำให้ธุรกิจสามารถสร้างผลิตภัณฑ์และบริการใหม่ ๆ
              ที่ถูกต้องและแม่นยำในการควบคุม และการผลิต
              มีคุณภาพ และตอบสนองต่อความต้องการของลูกค้ามากขึ้น
            </div>
          </div>
        </div>

        {/* number 4 */}
        <div className="border  border-gray-200  rounded-lg py-2 shadow-lg  ">
          <h3 className="accordion-header mb-0" id="headingFore">
            <button
              className={` ${
                isActive.number4
                  ? "bg-purple-200   "
                  : "bg-white text-neutral-800"
              }group  flex w-full items-center  px-5 py-4 text-left text-base transition `}
              type="button"
              data-te-collapse-init
              data-te-collapse-collapsed
              data-te-target="#collapseFore"
              aria-expanded="false"
              aria-controls="collapseFore"
              onClick={() => handleActive("number4")}
            >
              4. เพิ่มความปลอดภัย ทุกอย่างตรวจสอบได้
              <span
                className={`ml-auto h-5 w-5 shrink-0   fill-[#336dec] transition-transform duration-200  `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-7 w-7 bg-purple-700 text-white rounded-full p-0.5  "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h3>
          <div
            id="collapseFore"
            className={`!visible bg-white ${!isActive.number4 && "hidden"} `}
            data-te-collapse-item
            aria-labelledby="headingFore"
            data-te-parent="#accordionExample"
          >
            <div className="px-5 py-4">
              <strong>โปรแกรมช่วยในการจัดการความเสี่ยงและความปลอดภัยของธุรกิจ </strong> 
              ไม่ว่าจะเป็นการจัดการข้อมูลลูกค้าที่อยู่ในระบบ หรือตรวจสอบกระแสข้อมูลภายในองค์กรของตัวเอง ได้อย่างปลอดภัย
            </div>
          </div>
        </div>
      </div>
 
  );
};

export default Accordion;
