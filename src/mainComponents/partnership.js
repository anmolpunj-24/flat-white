// components import
import SectionHeading from "@/components/sectionHeading";
import CtaButton from "@/components/ctaButton";
import SectionSmallHeading from "@/components/sectionSmallHeading";
import TeamCard from "@/components/teamCard";
import SectionTag from "@/components/sectionTag";
import Divider from "@/components/divider";

// nextjs import
import Image from "next/image";

export default function Partnership() {
  return (
    <div className="h-min items-center pt-[78px] px-[12px] pb-[0px] relative">
      <div className="rounded-[12px] overflow-hidden relative">
        <video src="/videos/partnership.mp4" autoPlay loop muted playsInline />
        <div className="absolute inset-0 bg-[#0a0f15] opacity-[0.5]"></div>

        <div className="h-min inset-0 z-10 flex flex-col items-center justify-center gap-[32px] py-[180px] px-[124px] absolute">
          <SectionHeading
            fontSize={`64px`}
            color={`#fff`}
            letterSpacing={`-0.02em`}
            lineHeight={`1em`}
            maxWidth={`680px`}
            text={`Building partnerships that drive growth`}
            align={`center`}
          />

          <div className="flex gap-[4px] items-center justify-center">
            {Array.from({ length: 3 }).map((_, index) => (
              <span
                key={index}
                className="uppercase bg-[#222631] rounded-[99px] h-min w-min px-[12px] py-[6px] whitespace-pre text-white font-medium text-[12px]"
              >
                Trusted partner
              </span>
            ))}
          </div>

          <SectionSmallHeading
            color={`#f0f1f5`}
            fontSize={`18px`}
            lineHeight={`1.3em`}
            letterSpacing={`-0.02em`}
            align={`center`}
            text={`We work closely with clients to deliver results efficiently and effectively. By embedding ourselves in their teams, we ensure strategies are actionable, sustainable, and create long-term value across the organization.`}
            maxWidth={`460px`}
            fontWeight={`500`}
          />

          <CtaButton
            bgColor="#fff"
            textColor="#111"
            ctaText={`Apply now`}
            padding={`18px 24px`}
          />
        </div>
      </div>

      <div className="flex flex-col z-10 bg-[#0a0f15] -mt-[8px] rounded-bl-[12px] rounded-br-[12px]">
        {/* marquee */}
        <div className="relative flex overflow-x-hidden max-w-[920px] text-white mx-auto w-full pt-[46px] px-[124px] pb-[124px] [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_12.5%,rgb(0,0,0)_87.5%,rgba(0,0,0,0)_100%)]">
          <div className="flex h-[140px] w-[240px] min-w-full shrink-0 justify-around items-center animate-marquee whitespace-nowrap">
            {Array.from({ length: 3 }).map((_, index) => (
              <Image
                key={index}
                src={`/assets/logoipsum.svg`}
                alt="logo"
                height={29}
                width={121}
                className="brightness-0 invert"
              />
            ))}
          </div>

          <div
            className="flex shrink-0 h-[140px] w-[240px] min-w-full justify-around items-center animate-marquee whitespace-nowrap"
            aria-hidden="true"
          >
            {Array.from({ length: 3 }).map((_, index) => (
              <Image
                key={index}
                src={`/assets/logoipsum.svg`}
                alt="logo"
                height={29}
                width={121}
                className="brightness-0 invert"
              />
            ))}
          </div>
        </div>

        <div className="flex gap-[40px] h-min pt-[92px] px-[124px] pb-[46px] justify-between">
          <SectionTag
            heading={`/  Our experts`}
            bgColor={`#222631`}
            textColor={"#fff"}
            animation={true}
          />

          <SectionHeading
            fontSize={`64px`}
            color={`#fff`}
            letterSpacing={`-0.06em`}
            lineHeight={`1em`}
            text={`The team driving strategy, innovation and growth`}
            maxWidth={`720px`}
          />
        </div>

        <Divider bgColor={`#222631`} />

        <div className="grid grid-cols-[repeat(2,minmax(200px,1fr))] justify-center gap-[4px] h-min px-[124px] py-[92px]">
          {Array.from({ length: 6 }).map((_, index) => (
            <TeamCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
