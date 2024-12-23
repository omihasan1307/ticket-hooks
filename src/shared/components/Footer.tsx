import Image from "next/image";
import Link from "next/link";
import { img } from "../constant/img.export.constant";

const Footer = () => {
  return (
    <footer className=" bg-gray-200 text-black">
      <div className="max-w-screen-xl mx-auto pt-20 relative z-10">
        <div className="lg:grid grid-cols-2 gap-20 px-4 lg:px-0">
          <div className="space-y-5 pb-5 lg:pb-0">
            <Image src={img.Logo} alt="Logo" height={50} width={200} />
            <p className="leading-8">
              Discover and book the most exciting events with ease at
              TicketHooks. We connect you to unforgettable experiences, offering
              a seamless, user-friendly platform to get your tickets to
              concerts, shows, sports, and more. Let TicketHooks be your gateway
              to unforgettable moments!
            </p>
          </div>

          <div className="col-span-1 lg:space-y-0 space-y-5 lg:grid grid-cols-2">
            <div className="space-y-10">
              <p className="text-xl font-semibold border-b-2 w-40 border-basicColor">
                Quick Links
              </p>
              <ul className="space-y-5">
                <li className="flex space-x-3 items-center hover:text-basicColor hover:cursor-pointer transition ease-out delay-150 duration-300 hover:translate-x-6 hover:duration-300">
                  <Link href={"/"}>Home</Link>
                </li>
                <li className="flex space-x-3 items-center hover:text-basicColor hover:cursor-pointer transition ease-out delay-150 duration-300 hover:translate-x-6 hover:duration-300">
                  <Link href={"/service"}>Service</Link>
                </li>
                <li className="flex space-x-3 items-center hover:text-basicColor hover:cursor-pointer transition ease-out delay-150 duration-300 hover:translate-x-6 hover:duration-300">
                  <Link href={"/about"}>About Us</Link>
                </li>
                <li className="flex space-x-3 items-center hover:text-basicColor hover:cursor-pointer transition ease-out delay-150 duration-300 hover:translate-x-6 hover:duration-300">
                  <Link href={"/contact"}>Contact Us</Link>
                </li>
              </ul>
            </div>

            <div className="space-y-10">
              <p className="text-xl font-semibold border-b-2 w-28 border-basicColor">
                Information
              </p>

              <ul className="space-y-5">
                <Link
                  href={"/privacy-policy"}
                  className="flex space-x-3 items-center hover:text-basicColor hover:cursor-pointer transition ease-out delay-150 duration-300 hover:translate-x-6 hover:duration-300"
                >
                  <span>Privacy Policy</span>
                </Link>
                <Link
                  href="/terms-condition"
                  className="flex space-x-3 items-center hover:text-basicColor hover:cursor-pointer transition ease-out delay-150 duration-300 hover:translate-x-6 hover:duration-300"
                >
                  <span>Terms & Conditions</span>
                </Link>

                <Link
                  href="/faqs"
                  className="flex space-x-3 items-center hover:text-basicColor hover:cursor-pointer transition ease-out delay-150 duration-300 hover:translate-x-6 hover:duration-300"
                >
                  <span>Faqs</span>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 border-t border-gray-400 py-4 px-4 relative z-10">
        <p className="">
          Copyright &copy; {new Date().getFullYear()} TicketHooks. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
