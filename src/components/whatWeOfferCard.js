// react import
import { useState } from "react";

// nextjs import
import Image from "next/image";

export default function WhatWeOfferCard({ index, lastIndex }) {
  const [isOpen, setIsOpen] = useState(false);

  let expandCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${
        index === lastIndex ? "border-b-[1.5px]" : ""
      } border-t-[1.5px] border-[#f0f1f5] bg-white overflow-hidden cursor-pointer w-full`}
      onClick={expandCard}
    >
      <div className="group w-full flex gap-[40px] items-start pt-[20px]">
        <p className="xl:w-[120px] h-min text-[12px] font-[600]">/ 001</p>

        <div className="flex-1 overflow-hidden">
          <p
            className={`
              whitespace-pre-wrap break-words
              text-[#0a0f15]
              text-[24px]
              leading-[1.2em]
              tracking-[-0.06em]
              transition-all
              duration-500
              ease-in-out
              ${
                isOpen
                  ? "opacity-0 -translate-y-[10px] max-h-0 pb-0"
                  : "opacity-100 translate-y-0 max-h-[100px] pb-[20px]"
              }
            `}
          >
            Strategic Planning
          </p>

          <div
            className={`
              grid
              transition-all
              duration-700
              ease-in-out
              ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100 pb-[20px]"
                  : "grid-rows-[0fr] opacity-0"
              }
            `}
          >
            <div className="overflow-hidden">
              <div
                className={`
                  flex flex-col lg:flex-row gap-[24px] lg:gap-[40px]
                  transition-all
                  duration-700
                  ease-in-out
                  ${
                    isOpen
                      ? "translate-y-0"
                      : "translate-y-[20px]"
                  }
                `}
              >
                <div className="relative flex-1 overflow-hidden max-w-[300px]">
                  <Image
                    className="object-cover rounded-[12px] w-[300px] h-[195px] lg:h-[107px] lg:w-[164px]"
                    src="/assets/people1.avif"
                    height={107}
                    width={164}
                    alt="service image"
                  />
                </div>

                <div className="flex flex-2 flex-col gap-[16px]">
                  <h4 className="text-[#0a0f15] text-[32px] leading-[1.2em] tracking-[-0.06em]">
                    Strategic Planning
                  </h4>

                  <p className="text-[#747e90] text-[16px] leading-[1.4em] tracking-[-0.02em]">
                    We help companies define long-term goals and create
                    actionable roadmaps. Our approach combines market insight,
                    competitive analysis and operational alignment to drive
                    measurable growth.
                  </p>

                  <div className="flex flex-wrap gap-[10px]">
                    {[
                      "strategy",
                      "roadmap",
                      "growth",
                      "planning",
                      "analysis",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="
                          bg-[#f0f1f5]
                          rounded-full
                          px-[12px]
                          py-[8px]"
                      >
                        <p className="text-[#0a0f15] text-[12px] leading-[1em] font-[600] uppercase">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`
            bg-[#111]
            transition-all
            duration-500
            ease-in-out
            rounded-full
            h-[24px]
            w-[24px]
            relative
            flex
            items-center
            justify-center
            shrink-0
            ${isOpen ? "rotate-[315deg]" : "rotate-0"}
          `}
        >
          <div className="absolute w-[10px] h-[2px] rounded-full bg-[#fff]"></div>

          <div className="absolute h-[10px] w-[2px] rounded-full bg-[#fff]"></div>
        </div>
      </div>
    </div>
  );
}
