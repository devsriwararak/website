import React from "react";
import { AiFillFacebook, AiFillPhone } from "react-icons/ai";
import { SiLine, SiTiktok } from "react-icons/si";
const Footer = () => {
  return (
<>
<div className="mt-20 bg-gray-600  px-16 py-24 text-white flex flex-col md:flex-row gap-10">
      <div className="w-full">
        <h3 className="text-xl">xxxxx</h3>
        <p className="text-gray-300">xxxxxxxxxxxxxxxxxxxx</p>
        <p className="text-gray-300">xxxxxxxxxxxxxxxxxxxx</p>
        <button className="bg-purple-500 px-20 rounded-full mt-5">xxx</button>
      </div>

      <div  className="w-full">
        <h3 className="text-xl">xxxxx</h3>
       <ul className="text-gray-300 mt-2">
        <li>test poduction 001</li>
        <li>test notebook 002</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
       </ul>
      </div>

      <div  className="w-full">
        <h3 className="text-xl">xxxxx</h3>
       <ul className="text-gray-300 mt-2">
        <li>test poduction 001</li>
        <li>test notebook 002</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
       </ul>
      </div>

      <div  className="w-full">
        <h3 className="text-xl">xxxxx</h3>
       <ul className="text-gray-300 mt-2">
        <li>test poduction 001</li>
        <li>test notebook 002</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
       </ul>
      </div>


      <div  className="w-full">
        <h3 className="text-xl">xxxxx</h3>
        <p className="text-gray-300 mt-2">test : khonkaen 40000</p>
        <p className="text-gray-300">tel : 0850032649</p>
        <p className="text-gray-300">tel : 0850032649</p>
        <p className="text-gray-300">tel : 0850032649</p>
        <div className="flex flex-row gap-4 mt-4
        
        ">
            <AiFillFacebook size={26} className="rounded-full"/>
            <AiFillPhone size={26} className="rounded-full"/>
            <SiLine size={26} className="rounded-full"/>
            <SiTiktok size={26} className="rounded-full"/>
        </div>
      </div>
    </div>
    <div className="bg-gray-800 text-white py-2 text-center">
        1111
    </div>
</>
  );
};

export default Footer;
