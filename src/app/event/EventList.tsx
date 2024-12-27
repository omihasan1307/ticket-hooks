import Image from "next/image";
import Link from "next/link";

import { img } from "@/shared/constant/img.export.constant";

type TEvent = {
  featured_image: string;
  id: string;
  subtitle: string;
  title: string;
};

const EventList = ({ data }: { data: TEvent }) => {
  const { featured_image, id, subtitle, title } = data || {};
  return (
    <div>
      <section key={id} className="w-full h-full">
        <div className="rounded h-full bg-white dark:bg-black opacity-80 hover:opacity-100  shadow-lg duration-300 hover:scale-105 hover:transform hover:shadow-xl">
          <Link
            href={`/event/${title
              .replace(/\s+/g, "-")
              .replace(/[^a-zA-Z0-9-]/g, "")}/${id}`}
            aria-label="link to project"
          >
            <div className="relative flex items-end overflow-hidden">
              <Image
                src={featured_image || img.NoImage}
                alt={title}
                width={400}
                height={400}
                loading="eager"
                className="h-full w-full"
              />
            </div>
            <div className="space-y-3 py-6 px-4">
              <h3 className="text-xl font-semibold lg:text-2xl text-ellipsis overflow-hidden ">
                {title}
              </h3>
              <p className="text-ellipsis overflow-hidden ">{subtitle}</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EventList;
