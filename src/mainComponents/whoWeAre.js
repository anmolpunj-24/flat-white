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

export default function WhoWeAre({ data }) {
  const containerRef = useRef(null);

  const items = [
    { title: "Analysis", height: "82%" },
    { title: "Market", height: "37%" },
    { title: "Growth", height: "96%" },
    { title: "Strategy", height: "62%" },
    { title: "Planning", height: "48%" },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const items = Array.from(containerRef.current.children);
    const centerIndex = (items.length - 1) / 2;

    gsap.from(items, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
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
    <div className="px-[12px] lg:pb-[46px]">
      <div className="flex flex-col justify-center bg-[#0a0f15] rounded-bl-[12px] rounded-br-[12px]">
        <div className="max-w-[1440px] w-full mx-auto">
          <div className="flex flex-col xl:flex-row gap-[100px] py-[60px] px-[20px] lg:pt-[100px] xl:pt-[120px] lg:px-[40px] xl:pl-[112px] xl:pr-[60px] lg:pb-[120px] xl:pb-[164px]">
            <div
              ref={containerRef}
              className="flex max-w-[440px] w-full h-[320px] sm:h-[400px] xl:h-auto items-end justify-center gap-[4px] rounded-[20px] mx-auto"
            >
              {items.map((item, i) => (
                <div
                  key={i}
                  className="relative flex-1 min-w-0 rounded-b-[12px]"
                  style={{
                    height: item.height,
                  }}
                >
                  {/* outer borders */}
                  <div className="absolute inset-0 border-x border-b border-[#1d2633] rounded-b-[18px]" />

                  {/* inner backdrop */}
                  <div className="absolute inset-x-[1px] bottom-[1px] top-[30px] bg-[#13171c] rounded-b-[16px]" />

                  {/* top border lines */}
                  <div className="absolute top-0 left-0 w-[1px] h-[30px] bg-[#1d2633]" />
                  <div className="absolute top-0 right-0 w-[1px] h-[30px] bg-[#1d2633]" />

                  {/* bullet */}
                  <div className="absolute left-1/2 top-[-36px] sm:top-[-50px] -translate-x-1/2">
                    <div className="w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] rounded-[3px] bg-[#222c3a]" />
                  </div>

                  {/* title */}
                  <div className="absolute left-1/2 top-[-22px] sm:top-[-30px] -translate-x-1/2">
                    <p className="uppercase text-white font-[700] text-[10px] sm:text-[12px] whitespace-nowrap">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-min flex flex-col gap-[24px] lg:gap-[32px]">
              <SectionTag
                heading={`/  Who we are`}
                bgColor={`#222631`}
                textColor={`#fff`}
                animation={true}
              />
              <SectionHeading
                fontSize={`text-[32px] lg:text-[40px] xl:text-[46px]`}
                color={`#fff`}
                letterSpacing={`tracking-[-0.06em]`}
                lineHeight={`leading-[1em]`}
                text={`Strategic transformation, enabling businesses to scale with clarity and consistent performance improvement.`}
              />
              <SectionSmallHeading
                color={`#bfc7d4`}
                fontSize={`text-[16px]`}
                lineHeight={`leading-[1.4em]`}
                letterSpacing={`tracking-[-0.02em]`}
                text={`FlatWhite is a consulting partner for companies that demand both vision and execution. We turn strategic goals into operational reality and create value that lasts.`}
                maxWidth={`max-w-[440px]`}
              />
              <CtaButton
                bgColor={`#fff`}
                textColor={`#111`}
                ctaText={`Learn more`}
                padding={`18px 24px`}
                linkTo={`/about-us`}
              />
            </div>
          </div>

          <div className="h-min flex flex-wrap gap-[4px] px-[12px] pb-[12px] lg:pb-[46px] w-full">
            {data.map((item, index) => (
              <div
                key={index}
                className="w-full lg:w-[calc(50%-2px)] xl:w-[calc(25%-4px)]"
              >
                <CardWithDots
                  activeIndex={index}
                  totalBars={item.length}
                  data={item}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
