// components import
import SectionHeading from "@/components/sectionHeading";
import SectionSmallHeading from "@/components/sectionSmallHeading";
import SectionTag from "@/components/sectionTag";

// nextjs import
import Image from "next/image";

export default function FutureReadyBusiness() {
  return (
    <div className="px-[12px]">
      <div className="bg-[#0a0f15] rounded-tl-[12px] rounded-tr-[12px]">
        <div className="max-w-[1440px] w-full mx-auto">
          <div className="h-min flex flex-col gap-[24px] lg:gap-[48px] w-full pt-[40px] lg:pt-[92px] px-[20px] lg:px-[40px] xl:px-[112px] pb-[46px]">
            <SectionTag
              heading={`/  Future-ready business`}
              bgColor={`#222631`}
              textColor={`#fff`}
              animation={true}
            />
            <SectionHeading
              fontSize={`text-[48px] lg:text-[64px] xl:text-[74px]`}
              color={`#fff`}
              letterSpacing={`tracking-[-0.06em]`}
              lineHeight={`leading-[1em]`}
              maxWidth={`max-w-[850px]`}
              text={`Empowering сompanies to grow smarter and faster`}
            />

            <div className="flex flex-col lg:flex-row justify-between gap-[32px] lg:gap-0">
              <SectionSmallHeading
                color={`#bfc7d4`}
                fontSize={`text-[16px]`}
                lineHeight={`leading-[1.4em]`}
                letterSpacing={`tracking-[-0.02em]`}
                text={`FlatWhite partners with leadership teams to redefine strategy, streamline operations and unlock sustainable growth. We translate ambition into an actionable roadmap using data, technology and close collaboration.`}
                maxWidth={`max-w-[410px]`}
              />

              <div className="flex flex-col items-end text-right h-min gap-[16px]">
                <div className="flex">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <Image
                      key={index}
                      src="/assets/person.avif"
                      alt="person"
                      width={48}
                      height={48}
                      className={`w-[48px] h-[48px] rounded-[12px] object-cover border-[3px] border-[#0a0f15] ${
                        index !== 0 ? "-ml-[20px]" : ""
                      }`}
                    />
                  ))}
                </div>

                <div className="flex flex-col gap-[10px]">
                  <p className="text-[#bfc7d4] text-[12px] font-[600] uppercase leading-[1em] text-center">
                    Trusted by 100+ businesses
                  </p>
                  <div className="flex items-center justify-end h-min">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Image
                        src={`/assets/star.svg`}
                        alt="star"
                        height={15}
                        width={15}
                        key={index}
                      />
                    ))}

                    <span className="text-white text-[12px] font-[600] leading-[1em] pl-[5px]">
                      / 5.0
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-min items-center p-[20px] lg:p-[46px]">
            <video
              src="/videos/people.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-[12px] overflow-hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
