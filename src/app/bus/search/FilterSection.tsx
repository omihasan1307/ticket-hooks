"use client";
import CheckBoxOption from "@/shared/constant/CheckBoxOption";
import { useState } from "react";

const FilterSection = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  return (
    <div>
      <div className="flex items-center justify-center lg:justify-start gap-10">
        <h1 className=" text-xl">Filters</h1>
        <button className="border border-baseColor px-4 py-2 rounded text-baseColor">
          Reset
        </button>
      </div>
      <div>
        <p className="text-green-800 uppercase text-xs pt-5 pb-4">Bus Type</p>
        <div className="flex lg:flex-col flex-row items-center lg:items-start gap-5">
          {[
            { id: "ac", label: "AC" },
            { id: "non-ac", label: "Non Ac" },
          ].map((option) => (
            <CheckBoxOption
              key={option.id}
              id={option.id}
              label={option.label}
              selectedOption={selectedOption}
              onChange={setSelectedOption}
            />
          ))}
        </div>
      </div>
      <div>
        <p className="text-green-800 uppercase text-xs pt-8 pb-4">Operator</p>
        <div className="flex lg:flex-col flex-row items-center lg:items-start gap-5">
          {[
            { id: "soudia_coach", label: "Soudia Coach Service" },
            { id: "shamoli_paribahan", label: "SHYAMOLI PARIBAHAN" },
            { id: "desh_travles", label: "Desh Travels" },
            { id: "euro_coach", label: "Euro Coach" },
            { id: "green_line", label: "Green Line" },
          ].map((option) => (
            <CheckBoxOption
              key={option.id}
              id={option.id}
              label={option.label}
              selectedOption={selectedOption}
              onChange={setSelectedOption}
            />
          ))}
        </div>
      </div>
      <div>
        <p className="text-green-800 uppercase text-xs pt-8 pb-4">
          Boarding Point
        </p>
        <div className="flex lg:flex-col flex-row items-center lg:items-start gap-5">
          {[
            { id: "chasara", label: "Chasara(Army Market)" },
            { id: "chittagong_road", label: "Chittagong Road" },
            { id: "shibu_market", label: "Ng Shibu Market Counter" },
          ].map((option) => (
            <CheckBoxOption
              key={option.id}
              id={option.id}
              label={option.label}
              selectedOption={selectedOption}
              onChange={setSelectedOption}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
