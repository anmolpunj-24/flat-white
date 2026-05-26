// component import
import Divider from "@/components/divider";
import SectionHeading from "@/components/sectionHeading";
import SectionTag from "@/components/sectionTag";

// react import
import React, { useEffect, useRef, useState } from "react";

// gsap import
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionSmallHeading from "@/components/sectionSmallHeading";

gsap.registerPlugin(ScrollTrigger);

export default function OurProcess() {
  const containerRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    if (!pathRef.current) return;

    const ctx = gsap.context(() => {
      const path = pathRef.current;
      const length = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom bottom",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="px-[12px]" id="process">
      <div className="bg-[#657084] w-full flex flex-col h-min lg:pt-[120px] pt-[60px] xl:pt-[164px] px-[20px] lg:px-[40px] xl:px-[112px] rounded-[12px]">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-[32px] lg:gap-[80px] items-center">
          <div className="flex flex-col gap-[40px] lg:gap-[100px] xl:gap-[146px] w-full max-w-[940px]">
            <SectionTag
              heading={`/  Our process`}
              bgColor={`#747e90`}
              textColor={`#fff`}
              animation={true}
            />
            <SectionHeading
              fontSize={`text-[36px] lg:text-[60px] xl:text-[64px]`}
              color={`#fff`}
              letterSpacing={`tracking-[-0.06em]`}
              lineHeight={`leading-[1em]`}
              text={`How we transform strategy, insights and expertise into measurable business outcomes`}
            />
          </div>

          <div
            className="lg:relative w-full max-w-[940px] lg:min-h-[1100px] xl:min-h-[1120px]"
            ref={containerRef}
          >
            <Divider bgColor={`#ffffff1a`} />

            <svg
              viewBox="0 0 1199 1434"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden lg:block w-full h-auto"
            >
              <path
                d="M232.488 0C232.488 46.2989 269.981 83.8525 316.279 83.9273L975.782 84.9935C1099.37 85.1932 1199.11 186.067 1197.91 309.646C1196.73 431.828 1097.32 530.197 975.135 529.997C856.628 529.803 711.976 529.566 598.349 529.38C480.719 529.188 329.837 528.941 209.135 528.744C94.1047 528.555 0.731262 621.631 0.50032 736.661C0.269118 851.82 93.5111 945.323 208.671 945.415L861.46 945.931C970.456 946.018 1058.77 1034.4 1058.77 1143.4C1058.77 1252.98 969.54 1341.6 859.96 1340.86L628.689 1339.28C576.127 1338.93 533.326 1381.44 533.326 1434"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
                fill="none"
              />
            </svg>

            <svg
              viewBox="0 0 1199 1434"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden lg:block absolute top-0 left-0 w-full h-auto overflow-visible"
            >
              <path
                ref={pathRef}
                d="M232.488 0C232.488 46.2989 269.981 83.8525 316.279 83.9273L975.782 84.9935C1099.37 85.1932 1199.11 186.067 1197.91 309.646C1196.73 431.828 1097.32 530.197 975.135 529.997C856.628 529.803 711.976 529.566 598.349 529.38C480.719 529.188 329.837 528.941 209.135 528.744C94.1047 528.555 0.731262 621.631 0.50032 736.661C0.269118 851.82 93.5111 945.323 208.671 945.415L861.46 945.931C970.456 946.018 1058.77 1034.4 1058.77 1143.4C1058.77 1252.98 969.54 1341.6 859.96 1340.86L628.689 1339.28C576.127 1338.93 533.326 1381.44 533.326 1434"
                stroke="white"
                strokeWidth="1"
                fill="none"
                style={{
                  strokeDasharray: 5000,
                  strokeDashoffset: 5000,
                }}
              />
            </svg>

            <div className="flex flex-col pt-[32px] lg:pt-0 gap-[12px] lg:absolute lg:top-[128px] lg:right-[90px] w-full lg:w-[380px]">
              <SectionTag
                heading={`/ 001`}
                bgColor={`#747e90`}
                textColor={`#fff`}
              />
              <SectionHeading
                fontSize={`text-[24px]`}
                color={`#fff`}
                letterSpacing={`tracking-[-0.06em]`}
                lineHeight={`leading-[1.2em]`}
                text={`Discover opportunities and define your priorities`}
              />
              <SectionSmallHeading
                color={`#d6d9e2`}
                fontSize={`text-[16px]`}
                lineHeight={`leading-[1.4em]`}
                letterSpacing={`tracking-[-0.02em]`}
                text={`We analyze your business, market and goals to identify key opportunities. Our approach combines industry insight, data-driven analysis and stakeholder engagement to create a clear foundation for meaningful transformation.`}
              />
            </div>

            <div className="flex flex-col pt-[32px] lg:pt-0 gap-[12px] lg:absolute lg:top-[470px] lg:left-[120px] w-full lg:w-[380px]">
              <SectionTag
                heading={`/ 001`}
                bgColor={`#747e90`}
                textColor={`#fff`}
              />
              <SectionHeading
                fontSize={`text-[24px]`}
                color={`#fff`}
                letterSpacing={`tracking-[-0.06em]`}
                lineHeight={`leading-[1.2em]`}
                text={`Discover opportunities and define your priorities`}
              />
              <SectionSmallHeading
                color={`#d6d9e2`}
                fontSize={`text-[16px]`}
                lineHeight={`leading-[1.4em]`}
                letterSpacing={`tracking-[-0.02em]`}
                text={`We analyze your business, market and goals to identify key opportunities. Our approach combines industry insight, data-driven analysis and stakeholder engagement to create a clear foundation for meaningful transformation.`}
              />
            </div>

            <div className="flex flex-col pt-[32px] lg:pt-0 pb-[60px] lg:pb-0 gap-[12px] lg:absolute lg:top-[790px] lg:right-[180px] w-full lg:w-[380px]">
              <SectionTag
                heading={`/ 001`}
                bgColor={`#747e90`}
                textColor={`#fff`}
              />
              <SectionHeading
                fontSize={`text-[24px]`}
                color={`#fff`}
                letterSpacing={`tracking-[-0.06em]`}
                lineHeight={`leading-[1.2em]`}
                text={`Discover opportunities and define your priorities`}
              />
              <SectionSmallHeading
                color={`#d6d9e2`}
                fontSize={`text-[16px]`}
                lineHeight={`leading-[1.4em]`}
                letterSpacing={`tracking-[-0.02em]`}
                text={`We analyze your business, market and goals to identify key opportunities. Our approach combines industry insight, data-driven analysis and stakeholder engagement to create a clear foundation for meaningful transformation.`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
