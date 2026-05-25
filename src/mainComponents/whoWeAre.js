// components import
import CtaButton from "@/components/ctaButton";
import SectionHeading from "@/components/sectionHeading";
import SectionSmallHeading from "@/components/sectionSmallHeading";
import SectionTag from "@/components/sectionTag";
import CardWithDots from "@/components/cardWithDots";

// react import
import { useEffect, useRef } from "react";

// gsap import
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhoWeAre() {
  const containerRef = useRef(null);

  const items = [
    { title: "Analysis", height: "72%" },
    { title: "Market", height: "27%" },
    { title: "Growth", height: "86%" },
    { title: "Strategy", height: "52%" },
    { title: "Planning", height: "38%" },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const items = Array.from(containerRef.current.children);
    const centerIndex = (items.length - 1) / 2;

    gsap.from(items, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
      x: (index) => {
        const distanceIndex = index - centerIndex;
        return distanceIndex * -84;
      },
      opacity: 0,
      scaleX: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: {
        each: 0.1,
        from: "center",
      },
    });
  }, []);

  return (
    <div className="px-[12px] pb-[46px]" id="about-us">
      <div className="flex flex-col justify-center bg-[#0a0f15] rounded-bl-[12px] rounded-br-[12px]">
        <div className="flex gap-[100px] pt-[120px] pl-[112px] pr-[60px] pb-[164px]">
          <div
            ref={containerRef}
            className="w-full max-w-[420px] flex items-end gap-[4px] rounded-[20px]"
          >
            {items.map((item, i) => (
              <div
                key={i}
                className="relative flex-1 min-w-[80px] rounded-b-[12px]"
                style={{
                  height: item.height,
                }}
              >
                {/* outer borders */}
                <div className="absolute inset-0 border-x border-b border-[#1d2633] rounded-b-[18px]" />

                {/* inner backdrop */}
                <div className="absolute inset-x-[1px] bottom-[1px] top-[30px] bg-[#13171c] rounded-b-[16px]" />

                {/* top border lines */}
                <div className="absolute top-0 left-0 w-[1px] h-[30px]" />
                <div className="absolute top-0 right-0 w-[1px] h-[30px] bg-[#1d2633]" />

                {/* bullet */}
                <div className="absolute left-1/2 top-[-50px] -translate-x-1/2">
                  <div className="w-[10px] h-[10px] rounded-[3px] bg-[#222c3a]" />
                </div>

                {/* title */}
                <div className="absolute left-1/2 top-[-30px] -translate-x-1/2">
                  <p className="uppercase text-white font-[700] text-[12px] whitespace-nowrap">
                    {item.title}
                  </p>
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

        <div className="flex gap-[4px] px-[12px] pb-[46px] w-full">
          {Array.from({ length: 4 }).map((_, index) => (
            <CardWithDots key={index} activeIndex={index} totalBars={`4`} />
          ))}
        </div>
      </div>
    </div>
  );
}
