// components import
import Divider from "@/components/divider";
import SectionHeading from "@/components/sectionHeading";

export default function Footer() {
  return (
    <div className="flex flex-col h-min items-center bg-[#0a0f15] rounded-tl-[12px] rounded-tr-[12px] max-w-[1440px] w-full">
      <div className="gap-[164px] pt-[164px] px-[124px] pb-[52px]">
        <div>
          <SectionHeading />
          <p></p>
          <form></form>
        </div>
        
        <div>

        </div>
      </div>

      <Divider bgColor={`#ffffff1a`} />

      <div className="flex justify-between gap-[10px] w-full h-min py-[46px] px-[124px] text-[#747e90] text-[12px] leading-[1em]">
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
