import React from 'react'

const HomeCardDemo = () => {
    const img =
    "https://img.freepik.com/free-vector/business-banner-with-space-your-text_1017-19582.jpg?t=st=1715421608~exp=1715425208~hmac=6587c4aad5a3aadc14fb2036f7356f51945076f849a1d8954695e7040d93241c&w=1380";

  return (
    <div className="mt-8 flex flex-col md:flex-row gap-4 ">
    <div className="p-8 w-full lg:w-1/3 bg-white hover:bg-gray-100 shadow-lg rounded-lg ">
      <img className="" src={img} alt="" />
      <h2 className="mt-5 text-2xl font-semibold">test-01</h2>
      <p className="whitespace-normal mt-4">
        สวัสดี
        เช้าสวันเสาสวัสดีวันนี้มาเล่นเกมที่บ้านเพื่อนเลยแวะไปที่นั่นนี้ไปดื่มกาแฟร์
      </p>
      <div className="text-right">
        <button className="mt-2 bg-red-700 text-white px-4 py-2 rounded-full">
          รายละเอียด
        </button>
      </div>
    </div>

    <div className="p-8  w-full lg:w-1/3 bg-white hover:bg-gray-100 shadow-lg rounded-lg ">
      <img className="" src={img} alt="" />
      <h2 className="mt-5 text-2xl font-semibold">test-01</h2>
      <p className="whitespace-normal mt-4">
        สวัสดี
        เช้าสวันเสาสวัสดีวันนี้มาเล่นเกมที่บ้านเพื่อนเลยแวะไปที่นั่นนี้ไปดื่มกาแฟร์
      </p>
      <div className="text-right">
        <button className="mt-2 bg-red-700 text-white px-4 py-2 rounded-full">
          รายละเอียด
        </button>
      </div>
    </div>

    <div className="p-8 w-full lg:w-1/3 bg-white hover:bg-gray-100 shadow-lg rounded-lg ">
      <img className="" src={img} alt="" />
      <h2 className="mt-5 text-2xl font-semibold">test-01</h2>
      <p className="whitespace-normal mt-4">
        สวัสดี
        เช้าสวันเสาสวัสดีวันนี้มาเล่นเกมที่บ้านเพื่อนเลยแวะไปที่นั่นนี้ไปดื่มกาแฟร์
      </p>
      <div className="text-right">
        <button className="mt-2 bg-red-700 text-white px-4 py-2 rounded-full">
          รายละเอียด
        </button>
      </div>
    </div>

  </div>
  )
}

export default HomeCardDemo