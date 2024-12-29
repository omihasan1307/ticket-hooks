"use client";
import Breadcrumbs from "@/shared/components/Breadcrumbs";
import { Metadata } from "next";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import SearchField from "./SearchField";
import FilterSection from "./FilterSection";
import BusList from "./BusList";

// export const metadata: Metadata = {
//   title: "Bus | Ticket Hooks",
//   description: "Bus | Ticket Hooks",
// };

const BusSearchPage = () => {
  const searchParams = useSearchParams();
  const [parsedParams, setParsedParams] = useState({
    fromCity: searchParams.get("fromCity") || "",
    toCity: searchParams.get("toCity") || "",
    journeyDate: searchParams.get("journeyDate") || "",
    returnDate: searchParams.get("returnDate") || "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (
      parsedParams.fromCity &&
      parsedParams.toCity &&
      parsedParams.journeyDate
    ) {
      setParsedParams({
        fromCity: parsedParams.fromCity as string,
        toCity: parsedParams.toCity as string,
        journeyDate: parsedParams.journeyDate as string,
        returnDate: parsedParams.returnDate
          ? (parsedParams.returnDate as string)
          : "",
      });
    }
  }, [
    parsedParams.fromCity,
    parsedParams.toCity,
    parsedParams.journeyDate,
    parsedParams.returnDate,
  ]);

  return (
    <div>
      <Breadcrumbs basePageName="Home" pageName="Bus" />

      <div className="max-w-screen-xl mx-auto">
        <SearchField
          parsedParams={parsedParams}
          setParsedParams={setParsedParams}
          error={error}
        />
      </div>
      <Breadcrumbs
        basePageName={`${parsedParams.fromCity} To ${parsedParams.toCity}`}
        pageName={` Journey Date = ${parsedParams.journeyDate}  ${
          parsedParams.returnDate &&
          `| Return Date = ${parsedParams.returnDate}`
        }   `}
      />

      <div className="max-w-screen-xl mx-auto lg:grid grid-cols-4 gap-5 py-10 px-2 lg:px-0 space-y-4 lg:space-y-0">
        <div className="col-span-1">
          <FilterSection />
        </div>
        <div className="col-span-3">
          <BusList />
        </div>
      </div>
    </div>
  );
};

export default BusSearchPage;
