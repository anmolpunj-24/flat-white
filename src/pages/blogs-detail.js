// nextjs import
import Image from "next/image";

// component import
import RelatedBlogCard from "@/components/relatedBlogCard";

export default function BlogsDetail() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#e1e6ed] to-[#f5f7fa] text-[#111]">
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-[40px] xl:gap-[60px] h-min px-[20px] lg:px-[40px] xl:px-[100px] pt-[40px] lg:pt-[92px] xl:pt-[92px] pb-[60px] lg:pb-[92px] max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[32px]">
          <div className="relative overflow-hidden rounded-[24px] w-full h-[260px] md:h-[420px]">
            <Image
              src="/assets/people.avif"
              alt="blog"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-[20px]">
            <span className="text-[14px] text-[#7b8494]">May 28, 2026</span>

            <h1 className="text-[32px] lg:text-[48px] leading-[1em] tracking-[-0.05em] font-[600] text-[#111]">
              Building Smarter Digital Experiences For Modern Businesses
            </h1>

            <p className="text-[16px] leading-[1.7em] text-[#5f6b7a]">
              FlatWhite partners with leadership teams to redefine strategy,
              streamline operations and unlock sustainable growth. We translate
              ambition into actionable systems using data, technology and close
              collaboration.
            </p>

            <p className="text-[16px] leading-[1.7em] text-[#5f6b7a]">
              Our process combines research, product thinking and scalable
              design systems to create experiences that not only look premium
              but also perform exceptionally well across devices and platforms.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[20px]">
          <h2 className="text-[24px] leading-[1em] tracking-[-0.04em] font-[600] text-[#111]">
            Related Blogs
          </h2>

          <div className="flex flex-col gap-[10px]">
            {Array.from({ length: 4 }).map((item) => (
              <RelatedBlogCard key={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
