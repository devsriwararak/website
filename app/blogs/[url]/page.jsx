import Devsriwararak_com from "../all/Devsriwararak_com";
import Reviewmoviehit_com from "../all/Reviewmoviehit_com";
import data from "../data";
import React from "react";
import { AllBlogs } from "../page";

// SEO
export async function generateMetadata({ params }) {
  const newData = data.find((item) => item.url === params.url);
  return {
    title: newData.title,
    description: newData.dec,
    openGraph: {
      images: newData.image,
    },
  };
}

const page = ({ params }) => {
  const newData = data.find((item) => item.url === params.url);

  return (
    <div>
      <div className="flex justify-center bg-gray-200">
        <img
          className="border-2 border-gray-300 rounded-lg w-[900px]"
          src={newData.image}
          alt=""
        />
      </div>
      <h1 className="text-xl md:text-3xl font-semibold mt-4 md:mt-12">
        {newData.title} 
      </h1>
      <p className="mt-4">{newData.dec}</p>

      <div className="md:mx-5 px-4 md:px-10 py-4 mt-8 border-2 border-gray-200 rounded-lg">
        <DynamicContant url={newData.url} />
      </div>

      <h2 className="text-xl md:text-3xl font-semibold mt-4 md:mt-12">
        บทความที่เกี่ยวข้อง
      </h2>
      <div className="mt-5">
        <AllBlogs />
      </div>
    </div>
  );
};

export default page;

const DefaultComponent = () => (
  <div className="mt-4 text-red-500">ไม่พบข้อมูล !! ทีมงานกำลังแก้ไข</div>
);

const Test011 = () => <Devsriwararak_com />;
const Test022 = () => <Reviewmoviehit_com />;

const DynamicContant = ({ url }) => {
  const componentMap = {
    devsriwararak_com: <Test011 />,
    reviewmoviehit_com: <Test022 />,
  };

  const SelectedComponent = componentMap[url] || <DefaultComponent />;
  return <>{SelectedComponent}</>;
};
