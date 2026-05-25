// components import
import CardWithSmallImageAndTags from "@/components/cardWithSmallImageAndTags";
import Divider from "@/components/divider";
import SectionHeading from "@/components/sectionHeading";
import SectionTag from "@/components/sectionTag";

export default function OurMethods() {
  return (
    <>
      <div className="flex flex-col gap-[146px] py-[46px] px-[124px] h-min" id="our-methods">
        <SectionTag
          heading={`/  Our methods`}
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
          text={`Bridging strategy, operations and delivering tangible business growth`}
        />
      </div>

      <Divider bgColor={`#f0f1f5`} />

      <div className="h-min flex gap-[4px] w-full px-[12px] pt-[46px] pb-[92px]">
        {Array.from({ length: 3 }).map((_, index) => (
          <CardWithSmallImageAndTags key={index} />
        ))}
      </div>
    </>
  );
}
