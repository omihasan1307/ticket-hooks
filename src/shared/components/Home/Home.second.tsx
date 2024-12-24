import { FaSearch } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { TbHandFinger } from "react-icons/tb";

const HomeSecond = () => {
  return (
    <div className="max-w-screen-xl mx-auto space-y-16 pt-28">
      <h1 className="text-4xl font-semibold text-center">
        <span className="text-baseColor">Buy tickets</span> in 3 easy steps
      </h1>
      <div className="lg:grid grid-cols-3 lg:justify-items-center gap-10  space-y-10 lg:space-y-0 ">
        <div>
          <div className="flex items-center gap-2 pb-2">
            <FaSearch className="w-6 h-6 text-baseColor " />
            <h1 className="text-2xl font-semibold ">Search</h1>
          </div>
          <p className="text-sm">
            Choose your origin, destination, journey dates and search for buses
          </p>
        </div>
        <div>
          <div className="flex items-center gap-2 pb-2">
            <TbHandFinger className="w-6 h-6 text-baseColor " />
            <h1 className="text-2xl font-semibold ">Select</h1>
          </div>
          <p className="text-sm">
            Select your desired trip and choose your seats
          </p>
        </div>
        <div>
          <div className="flex items-center gap-2 pb-2">
            <FaBangladeshiTakaSign className="w-6 h-6 text-baseColor " />
            <h1 className="text-2xl font-semibold ">Pay</h1>
          </div>
          <p className="text-sm">Pay by bank cards or mobile banking</p>
        </div>
      </div>
    </div>
  );
};

export default HomeSecond;
