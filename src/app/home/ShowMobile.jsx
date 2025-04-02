import Image from "next/image";
import React from "react";
import { HiMiniCpuChip, HiMiniGlobeAsiaAustralia, HiMiniPresentationChartLine, HiMiniServerStack, HiMiniShieldExclamation, HiMiniUserGroup } from "react-icons/hi2";

const ShowMobile = () => {
  return (
    <div>
      <h2 className=" mt-20 lg:mt-32 text-center text-2xl lg:text-3xl px-10 lg:px-0">
        ทำไมธุรกิจ{" "}
        <span className="font-semibold text-purple-700">สมัยใหม่</span>{" "}
        ต้องมีโปรแกรม หรือ เว็บไซต์ เป็นของตัวเอง ?
      </h2>
      <section className="flex flex-col md:flex-row gap-2 lg:gap-10  mt-10  container mx-auto px-10 lg:px-36  ">
        <div className=" w-full lg:w-2/3 flex flex-col items-center justify-center gap-10   ">
          <div className="flex  flex-row gap-4 ">
            <HiMiniPresentationChartLine className="" size={49} />
            <div>
              <h3 className=" text-xl ">1. ช่วยเพิ่มยอดขาย</h3>
              <p className="text-gray-500 text-base lg:text-lg  mt-1">
                ผู้คนจำนวนมากบนโลกออนไลน์ เห็นร้านค้าของคุณมากขึ้น
                ทำให้ผู้คนเข้ามาชมสินค้าในร้านมากขึ้น
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-4 ">
            <HiMiniServerStack className="" size={40} />
            <div>
              <h3 className="text-xl  ">
                2. จัดเก็บข้อมูลเป็นระบบ
              </h3>
              <p className="text-gray-500 text-base lg:text-lg mt-1">
                โปรแกรมจะจัดเก็บข้อมูลและเอกสารให้อย่างปลอดภัย
                สามารถค้นหาย้อนหลังได้ ไม่หายไปไหน
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-4 ">
            <HiMiniShieldExclamation className="" size={42} />
            <div>
              <h3 className="text-xl ">3. ลดการทำงานที่ซ้ำซ้อน</h3>
              <p className="text-gray-500 text-base lg:text-lg mt-1">
                โปรแกรมถูกตั้งคำสั่งให้ทำงานอย่างเป็นระบบ ตามที่ลูกค้าต้องการ
                ทำงานเสร็จเร็ว ไม่ทำงานซ้ำ{" "}
              </p>
            </div>
          </div>
        </div>
        <div className=" w-full md:w-2/3 lg:w-1/3 flex justify-center py-5 md:py-0  ">
          <Image
            src="/images/mobile.png"
            width={150}
            height={80}
            loading="lazy"
            className="w-32 md:w-full"
            alt="รับเขียนโปรแกรม ขอนแก่น รับทำเว็บไซต์ SEO ขอนแก่น"
            quality={75}
          />
        </div>
        <div className="w-full lg:w-2/3 flex flex-col items-center justify-center gap-10 ">
          <div className="flex flex-row gap-4 text-left md:text-right">
            <div>
              <h3 className="text-xl ">
                4. ออนไลน์ใช้งานได้ทุกที่
              </h3>
              <p className="text-gray-500 text-base lg:text-lg  mt-1">
                ผู้จัดการสามารถตรวจสอบยอดขาย หรือ
                ความเคลื่อนไหวของร้านค้าตัวเองได้จากที่ไหนก็ได้ ทุกที่ทุกเวลา
              </p>
            </div>
            <HiMiniGlobeAsiaAustralia size={42} />
          </div>

          <div className="flex flex-row gap-4 text-left md:text-right ">
            <div>
              <h3 className="text-xl">
                5. คำนวณแม่น ลดการผิดพลาด
              </h3>
              <p className="text-gray-500 text-base lg:text-lg  mt-1">
                พัฒนาโปรแกรมให้ทำงานถูกต้องแม่นยำ 100%
                ลดข้อผิดพลาดละหว่างการทำงาน ลดการใช้พนักงาน
              </p>
            </div>
            <HiMiniCpuChip size={49} />
          </div>

          <div className="flex flex-row gap-4 text-left md:text-right ">
            <div>
              <h3 className="text-xl">6. สร้างความน่าเชื่อถือ</h3>
              <p className="text-gray-500 text-base lg:text-lg mt-1">
                เว็บไซต์สำหรับธุรกิจทำให้ลูกค้าที่มาใช้บริการได้รับความไว้วางใจ
                และเชื่อถือในความเป็นมืออาชีพของเรา
              </p>
            </div>
            <HiMiniUserGroup size={49} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShowMobile;
