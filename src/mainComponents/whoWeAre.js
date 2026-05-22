// components import
import CtaButton from "@/components/ctaButton";
import SectionHeading from "@/components/sectionHeading";
import SectionSmallHeading from "@/components/sectionSmallHeading";
import SectionTag from "@/components/sectionTag";

export default function WhoWeAre() {
  return (
    <div className="px-[12px] pb-[46px]">
      <div className="pt-[120px] pl-[112px] pr-[60px] pb-[164px] bg-[#0a0f15] rounded-bl-[12px] rounded-br-[12px]">
        <div>
          <div></div>
          <div className="h-min flex flex-col gap-[32px]">
            <SectionTag heading={`/  Who we are`} bgColor={`#222631`} textColor={`#fff`} />
            <SectionHeading
              fontSize={`46px`}
              color={`#fff`}
              letterSpacing={`-0.06em`}
              lineHeight={`1em`}
              text={`Strategic transformation, enabling businesses to scale with clarity and consistent performance improvement.`}
            />
            <SectionSmallHeading
              color={`#bfc7d4`}
              fontSize={`16px`}
              lineHeight={`1.4em`}
              letterSpacing={`-0.02em`}
              text={`FlatWhite is a consulting partner for companies that demand both vision and execution. We turn strategic goals into operational reality and create value that lasts.`}
              maxWidth={`440px`}
            />
            <CtaButton bgColor={`#fff`} textColor={`#111`} ctaText={`Learn more`} padding={`18px 24px`} />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
