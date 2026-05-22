// components import
import CtaButton from "@/components/ctaButton";
import Divider from "@/components/divider";
import SectionHeading from "@/components/sectionHeading";
import SectionSmallHeading from "@/components/sectionSmallHeading";

export default function Footer() {
  return (
    <div className="flex flex-col h-min items-center bg-[#0a0f15] rounded-tl-[12px] rounded-tr-[12px] max-w-[1440px] w-full">
      <div className="gap-[164px] pt-[164px] px-[124px] pb-[52px]">
        <div className="max-w-[590px] flex flex-col gap-[32px] h-min items-center">
          <SectionHeading
            fontSize={`64px`}
            color={`#fff`}
            letterSpacing={`-0.06em`}
            lineHeight={`1em`}
            text={`Unlock growth with strategic insights`}
            align={`center`}
          />
          <SectionSmallHeading
            color={`#bfc7d4`}
            fontSize={`16px`}
            lineHeight={`1.4em`}
            letterSpacing={`-0.02em`}
            align={`center`}
            text={`Learn how systematic methods can support better portfolio outcomes.`}
            maxWidth={`390px`}
          />

          <form className="max-w-[340px] w-full relative">
            <div className="flex items-center border border-[#E0E5EB] rounded-full h-[56px]">
              <input
                type="email"
                required
                name="Email Address"
                placeholder="Email Address"
                className="w-full bg-transparent text-white placeholder:text-[rgba(214,217,226,0.8)] outline-none py-[18px] pl-[24px] pr-[120px]"
              />
            </div>

            <div className="absolute right-[3px] top-[3px] bottom-[4px]">
              <CtaButton
                bgColor={`#fff`}
                textColor={`#111`}
                ctaText={`Subscribe`}
                padding={`14px 16px`}
              />
            </div>

            {/* Hidden Honeypot Inputs */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute scale-0"
            />

            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute scale-0"
            />

            <input
              type="text"
              name="message"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute scale-0"
            />
          </form>
        </div>

        <div></div>
      </div>

      <Divider bgColor={`#ffffff1a`} />

      <div className="flex justify-between gap-[10px] w-full h-min py-[46px] px-[124px] text-[#747e90] text-[12px] leading-[1em] font-[600]">
        <p className="uppercase">
          © 2025 FlatWhite by{" "}
          <span className="text-[#fff] cursor-pointer hover:text-[#9199a9]">
            ditych
          </span>{" "}
          . All rights reserved.
        </p>
        <span className="whitespace-pre h-min w-min text-[#fff] text-[14px] leading-[1.3em] tracking-[-0.02em] cursor-pointer">
          Privacy Policy
        </span>
      </div>
    </div>
  );
}
