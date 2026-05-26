// component imports
import CardWithTagsAndText from "@/components/cardWithTagsAndText";
import Divider from "@/components/divider";
import SectionHeading from "@/components/sectionHeading";
import SectionTag from "@/components/sectionTag";

export default function OurExpertise() {
  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <div className="flex flex-col gap-[40px] lg:gap-[100px] xl:gap-[146px] pt-[80px] lg:pt-[92px] px-[20px] lg:px-[40px] xl:px-[124px] pb-[32px] lg:pb-[46px] h-min">
        <SectionTag
          heading={`/  Our expertise`}
          bgColor={`#e0e5eb`}
          textColor={`#0a0f15`}
          animation={true}
        />

        <SectionHeading
          fontSize={`text-[36px] lg:text-[60px] xl:text-[64px]`}
          color={`#0a0f15`}
          letterSpacing={`tracking-[-0.06em]`}
          lineHeight={`leading-[1em]`}
          maxWidth={`max-w-[800px]`}
          text={`Where strategy, operations and innovation meet measurable results`}
        />
      </div>

      <Divider bgColor={`#f0f1f5`} />

      <div className="flex flex-col lg:grid lg:grid-cols-[repeat(3,minmax(50px,1fr))] lg:grid-rows-1 gap-[4px] pt-[32px] lg:pt-[46px] px-[12px] pb-[20px] lg:pb-[92px] justify-center">
        {Array.from({ length: 3 }).map((_, index) => (
          <CardWithTagsAndText key={index} />
        ))}
      </div>
    </div>
  );
}
