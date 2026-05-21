// components import
import PricingCard from "@/components/pricingCard";
import SectionHeading from "@/components/sectionHeading";
import SectionSmallHeading from "@/components/sectionSmallHeading";

export default function Pricing() {
  return (
    <>
      <div></div>

      <div className="flex gap-[40px] h-min max-w-[1440px] pt-[340px] px-[124px] pb-[146px]">
        <div className="max-w-[440px] flex flex-col content-between h-auto overflow-clip items-center self-stretch">
          <SectionHeading
            fontSize={`64px`}
            color={`#111`}
            letterSpacing={`-0.04em`}
            lineHeight={`1em`}
            text={`Smart solutions, straightforward costs`}
          />

          <div className="mt-auto h-min flex flex-col gap-[24px]">
            <SectionHeading
              fontSize={`24px`}
              color={`#111`}
              letterSpacing={`-0.04em`}
              lineHeight={`1.2em`}
              text={`Transparent pricing for premium consulting services`}
            />
            <SectionSmallHeading
              color={`#747e90`}
              fontSize={`16px`}
              lineHeight={`1.4em`}
              letterSpacing={`-0.02em`}
              text={`Final pricing depends on the scope, complexity and duration of the engagement. Contact us for a tailored proposal.`}
            />
          </div>
        </div>
        <PricingCard />
      </div>
    </>
  );
}
