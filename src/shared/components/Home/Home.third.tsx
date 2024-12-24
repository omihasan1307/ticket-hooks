import { img } from "@/shared/constant/img.export.constant";
import Image from "next/image";

const HomeThird = () => {
  return (
    <div className="max-w-screen-xl mx-auto ">
      <div className="lg:flex items-center justify-between gap-10">
        <div className="space-y-5">
          <h1 className="text-slate-400">Our Story</h1>
          <h1 className="text-4xl font-semibold">Why Our Customers Love Us?</h1>
          <p className="text-justify">
            At the heart of our company lies a commitment to excellence and
            unparalleled service. From the moment you engage with us, our focus
            is on delivering experiences that resonate and solutions that
            simplify your journey. Our customers appreciate our attention to
            detail and our relentless pursuit of their satisfaction.
          </p>
          <p className="text-justify">
            Whether it's through innovation, reliability, or a personal touch,
            we ensure every interaction adds value. Our team is dedicated to
            going above and beyond, earning the trust and loyalty of countless
            customers who continue to choose us time and time again. Experience
            the difference; join our growing family today.
          </p>
        </div>
        <Image
          src={img.Bus}
          alt={"Bus"}
          width={500}
          height={100}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default HomeThird;
