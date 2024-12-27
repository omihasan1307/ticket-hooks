"use client";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { img } from "@/shared/constant/img.export.constant";

const NotFound = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="h-screen max-w-screen-2xl mx-auto flex flex-col items-center justify-center">
      <div className="relative h-1/2 w-full">
        <Image
          src={img.NotFound}
          alt="Not Found"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <button
        onClick={handleGoBack}
        className="mt-4 px-4 py-2 bg-baseColor text-white rounded-lg cursor-pointer"
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
