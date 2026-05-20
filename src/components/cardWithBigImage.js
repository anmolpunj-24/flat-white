// components import
import CtaButton from "./ctaButton";

// nextjs import
import Image from "next/image";

export default function CardWithBigImage() {
  return (
    <div className="flex flex-col gap-[32px] h-min">
      <Image
        src="/assets/people.avif"
        className="rounded-[12px]"
        alt="People"
        width={1200}
        height={800}
        sizes="(max-width: 1440px) calc(50vw - 126px), 594px"
      />
      <div className="flex flex-col py-0 px-[24px] gap-[12px] h-min">
        <h5 className="whitespace-pre-wrap break-words text-[#0a0f15] text-[24px] tracking-[-0.04em]">
          Transform your business today
        </h5>
        <p className="whitespace-pre-wrap break-words text-[#747e90] text-[16px] tracking-[-0.02em] font-medium">
          FlatWhite combines strategy, operations and innovation to help
          companies grow faster and more efficiently. Explore how our approach
          can unlock new opportunities for your organization.
        </p>
        <CtaButton bgColor="#111" textColor="#ffff" ctaText={`Learn More`} />
      </div>
    </div>
  );
}
