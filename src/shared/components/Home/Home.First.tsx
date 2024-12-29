"use client";

import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaLocationArrow } from "react-icons/fa6";
import { CgArrowsExchange } from "react-icons/cg";
import { Calendar } from "@/components/ui/calendar";
import CheckBoxOption from "@/shared/constant/CheckBoxOption";
import InputField from "@/shared/constant/InputField";
import { useRouter } from "next/navigation";

const HomeFirst = () => {
  const [selectedOption, setSelectedOption] = useState<string>("one-way");
  const [selectedFrom, setSelectedFrom] = useState<string>("");
  const [selectedTo, setSelectedTo] = useState<string>("");
  const [selectedStartDate, setSelectedStartDate] = useState<
    Date | undefined
  >();
  const [selectedReturnDate, setSelectedReturnDate] = useState<
    Date | undefined
  >();
  const [isFromInputVisible, setIsFromInputVisible] = useState<boolean>(false);
  const [isToInputVisible, setIsToInputVisible] = useState<boolean>(false);
  const [isStartDateCalendarVisible, setIsStartDateCalendarVisible] =
    useState<boolean>(false);
  const [isReturnDateCalendarVisible, setIsReturnDateCalendarVisible] =
    useState<boolean>(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit: SubmitHandler<any> = (data: any) => {
    setIsFormSubmitted(true);

    // if (errors.from || errors.to || !selectedStartDate) {
    //   return;
    // }

    if (
      !selectedFrom ||
      !selectedTo ||
      !selectedStartDate ||
      errors.from ||
      errors.to
    ) {
      setError(true);
      return;
    }

    const queryParams = new URLSearchParams({
      fromCity: selectedFrom,
      toCity: selectedTo,
      journeyDate: selectedStartDate.toLocaleDateString("en-CA"),
      ...(selectedOption === "round-way" && selectedReturnDate
        ? { returnDate: selectedReturnDate.toLocaleDateString("en-CA") }
        : {}),
    });

    router.push(`/bus/search?${queryParams.toString()}`);
  };

  // const handleFromBlur = (value: string) => {
  //   setSelectedFrom(value);
  //   setIsFromInputVisible(false);
  //   if (!value) setError(true);
  //   else setError(false);
  // };

  // const handleFromEnter = (value: string) => {
  //   setSelectedFrom(value);
  //   setIsFromInputVisible(false);
  //   if (!value) setError(true);
  //   else setError(false);
  // };

  const handleFromChange = (value: string) => {
    setSelectedFrom(value);
    if (value) setError(false);
  };

  // const handleToBlur = (value: string) => {
  //   setSelectedTo(value);
  //   setIsToInputVisible(false);
  //   if (!value) setError(true);
  //   else setError(false);
  // };

  // const handleToEnter = (value: string) => {
  //   setSelectedTo(value);
  //   setIsToInputVisible(false);
  //   if (!value) setError(true);
  //   else setError(false);
  // };

  const handleToChange = (value: string) => {
    setSelectedTo(value);
    if (value) setError(false);
  };

  // const handleOptionChange = (option: string) => {
  //   setSelectedOption(option);
  // };

  const handleDataChange = () => {
    setSelectedFrom(selectedTo);
    setSelectedTo(selectedFrom);
  };

  const handleStartDateSelect = (date: Date | undefined) => {
    if (date) {
      setSelectedStartDate(date);
      setIsStartDateCalendarVisible(false);
    }
  };

  const handleReturnDateSelect = (date: Date | undefined) => {
    if (date) {
      if (selectedStartDate && date < selectedStartDate) {
        setSelectedReturnDate(selectedStartDate);
      } else {
        setSelectedReturnDate(date);
      }
    }
  };

  return (
    <div className="bgBanner flex items-center justify-center">
      <div className="max-w-screen-lg mx-auto w-full bg-white/70 backdrop-blur-md px-10 py-10 rounded">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/*  Option */}
          <div className="flex items-center gap-10">
            {[
              { id: "one-way", label: "One Way" },
              { id: "round-way", label: "Round Way" },
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

          <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
            {/* From Section */}
            <div className="w-full">
              {!isFromInputVisible ? (
                <div
                  className="flex items-center gap-5 px-5 py-3 border border-white hover:border-baseColor duration-300 hover:duration-300 cursor-pointer"
                  onClick={() => setIsFromInputVisible(true)}
                >
                  <FaLocationArrow className="text-baseColor" />
                  <div>
                    <p className="text-sm text-baseColor pb-1">From</p>
                    <p>{selectedFrom || "Going From"}</p>
                  </div>
                </div>
              ) : (
                <InputField
                  placeholder="From"
                  value={selectedFrom}
                  onChange={handleFromChange}
                  // onBlur={handleFromBlur}
                  error={error}
                />

                // <input
                //   {...register("from", {
                //     required: "Please choose departure city.",
                //   })}
                //   type="text"
                //   placeholder="From"
                //   className={`w-full px-4 py-5 focus:outline-none duration-300 hover:duration-300 rounded ${
                //     errors.from ? "border-red-500" : "hover:border-baseColor"
                //   }`}
                //   onBlur={(e) => {
                //     setSelectedFrom(e.target.value);
                //     setIsFromInputVisible(false);
                //   }}
                //   onKeyDown={(e) => {
                //     if (e.key === "Enter") {
                //       setSelectedFrom(e.currentTarget.value);
                //       setIsFromInputVisible(false);
                //     }
                //   }}
                // />
              )}
              {isFormSubmitted && !selectedFrom && (
                <p className="text-red-500 text-sm pt-1">
                  Please choose a departure city.
                </p>
              )}
            </div>
            <div>
              <CgArrowsExchange
                className="w-8 h-8 cursor-pointer"
                onClick={handleDataChange}
              />
            </div>
            {/* To Section */}
            <div className="w-full">
              {!isToInputVisible ? (
                <div
                  className="flex items-center gap-5 px-5 py-3 border border-white hover:border-baseColor duration-300 hover:duration-300 cursor-pointer"
                  onClick={() => setIsToInputVisible(true)}
                >
                  <FaLocationArrow className="text-baseColor" />
                  <div>
                    <p className="text-sm text-baseColor pb-1">To</p>
                    <p>{selectedTo || "Going To"}</p>
                  </div>
                </div>
              ) : (
                <InputField
                  placeholder="To"
                  value={selectedTo}
                  onChange={handleToChange}
                  // onBlur={handleToBlur}
                  // onEnter={handleToEnter}
                  error={error}
                />

                // <input
                //   {...register("to", { required: "To is required" })}
                //   type="text"
                //   placeholder="To"
                //   className={`w-full px-4 py-5 focus:outline-none duration-300 hover:duration-300 rounded ${
                //     errors.to ? "border-red-500" : "hover:border-baseColor"
                //   }`}
                //   onBlur={(e) => {
                //     setSelectedTo(e.target.value);
                //     setIsToInputVisible(false);
                //   }}
                //   onKeyDown={(e) => {
                //     if (e.key === "Enter") {
                //       setSelectedTo(e.currentTarget.value);
                //       setIsToInputVisible(false);
                //     }
                //   }}
                // />
              )}
              {isFormSubmitted && !selectedTo && (
                <p className="text-red-500 text-sm pt-1">
                  Please choose destination city.
                </p>
              )}
            </div>
            {/* Start Date Section */}
            <div className="w-full relative ">
              <div className="flex items-center gap-5 px-5 py-3 border border-white hover:border-baseColor duration-300 hover:duration-300 cursor-pointer">
                <div
                  onClick={() => setIsStartDateCalendarVisible((prev) => !prev)}
                  className="w-full"
                >
                  <p className="text-sm text-baseColor pb-1">Journey Date</p>
                  <p>
                    {selectedStartDate
                      ? selectedStartDate.toLocaleDateString()
                      : "Pick a Date"}
                  </p>
                </div>
                {selectedOption === "round-way" && (
                  <div
                    onClick={() =>
                      setIsReturnDateCalendarVisible((prev) => !prev)
                    }
                    className="w-full"
                  >
                    <p className="text-sm text-baseColor pb-1">Return Date</p>
                    <p>
                      {selectedReturnDate
                        ? selectedReturnDate.toLocaleDateString()
                        : "Pick a Date"}
                    </p>
                  </div>
                )}
              </div>
              {isFormSubmitted && !selectedTo && (
                <p className="text-red-500 text-sm pt-1">
                  Please choose destination city.
                </p>
              )}
              {/* calendar */}
              <div className="absolute bg-white">
                {!isReturnDateCalendarVisible && isStartDateCalendarVisible && (
                  <Calendar
                    mode="single"
                    selected={selectedStartDate}
                    onSelect={(date) => {
                      handleStartDateSelect(date);
                      setIsStartDateCalendarVisible(false);
                    }}
                    disabled={(date) => date < new Date()}
                    className="rounded-md border mt-2"
                  />
                )}
                {isReturnDateCalendarVisible && !isStartDateCalendarVisible && (
                  <Calendar
                    mode="single"
                    selected={selectedReturnDate}
                    onSelect={(date) => {
                      handleReturnDateSelect(date);
                      setIsReturnDateCalendarVisible(false);
                    }}
                    disabled={(date) => {
                      const isBeforeToday = date < new Date();
                      const isBeforeStartDate = selectedStartDate
                        ? date < selectedStartDate
                        : false;
                      return isBeforeToday || isBeforeStartDate;
                    }}
                    className="rounded-md border mt-2"
                  />
                )}
              </div>
            </div>
            <button
              type="submit"
              className="p-6 w-full lg:w-40  bg-baseColor text-white font-semibold hover:bg-opacity-90 duration-300"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomeFirst;

// "use client";

// import React, { useState } from "react";
// import { Checkbox } from "@/components/ui/checkbox";
// import { SubmitHandler, useForm } from "react-hook-form";
// import { FaLocationArrow } from "react-icons/fa6";
// import { CgArrowsExchange } from "react-icons/cg";
// import { Calendar } from "@/components/ui/calendar";

// const TravelOption = ({ id, label, selectedOption, onChange }: any) => (
//   <div className="items-top flex items-center space-x-2">
//     <Checkbox
//       id={id}
//       checked={selectedOption === id}
//       onCheckedChange={() => onChange(id)}
//     />
//     <label
//       htmlFor={id}
//       className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//     >
//       {label}
//     </label>
//   </div>
// );

// const InputField = ({
//   placeholder,
//   value,
//   onBlur,
//   onEnter,
//   error,
// }: {
//   placeholder: string;
//   value: string;
//   onBlur: (value: string) => void;
//   onEnter: (value: string) => void;
//   error: boolean;
// }) => (
//   <input
//     type="text"
//     placeholder={placeholder}
//     className={`w-full px-4 py-5 focus:outline-none duration-300 hover:duration-300 rounded ${
//       error ? "border-red-500" : "hover:border-baseColor"
//     }`}
//     onBlur={(e) => onBlur(e.target.value)}
//     onKeyDown={(e) => {
//       if (e.key === "Enter") onEnter(e.currentTarget.value);
//     }}
//   />
// );

// const CalendarSection = ({
//   label,
//   date,
//   onClick,
//   isVisible,
//   onSelect,
//   disabled,
// }: any) => (
//   <div className="w-full relative">
//     <div
//       className="flex items-center gap-5 px-5 py-3 border border-white hover:border-baseColor duration-300 hover:duration-300 cursor-pointer"
//       onClick={onClick}
//     >
//       <p className="text-sm text-baseColor pb-1">{label}</p>
//       <p>{date ? date.toLocaleDateString() : "Pick a Date"}</p>
//     </div>
//     {isVisible && (
//       <Calendar
//         mode="single"
//         selected={date}
//         onSelect={onSelect}
//         disabled={disabled}
//         className="absolute bg-white rounded-md border mt-2"
//       />
//     )}
//   </div>
// );

// const HomeFirst = () => {
//   // State Management
//   const [selectedOption, setSelectedOption] = useState<string>("one-way");
//   const [selectedFrom, setSelectedFrom] = useState<string>("");
//   const [selectedTo, setSelectedTo] = useState<string>("");
//   const [selectedStartDate, setSelectedStartDate] = useState<
//     Date | undefined
//   >();
//   const [selectedReturnDate, setSelectedReturnDate] = useState<
//     Date | undefined
//   >();
//   const [isStartDateCalendarVisible, setIsStartDateCalendarVisible] =
//     useState<boolean>(false);
//   const [isReturnDateCalendarVisible, setIsReturnDateCalendarVisible] =
//     useState<boolean>(false);

//   // Form Handling
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ mode: "onChange" });

//   const onSubmit: SubmitHandler<any> = (data: any) => {
//     console.log(data);
//   };

//   const handleDataChange = () => {
//     setSelectedFrom(selectedTo);
//     setSelectedTo(selectedFrom);
//   };

//   const handleStartDateSelect = (date: Date | undefined) => {
//     if (date) {
//       setSelectedStartDate(date);
//       setIsStartDateCalendarVisible(false);
//     }
//   };

//   const handleReturnDateSelect = (date: Date | undefined) => {
//     if (date) {
//       if (selectedStartDate && date < selectedStartDate) {
//         setSelectedReturnDate(selectedStartDate);
//       } else {
//         setSelectedReturnDate(date);
//       }
//     }
//   };

//   return (
//     <div className="bgBanner flex items-center justify-center">
//       <div className="max-w-screen-lg mx-auto w-full bg-white/70 backdrop-blur-md px-10 py-10 rounded">
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//           {/* Travel Options */}
//           <div className="flex items-center gap-10">
//             {[
//               { id: "one-way", label: "One Way" },
//               { id: "round-way", label: "Round Way" },
//             ].map((option) => (
//               <TravelOption
//                 key={option.id}
//                 id={option.id}
//                 label={option.label}
//                 selectedOption={selectedOption}
//                 onChange={setSelectedOption}
//               />
//             ))}
//           </div>

//           {/* Travel Details */}
//           <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
//             {/* From Section */}
//             <div className="w-full">
//               <InputField
//                 placeholder="From"
//                 value={selectedFrom}
//                 onBlur={(value) => setSelectedFrom(value)}
//                 onEnter={(value) => setSelectedFrom(value)}
//                 error={!!errors.from}
//               />
//             </div>

//             {/* Swap Section */}
//             <div>
//               <CgArrowsExchange
//                 className="w-8 h-8 cursor-pointer"
//                 onClick={handleDataChange}
//               />
//             </div>

//             {/* To Section */}
//             <div className="w-full">
//               <InputField
//                 placeholder="To"
//                 value={selectedTo}
//                 onBlur={(value) => setSelectedTo(value)}
//                 onEnter={(value) => setSelectedTo(value)}
//                 error={!!errors.to}
//               />
//             </div>

//             {/* Date Section */}
//             <CalendarSection
//               label="Journey Date"
//               date={selectedStartDate}
//               onClick={() => setIsStartDateCalendarVisible((prev) => !prev)}
//               isVisible={isStartDateCalendarVisible}
//               onSelect={handleStartDateSelect}
//               disabled={(date: Date) => date < new Date()}
//             />

//             {selectedOption === "round-way" && (
//               <CalendarSection
//                 label="Return Date"
//                 date={selectedReturnDate}
//                 onClick={() => setIsReturnDateCalendarVisible((prev) => !prev)}
//                 isVisible={isReturnDateCalendarVisible}
//                 onSelect={handleReturnDateSelect}
//                 disabled={(date: Date) => {
//                   const isBeforeToday = date < new Date();
//                   const isBeforeStartDate = selectedStartDate
//                     ? date < selectedStartDate
//                     : false;
//                   return isBeforeToday || isBeforeStartDate;
//                 }}
//               />
//             )}
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="p-6 w-full bg-baseColor text-white font-semibold hover:bg-opacity-90 duration-300"
//           >
//             Search
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default HomeFirst;
