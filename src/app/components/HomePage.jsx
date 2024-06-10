import React from "react";
import HomeCardDemo from "./HomeCardDemo";

const HomePage = () => {
  return (
    <div className=" px-2 lg:px-36">
      <div className="flex flex-row justify-between items-center">
        <div>
          <h2 className="text-3xl mt-4 font-semibold">
            รีวิวหนังมาใหม่ แห่งปี 2024{" "}
          </h2>
          <div className="border-2 border-red-500 w-20 rounded-md mt-2 "></div>
        </div>
        <div>
          <button className="bg-purple-700 px-4 py-2  rounded-full text-white">
            หมวดหมู่ทั้งหมด
          </button>
        </div>
      </div>

      <HomeCardDemo />

      <div className=" mt-20 flex flex-row justify-between items-center">
        <div>
          <h2 className="text-3xl mt-4 font-semibold">
          รีวิว สปอยหนังเกาหลีใหม่{" "}
          </h2>
          <div className="border-2 border-red-500 w-20 rounded-md mt-2 "></div>
        </div>
        <div>
          <button className="bg-purple-700 px-4 py-2  rounded-full text-white">
            ติดต่อเรา ลงโฆษณา
          </button>
        </div>
      </div>



      <HomeCardDemo />
    </div>
  );
};

export default HomePage;
