// components import
import CardWithBigImage from "@/components/cardWithBigImage";
import SectionHeading from "@/components/sectionHeading";
import SectionSmallHeading from "@/components/sectionSmallHeading";
import SectionTag from "@/components/sectionTag";
import WhatWeOfferCard from "@/components/whatWeOfferCard";

export default function WhatWeOffer() {
  return (
    <div
      id="services"
      className="h-min flex flex-col max-w-[1440px] items-center gap-[96px] w-full pt-[46px] pb-[124px] px-[124px] m-auto"
    >
      <div className="flex gap-[100px] h-min p-0 justify-between">
        <SectionTag
          heading={`/  What we offer`}
          bgColor={`#e0e5eb`}
          textColor={"#111"}
          animation={true}
        />

        <SectionHeading
          fontSize={`64px`}
          color={`#0a0f15`}
          letterSpacing={`tracking-[-0.06em]`}
          lineHeight={`leading[1em]`}
          text={`Helping companies succeed through strategy and execution`}
          maxWidth={`720px`}
        />
      </div>

      <div className="flex gap-[100px] items-start h-min ">
        <div className="max-w-[220px] min-w-[170px] shrink-0"></div>
        <div className="flex flex-col gap-[80px] h-min w-full">
          <div className="w-full flex flex-col">
            {Array.from({ length: 4 }).map((_, index, arr) => (
              <WhatWeOfferCard
                key={index}
                index={index}
                lastIndex={arr.length - 1}
              />
            ))}
          </div>
          <div className="flex flex-col gap-[24px] w-full h-min">
            <SectionHeading
              fontSize={`24px`}
              color={`#0a0f15`}
              letterSpacing={`tracking-[-0.06em]`}
              lineHeight={`leading-[1.2em]`}
              text={`Delivering impact with confidence`}
            />
            <SectionSmallHeading
              color={`#747e90`}
              fontSize={`16px`}
              lineHeight={`leading-[1.4em]`}
              letterSpacing={`tracking-[-0.02em]`}
              text={`At FlatWhite, every service is designed to create measurable results while maintaining the highest standards of integrity and confidentiality. We value your trust and handle all information with care in accordance with our Privacy Policy.`}
              maxWidth={`690px`}
            />
          </div>
        </div>
      </div>

      <div className="h-min flex gap-[4px] w-full">
        {Array.from({ length: 2 }).map((_, index) => (
          <CardWithBigImage key={index} />
        ))}
      </div>
    </div>
  );
}
