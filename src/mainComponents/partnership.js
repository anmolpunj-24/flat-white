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
    <div className="h-min items-center pt-[60px] lg:pt-[78px] px-[6px] lg:px-[12px] pb-[0px] relative">
      <div className="relative rounded-[12px] overflow-hidden min-h-[500px] lg:min-h-[720px] w-full">
        <video
          src="/videos/partnership.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0a0f15]/50"></div>

        <div className="relative h-min inset-0 z-10 flex flex-col items-center justify-center gap-[32px] py-[80px] lg:py-[120px] xl:py-[180px] px-[20px] lg:px-[124px]">
          <SectionHeading
            fontSize={`text-[36px] lg:text-[60px] xl:text-[64px]`}
            color={`#fff`}
            letterSpacing={`tracking-[-0.02em]`}
            lineHeight={`leading-[1em]`}
            maxWidth={`w-full xl:max-w-[680px]`}
            text={`Building partnerships that drive growth`}
            align={`center`}
          />

          <div className="flex flex-wrap lg:flex-nowrap gap-[4px] items-center justify-center">
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
            fontSize={`text-[18px]`}
            lineHeight={`leading-[1.3em]`}
            letterSpacing={`tracking-[-0.02em]`}
            align={`center`}
            text={`We work closely with clients to deliver results efficiently and effectively. By embedding ourselves in their teams, we ensure strategies are actionable, sustainable, and create long-term value across the organization.`}
            maxWidth={`max-w-[460px]`}
            fontWeight={`500`}
          />

          <CtaButton
            bgColor="#fff"
            textColor="#111"
            ctaText={`Apply now`}
            padding={`18px 24px`}
            linkTo={`/contact-us`}
          />
        </div>
      </div>

      <div className="flex flex-col z-10 bg-[#0a0f15] -mt-[8px] rounded-bl-[12px] rounded-br-[12px]">
        <div className="max-w-[1440px] w-full mx-auto">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[18px] max-w-[1200px] mx-auto pb-[20px]">
            {Array.from({ length: 4 }).map((item) => (
              <div
                key={item}
                className="bg-[#ffffff0a] rounded-[24px] p-[30px] lg:p-[40px] flex flex-col gap-[24px]"
              >
                <span className="text-[18px] text-[#f59e0b]">★★★★★</span>

                <p className="text-[20px] lg:text-[22px] font-[500] tracking-[-0.04em] leading-[1.3em] text-[#fff]">
                  "FlatWhite helped us increase qualified leads by 230% in just
                  six months."
                </p>

                <div className="flex items-center gap-[16px] mt-auto">
                  <div className="w-[56px] h-[56px] rounded-full bg-[#d9dee5]" />

                  <div>
                    <h4 className="font-[600] text-[#fff]">Sarah Johnson</h4>
                    <p className="text-[14px] text-[#657084]">
                      Marketing Director, NovaTech
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
