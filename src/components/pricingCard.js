// components import
import CtaButton from "./ctaButton";
import SectionTag from "./sectionTag";

// nextjs import
import Image from "next/image";

export default function PricingCard() {
  return (
    <div className="flex flex-col items-start p-[24px] lg:p-[46px] gap-[32px] lg:gap-[46px] bg-[#d6d9e2] h-min rounded-[12px] xl:max-w-[600px] w-full">
      <div className="flex flex-col gap-[24px]">
        <SectionTag
          heading={"Service cost"}
          bgColor={"#f0f1f5"}
          textColor={"#111"}
        />
        <h3 className="text-[32px] lg:text-[40px] xl:text-[46px] text-[#0a0f15]">$15,000 – $50,000</h3>
      </div>

      <ul className="h-min flex flex-col gap-[12px] lg:gap-[20px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={index} className="flex gap-[18px] items-center">
            <div className="bg-[#0a0f15] h-[18px] lg:h-[20px] rounded-[99px] w-[18px] lg:w-[20px]  flex items-center justify-center">
              <Image
                src={`/assets/tick.svg`}
                height={12}
                width={12}
                alt="tick"
              />
            </div>
            <h6 className="whitespace-pre-wrap break-words text-[#657084] text-[16px] lg:text-[18px] font-medium">
              Strategic planning and roadmap development
            </h6>
          </li>
        ))}
      </ul>

      <div className="flex flex-col sm:flex-row h-min items-start sm:items-center gap-[30px] justify-between w-full">
        <h6 className="text-[18px] whitespace-pre-wrap break-words max-w-[300px] xl:max-w-[230px] font-[500] leading-[1.3em] tracking-[-0.04em]">
          Premium consulting services with transparent costs and measurable
          value
        </h6>
        <CtaButton
          bgColor="#ffff"
          textColor="#111"
          ctaText={`Request a proposal`}
          padding={`18px 24px`}
          linkTo={`/contact-us`}
        />
      </div>
    </div>
  );
}
