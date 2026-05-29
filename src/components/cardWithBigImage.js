// components import
import CtaButton from "./ctaButton";

// nextjs import
import Image from "next/image";

export default function CardWithBigImage() {
  return (
    <div className="flex flex-col gap-[32px] h-min">
      <div className="relative w-full aspect-[1.25/1] overflow-hidden rounded-[20px]">
        <Image
          src="/assets/people.avif"
          alt="People"
          fill
          className="object-cover"
          sizes="(max-width: 1440px) 100vw, 50vw"
        />
      </div>
      <div className="flex flex-col py-0 px-[24px] gap-[12px] h-min">
        <h5 className="whitespace-pre-wrap break-words text-[#0a0f15] text-[24px] tracking-[-0.06em]">
          Transform your business today
        </h5>
        <p className="whitespace-pre-wrap break-words text-[#747e90] text-[16px] tracking-[-0.02em]">
          FlatWhite combines strategy, operations and innovation to help
          companies grow faster and more efficiently. Explore how our approach
          can unlock new opportunities for your organization.
        </p>
        <CtaButton
          bgColor="#111"
          textColor="#ffff"
          ctaText={`Learn More`}
          padding={`10px 14px`}
          linkTo={`/services`}
        />
      </div>
    </div>
  );
}
