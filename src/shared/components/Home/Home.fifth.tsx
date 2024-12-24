import { IoLocationOutline } from "react-icons/io5";

import LocationItem from "@/shared/data/LocationItem.json";

const HomeFifth = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-28 space-y-12">
      <h1 className="text-4xl font-semibold text-center">
        <span className="text-baseColor">Popular</span> Bus Routes
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 space-y-10 lg:space-y-0 pt-10 px-2 ">
        {LocationItem?.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <IoLocationOutline className="text-baseColor" />
            <h1 className="">{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeFifth;
