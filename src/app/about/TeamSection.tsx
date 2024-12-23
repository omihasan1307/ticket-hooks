import Image from "next/image";

import { ITeam } from "./type";
import { img } from "@/shared/constant/img.export.constant";
import teamData from "@/shared/data/Team.json";

const TeamSection = () => {
  return (
    <div className="bg-[#fe6201b6] ">
      <div className="max-w-screen-xl mx-auto py-20 text-center ">
        <h1 className="text-2xl uppercase pb-5">Leadership Team</h1>
        <div className="grid lg:grid-cols-4 gap-10">
          {teamData.map((member: ITeam, index: number) => (
            <div key={index} className="w-full relative space-y-5">
              <Image
                src={img.Shape}
                alt={"shape"}
                width={100}
                height={50}
                className="object-cover absolute top-1/3 left-1/4 lg:left-0 opacity-40 z-10"
              />

              <Image
                src={member.image}
                alt={member.name}
                width={192}
                height={192}
                className="w-48 h-48 rounded-full mx-auto relative z-20"
              />
              <div className="space-y-1 z-20">
                <h2 className="text-xl uppercase">{member.name}</h2>
                <p className="text-sm ">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
