import React from "react";
import {
  FaBusSimple,
  FaPlaneDeparture,
  FaTrain,
  FaTree,
} from "react-icons/fa6";
import { RiShipFill } from "react-icons/ri";
import { VscSymbolEvent } from "react-icons/vsc";

const serviceItem = [
  {
    icon: FaBusSimple,
    title: "Bus Ticket",
    description:
      "No more queuing at counters. Tickets of 100+ bus operators available online.",
  },
  {
    icon: FaPlaneDeparture,
    title: "Air Ticket",
    description: "Now book your air tickets for domestic travel in Bangladesh.",
  },
  {
    icon: FaTrain,
    title: "Train Ticket",
    description:
      "100% tickets of Bangladesh Railway are available online. Get yours now!",
  },
  {
    icon: RiShipFill,
    title: "Launch Ticket",
    description:
      "Searching for launch/ship tickets? Grab them online from our exclusive inventory.",
  },
  {
    icon: VscSymbolEvent,
    title: "Event Ticket",
    description:
      "From concerts to sports, skill development to mental development, book your event tickets online hassle-free.",
  },
  {
    icon: FaTree,
    title: "Park Ticket",
    description:
      "Skip the lines and dive into fun! Purchase park tickets from our online inventory.",
  },
];

const HomeFourth = () => {
  return (
    <div className="bg-[#fe620125] ">
      <div className="max-w-screen-xl mx-auto py-28  space-y-2">
        <div className="text-center space-y-4">
          <h1>A one-stop solution for your travel needs</h1>
          <h1 className="text-4xl font-semibold ">
            Introducing you to the{" "}
            <span className="text-baseColor">Ticket Hooks</span> way of life
          </h1>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 lg:justify-items-center gap-20 space-y-10 lg:space-y-0 pt-20 px-2 ">
          {serviceItem?.map((item, index) => (
            <div key={index} className="space-y-4 h-full">
              {item.icon && (
                <span className="w-14 h-14 flex items-center justify-center text-baseColor bg-white rounded-lg ">
                  {React.createElement(item.icon)}
                </span>
              )}

              <h1 className="text-2xl font-semibold ">{item.title}</h1>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeFourth;
