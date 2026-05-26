// components import
import Divider from "@/components/divider";
import FaqCard from "@/components/faqCard";
import SectionHeading from "@/components/sectionHeading";
import SectionTag from "@/components/sectionTag";

export default function Faqs() {
  return (
    <div className="px-[12px] pb-[12px]">
      <div className="relative h-min bg-[#657084] w-full">
        <div className="mx-auto max-w-[1440px] items-center flex flex-col gap-[46px] pt-[164px] px-[112px] pb-[254px] rounded-[12px]">
          <SectionTag
            heading={`/  Frequently asked questions`}
            bgColor={`#747e90`}
            textColor={`#fff`}
            animation={true}
          />

          <SectionHeading
            fontSize={`64px`}
            color={`#fff`}
            letterSpacing={`tracking-[-0.06em]`}
            lineHeight={`leading-[1em]`}
            maxWidth={`800px`}
            text={`Straightforward answers to help you make informed choices.`}
            align={`center`}
          />

          <Divider bgColor={`#747e90`} />

          <div className="columns-2 gap-[4px] space-y-[4px]">
            {Array.from({ length: 6 }).map((_, index) => (
              <FaqCard key={index} />
            ))}
          </div>

          <span className="absolute bottom-[-20px] left-[18px] right-[18px] text-center text-[13.16em] leading-none font-[600] tracking-[-0.6px] bg-gradient-to-b from-[#9199a9]/20 to-[#9199a9]/3 bg-clip-text text-transparent pointer-events-none select-none">
            Help Center
          </span>
        </div>
      </div>
    </div>
  );
}
