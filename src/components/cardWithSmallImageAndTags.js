// nextjs import
import Image from "next/image";

// components import
import SectionHeading from "./sectionHeading";
import SectionSmallHeading from "./sectionSmallHeading";
import SectionTag from "./sectionTag";

export default function CardWithSmallImageAndTags() {
  return (
    <div className="flex flex-col content-between h-min bg-[#f0f1f5] rounded-[12px] w-full min-h-[500px] p-[32px]">
      <Image src={`/assets/react.svg`} height={64} width={64} alt="icon" />

      <div className="h-min flex flex-col w-fill gap-[12px] p-0 mt-auto">
        <SectionTag
          heading={`Data driven`}
          bgColor={`#fff`}
          textColor={`#111`}
        />
        <SectionHeading
          fontSize={`24px`}
          color={`#111`}
          letterSpacing={`-0.06em`}
          lineHeight={`1.2em`}
          text={`We base every decision on insights, analytics and measurable outcomes`}
        />
        <SectionSmallHeading
          color={`#657084`}
          fontSize={`16px`}
          lineHeight={`1.4em`}
          letterSpacing={`-0.02em`}
          text={`FlatWhite uses data and analytics to guide strategy and deliver tangible results.`}
          fontWeight={500}
        />
      </div>
    </div>
  );
}
