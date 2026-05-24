// components import
import ContactUsForm from "@/components/contactUsForm";
import SectionHeading from "@/components/sectionHeading";
import SectionSmallHeading from "@/components/sectionSmallHeading";

// nextjs import
import Link from "next/link";

export default function ContactUs() {
  return (
    <div className="flex gap-[112px] h-min max-w-[1440px] py-[92px] px-[124px]">
      <div className="flex flex-col justify-between">
        <SectionHeading
          fontSize={`74px`}
          color={`#0a0f15`}
          letterSpacing={`-0.06em`}
          lineHeight={`1em`}
          text={`Connect with FlatWhite for all inquiries`}
        />

        <div className="flex flex-col gap-[12px]">
          <SectionSmallHeading
            color={`#0a0f15`}
            fontSize={`24px`}
            lineHeight={`1.2em`}
            letterSpacing={`-0.06em`}
            text={`FlatWhite Consulting \n10 Queen Street, London, UK`}
          />
          <Link
            href={`mailto:contact@flatwhite.com`}
            target="_blank"
            className="cursor-pointer whitespace-pre text-[#0a0f15] text-[24px] leading-[1.2em] tracking-[-0.06em]"
          >
            contact@flatwhite.com
          </Link>
        </div>
      </div>

      <ContactUsForm />
    </div>
  );
}
