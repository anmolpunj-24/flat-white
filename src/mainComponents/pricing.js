// components import
import PricingCard from "@/components/pricingCard";
import SectionHeading from "@/components/sectionHeading";
import SectionSmallHeading from "@/components/sectionSmallHeading";

export default function Pricing() {
  return (
    <div
      id="pricing"
      className="flex flex-col xl:flex-row relative gap-[40px] h-min justify-center w-full pt-[120px] lg:pt-[260] xl:pt-[340px] px-[20px] lg:px-[40px] xl:px-[124px] pb-[60px] lg:pb-[120px] xl:-pb-[146px]"
    >
      <span className="absolute top-[-10px] sm:top-[-25px] md:top-[-30px] lg:top-[-5px] left-1/2 -translate-x-1/2 text-center text-[8em] sm:text-[12em] md:text-[14.5em] lg:text-[19em] xl:text-[22.5em] leading-none font-[600] tracking-[-0.6px] bg-gradient-to-b from-[#9199a9]/20 to-[#9199a9]/2 bg-clip-text text-transparent pointer-events-none select-none">
        Pricing
      </span>

      <div className="w-full xl:max-w-[440px] flex flex-col gap-[32px] lg:gap-[40px] xl:gap-0 xl:content-between h-auto overflow-clip items-start xl:items-center self-stretch">
        <SectionHeading
          fontSize={`text-[36px] lg:text-[60px] xl:text-[64px]`}
          color={`#111`}
          letterSpacing={`tracking-[-0.06em]`}
          lineHeight={`leading-[1em]`}
          text={`Smart solutions, straightforward costs`}
        />

        <div className="mt-auto h-min flex flex-col gap-[12px] lg:gap-[24px]">
          <SectionHeading
            fontSize={`text-[24px]`}
            color={`#111`}
            letterSpacing={`tracking-[-0.06em]`}
            lineHeight={`leading-[1.2em]`}
            text={`Transparent pricing for premium consulting services`}
          />
          <SectionSmallHeading
            color={`#747e90`}
            fontSize={`text-[16px]`}
            lineHeight={`leading-[1.4em]`}
            letterSpacing={`tracking-[-0.02em]`}
            text={`Final pricing depends on the scope, complexity and duration of the engagement. Contact us for a tailored proposal.`}
            maxWidth={`w-full xl:max-w-[390px]`}
          />
        </div>
      </div>

      <PricingCard />
    </div>
  );
}
