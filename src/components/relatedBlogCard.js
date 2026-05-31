// nextjs import
import Image from "next/image";

export default function RelatedBlogCard() {
  return (
    <div className="flex gap-[10px] p-[14px] rounded-[20px] border border-[#e3e7ee] bg-[#f8fafc] hover:bg-[#eef2f6] transition-all duration-300 cursor-pointer">
      <div className="relative overflow-hidden rounded-[14px] shrink-0 w-[90px] h-[70px]">
        <Image
          src="/assets/people.avif"
          alt="related blog"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-between">
        <h3 className="text-[14px] leading-[1.3em] tracking-[-0.03em] font-[500] text-[#111]">
          How Strategic Design Improves Business Performance
        </h3>

        <span className="text-[12px] text-[#7b8494]">May 28, 2026</span>
      </div>
    </div>
  );
}
