"use client";
import { Calendar } from "@/components/ui/calendar";
import InputField from "@/shared/constant/InputField";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CgArrowsExchange } from "react-icons/cg";

const SearchField = ({ parsedParams, setParsedParams, error }: any) => {
  const { fromCity, toCity, journeyDate, returnDate } = parsedParams || {};
  const [isStartDateCalendarVisible, setIsStartDateCalendarVisible] =
    useState<boolean>(false);
  const [isReturnDateCalendarVisible, setIsReturnDateCalendarVisible] =
    useState<boolean>(false);
  const router = useRouter();

  const parsedJourneyDate: any = journeyDate ? new Date(journeyDate) : null;
  const parsedReturnDate: any = returnDate ? new Date(returnDate) : null;

  const handleFromChange = (data: string) => {
    setParsedParams((prevParams: any) => ({
      ...prevParams,
      fromCity: data,
    }));
  };

  const handleToChange = (data: string) => {
    setParsedParams((prevParams: any) => ({
      ...prevParams,
      toCity: data,
    }));
  };

  const handleDataChange = () => {
    setParsedParams((prevParams: any) => ({
      ...prevParams,
      fromCity: prevParams.toCity,
      toCity: prevParams.fromCity,
    }));
  };

  const handleJourneyDateSelect = (date: any) => {
    setParsedParams((prevParams: any) => ({
      ...prevParams,
      journeyDate: date.toISOString(),
    }));
    setIsStartDateCalendarVisible(false);
  };

  const handleReturnDateSelect = (date: any) => {
    setParsedParams((prevParams: any) => ({
      ...prevParams,
      returnDate: date.toISOString(),
    }));
    setIsReturnDateCalendarVisible(false);
  };

  const handleDataSubmit = () => {
    const queryParams = new URLSearchParams({
      fromCity: fromCity,
      toCity: toCity,
      journeyDate: parsedJourneyDate
        ? new Date(parsedJourneyDate).toLocaleDateString("en-CA")
        : "",
      returnDate: parsedReturnDate
        ? new Date(parsedReturnDate).toLocaleDateString("en-CA")
        : "",
    });
    router.push(`/bus/search?${queryParams}`);
  };

  return (
    <div className="py-10 flex flex-col lg:flex-row items-center gap-5 px-2 lg:px-0">
      <InputField
        placeholder="From"
        value={fromCity}
        onChange={handleFromChange}
        error={error}
      />
      <div>
        <CgArrowsExchange
          className="w-8 h-8 cursor-pointer"
          onClick={handleDataChange}
        />
      </div>
      <InputField
        placeholder="To"
        value={toCity}
        onChange={handleToChange}
        error={error}
      />
      <div className="w-full relative border">
        <div className="flex items-center gap-5 px-5 py-3 border border-white hover:border-baseColor duration-300 hover:duration-300 cursor-pointer">
          <div
            onClick={() => setIsStartDateCalendarVisible((prev) => !prev)}
            className="w-full"
          >
            <p className="text-sm text-baseColor pb-1">Journey Date</p>
            <p>
              {journeyDate
                ? new Date(journeyDate).toLocaleDateString()
                : "Pick a Date"}
            </p>
          </div>

          <div
            onClick={() => setIsReturnDateCalendarVisible((prev) => !prev)}
            className="w-full"
          >
            <p className="text-sm text-baseColor pb-1">Return Date</p>
            <p>
              {returnDate
                ? new Date(returnDate).toLocaleDateString()
                : "Pick a Date"}
            </p>
          </div>
        </div>
        {!journeyDate && (
          <p className="text-red-500 text-sm pt-1">
            Please choose destination city.
          </p>
        )}
        {/* calendar */}

        <div className="absolute bg-white z-20">
          {isStartDateCalendarVisible && (
            <Calendar
              mode="single"
              selected={parsedJourneyDate}
              onSelect={handleJourneyDateSelect}
              disabled={(date) => date < new Date()}
              className="rounded-md border shadow"
            />
          )}
          {isReturnDateCalendarVisible && !isStartDateCalendarVisible && (
            <Calendar
              mode="single"
              selected={parsedReturnDate}
              onSelect={handleReturnDateSelect}
              disabled={(date) => {
                const isBeforeToday = date < new Date();
                const isBeforeStartDate = journeyDate
                  ? date < new Date(journeyDate)
                  : false;
                return isBeforeToday || isBeforeStartDate;
              }}
              className="rounded-md border mt-2"
            />
          )}
        </div>
      </div>
      <button
        onClick={handleDataSubmit}
        type="submit"
        className="p-6 w-full lg:w-40  bg-baseColor text-white font-semibold hover:bg-opacity-90 duration-300"
      >
        Search
      </button>
    </div>
  );
};

export default SearchField;
