"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { CiHome, CiTimer } from "react-icons/ci";

import Breadcrumbs from "@/shared/components/Breadcrumbs";
import EventsData from "@/shared/data/Events.json";
import { img } from "@/shared/constant/img.export.constant";
import { Button } from "@/components/ui/button";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

const EventsDetails = () => {
  const { title, id } = useParams();

  const eventData = EventsData.find((event) => event.id === id);

  const { featured_image, subtitle } = eventData || {};

  return (
    <div>
      <Breadcrumbs basePageName="event" pageName={title} />
      <div className="max-w-screen-xl mx-auto my-20 px-2 lg:px-0">
        <div className="lg:grid grid-cols-3 gap-10">
          <div className="col-span-2">
            <Image
              src={featured_image || img.NoImage}
              alt={`${title}`}
              width={200}
              height={200}
              loading="eager"
              className="w-full"
            />
            <div className="mt-10 space-y-3">
              <h1 className="text-3xl font-semibold">{eventData?.title}</h1>
              <h1>{subtitle}</h1>
              <p>
                Experience an unforgettable evening filled with captivating
                performances and enchanting melodies. Join us for a journey
                through music, where each note tells a story and every rhythm
                sparks emotion. Whether you're a devoted fan of live events or
                looking for a unique experience, this concert promises to
                deliver an atmosphere of pure magic. Don't miss this opportunity
                to immerse yourself in a celebration of artistry and passion.
              </p>
            </div>
          </div>
          <div className="col-span-1 space-y-4">
            <div className="px-4 py-6 shadow-md rounded space-y-3 text-sm">
              <p className="flex items-center gap-3">
                <CiTimer className="text-baseColor" />
                <span>12:00 AM</span>
              </p>
              <p className="flex items-center gap-3">
                <FaCalendarAlt className="text-baseColor" />
                <span>12-12-2024</span>
              </p>
              <p className="flex items-center gap-3">
                <CiHome className="text-baseColor" />
                <span>Bangla Academy</span>
              </p>
              <p className="flex items-center gap-3">
                <FaLocationDot className="text-baseColor" />
                <span>Dhaka</span>
              </p>
            </div>
            <Button className="w-full bg-baseColor text-xl py-5 uppercase">
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsDetails;
