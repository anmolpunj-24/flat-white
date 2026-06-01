// nextjs import
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// components import
import SectionHeading from "./sectionHeading";
import SectionSmallHeading from "./sectionSmallHeading";
import SectionTag from "./sectionTag";

export default function CardWithSmallImageAndTags({ hover, link }) {
  let router = useRouter();

  return (
    <div
      onClick={link ? () => router.push("/service-detail") : undefined}
      className={`${hover ? "group cursor-pointer" : ""} flex flex-col gap-[40px] lg:gap-0 lg:content-between h-min bg-[#f0f1f5] rounded-[12px] w-full min-h-unset lg:min-h-[500px] p-[24px] lg:p-[32px]`}
    >
      <div className="flex justify-between items-center overflow-hidden">
        <Image src={`/assets/react.svg`} height={64} width={64} alt="icon" />
        <Link
          href={`/service-detail`}
          className={`inline-flex items-center gap-[8px] bg-[#111] text-[#fff] text-[14px] font-[600] rounded-[99px] px-[16px] py-[11px] shadow-[0_4px_14px_rgba(0,0,0,0.12)] hover:bg-[#222] hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-all duration-300 ease-out transform ${
            hover
              ? "opacity-100 translate-x-0 lg:translate-x-[20px] lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:opacity-100"
              : "hidden opacity-0"
          }`}
        >
          <span>Learn More</span>

          <span className="transition-transform duration-300 group-hover:translate-x-[2px]">
            →
          </span>
        </Link>
      </div>

      <div className="h-min flex flex-col w-fill gap-[12px] p-0 mt-auto">
        <SectionTag
          heading={`Data driven`}
          bgColor={`#fff`}
          textColor={`#111`}
        />
        <SectionHeading
          fontSize={`text-[24px]`}
          color={`#111`}
          letterSpacing={`tracking-[-0.06em]`}
          lineHeight={`leading-[1.2em]`}
          text={`We base every decision on insights, analytics and measurable outcomes`}
        />
        <SectionSmallHeading
          color={`#657084`}
          fontSize={`text-[16px]`}
          lineHeight={`leading-[1.4em]`}
          letterSpacing={`tracking-[-0.02em]`}
          text={`FlatWhite uses data and analytics to guide strategy and deliver tangible results.`}
          fontWeight={500}
        />
      </div>
    </div>
  );
}
