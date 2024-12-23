import { IoIosArrowForward } from "react-icons/io";

const Breadcrumbs = ({ basePageName, pageName }: any) => {
  return (
    <div className="bg-baseColor text-white">
      <div className="max-w-screen-xl mx-auto flex items-center space-x-2 py-1">
        <h1>{basePageName}</h1>
        <IoIosArrowForward />
        <p>{pageName}</p>
      </div>
    </div>
  );
};

export default Breadcrumbs;
