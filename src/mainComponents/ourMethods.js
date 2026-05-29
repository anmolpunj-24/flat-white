// components import
import CardWithSmallImageAndTags from "@/components/cardWithSmallImageAndTags";
import Divider from "@/components/divider";
import SectionHeading from "@/components/sectionHeading";
import SectionTag from "@/components/sectionTag";

export default function OurMethods() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex flex-col gap-[40px] lg:gap-[100px] xl:gap-[146px] pt-[46px] pb-[32px] lg:py-[46px] px-[20px] lg:px-[40px] xl:px-[124px] h-min">
        <SectionTag
          heading={`/  Our methods`}
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
          text={`Bridging strategy, operations and delivering tangible business growth`}
        />
      </div>

      <Divider bgColor={`#f0f1f5`} />

      <div className="h-min flex flex-wrap gap-[4px] w-full px-[12px] pt-[32px] lg:pt-[46px] pb-[46px] lg:pb-[92px]">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="w-full lg:w-[calc(50%-2px)] xl:w-[calc(33.333%-3px)]"
          >
            <CardWithSmallImageAndTags />
          </div>
        ))}
      </div>
    </div>
  );
}
