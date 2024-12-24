"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

import Faqs from "@/shared/data/Faqs.json";

const HomeSixth = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-screen-xl mx-auto pb-28 space-y-12">
      <h1 className="text-4xl font-semibold text-center">
        <span className="text-baseColor">Frequently</span> asked questions
      </h1>

      <div className="max-w-screen-xl mx-auto ">
        <div className="mt-10 space-y-8">
          {Faqs?.map((faq: any, index: number) => (
            <div key={index} className="border-b pb-5 space-y-3">
              <button
                onClick={() => handleToggle(index)}
                className="text-lg font-semibold text-gray-800 w-full text-left flex justify-between items-center"
              >
                {faq.question}
                {expandedIndex === index ? (
                  <FaChevronUp className="text-gray-600" />
                ) : (
                  <FaChevronDown className="text-gray-600" />
                )}
              </button>
              {expandedIndex === index && (
                <div
                  className="mt-3 text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: faq.answer,
                  }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSixth;
