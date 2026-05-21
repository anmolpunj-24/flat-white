// components import
import CardWithBigImage from "@/components/cardWithBigImage";
import SectionHeading from "@/components/sectionHeading";
import SectionTag from "@/components/sectionTag";

export default function WhatWeOffer() {
  return (
    <div className="h-min flex flex-col max-w-[1440px] items-center gap-[96px] w-full pt-[46px] pb-[124px] px-[124px] m-auto">
      <div className="flex gap-[100px] h-min p-0 justify-between">
        <SectionTag
          heading={`/  What we offer`}
          bgColor={`#e0e5eb`}
          textColor={"#111"}
        />

        <SectionHeading
          fontSize={`64px`}
          color={`#0a0f15`}
          letterSpacing={`-0.06em`}
          lineHeight={`1em`}
          text={`Helping companies succeed through strategy and execution`}
          maxWidth={`720px`}
        />
      </div>

      <div className="h-min flex gap-[4px] w-full">
        {Array.from({ length: 2 }).map((_, index) => (
          <CardWithBigImage key={index}/>
        ))}
      </div>
    </div>
  );
}
