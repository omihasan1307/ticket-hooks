"use client";
import Image from "next/image";
import { img } from "@/shared/constant/img.export.constant";
import React, { useState } from "react";
import { FaBus } from "react-icons/fa6";
import { MdOutlineEventSeat, MdOutlineLocalPolice } from "react-icons/md";
import { GiAlliedStar } from "react-icons/gi";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoLocationOutline } from "react-icons/io5";
import BusSeats from "./BusSeats";
import BusAmenities from "./BusAmenities";

const busData = [
  {
    id: 1,
    service: "Soudia Coach Service",
    route: "Narayanganj - Chittagong - Lohagara - Chakaria - Cox's Bazar",
    details: "1, Hino 1J Pluss, Non AC",
    departure: {
      time: "10:45 PM",
      date: "Mon, 30 Dec",
      location: "Narayanganj",
    },
    duration: "8h 15m",
    arrival: {
      time: "07:00 AM",
      date: "Tue, 31 Dec",
      location: "Cox's Bazar",
    },
    price: 1000,
    seatsAvailable: 36,
    image: img.soudia,
  },
  {
    id: 2,
    service: "SHYAMOLI PARIBAHAN",
    route: "Narayanganj - Chittagong - Lohagara - Chakaria - Cox's Bazar",
    details: "1, Hino 1J Pluss, Non AC",
    departure: {
      time: "10:45 PM",
      date: "Mon, 30 Dec",
      location: "Narayanganj",
    },
    duration: "8h 15m",
    arrival: {
      time: "07:00 AM",
      date: "Tue, 31 Dec",
      location: "Cox's Bazar",
    },
    price: 1000,
    seatsAvailable: 36,
    image: img.shamoli,
  },
];

// Constants
const FilterItems = [
  { id: 1, title: "High To Low" },
  { id: 2, title: "Low To High" },
];

const NavbarItems = [
  { id: 1, title: "Seats", icon: MdOutlineEventSeat },
  { id: 2, title: "Amenities", icon: GiAlliedStar },
  { id: 3, title: "Policies", icon: MdOutlineLocalPolice },
  { id: 4, title: "Details", icon: IoLocationOutline },
];

// Main Component
const BusList = () => {
  const [activeFilter, setActiveFilter] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<number | null>(1);

  const renderTabContent = () => {
    switch (activeTab) {
      case 1:
        return <BusSeats busData={busData} />;
      case 2:
        return <BusAmenities />;
      case 3:
        return <div>Policies Component</div>;
      case 4:
        return <div>Details Component</div>;
      default:
        return <div>Select a tab to view details</div>;
    }
  };

  return (
    <div>
      {/* Filters */}
      <div className="flex items-center gap-5 space-x-2 px-4 py-4 rounded bg-slate-100">
        {FilterItems.map((item) => {
          const isActive = activeFilter === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveFilter(item.id)}
              className={`px-4 py-2 rounded border border-baseColor text-baseColor text-sm ${
                isActive ? "border bg-baseColor text-white" : "underline-effect"
              }`}
            >
              <span>{item.title}</span>
            </button>
          );
        })}
      </div>

      {/* Bus Card */}
      <Sheet>
        {busData.map((bus) => (
          <div key={bus.id} className="border px-4 py-4 my-4 rounded space-y-3">
            <div className="lg:grid grid-cols-7 gap-10 space-y-5">
              <div className="flex gap-2 col-span-2">
                <Image src={bus.image} alt="bus" width={80} height={50} />
                <div>
                  <h1 className="text-xl">{bus.service}</h1>
                  <p className="text-sm text-slate-500">{bus.details}</p>
                  <p className="text-sm text-slate-500">{bus.route}</p>
                </div>
              </div>
              <div className="flex items-center justify-between col-span-3">
                <div className="w-20">
                  <h1 className="font-semibold">{bus.departure.time}</h1>
                  <p className="text-sm text-slate-500">{bus.departure.date}</p>
                  <p className="text-sm text-slate-500">
                    {bus.departure.location}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-slate-500">{bus.duration}</p>
                  <div className="relative w-44 border-t border-baseColor mt-4">
                    <span className="absolute -left-2 -top-1 w-2 h-2 bg-baseColor rounded-full"></span>
                    <span className="absolute -right-2 -top-1 w-2 h-2 bg-baseColor rounded-full"></span>
                    <span className="absolute left-1/2 -translate-x-1/2 -top-3 text-baseColor bg-white p-1 rounded-full">
                      <FaBus />
                    </span>
                  </div>
                </div>
                <div className="w-20">
                  <h1 className="font-semibold">{bus.arrival.time}</h1>
                  <p className="text-sm text-slate-500">{bus.arrival.date}</p>
                  <p className="text-sm text-slate-500">
                    {bus.arrival.location}
                  </p>
                </div>
              </div>
              <div className="flex items-center lg:justify-start justify-between w-full gap-5 col-span-2 px-2 lg:px-0 py-4 lg:py-0 bg-slate-100 lg:bg-white rounded">
                <p className="font-semibold text-xl">৳{bus.price}</p>
                <div>
                  <SheetTrigger asChild>
                    <button className="bg-baseColor px-4 py-2 rounded text-white uppercase text-sm">
                      Book Ticket
                    </button>
                  </SheetTrigger>
                  <p className="text-sm text-slate-500 mt-2">
                    <span className="font-semibold">{bus.seatsAvailable} </span>
                    Seat(s) Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        <SheetContent>
          <SheetHeader>
            <SheetTitle>Bus Details</SheetTitle>
          </SheetHeader>
          <hr className="my-2" />
          <div className="flex items-center  my-5">
            {NavbarItems.map((item: any) => {
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center flex-col space-y-2 justify-center text-sm hover:text-baseColor px-4 transition duration-300 cursor-pointer ${
                    activeTab === item.id
                      ? "text-baseColor"
                      : "underline-effect"
                  }`}
                >
                  {item.icon && (
                    <span className="text-xl">
                      {React.createElement(item.icon)}
                    </span>
                  )}
                  <span>{item.title}</span>
                </div>
              );
            })}
          </div>

          <div>{renderTabContent()}</div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default BusList;

// "use client";
// import Image from "next/image";
// import { img } from "@/shared/constant/img.export.constant";
// import React, { useState } from "react";
// import { FaBus } from "react-icons/fa6";
// import { MdOutlineEventSeat, MdOutlineLocalPolice } from "react-icons/md";
// import { GiAlliedStar } from "react-icons/gi";
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetDescription,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { IoLocationOutline } from "react-icons/io5";
// import Link from "next/link";

// const FilterItems = [
//   { id: 1, title: "High To Low" },
//   { id: 2, title: "Low To High" },
// ];

// const NavbarItems = [
//   { id: 1, title: "Seats", icon: MdOutlineEventSeat },
//   { id: 2, title: "Amenities", icon: GiAlliedStar },
//   { id: 3, title: "Policies", icon: MdOutlineLocalPolice },
//   { id: 4, title: "Details", icon: IoLocationOutline },
// ];

// const BusList = () => {
//   const [activeFilter, setActiveFilter] = useState<number | null>(null);

//   return (
//     <div>
//       <div className=" flex items-center gap-5 space-x-2 px-4 py-4 rounded bg-slate-100">
//         {FilterItems.map((item) => {
//           const isActive = activeFilter === item.id;

//           return (
//             <button
//               key={item.id}
//               onClick={() => setActiveFilter(item.id)}
//               className={` px-4 py-2 rounded border border-baseColor text-baseColor text-sm ${
//                 isActive ? "border bg-baseColor text-white" : "underline-effect"
//               }`}
//             >
//               <span>{item.title}</span>
//             </button>
//           );
//         })}
//       </div>
//       <Sheet>
//         <div className="border px-4 py-4 my-4 rounded space-y-3">
//           <div className="lg:grid grid-cols-7 gap-10 space-y-5">
//             <div className="flex gap-2 col-span-2 ">
//               <Image src={img.soudia} alt={"bus"} width={80} height={50} />
//               <div>
//                 <h1 className="text-xl">Soudia Coach Service</h1>
//                 <p className="text-sm text-slate-500">
//                   1, Hino 1J Pluss, Non AC Route: Narayanganj - Chittagong -
//                   Lohagara - Chakaria - Cox's Bazar
//                 </p>
//               </div>
//             </div>
//             <hr className=" lg:hidden" />
//             <div className="flex items-center justify-between  col-span-3  ">
//               <div className="w-20 ">
//                 <h1 className="font-semibold">10:45 PM</h1>
//                 <p className="text-sm text-slate-500">
//                   Mon, 30 Dec Narayanganj
//                 </p>
//               </div>
//               <div className="text-center  ">
//                 <p className="text-sm text-slate-500">8h 15m</p>
//                 <div className="relative w-44 border-t border-baseColor mt-4">
//                   <span className="absolute -left-2 -top-1 w-2 h-2 bg-baseColor rounded-full"></span>
//                   <span className="absolute -right-2 -top-1 w-2 h-2 bg-baseColor rounded-full"></span>
//                   <span className="absolute left-1/2 -translate-x-1/2 -top-3 text-baseColor bg-white p-1 rounded-full">
//                     <FaBus />
//                   </span>
//                 </div>
//               </div>
//               <div className=" w-20">
//                 <h1 className="font-semibold">07:00 AM</h1>
//                 <p className="text-sm text-slate-500">Tue, 31 Dec Coxs Bazar</p>
//               </div>
//             </div>

//             <div className="flex items-center lg:justify-start justify-between w-full gap-5 col-span-2 px-2 lg:px-0 py-4 lg:py-0 bg-slate-100 lg:bg-white rounded">
//               <p className="font-semibold text-xl">৳1,000</p>
//               <div>
//                 <SheetTrigger asChild>
//                   <button className="bg-baseColor px-4 py-2 rounded text-white uppercase text-sm">
//                     Book Ticket
//                   </button>
//                 </SheetTrigger>
//                 <p className="text-sm text-slate-500 mt-2">
//                   <span className="font-semibold">36 </span>Seat(s) Available
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="space-x-2 space-y-2 lg:space-y-0">
//             <SheetTrigger asChild>
//               <button className=" bg-[#ffba9079] px-6 py-1 rounded-full text-baseColor text-sm">
//                 Cancellation Policy
//               </button>
//             </SheetTrigger>
//             <SheetTrigger asChild>
//               <button className=" bg-[#ffba9079] px-6 py-1 rounded-full text-baseColor text-sm">
//                 Boarding Point
//               </button>
//             </SheetTrigger>
//             <SheetTrigger asChild>
//               <button className=" bg-[#ffba9079] px-6 py-1 rounded-full text-baseColor text-sm">
//                 Dropping Point
//               </button>
//             </SheetTrigger>
//             <SheetTrigger asChild>
//               <button className=" bg-[#ffba9079] px-6 py-1 rounded-full text-baseColor text-sm">
//                 Amenities
//               </button>
//             </SheetTrigger>
//           </div>
//         </div>

//         <SheetContent>
//           <SheetHeader>
//             <SheetTitle>Select Seats</SheetTitle>
//           </SheetHeader>
//           <hr className="my-2" />
//           <div className="lg:flex items-center my-5">
//             {NavbarItems.map((item: any) => {
//               const isActive = item.link === "/";
//               return (
//                 <div
//                   key={item.id}
//                   className={`flex items-center flex-col space-y-2 justify-center text-sm hover:text-baseColor px-4  transition duration-300 hover:duration-300  ${
//                     isActive
//                       ? "border border-baseColor text-baseColor"
//                       : "underline-effect"
//                   }`}
//                 >
//                   {item.icon && (
//                     <span className="text-xl">
//                       {React.createElement(item.icon)}
//                     </span>
//                   )}
//                   <span>{item.title}</span>
//                 </div>
//               );
//             })}
//           </div>
//         </SheetContent>

//       </Sheet>
//     </div>
//   );
// };

// export default BusList;
