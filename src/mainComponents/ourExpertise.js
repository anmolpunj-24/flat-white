// component imports
import CardWithTagsAndText from "@/components/cardWithTagsAndText";
import Divider from "@/components/divider";
import SectionHeading from "@/components/sectionHeading";
import SectionTag from "@/components/sectionTag";

export default function OurExpertise() {
  return (
    <>
      <div className="flex flex-col gap-[146px] pt-[92px] px-[124px] pb-[46px] h-min">
        <SectionTag
          heading={`/  Our expertise`}
          bgColor={`#e0e5eb`}
          textColor={`#0a0f15`}
          animation={true}
        />

        <SectionHeading
          fontSize={`64px`}
          color={`#0a0f15`}
          letterSpacing={`tracking-[-0.06em]`}
          lineHeight={`leading-[1em]`}
          maxWidth={`800px`}
          text={`Where strategy, operations and innovation meet measurable results`}
        />
      </div>

      <Divider bgColor={`#f0f1f5`} />

      <div className="grid grid-cols-[repeat(3,minmax(50px,1fr))] grid-rows-1 gap-[4px] pt-[46px] px-[12px] pb-[92px] justify-center">
        {Array.from({ length: 3 }).map((_, index) => (
          <CardWithTagsAndText key={index} />
        ))}
      </div>
    </>
  );
}
