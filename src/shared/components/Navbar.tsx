"use client";
import Image from "next/image";
import { img } from "../constant/img.export.constant";
import {
  FaBars,
  FaBusSimple,
  FaHotel,
  FaPlaneDeparture,
} from "react-icons/fa6";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { RiShipFill } from "react-icons/ri";
import { VscSymbolEvent } from "react-icons/vsc";
import { usePathname } from "next/navigation";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

const NavbarItems = [
  { id: 1, title: "Bus", link: "/", icon: FaBusSimple },
  { id: 2, title: "Air", link: "/air", icon: FaPlaneDeparture },
  { id: 3, title: "Launch", link: "/launch", icon: RiShipFill },
  { id: 4, title: "Hotel", link: "/hotel", icon: FaHotel },
  { id: 5, title: "Event", link: "/event", icon: VscSymbolEvent },
];

const Navbar = () => {
  const pathName = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 0);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setIsSidebarOpen(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`${
        isSticky
          ? "fixed top-0 left-0 right-0 z-50 bg-white py-5"
          : "relative  py-5"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-2 lg:px-0">
        <Link href={"/"}>
          <Image src={img.Logo} alt="logo" height={50} width={150} />
        </Link>

        <div className="hidden lg:flex items-center space-x-2">
          {NavbarItems.map((item: any) => {
            const isActive = pathName === item?.link;
            return (
              <Link
                key={item.id}
                href={item.link}
                className={`flex items-center space-x-2 hover:border hover:border-baseColor hover:text-baseColor px-6 py-1 rounded-lg transition duration-300 hover:duration-300  ${
                  isActive
                    ? "border border-baseColor text-baseColor"
                    : "underline-effect"
                }`}
              >
                {item.icon && (
                  <span className="text-xl">
                    {React.createElement(item.icon)}
                  </span>
                )}
                <span>{item.title}</span>
              </Link>
            );
          })}
        </div>
        <div className="hidden lg:flex items-center gap-2 border px-8 py-1 bg-baseColor text-white rounded-2xl ">
          <FaPhoneAlt />
          16667
        </div>

        <div
          className="lg:hidden block cursor-pointer pe-5 "
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <FaBars />
        </div>
      </div>

      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform duration-500 ease-in-out z-50 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "75%" }}
      >
        <div className="p-5">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold">Menu</h2>
            <div
              className="cursor-pointer text-xl"
              onClick={() => setIsSidebarOpen(false)}
            >
              <IoIosCloseCircle />
            </div>
          </div>
          <div className="flex flex-col space-y-4 justify-center">
            {NavbarItems?.map((menu) => {
              const isActive = pathName === menu?.link;
              return (
                <Link
                  href={menu?.link}
                  key={menu?.id}
                  className={`uppercase font-semibold py-2 px-4 transition ease-in-out delay-150 duration-300 hover:bg-baseColor hover:text-white flex items-center gap-5 ${
                    isActive
                      ? "bg-baseColor text-white scale-105 border-baseColor"
                      : ""
                  }`}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {menu.icon && (
                    <span className="text-xl">
                      {React.createElement(menu.icon)}
                    </span>
                  )}
                  {menu?.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
