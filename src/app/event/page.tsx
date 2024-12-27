import { Metadata } from "next";

import Breadcrumbs from "@/shared/components/Breadcrumbs";
import HeaderSection from "@/shared/components/HeaderSection";
import EventsData from "@/shared/data/Events.json";
import EventList from "./EventList";

export const metadata: Metadata = {
  title: "Event | Ticket Hooks",
  description: "Event | Ticket Hooks",
};

const EventPage = () => {
  return (
    <div>
      <HeaderSection
        title="Events"
        description="Enjoy your time with our Awesome events"
      />
      <Breadcrumbs basePageName="event" pageName="List Of Events" />

      <div className="max-w-screen-xl mx-auto lg:grid grid-cols-3 gap-10 my-40 space-y-10 lg:space-y-0 px-4 lg:px-0">
        {EventsData?.map((event) => (
          <EventList key={event?.id} data={event} />
        ))}
      </div>
    </div>
  );
};

export default EventPage;
