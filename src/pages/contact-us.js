// components import
import ContactUsForm from "@/components/contactUsForm";
import SectionHeading from "@/components/sectionHeading";
import SectionSmallHeading from "@/components/sectionSmallHeading";

// nextjs import
import Link from "next/link";

export default function ContactUs() {
  return (
    <div className="flex flex-col lg:flex-row gap-[40px] xl:gap-[112px] h-min max-w-[1440px] px-[20px] pt-[40px] pb-[60px] lg:py-[92px] lg:px-[40px] xl:px-[124px] mx-auto">
      <div className="flex flex-col lg:justify-between gap-[24px] lg:gap-0">
        <SectionHeading
          fontSize={`text-[36px] lg:text-[64px] xl:text-[74px]`}
          color={`#0a0f15`}
          letterSpacing={`tracking-[-0.06em]`}
          lineHeight={`leading-[1em]`}
          text={`Connect with FlatWhite for all inquiries`}
        />

        <div className="flex flex-col gap-[12px]">
          <SectionSmallHeading
            color={`#0a0f15`}
            fontSize={`text-[24px]`}
            lineHeight={`leading-[1.2em]`}
            letterSpacing={`tracking-[-0.06em]`}
            text={`FlatWhite Consulting \n10 Queen Street, London, UK`}
          />
          <Link
            href={`mailto:contact@flatwhite.com`}
            target="_blank"
            className="cursor-pointer whitespace-pre text-[#0a0f15] text-[14px] lg:text-[24px] leading-[1.2em] tracking-[-0.06em]"
          >
            contact@flatwhite.com
          </Link>
        </div>
      </div>

      <ContactUsForm />
    </div>
  );
}
