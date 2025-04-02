import React from "react";
import Thank from "./Thank";
import DisplayHome from "../components/DisplayHome";
import Hero from "./Hero";
import About from "./About";
import Step4 from "./Step4";
import ShowMobile from "./ShowMobile";
import Review from "./Review";
import Faq from "./Faq";

const PageHome = () => {


  return (
    <div className="    ">
      {/* Hero Secction */}
      <Hero />

      {/*  About Me section */}
      <About />

      {/* 4 ขั้นตอน  */}
      <Step4 />

      {/* show mobile */}
      <ShowMobile />

      {/* Review  */}
      <Review />

      {/* ขอขอบคุณลูกค้าทุกท่าน */}
      <Thank />

      {/* 5 บทความยอดนิยม */}
      <div className="container mx-auto px-6 md:px-10 lg:px-36">
        <DisplayHome />
      </div>

      {/* FAQ */}
      <Faq />
    </div>
  );
};

export default PageHome;
