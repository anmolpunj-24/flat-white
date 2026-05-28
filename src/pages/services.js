// components import
import CardWithSmallImageAndTags from "@/components/cardWithSmallImageAndTags";
import SectionHeading from "@/components/sectionHeading";
import SectionSmallHeading from "@/components/sectionSmallHeading";

export default function Services() {
  return (
    <div className="w-full flex flex-col gap-[32px] lg:gap-[40px] xl:gap-[80px] h-min px-[20px] lg:px-[40px] xl:px-[124px] pt-[50px] sm:pt-[70px] md:pt-[100px] lg:pt-[120px] xl:pt-[140px] pb-[60px] lg:pb-[92px] xl:pb-[92px] max-w-[1440px] mx-auto">
      <span className="absolute top-[60px] sm:top-[50px] md:top-[50px] lg:top-[20px] left-1/2 -translate-x-1/2 text-center text-[6.5em] sm:text-[9.5em] md:text-[11em] lg:text-[15em] xl:text-[18em] leading-none font-[600] tracking-[-0.6px] bg-gradient-to-b from-[#5b615f]/10 to-[#9199a9]/2 bg-clip-text text-transparent pointer-events-none select-none">
        Services
      </span>

      <div className="flex flex-col gap-[15px] w-full">
        <SectionHeading
          fontSize={`text-[48px] lg:text-[64px] xl:text-[74px]`}
          color={`#111`}
          letterSpacing={`tracking-[-0.06em]`}
          lineHeight={`leading-[1em]`}
          text={`Services We Offer`}
        />
        <SectionSmallHeading
          color={`#bfc7d4`}
          fontSize={`text-[16px]`}
          lineHeight={`leading-[1.4em]`}
          letterSpacing={`tracking-[-0.02em]`}
          text={`FlatWhite partners with leadership teams to redefine strategy, streamline operations and unlock sustainable growth. We translate ambition into an actionable roadmap using data, technology and close collaboration.`}
        />
      </div>

      <div className="h-min flex flex-wrap gap-[4px] w-full">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="w-full lg:w-[calc(50%-2px)]">
            <CardWithSmallImageAndTags hover={true} />
          </div>
        ))}
      </div>
    </div>
  );
}
