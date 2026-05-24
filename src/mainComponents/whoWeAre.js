// components import
import CtaButton from "@/components/ctaButton";
import SectionHeading from "@/components/sectionHeading";
import SectionSmallHeading from "@/components/sectionSmallHeading";
import SectionTag from "@/components/sectionTag";

export default function WhoWeAre() {
  const items = ["Analysis", "Market", "Growth", "Strategy", "Planning"];

  return (
    <div className="px-[12px] pb-[46px]">
      <div className="pt-[120px] pl-[112px] pr-[60px] pb-[164px] bg-[#0a0f15] rounded-bl-[12px] rounded-br-[12px]">
        <div className="flex gap-[100px]">
          <div className="w-full max-w-[420px] flex gap-[4px] relative">
            {items.map((item, i) => (
              <div
                key={i}
                className="relative flex-1 min-h-[400px] min-w-[80px] border-x border-b border-[#222631] rounded-b-[12px] overflow-hidden"
              >
                {/* top borders */}
                <div className="absolute inset-x-0 top-0 h-full border-x border-[#222631] pointer-events-none" />

                {/* backdrop */}
                <div className="absolute inset-0 bg-[#13171c] rounded-b-[12px]" />

                {/* label */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[60px] z-10">
                  <p className="uppercase text-white text-[12px] font-[600] leading-[1em] whitespace-nowrap">
                    {item}
                  </p>
                </div>

                {/* bullet */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[30px] z-10">
                  <div className="w-[10px] h-[10px] bg-[#222631] rounded-[25%]" />
                </div>
              </div>
            ))}
          </div>

          <div className="h-min flex flex-col gap-[32px]">
            <SectionTag
              heading={`/  Who we are`}
              bgColor={`#222631`}
              textColor={`#fff`}
              animation={true}
            />
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
            <CtaButton
              bgColor={`#fff`}
              textColor={`#111`}
              ctaText={`Learn more`}
              padding={`18px 24px`}
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
